# CS546-RateMyProfessors

A **Rate My Professors** web application where students can **search for professors, leave reviews, and view ratings**. This project was built as part of the **CS-546** course.

## 🌍 **Live Demo**
You can view the live website on Render:  🔗 **[CS546 RateMyProfessors](https://cs546-ratemyprofessors.onrender.com/)**

---

## **✨ Features**
1️⃣ **Search Professors:** Easily find professors by name or school.  
2️⃣ **Rate Professors:** Leave ratings based on difficulty & quality.  
3️⃣ **Submit Reviews:** Share feedback with written reviews & thumbs-up/down.  
4️⃣ **User Authentication:** Secure **login & signup** system.  
5️⃣ **MongoDB Atlas:** All data is stored securely in **MongoDB Atlas**.  
6️⃣ **Session Management:** User sessions persist with **MongoDB session storage**.  
7️⃣ **Deployed on Render:** Fully hosted & accessible online.  

---

## **🎮 How to Use**
- **Search for a professor** by entering a name or selecting a school.  
- **Click on a professor** to view their ratings & student reviews.  
- **Sign up or log in** to leave a rating & review.  
- **Give a thumbs-up/down** to other student reviews.

---

## ⚙️ Installation Instructions  
To run the project **locally**, follow these steps:  

### 1️⃣ Clone the Repository  
```bash  
git clone https://github.com/karanshah1561998/CS546-RateMyProfessors.git  
cd CS546-RateMyProfessors
```

### 2️⃣ Install Dependencies  
```bash  
npm install
``` 

### 3️⃣ Set Up Environment Variables  
Create a `.env` file in the project root and add:  
```bash  
MONGO_URI=mongodb+srv://<username>:<password>@easynotes.ite0m.mongodb.net/ratemyprofessors?retryWrites=true&w=majority  
PORT=3000
```

🔹 Replace `<username>` and `<password>` with your **MongoDB Atlas credentials**.  

### 4️⃣ Seed the Database (Optional)  
If you need sample data, run:  
```bash  
npm run seed
```

### 5️⃣ Start the Application  
```bash  
npm start
```
or run in development mode:  
```bash  
npm run start:dev
```

### 6️⃣ Open in Browser  
```bash  
http://localhost:3000  
```
---  

## 🛠️ Technologies Used  
- **Frontend:** Handlebars, HTML, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Authentication:** Express-Session  
- **Session Storage:** MongoDB  
- **Deployment:** Render  

---  

## 🔮 Future Enhancements  
🚀 **Improved UI** with React for a modern look  
🚀 **Single Sign-On (SSO)** using Google OAuth  
🚀 **Admin Dashboard** to manage professors & reviews  
🚀 **Professor Profile Verification** for more reliable ratings  

---

## Collaborators:

- Ronak Kachalia
- Sam Severance
- Karan Shah
- Matthew Wisnewski
