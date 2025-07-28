# ✅ Test Strategy & Plan

This project established for testing the Web App use **React** for the frontend and **Node.js** for the backend.
End-to-End (**E2E**) and API smoke tests will be executed using modern test frameworks and environment-specific configurations.

---

## 🧪 Test Strategy

### 🛠️ Tools & Frameworks

- 🎯 **Cypress** → for end-to-end UI testing  
- 🔗 **Postman/Newman** → for API/web service testing

### 🌐 Environment Setup

Environment files has been created and will be sent privately :

- 🔐 Credentials
- 🌍 Dynamic variables (e.g., API base URLs, tokens, etc.)

---

## 📋 Test Plan

Smoke tests will cover the following core scenarios:

### 🔐 Scenario 1: **User Login**
- ✅ **Positive:** User should be able to log in with **valid** credentials.
- ❌ **Negative:** User should NOT be able to log in with **invalid** credentials, and an appropriate error message should be displayed.

### 📍 Scenario 2: **Create Event Location**
- The user should be able to **create** an event location.

### ✏️ Scenario 3: **Update Event Location**
- The user should be able to **update** an existing event location.

### 📥 Scenario 4: **Get All Event Data**
- ✅ **Positive:** The user should be able to **get all event location data** with a valid token.
- ❌ **Negative:** The user should NOT be able to retrieve data **without a valid token**.

### 🔍 Scenario 5: **Get Specific Event Data**
- The user should be able to **fetch data** for any **specific** event.

### 🗑️ Scenario 6: **Delete Event**
- The user should be able to **delete** any selected event data.

---

## ⚙️ Test Environment Setup

### 📦 Cypress Setup

```bash
npm init -y
npm install cypress --save-dev
npm install dotenv
```	

📌 Important: The .env file to be sent privately must be added to the root directory..

### CYPRESS TEST RUN 
```bash
npx cypress run
```	

### 📦 Newman CLI Setup

```bash
npm install -g newman
```	

### NEWMAN CLI TEST RUN 
```bash
newman run "REM_QA_CASE_API.postman_collection.json" -e "REM.postman_environment.json"
```
📌 Important: The “REM.postman_environment.json” file to be sent privately must be added to the same directory with collection.json	
