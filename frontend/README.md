# Vishal Jatav - Personal Portfolio Client

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Apache--2.0-blue?style=flat-square)](LICENSE)
[![Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)](https://port-folio-pi-six.vercel.app/)

A modern, responsive, and performance-optimized personal portfolio built with **React 19**, **Vite 7**, and **CSS3**. Features a modular component-driven architecture, centralized data structures, asynchronous contact form submission communicating directly with the Express backend REST API, and complete mobile responsiveness.

---

## 🌟 Live Demo

- **Production URL:** [https://port-folio-pi-six.vercel.app/](https://port-folio-pi-six.vercel.app/)
- **GitHub Repository:** [https://github.com/vishaljatav777/PortFolio](https://github.com/vishaljatav777/PortFolio)

---

## 🚀 Key Features

- **Component-Driven Architecture:** Clean separation between layout, sections, UI primitives, and data layers.
- **Centralized Data Layer:** All profile data (projects, skills, education, achievements, social links) is maintained in isolated data files in `src/data/`.
- **Backend API Contact Form:** Direct integration with the portfolio backend Express API (`/api/contact`), featuring real-time submission states (`sending`, `success`, `error`) without page redirects.
- **Design System Tokens:** Centralized CSS custom variables for typography, colors, spacing, shadows, and smooth keyframe animations.
- **SEO & Accessibility:** Descriptive title, metadata, Open Graph preview tags, semantic HTML tags, and accessible navigation.
- **Responsive Layout:** Optimized across desktop, tablet, and mobile devices with a slide-out hamburger navigation menu.
- **Scroll Effects:** IntersectionObserver scroll animations and a floating smooth Scroll-to-Top action button.

---

## 🛠️ Tech Stack

- **Frontend Library:** React 19 (`react`, `react-dom`)
- **Build Tool & Bundler:** Vite 7
- **Styling:** Modular CSS with CSS Custom Properties (`variables.css`)
- **Icons:** React Icons (`react-icons`)
- **Linting:** ESLint 9 (`eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)
- **API Communication:** Native Fetch API via centralized HTTP client (`src/services/api.js`)
- **Deployment Platform:** Vercel

---

## 📁 Project Architecture

```
frontend/
├── public/
│   ├── Resume.pdf               # Downloadable CV
│   └── vite.svg                 # Favicon
│
├── src/
│   ├── assets/                  # Media assets categorized by domain
│   │   ├── images/              # Profile and bio pictures
│   │   └── projects/            # Project showcase screenshots
│   │
│   ├── components/
│   │   ├── common/              # Reusable UI primitives (Button)
│   │   └── layout/              # Structural chrome components (Header, Footer)
│   │
│   ├── sections/                # Page sections
│   │   ├── Hero.jsx             # Hero intro & quick action buttons
│   │   ├── About.jsx            # Bio & background
│   │   ├── Education.jsx        # Academic credentials timeline
│   │   ├── Skills.jsx           # Categorized technical skill matrix
│   │   ├── Projects.jsx         # Featured projects grid
│   │   ├── Achievements.jsx     # Competitions & certifications
│   │   ├── Contact.jsx          # Backend-integrated contact form
│   │   └── ScrollToTopButton.jsx
│   │
│   ├── pages/
│   │   └── HomePage.jsx         # Assembled page view
│   │
│   ├── services/
│   │   ├── api.js               # Centralized HTTP API client
│   │   ├── projectService.js    # Project data fetcher
│   │   └── contactService.js    # Contact form API dispatcher
│   │
│   ├── data/                    # Centralized profile data
│   ├── styles/                  # Global CSS design tokens
│   ├── constants/               # Application & API constants
│   ├── utils/                   # Helpers and validators
│   ├── App.jsx                  # Main application composition
│   └── main.jsx                 # Application entry point
│
├── .env.example                 # Environment template
├── .gitignore                   # Git exclusion rules
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point with SEO metadata
├── package.json                 # Project dependencies & scripts
├── README.md                    # Project documentation
└── vite.config.js               # Vite bundler configuration
```

---

## ⚙️ Environment Configuration

Environment variables must be prefixed with `VITE_` to be accessible within the client application:

1. Copy the example file to create your local `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure the following variables in `.env`:
   ```env
   # Backend REST API endpoint URL
   VITE_API_URL=http://localhost:5000/api

   # Path to resume PDF (located in public/ or external URL)
   VITE_RESUME_URL=/Resume.pdf
   ```

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes assets into the `dist/` directory for production. |
| `npm run preview` | Locally serves the production build from `dist/` to verify behavior before deploying. |
| `npm run lint` | Runs ESLint across all source files to enforce code quality. |

---

## 📄 License

This project is licensed under the Apache License 2.0.
