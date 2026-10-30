# Vishal Jatav - Full-Stack Portfolio Application

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-4.19.2-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Apache--2.0-blue?style=flat-square)](LICENSE)
[![Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)](https://port-folio-pi-six.vercel.app/)

A professional, decoupled full-stack portfolio application for **Vishal Jatav**, featuring a high-performance **React 19 + Vite** frontend and an **Express.js REST API** backend with MongoDB and Nodemailer support.

---

## 🌟 Live Application

- **Live Frontend:** [https://port-folio-pi-six.vercel.app/](https://port-folio-pi-six.vercel.app/)
- **GitHub Repository:** [https://github.com/vishaljatav777/PortFolio](https://github.com/vishaljatav777/PortFolio)

---

## 📁 Repository Architecture

```
portfolio/
├── frontend/                     # 🌐 Client Application (React 19, Vite 7)
│   ├── public/                   # Static assets (Resume.pdf, vite.svg)
│   ├── src/
│   │   ├── assets/               # Images and project media
│   │   ├── components/
│   │   │   ├── common/           # Reusable UI primitives (Button)
│   │   │   └── layout/           # Chrome components (Header, Footer)
│   │   ├── sections/             # Page sections (Hero, About, Skills, Projects, Education, Achievements, Contact)
│   │   ├── pages/                # Top-level view compositions (HomePage)
│   │   ├── services/             # Centralized API service & HTTP client (api.js, projectService.js, contactService.js)
│   │   ├── constants/            # Route and application constants
│   │   ├── utils/                # Helpers and validators
│   │   ├── styles/               # CSS Design tokens (variables.css) & reset
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html                # SEO & OpenGraph metadata
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── backend/                      # ⚙️ Server Application (Node.js, Express REST API)
│   ├── src/
│   │   ├── config/               # Database (db.js) & environment (env.js)
│   │   ├── constants/            # Project data & system constants
│   │   ├── controllers/          # HTTP request handlers (health, projects, contact)
│   │   ├── routes/               # API route definitions
│   │   ├── middleware/           # Security (Helmet, CORS), rate limiting, error handler
│   │   ├── models/               # Mongoose schemas (Project, Contact)
│   │   ├── services/             # Business logic (email notification, data access)
│   │   ├── validators/           # Contact form input validation
│   │   ├── utils/                # Custom AppError and structured logger
│   │   ├── app.js                # Express application setup
│   │   └── server.js             # HTTP server entry point
│   ├── scripts/
│   │   └── seedProjects.js       # Database seeder utility
│   ├── package.json
│   └── README.md                 # Backend & REST API documentation
│
├── .env.example                  # Consolidated environment variable template
├── .gitignore                    # Comprehensive Git ignore rules
├── package.json                  # Root monorepo runner scripts
├── vercel.json                   # Zero-config Vercel build specification
├── LICENSE                       # Apache License 2.0
└── README.md                     # Project documentation
```

---

## 🚀 REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Returns server health status, uptime, and database state |
| `GET` | `/api/projects` | Retrieves all portfolio projects |
| `GET` | `/api/projects/:id` | Retrieves a single project by ID |
| `POST` | `/api/contact` | Validates message, stores contact inquiry, and dispatches email |

See [`backend/README.md`](backend/README.md) for full request/response schemas and curl examples.

---

## ⚙️ Environment Configuration

Copy `.env.example` to create your local `.env`:

```bash
cp .env.example .env
```

```env
# Frontend (Client-side)
VITE_API_URL=http://localhost:5000/api
VITE_RESUME_URL=/Resume.pdf

# Backend (Server-side)
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173,https://port-folio-pi-six.vercel.app
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Optional Database & SMTP
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/portfolio
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_specific_password
CONTACT_EMAIL_TO=vishal.jatav.it@gmail.com
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm --prefix frontend install
npm --prefix backend install
```

### 2. Start Applications
```bash
# Start frontend (Vite dev server)
npm run dev

# Start backend (Express dev server with --watch)
npm run dev:backend
```

### 3. Production Build
```bash
npm run build
```

---

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).
