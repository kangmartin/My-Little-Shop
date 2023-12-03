
# My Little Shop

[![Vue.js Version](https://img.shields.io/badge/vue.js-3-brightgreen.svg)](https://vuejs.org/)
[![Node.js Version](https://img.shields.io/badge/node.js-%3E=20.0.0-brightgreen.svg)](https://nodejs.org/)

**A simple shop system using a NodeJS backend and Vue3 frontend. (with Vite)** 

## Features
- **Authentication:** Secure user authentication.
- **Product Management Panel:** Add, edit, and remove products.
- **Admin Panel:** Manage users, including deleting accounts, changing roles, or banning users.
- **Ban System:** Ability to ban users from the system.
- **Role-Based Access Control:** Two types of roles (user and admin)


## Installation Guide

1. **Clone the Repository**
   
   Begin by cloning the project to your local machine:
   ```bash
   git clone https://github.com/kangmartin/My-Little-Shop.git
   ```

2. **Access Project Directory**

   Change to the project's root directory:
   ```bash
   cd my-little-shop
   ```

3. **Install Dependencies**

   First, install frontend dependencies:
   ```bash
   cd frontend && npm install
   ```
   Then, install backend dependencies:
   ```bash
   cd backend && npm install
   ```

## Database Configuration

Set up your database (e.g., MySQL) by importing `schema.sql` to initialize the project's database.

## Environment Setup

Inside the `backend` directory, create a `.env` file and include the following details:
```bash
DB_HOST=your_host
DB_USERNAME=your_user
DB_PASSWORD=your_password
DB_DATABASE=your_database
JWT_SECRET=your_jwt_secret
```

## Running the Project

To start the development servers (both must be started):

- **For Frontend:**
  In `frontend` directory, run:

  ```bash
  npm run dev
  ```
- **For Backend:**
  In `backend` directory, run:
  ```bash
  npm start
  ```

## Preconfigured Users

The system includes the following preconfigured users in the database:

| User  | Email               | Password    | Type of role |
|-------|---------------------|-------------|--------------|
| Admin | admin@mylittleshop.com | admin | Administrator|
| Martin| martin@mylittleshop.com | MYPASSWORD | User |
| Tom   | tom@mylittleshop.com   | MYPASSWORD | User |
| Louis | louis@mylittleshop.com | MYPASSWORD | User |
| Théo  | theo@mylittleshop.com  | MYPASSWORD | User |
| Baba  | baba@mylittleshop.com  | MYPASSWORD | User |
| Taylor| taylor@swift.com      | MYPASSWORD | User |


## To build frontend for production
   
   ```bash
   npm run build
   ```
   Preview the production build:
   ```bash
   npm run preview
   ```
   The build files will be located in the `dist` directory.

## Screenshots

![image](https://github.com/kangmartin/My-Little-Shop/assets/88689251/b191dd9c-3e22-4c02-b41a-cca808366549)
![image](https://github.com/kangmartin/My-Little-Shop/assets/88689251/2f254e1b-8035-4a5b-9113-621cb32ea58c)
![image](https://github.com/kangmartin/My-Little-Shop/assets/88689251/c87ac3a8-eee5-4d87-897f-eb2cd8b59c33)
![image](https://github.com/kangmartin/My-Little-Shop/assets/88689251/999bb214-c298-4df3-aa89-0d91a945c1c8)

---
