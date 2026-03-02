📌 HRMS Lite – Full-Stack Coding Assignment
🚀 Live Application

🧑‍💻 Frontend (Vercel):
👉 https://hrms-lite-one-rho.vercel.app/

🛠 Backend API (Render):
👉 https://hrms-backend-0r61.onrender.com/

📦 GitHub Repository:
👉 https://github.com/amanvrma798-sys/hrms-lite

📖 Project Overview

HRMS Lite is a lightweight Human Resource Management System built to manage employee records and track daily attendance.

This application was developed as part of a full-stack coding assessment to demonstrate:

Frontend development & UI architecture

RESTful API design

Database modeling & persistence

Server-side validation

Error handling

Production deployment readiness

The focus of this implementation is delivering a clean, stable, and realistically usable system without unnecessary complexity.

🛠 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

Lucide Icons

Backend

Django

Django REST Framework

Database

PostgreSQL (Production – Render)

SQLite (Optional for local development)

Deployment

Frontend: Vercel

Backend: Render

✨ Core Features
1️⃣ Employee Management

Admin can:

Add a new employee with:

Employee ID (Unique)

Full Name

Email Address (Validated)

Department

View all employees

Delete employees

Validation Includes:

Required field validation

Email format validation

Duplicate Employee ID prevention

Duplicate Email prevention

Proper HTTP status codes (200, 201, 400)

Example Structured Error Response
{
  "employee_id": ["Employee with this ID already exists."]
}
2️⃣ Attendance Management

Admin can:

Mark attendance with:

Date

Status (Present / Absent)

View attendance records per employee

Prevent duplicate attendance entries for the same employee on the same date

Database-level unique constraints ensure data integrity.

3️⃣ Dashboard Summary (Bonus Feature)

The dashboard provides:

Total Employees

Present Today

Absent Today

This gives a quick operational overview of workforce attendance.

🧠 Backend & API Design

RESTful API structure

Pagination enabled

Structured JSON responses

Custom exception handling

Proper HTTP status codes

Database-level unique constraints

🎨 UI & UX Highlights

Clean SaaS-style layout

Reusable component structure

Loading states

Empty states

Error & success alerts

Responsive design

Smooth hover interactions

Clear visual hierarchy

The interface is intentionally minimal, professional, and production-ready.

📂 Project Structure
hrms-lite/
│
├── backend/
│   ├── config/
│   ├── employees/
│   ├── attendance/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
⚙️ Local Setup Instructions
🔹 Backend Setup
cd backend
python -m venv venv

Activate virtual environment:

Windows

venv\Scripts\activate

Mac/Linux

source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Apply migrations:

python manage.py migrate

Run development server:

python manage.py runserver

Backend runs at:

http://127.0.0.1:8000/
🔹 Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173/
🔗 API Endpoints
Employees
GET    /api/employees/
POST   /api/employees/
DELETE /api/employees/{id}/
Attendance
POST   /api/attendance/
GET    /api/attendance/list/?employee_id=EMP001
GET    /api/attendance/dashboard/
🌍 Deployment
Backend

Hosted on Render

Connected to PostgreSQL database

Environment variables configured securely

Production-ready configuration

Frontend

Hosted on Vercel

Connected to live backend API

Production build via Vite

🔐 Environment Variables (Production)

Backend uses secure environment variables for:

SECRET_KEY

Database credentials

DEBUG configuration

No sensitive data is hardcoded in the repository.

⚠️ Assumptions

Single admin user (authentication not required as per assignment scope)

Payroll and leave management are intentionally excluded

Designed as lightweight internal HR tool

Optimized for clarity, stability, and usability

✅ Assignment Compliance
Requirement	Status
Employee Management	✔
Attendance Tracking	✔
RESTful APIs	✔
Database Persistence	✔
Server-side Validation	✔
Error Handling	✔
Clean & Responsive UI	✔
Live Deployment (Frontend + Backend)	✔
👨‍💻 Final Note

This project was developed specifically to satisfy the requirements of the Full-Stack Coding Assignment and focuses on clean architecture, stability, and usability.

