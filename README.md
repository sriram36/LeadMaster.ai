
# LeadMasters Exam Application

This is a full-stack MCQ exam system for LeadMasters AI Tech Solutions. It features a React frontend, Node.js/Express backend, and MongoDB database. The app is designed for fresher selection assessments and can be customized for other use cases.

## Features

- User registration and login (JWT authentication)
- Start exam: fetches 25 random MCQs per session
- Material UI-based, responsive exam interface
- Navigation (Next/Previous), question palette, and timer (30 minutes)
- Auto-submit and manual submit with score calculation
- Result page with score display

## Technology Stack

- **Frontend:** React 19.x, Material UI
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB (local, compatible with MongoDB Compass)

## Quick Start

### Prerequisites
- Node.js and npm
- MongoDB running locally (default: `mongodb://localhost:27017/leadmasters-exam`)

### Backend Setup
1. Open a terminal and navigate to the `server` folder:
    ```sh
    cd server
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start MongoDB locally (see Troubleshooting below if needed).
4. Insert questions (optional, if not already in DB):
    ```sh
    node insertQuestions.js
    ```
5. Start the backend server:
    ```sh
    node server.js
    ```
    The backend runs at `http://localhost:5000`.

### Frontend Setup
1. Open a terminal and navigate to the `client` folder:
    ```sh
    cd client
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the frontend:
    ```sh
    npm start
    ```
    The frontend runs at `http://localhost:3000`.


## API Endpoints & Testing

### Authentication
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Log in

### Exam
- `GET /api/exam/questions` — Get 25 random MCQs (requires JWT in `x-auth-token` header)
- `POST /api/exam/submit` — Submit answers and get score (requires JWT)

### Example curl commands

**Register a user**
```sh
curl -X POST http://localhost:5000/api/auth/register \
    -H "Content-Type: application/json" \
    -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

**Login**
```sh
curl -X POST http://localhost:5000/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com","password":"password123"}'
```
*Copy the JWT token from the login response for the next requests.*

**Get questions**
```sh
curl -X GET http://localhost:5000/api/exam/questions \
    -H "x-auth-token: <your_jwt_token>"
```

**Submit exam**
```sh
curl -X POST http://localhost:5000/api/exam/submit \
    -H "Content-Type: application/json" \
    -H "x-auth-token: <your_jwt_token>" \
    -d '{"answers":[{"questionId":"q1","selectedOption":"Paris"}]}'
```

## Troubleshooting

- **MongoDB connection errors:**
  - Make sure MongoDB is running locally. Use MongoDB Compass to verify.
  - Default connection string: `mongodb://localhost:27017/leadmasters-exam`
  - If you see `buffering timed out` errors, check that MongoDB is started and accessible.
- **Port conflicts:**
  - Change the `PORT` in `server.js` or `client/.env` if needed.
- **Dependencies:**
  - If you see missing package errors, run `npm install` in both `server` and `client` folders.

## Customization

- To change the number of questions per session, update the `size` in `controllers/examController.js`.
- You can add more questions to `insertQuestions.js` or via MongoDB Compass.
- UI can be customized in `client/src/pages/Exam.js` and related components.

## License
This project is for educational and demonstration purposes.

---
For any issues or improvements, feel free to open an issue or PR!

