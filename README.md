# Growth Grub - School Meal Service

A web application for managing school meal services, built with React, TypeScript, and Supabase.

## Features

- Contact form with email notifications
- Admin dashboard for lead management
- Responsive design with modern UI
- Real-time updates using Supabase

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account
- EmailJS account
- Twilio account (for WhatsApp notifications)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/growth-grub.git
cd growth-grub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. In a separate terminal, start the backend server:
```bash
node server.js
```

## Building for Production

```bash
npm run build
```

## Project Structure

```
growth-grub/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions and configurations
│   └── App.tsx        # Main application component
├── server.js          # Backend server
├── package.json       # Project dependencies
└── README.md         # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 