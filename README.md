# 🗳️ Voting System Backend  

A secure and role-based **online voting system backend** built with **Node.js, Express, and MongoDB**.  
It enables users to register, log in, and cast their votes for candidates, while administrators can manage candidates and oversee election results.  

---

## 🚀 Features  

### 👤 User Management  
- User registration with **unique CNIC validation**  
- Login with username or email  
- JWT-based authentication (Access & Refresh tokens)  
- Secure password hashing with bcrypt  
- Update profile details (name, email, CNIC, age)  
- Change password and logout functionality  

### 🗳️ Candidate Management (Admin)  
- Create, update, and delete candidates  
- Prevent duplicate candidates (by name or party)  
- Store candidate details (name, party, age)  

### 🗳️ Voting System (Voters)  
- Authenticated voters can cast a single vote for a candidate  
- Prevent multiple votes from the same user  
- Store each vote with user reference and timestamp  
- Auto-increment candidate’s vote count  

### 📊 Results  
- Fetch a list of all candidates (without votes — for public view)  
- Fetch final **vote counts per candidate** (for result view)  

---

## 🛠️ Tech Stack  

- **Node.js** & **Express.js** — backend framework  
- **MongoDB** & **Mongoose** — database and ODM  
- **JWT** — authentication & authorization  
- **bcrypt** — password hashing  
- **Custom utilities** for error handling (`ApiError`, `ApiResponse`, `asyncHandler`)  

---

## ✅ Security Highlights  
- Role-based access (Admin vs Voter)  
- CNIC uniqueness validation for voters  
- Prevents double voting  
- Tokens stored securely with HTTP-only cookies  

---

## 🔮 Future Improvements  
- Add **election phases** (e.g., registration phase, voting phase, result phase)  
- Implement **real-time results dashboard**  
- Enable **admin-only access to vote counts**  
- Add **email notifications** for voter registration and result announcements  
- Support for **multiple elections (federal, provincial, local)**  

---
