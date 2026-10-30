# Portfolio REST API Documentation

Base URL: `http://localhost:5000/api` (Development)

---

## 1. Health Check

### `GET /api/health`
Returns the operational health and uptime status of the backend API.

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

## 2. Projects

### `GET /api/projects`
Retrieves all portfolio projects, sorted by display order.

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

### `GET /api/projects/:id`
Retrieves a single project by its unique slug ID.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "calculator",
    "title": "Simple Calculator",
    "description": "...",
    "tags": ["HTML", "CSS", "JavaScript"],
    "liveLink": "https://vishaljatav777.github.io/Calculator/",
    "codeLink": "https://github.com/vishaljatav777/Calculator"
  }
}
```

---

## 3. Contact Form Submission

### `POST /api/contact`
Submits an inquiry from the portfolio contact form. Validates inputs, saves the contact inquiry, and dispatches an email notification.

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
