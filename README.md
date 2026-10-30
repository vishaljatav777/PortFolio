# Vishal Jatav - Personal Portfolio Website

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)](https://port-folio-pi-six.vercel.app/)

A modern, responsive, and performance-optimized personal portfolio built with **React 19**, **Vite 7**, and **CSS3**. Features a modular component-driven architecture, centralized data structures, asynchronous Formspree contact form submission with UI feedback, and complete mobile responsiveness.

---

## 🌟 Live Demo

- **Production URL:** [https://port-folio-pi-six.vercel.app/](https://port-folio-pi-six.vercel.app/)
- **GitHub Repository:** [https://github.com/vishaljatav777/PortFolio](https://github.com/vishaljatav777/PortFolio)

---

## 🚀 Key Features

- **Component-Driven Architecture:** Clean separation between layout, sections, UI primitives, and data layers.
- **Centralized Data Layer:** All profile data (projects, skills, education, achievements, social links) is maintained in isolated data files in `src/data/`.
- **Asynchronous Contact Form:** Integrated with Formspree via AJAX `fetch`, featuring real-time submission states (`sending`, `success`, `error`) without page redirects.
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
- **Contact Handling:** Formspree API
- **Deployment Platform:** Vercel

---

## 📁 Project Architecture

```
my-app/
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
│   │   ├── common/              # Reusable UI primitives
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── layout/              # Structural chrome components
│   │   │   ├── Header.jsx       # Responsive header with mobile toggle
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx       # Footer with social links & copyright
│   │   │   └── Footer.css
│   │   └── sections/            # Page sections
│   │       ├── Hero.jsx         # Hero intro & quick action buttons
│   │       ├── Hero.css
│   │       ├── About.jsx        # Bio & background
│   │       ├── About.css
│   │       ├── Education.jsx    # Academic credentials timeline
│   │       ├── Education.css
│   │       ├── Skills.jsx       # Categorized technical skill matrix
│   │       ├── Skills.css
│   │       ├── Projects.jsx     # Featured projects grid
│   │       ├── Projects.css
│   │       ├── Achievements.jsx # Competitions & certifications
│   │       ├── Achievements.css
│   │       ├── Contact.jsx      # Async Formspree contact form
│   │       ├── Contact.css
│   │       ├── ScrollToTopButton.jsx
│   │       └── ScrollToTopButton.css
│   │
│   ├── data/                    # Centralized profile data
│   │   ├── projectsData.js      # Project catalog & metadata
│   │   ├── skillsData.js        # Skill categories & icon mappings
│   │   ├── educationData.js     # Academic timeline data
│   │   ├── achievementsData.js  # Certifications & badges
│   │   └── socialLinks.js       # Social profiles & contact info
│   │
│   ├── styles/
│   │   ├── variables.css        # Global CSS design tokens
│   │   └── index.css            # CSS reset, typography, and animations
│   │
│   ├── App.jsx                  # Main application composition
│   ├── App.css                  # Top-level application layout
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
   # Formspree endpoint URL
   VITE_FORMSPREE_URL=https://formspree.io/f/your_form_id

   # Path to resume PDF (located in public/ or external URL)
   VITE_RESUME_URL=/Resume.pdf
   ```

> **Security Note:** Never commit `.env` containing sensitive credentials. The repository's `.gitignore` automatically excludes all `.env` and `.env.*.local` files.

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vishaljatav777/PortFolio.git
   cd PortFolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 🏗️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes assets into the `dist/` directory for production. |
| `npm run preview` | Locally serves the production build from `dist/` to verify behavior before deploying. |
| `npm run lint` | Runs ESLint across all source files to enforce code quality. |

---

## 🚢 Deployment to Vercel

This project is optimized for zero-config deployment on Vercel:

1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Configure project build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. In **Settings > Environment Variables**, add:
   - `VITE_FORMSPREE_URL`: Your production Formspree endpoint URL.
   - `VITE_RESUME_URL`: `/Resume.pdf`
4. Deploy. Every push to the `main` branch will automatically trigger a production build.

---

## 📄 License

This project is licensed under the MIT License.
