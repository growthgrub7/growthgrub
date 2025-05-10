# Growth Grub - School Meal Delivery Service

A web application for Growth Grub, a school meal delivery service, allowing schools to contact and inquire about services.

## Features

- Modern, responsive UI built with React and Tailwind CSS
- Contact form with multiple integrations:
  - Email notifications via EmailJS
  - Database storage in Supabase
  - Google Sheets integration for lead tracking
  - WhatsApp notifications via Twilio
- Admin portal to view and manage leads

## Tech Stack

- Frontend: React, TypeScript, Tailwind CSS, Framer Motion
- Backend: Express.js, Node.js
- Database: Supabase
- APIs: Twilio WhatsApp, Google Sheets, EmailJS

## Setup & Installation

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/growth-grub.git
   cd growth-grub
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Environment Variables**
   Copy `.env.example` to `.env` and fill in your credentials:
   ```
   cp .env.example .env
   ```
   
   Required environment variables:
   - Twilio credentials for WhatsApp notifications
   - Supabase URL and API key
   - Google Sheets API credentials

4. **Start the development server**
   ```
   npm run dev
   ```

5. **Start the backend server**
   ```
   node server.js
   ```

## Deployment

### GitHub Pages (Frontend Only)

1. Update `vite.config.ts` to include your repository name as the base path
2. Run: `npm run build`
3. Deploy to GitHub Pages: `npm run deploy`

### Full Stack Deployment

For a complete deployment with backend functionality, consider:
- Vercel or Netlify for frontend
- Heroku, Render, or Railway for the Express backend
- Keep your Supabase instance running

## Contact

For questions or support, contact: growthgrub7@gmail.com 