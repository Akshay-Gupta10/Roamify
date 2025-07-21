# 🏡 Roamify

**Roamify** is a full-stack web application that allows users to explore, list, and manage rental properties. It includes user authentication, image uploads, interactive maps, and a clean, responsive design. The platform is built using modern web technologies with a focus on usability and performance.

## 🔗 Live Demo
https://roamify-29r2.onrender.com

## 🚀 Features

- 📝 Add, edit, view, and delete property listings
- 🔐 User authentication with login and registration
- 📍 Location-based listings with Mapbox integration
- 📸 Image uploads via Cloudinary
- 💬 Flash messages and error handling
- 🧭 Mobile-friendly UI with responsive layout
- 🌍 RESTful routing and modular backend structure

## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript
- Bootstrap 5
- EJS (Embedded JavaScript Templates)

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB
- Mongoose ODM

**Authentication & Middleware:**
- Passport.js (Local Strategy)
- express-session
- connect-flash

**Other Tools & APIs:**
- Mapbox API (geolocation and maps)
- Cloudinary (image hosting)
- Multer (file handling)
- Dotenv (secure config management)

## ⚙️ Installation
1.Install all the dependencies i.e. npm install

2.Create a file named ".env" and enter the following credentials: 
MAP_TOKEN=your_mapbox_token
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
DB_URL=your_mongodb_connection_string
SECRET=session_secret_key

3.Run the web application i.e. npm start

4.Open http://localhost:8080

5.You need to first signup and then login to run the application.

## Developed By
- *Name*: Akshay Gupta
- *Email*: akshaygupta.1018@gmail.com

