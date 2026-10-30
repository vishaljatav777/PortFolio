# Portfolio REST API Backend

Node.js + Express REST API backend for Vishal Jatav's Portfolio.

Base URL: `http://localhost:5000/api` (Development)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the project root or inside `backend/.env` based on `.env.example`:
```env
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

### 3. Run Development Server
```bash
npm run dev
```

### 4. Seed Database (Optional)
```bash
npm run seed
```

---

## 📡 REST API Endpoints

### 1. Health Check
`GET /api/health`

Returns server status, uptime, and database connectivity.

**Response (200 OK):**
```json
{
  "success": true,
  "status": "healthy",
  "timestamp": "2026-10-30T15:00:00.000Z",
  "uptime": 124.5,
  "database": "connected",
  "environment": "development"
}
```

---

### 2. Projects API

#### `GET /api/projects`
Retrieves all portfolio projects (from MongoDB if connected, otherwise fallback default projects).

**Response (200 OK):**
```json
{
  "success": true,
  "count": 6,
  "data": [
    {
      "id": "calculator",
      "title": "Simple Calculator",
      "description": "A functional web-based calculator...",
      "tags": ["HTML", "CSS", "JavaScript"],
      "liveLink": "https://vishaljatav777.github.io/Calculator/",
      "codeLink": "https://github.com/vishaljatav777/Calculator",
      "featured": true,
      "order": 1
    }
  ]
}
```

#### `GET /api/projects/:id`
Retrieves a specific project by its ID slug.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "calculator",
    "title": "Simple Calculator",
    "description": "...",
    "tags": ["HTML", "CSS", "JavaScript"]
  }
}
```

---

### 3. Contact Form Submission
`POST /api/contact`

Validates contact submissions, logs/persists them, and optionally sends an email notification via Nodemailer SMTP.

**Rate Limit:** 10 requests per 15 minutes per IP.

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hi Vishal, I would like to discuss a job opportunity."
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Thank you! Your message has been received successfully.",
  "data": {
    "id": "67223fb182c..."
  }
}
```

**Validation Error Response (400 Bad Request):**
```json
{
  "success": false,
  "status": "fail",
  "message": "Please provide a valid email address."
}
```
