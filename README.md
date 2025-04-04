# 🎓 CS546-RateMyProfessors

A full-stack Rate My Professors clone where students can search professors, view ratings, and leave reviews. Built as a part of the CS-546 Web Programming course using Node.js, Express, MongoDB, and Handlebars.

## 🚀 Live Demo
Access the live app here: **[CS546 RateMyProfessors](https://cs546-ratemyprofessors.onrender.com/)**

## ✨ Features
- Search Professors by name or school
- Rate Professors by difficulty & quality
- Write Reviews with thumbs-up/down
- User Authentication (Signup/Login)
- Session Management using MongoDB session store
- MongoDB Atlas for secure data persistence
- Deployed on Render

## 🛠 Tech Stack
- Frontend: Handlebars, HTML, CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Deployment: Render

## ⚙️ Installation
### Prerequisites
**Ensure you have the following installed:**
- Node.js (v18+)
- MongoDB (Atlas)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/karanshah1561998/CS546-RateMyProfessors.git
   cd CS546-RateMyProfessors

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up environment variables:**
   Create a `.env` file in the directory and add:
   ```bash
   PORT = 3000
   MONGO_URI = your_mongodb_uri

4. **Seed the Database**
   If you need sample data, run:
   ```bash
   npm run seed

4. **Start the backend server:**
   ```bash
   npm start

   OR for dev mode:
   npm run start:dev

   Open http://localhost:3000 to view the app in your browser.

## 🧩 Troubleshooting

### 1. MongoDB Connection Fails
- Ensure your `MONGO_URI` in the `.env` file is correct.
- Make sure your MongoDB Atlas cluster is active.
- Verify that your IP is whitelisted in MongoDB Atlas.

### 2. Server Crashes on Start
- Run `npm install` to make sure all dependencies are installed.
- Check that your `.env` file exists and contains valid values.
- Look at the terminal error for missing or misconfigured modules.

### 3. Sessions Not Persisting
- Confirm that `connect-mongo` is installed and used in Express session middleware.
- Make sure your MongoDB URI is correctly used for session storage.
- Check for errors in the MongoDB session store connection.

### 4. CSS or Pages Not Loading
- Ensure static assets are served correctly from the `public` directory.
- Make sure Handlebars views are correctly placed in the `views/` directory.
- Double-check relative paths in HTML and layout templates.

### 5. Seed Script Not Working
- Confirm MongoDB is connected when running `npm run seed`.
- Check the seed script for hardcoded values that may conflict with your data.

## Collaborators:
- Ronak Kachalia
- Sam Severance
- Karan Shah
- Matthew Wisnewski
