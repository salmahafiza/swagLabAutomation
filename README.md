📦 swaglab-automation
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e
 ┃ ┃ ┣ 📜 login.spec.js
 ┃ ┃ ┣ 📜 PLP.spec.js
 ┃ ┃ ┣ 📜 PDP.spec.js
 ┃ ┃ ┣ 📜 Checkout.spec.js
 ┃ ┣ 📂 fixtures
 ┃ ┃ ┣ 📜 loginData.json
 ┃ ┃ ┣ 📜 plpData.json
 ┃ ┃ ┣ 📜 pdpData.json
 ┃ ┃ ┣ 📜 checkoutData.json
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 login.js
 ┃ ┃ ┣ 📜 PLPPage.js
 ┃ ┃ ┣ 📜 PDPPage.js
 ┃ ┃ ┣ 📜 CheckoutPage.js
 ┣ 📜 README.md
 ┣ 📜 package.json

✅ Features Covered
🔹 Login

Valid login

Invalid login

Empty credentials

Logout flow

🔹 Product Listing Page (PLP)

Verify product list

Sorting (A–Z, Z–A, Low–High, High–Low)

Add/Remove from cart

Cart badge updates

Navigate to PDP

🔹 Product Detail Page (PDP)

Product details (name, desc, price, image)

Add/Remove from cart

Back to PLP

Multiple PDP navigation

🔹 Checkout

User information validation (missing fields)

Cart item persistence

Cancel checkout

Successful order placement

Order confirmation & cart clearance

⚙️ Installation & Setup

Clone this repo:

git clone https://github.com/<your-username>/swaglab-automation.git
cd swaglab-automation


Install dependencies:

npm install


Run Cypress tests (headed mode):

npx cypress open


Run Cypress tests (headless mode):

npx cypress run

📊 Test Artifacts

Manual Test Cases → swaglabs_full_test_cases.xlsx

Bug Report → swaglabs_bug_report_full.xlsx

🛠 Tools & Tech

Cypress

JavaScript (ES6)

Page Object Model (POM)

GitHub Actions (CI/CD) (optional integration)

👩‍💻 Author
Salma Hafiza
