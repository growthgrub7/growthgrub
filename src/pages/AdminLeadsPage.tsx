import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  school: string;
  message: string;
  created_at?: string;
}

const AdminLeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate('/admin/login');
      } else {
        setUser(data.session.user);
      }
    });
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/admin/login');
      } else {
        setUser(session.user);
      }
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [navigate]);

  useEffect(() => {
    if (!user) return;
    const fetchLeads = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/leads');
        if (!res.ok) throw new Error('Failed to fetch leads');
        const data = await res.json();
        setLeads(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, [user]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (!user) return null;

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-gray-50">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center">Admin: Leads Dashboard</h1>
      {loading && <div className="text-center">Loading leads...</div>}
      {error && <div className="text-center text-red-600">{error}</div>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Email</th>
                <th className="py-3 px-4 border-b text-left">Phone</th>
                <th className="py-3 px-4 border-b text-left">School</th>
                <th className="py-3 px-4 border-b text-left">Message</th>
                <th className="py-3 px-4 border-b text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, idx) => (
                <tr key={lead.id || idx} className="border-b hover:bg-green-50">
                  <td className="py-2 px-4">{lead.name}</td>
                  <td className="py-2 px-4">{lead.email}</td>
                  <td className="py-2 px-4">{lead.phone}</td>
                  <td className="py-2 px-4">{lead.school}</td>
                  <td className="py-2 px-4 max-w-xs truncate" title={lead.message}>{lead.message}</td>
                  <td className="py-2 px-4 text-sm text-gray-500">{lead.created_at ? new Date(lead.created_at).toLocaleString() : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminLeadsPage; 