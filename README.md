# Peterson Solution Simulator

A web-based simulator of Peterson's Solution for Process Synchronization using React.js, Node.js, and Express.js.

## Features

- Peterson's Solution Simulation
- Process 0 Execution
- Process 1 Execution
- Flag Status Display
- Turn Variable Display
- Mutual Exclusion Demonstration
- REST API Integration
- Responsive User Interface

## Technologies Used

### Frontend
- React.js
- Axios
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- CORS
- dotenv

## Project Structure

```
peterson1solution
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── ...
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── utils
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Peterson-Solution1.git
```

### Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

## API Endpoint

### POST

```
/api/peterson
```

### Request

```json
{
  "process": 0
}
```

or

```json
{
  "process": 1
}
```

### Response

```json
{
  "success": true,
  "data": {
    "flag0": true,
    "flag1": false,
    "turn": 1,
    "message": "Process 0 is executing"
  }
}
```

## Deployment

### Frontend

- Netlify

### Backend

- Vercel

## Author

Ahtisham Daud Satti

## License

This project is created for educational purposes.
