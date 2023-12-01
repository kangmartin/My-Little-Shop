# My Little Shop

**A simple shop system using a NodeJS backend and Vue3 frontend.**

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
   npm install
   ```
   Then, install backend dependencies:
   ```bash
   cd backend && npm install
   ```

## Database Configuration

Set up your database (e.g., MySQL) by importing `schema.sql` to initialize the project's database.

## Environment Setup

Inside the backend directory, create a `.env` file and include the following details:
```bash
DB_HOST=your_host
DB_USERNAME=your_user
DB_PASSWORD=your_password
DB_DATABASE=your_database
```

## Running the Project

To start the development servers (both must be started):

- **For Frontend:**
  ```bash
  npm run dev
  ```
- **For Backend:**
  ```bash
  cd backend && npm start
  ```

## To build frontend for production
   
   ```bash
   npm run build
   ```
   Preview the production build:
   ```bash
   npm run preview
   ```
   The build files will be located in the `dist` directory.

---
