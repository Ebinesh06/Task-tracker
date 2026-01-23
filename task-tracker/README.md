# 📝 Task Tracker – Angular Application

A simple and user-friendly **Task Tracker web application** built using **Angular (Standalone Components)**.  
This project helps users create, manage, and track daily tasks efficiently.

---

## 📌 Project Overview

The **Task Tracker** allows users to:
- Add tasks with a title and description
- View all tasks in one place
- Mark tasks as **Completed**
- View **Pending** and **Completed** tasks
- Clear all completed tasks
- Retain tasks even after page refresh using **localStorage**

This project was developed as part of the **CIA-2 internal assessment**.

---

## 🚀 Features

- ✅ Add new tasks
- ⏳ View pending tasks
- ✔️ Mark tasks as completed
- 🧹 Clear completed tasks
- 📊 Live task statistics (Total / Completed / Pending)
- 💾 Persistent storage using browser `localStorage`
- 🎨 Clean and modern UI
- 🧩 Modular Angular component structure

---

## 🛠️ Technologies Used

- **Angular** (Standalone Components)
- **TypeScript**
- **HTML**
- **CSS**
- **Git & GitHub**
---

## 🧠 How It Works

- Tasks are stored as objects using a `Task` model.
- All task data is saved in **localStorage**, so tasks persist after refreshing the page.
- The UI updates dynamically when tasks are added, completed, or cleared.
- No routing or backend is used (CIA-2 compliant).

---

## ▶️ How to Run the Project

### Prerequisites
- Node.js installed
- Angular CLI installed

### Steps
```bash
npm install
ng serve
