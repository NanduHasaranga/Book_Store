# 📚 MERN Stack Online Book Store with Inventory Management

Welcome to the **Online Book Store** project! This is a full-fledged web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It features an inventory management system, user authentication, and a user-friendly interface for browsing and managing books..

## 🚀 Project Features

- **User Authentication System**: Secure login and registration for users and administrators.
- **Admin Panel**: Allows admins to upload, edit, and delete books, as well as manage inventory.
- **Inventory Management System**: Tracks available stock, low-stock alerts, and ensures smooth book management.
- **User Interface**: Clean and intuitive interface for users to browse and purchase books (payment integration planned for a future project).
- **Book Details**: Users can view detailed information about each book.

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux (for state management), CSS/Bootstrap for styling
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing

## 📂 Project Structure

```plaintext
/backend
  ├── config/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middleware/
  └── server.js

/frontend
  ├── public/
  ├── src/
      ├── components/
      ├── pages/
      ├── redux/
      └── App.js
