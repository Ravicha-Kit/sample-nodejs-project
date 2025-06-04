# Sample Node.js Project

A simple Node.js REST API using Express, Firebase Firestore, and authentication.

## Features

- User authentication (register, login)
- Product CRUD (Create, Read, Update, Delete)
- Uses Firebase Firestore as the database
- Input validation and error handling
- CORS enabled for frontend integration

## Project Structure

```
src/
  app.js                # Express app setup
  config/               # Firebase config and service account
  controller/           # Route controllers (auth, product)
  middleware/           # Auth and validation middleware
  routes/               # API route definitions
  service/              # Business logic and Firebase interaction
  validations/          # Input validation schemas
server.js               # Entry point
.env.example            # Example environment variables
```

## Getting Started

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Create Firebase service account file**

   - Go to the [Firebase Console](https://console.firebase.google.com/), open your project, and navigate to Project Settings > Service Accounts.
   - Click "Generate new private key" and download the JSON file.
   - Save the file as `src/config/firebase-service-account.json` in your project directory.

3. **Set up environment variables**

   - Copy `.env.example` to `.env` and fill in your Firebase credentials and other settings.

4. **Run the server**
   ```sh
   npm run dev
   ```
   The server will start on the port specified in your `.env` or default to 3000.

## API Endpoints

### Health Check

- `GET /api/health` — Check API status

### Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a token

### Product

- `GET /api/product` — List all products for the authenticated user
- `GET /api/product/:id` — Get a product by ID
- `POST /api/product` — Create a new product
- `PUT /api/product/:id` — Update a product
- `DELETE /api/product/:id` — Delete a product

## Notes

- All product endpoints require authentication.
- Update `.gitignore` to keep sensitive files and build output out of version control.
