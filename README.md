# HRMS Lite – Full-Stack Coding Assignment

## 📌 Project Overview

HRMS Lite is a lightweight Human Resource Management System designed to manage employee records and track daily attendance.

This application was developed as part of a full-stack coding assessment to demonstrate:

- Frontend development
- Backend REST API design
- Database modeling & persistence
- Server-side validation
- Error handling
- Production-ready structure

The focus of this implementation is delivering a clean, stable, and realistically usable system without over-engineering.

---

## 🔗 Repository

GitHub Repository:  
👉 https://github.com/your-username/hrms-lite


---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- Lucide Icons

### Backend
- Django
- Django REST Framework

### Database
- SQLite (Development)
- Easily configurable for PostgreSQL in production

---

## ✨ Core Features

### 1️⃣ Employee Management

Admin can:

- Add a new employee with:
  - Employee ID (Unique)
  - Full Name
  - Email Address (Validated)
  - Department
- View all employees
- Delete employees

### Validation Includes:

- Required field validation
- Email format validation
- Duplicate Employee ID prevention
- Proper HTTP status codes (200, 201, 400)

---

### 2️⃣ Attendance Management

Admin can:

- Mark attendance for employees:
  - Date
  - Status (Present / Absent)
- View attendance records per employee
- Prevent duplicate attendance entries for the same employee and date

---

### 3️⃣ Dashboard Summary

The dashboard provides:

- Total Employees
- Present Today
- Absent Today

This gives a quick operational overview of workforce attendance.

---

## 🧠 API & Error Handling

- RESTful API structure
- Clear and meaningful JSON responses
- Proper HTTP status codes
- Backend validation enforcement
- Frontend error handling with user-friendly alerts

---

## 🎨 UI & UX Highlights

- Clean SaaS-style layout
- Reusable component structure
- Loading states
- Empty states
- Error & success alerts
- Responsive design
- Smooth hover interactions
- Clear visual hierarchy

The interface is intentionally minimal, professional, and production-ready.

---

## 📂 Project Structure

```
hrms-lite/
│
├── backend/
│   ├── hrms_backend/
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
```

---

## ⚙️ Local Setup Instructions

### 🔹 Backend Setup

```bash
cd backend
python -m venv venv
```

Activate virtual environment:

**Windows**
```bash
venv\Scripts\activate
```

**Mac/Linux**
```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Apply migrations:

```bash
python manage.py migrate
```

Run development server:

```bash
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173/
```

---

## 🔗 API Endpoints

### Employees

- `GET /api/employees/`
- `POST /api/employees/`
- `DELETE /api/employees/{id}/`

### Attendance

- `POST /api/attendance/`
- `GET /api/attendance/list/?employee_id=EMP001`
- `GET /api/attendance/dashboard/`

---

## 🌍 Deployment

### Frontend
To be deployed on **Vercel**

### Backend
To be deployed on **Render**

Live URLs can be added here after deployment.

---

## ⚠️ Assumptions

- Single admin user (authentication not required as per assignment scope)
- Payroll and leave management are intentionally excluded
- SQLite used for simplicity
- Designed for lightweight internal HR operations

---

## ✅ Assignment Compliance

This implementation fulfills:

- Employee Management ✔
- Attendance Tracking ✔
- RESTful APIs ✔
- Database Persistence ✔
- Server-side Validation ✔
- Error Handling ✔
- Clean & Responsive UI ✔
- Deployable Production Structure ✔

---

## 👨‍💻 Submission Note

This project was developed specifically to satisfy the requirements of the Full-Stack Coding Assignment and focuses on clean architecture, stability, and usability.
