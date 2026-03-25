# User Directory Dashboard (React)

This is a simple React application I built as part of a Frontend Engineer assignment.
The goal was to create a clean and functional user dashboard using real API data.

The app fetches user data from JSONPlaceholder and displays it in an easy-to-use interface with search, sorting, and detailed views.

---

## What this app does

* Shows a list of users in a table format
* Lets you search users by name or email
* Allows sorting by name and company (both ascending and descending)
* Clicking on any user takes you to a detailed profile page

---

## Features

### Dashboard View

* Displays all users in a structured table
* Includes:

  * Name
  * Email
  * Phone
  * Company

### Search

* Instant filtering on the frontend
* Works for both name and email

### Sorting

* Sort users by:

  * Name
  * Company
* Toggle between ascending and descending order

### User Details Page

* Click on a user row to view full details
* Displays:

  * Name, Username
  * Email, Phone
  * Website
  * Company details
  * Full address

---

## Tech Stack

* React (Create React App)
* React Router (for navigation between pages)
* Fetch API (to get data from JSONPlaceholder)
* CSS (for styling the UI)

---

## Project Structure

```
src/
├── App.js
├── UserList.js
├── UserDetail.js
├── App.css
├── UserDetail.css
└── index.js
```

* `App.js` → Handles routing
* `UserList.js` → Main dashboard with search and sorting
* `UserDetail.js` → Shows detailed user information

---

## How to run this project

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd user-directory
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npm start
```

### 4. Open in browser

```
http://localhost:3000
```

## What I focused on

* Keeping the UI simple and clean
* Making search and sorting fast and responsive
* Writing readable and maintainable code
* Ensuring smooth navigation between pages

---

## About Me

**Venkatesh Macharla**
Frontend Developer with experience in React, JavaScript, and building responsive web applications.
