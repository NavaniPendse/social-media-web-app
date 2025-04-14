# 🚀 Social Media Web App — MERN Stack Project

This **full-stack social media web application** is built using the **MERN stack** (MongoDB, Express, React, Node.js) and follows a **RESTful API architecture**. It enables users to register, log in, share posts, like/unlike content, follow/unfollow others, and manage profiles—delivering a real-world social networking experience.  

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **React.js**
- **Material-UI** (Responsive UI components)
- **React Router DOM** (Client-side routing)
- **Redux** (State management)
- **CSS** (Custom styling)

### 🔹 Backend
- **Node.js**
- **Express.js**
- **MongoDB** (NoSQL Database)
- **REST API**
- **JWT (JSON Web Token)** for secure authentication

---

## 🌟 Key Features

- 🔐 **User Authentication** (JWT-based secure login and registration)
- 📝 **Create & Share Posts** with textual captions
- ❤️ **Like / Unlike Posts**
- 👥 **Follow / Unfollow Users**
- 🔍 **Suggested Users** to follow
- 📊 **View Followers / Following**
- 📰 **Home Feed** – Displays posts from followed users
- ✏️ **Edit Profile** – Update bio, profile picture, etc.
- 👤 **View Other User Profiles**

---

## 📸 Screenshots

### 🔐 Sign Up  
![SignUp](https://github.com/Faizan2911/Social-Media-Web-App-Mern-Stack-/assets/117813967/5b901509-12cc-4e6e-a4e7-ebc21b90a7f2)

### 🔑 Login  
![Login](https://github.com/Faizan2911/Social-Media-Web-App-Mern-Stack-/assets/117813967/4666edc8-5ae0-48b8-8570-9b16106d83ab)

### 🏠 Home Feed  
![Home1](https://github.com/Faizan2911/Social-Media-Web-App-Mern-Stack-/assets/117813967/7ff2b394-b96d-4cba-8464-044ecda3076a)  
![Post Share](https://github.com/Faizan2911/Social-Media-Web-App-Mern-Stack-/assets/117813967/44eb4a60-a0fa-4d38-8991-a5dc405f2ee3)  
![Home2](https://github.com/Faizan2911/Social-Media-Web-App-Mern-Stack-/assets/117813967/04ab0731-3e2d-40f5-8177-be234366a563)

### 👤 User Profile  
![Profile Page](https://github.com/Faizan2911/Social-Media-Web-App-Mern-Stack-/assets/117813967/e4ced6cd-e05d-4a19-8cc2-c952e2c80f3b)  
![Update Info](https://github.com/Faizan2911/Social-Media-Web-App-Mern-Stack-/assets/117813967/921938ac-e382-4ef5-b6dd-191b85bed1ca)  
![Profile Pic 2](https://github.com/Faizan2911/Social-Media-Web-App-Mern-Stack-/assets/117813967/6b2ad995-87f9-4698-ac58-7fc0baac81e1)  
![Profile Pic 3](https://github.com/Faizan2911/Social-Media-Web-App-Mern-Stack-/assets/117813967/315caa30-0009-4c36-bd60-05ac97cb64d1)

---


---

## ⚙️ Setup Instructions

1. Clone the Repository

```bash
git clone https://github.com/Sathishnaik786/Social_Media_Web_App.git
cd Social_Media_Web_App

2. Backend Setup

cd backend
npm install

Create a .env file in /backend:

PORT=4000
MONGO_DB=mongodb://localhost:27017/socialmedia
JWT_KEY=yourSuperSecretKey

Start the backend server:

npm start

Server will run on: http://localhost:4000

3. Frontend Setup

cd ../frontend
npm install

Start the frontend server:

npm start

App will run on: http://localhost:3000
📦 Features

    ✅ User registration & login

    ✅ JWT authentication

    ✅ Create and view posts

    ✅ Upload profile picture/post image

    ✅ Responsive UI

🧪 API Endpoints (Sample)
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	User login
GET	/user/:id	Get user profile
POST	/post	Create new post
GET	/post/:id	Get post by ID
📸 Image Upload

    Uploads are stored in the /public/images/ folder.

    Access them via: http://localhost:4000/images/<filename>

📚 License

This project is licensed under the MIT License.
Feel free to fork and modify for your own projects!
🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
✨ Author

Islavath Sathish Naik
📧 sathishnaikislavath@gmail.com
🔗 Portfolio | GitHub
