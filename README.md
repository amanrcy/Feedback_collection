

Feedback App:

A secure and scalable web-based application for collecting user feedback. Built with ReactJS (frontend), Node.js (backend), and MySQL (database), it ensures authentication, data security, and automated testing.


---

🚀 Features

✅ User Authentication (JWT-based)
✅ Role-based Access Control
✅ Secure API Endpoints
✅ Feedback Management (Submit, View, Update, Delete)
✅ Automated & Manual Testing


---

📂 Installation & Setup

1️⃣ Clone the Repository:

git clone https://github.com/amanrcy/Feedback_collection.git
cd Feedback_collection

2️⃣ Backend Setup:

cd backend  
npm install

🔹 Create a .env file inside the backend/ folder and add:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=feedback_db
JWT_SECRET=your_secret_key

Run the backend server:

npm start

3️⃣ Frontend Setup:

cd ../frontend  
npm install  
npm start

Now, open http://localhost:3000 in your browser.

4️⃣ Install Concurrently :

npm install concurrently --save-dev

Start Backend & Frontend Together 
npm start



---

🛠 API Endpoints

🛡️ Authentication

📝 Feedback Management


---

🔒 Security Measures:

JWT Authentication – Secures API endpoints.

Password Hashing – Uses bcrypt for secure password storage.

Input Validation – Prevents SQL Injection & XSS attacks.

CORS Policy – Restricts unauthorized API access.

Secure HTTP Headers – Implemented using helmet.



---

🧪 Testing:

Manual Testing

Automated Testing

Run backend tests using Jest & Supertest:

cd backend  
npm test


---

🛠 Technologies Used

Frontend: ReactJS, Redux, Bootstrap

Backend: Node.js, Express.js

Database: MySQL

Authentication: JWT

Security: bcrypt, helmet, CORS


Conclusion:

This Feedback App provides a secure and efficient way to collect, manage, and analyze feedback. With authentication, security measures, and automated testing, it ensures a reliable user experience.

