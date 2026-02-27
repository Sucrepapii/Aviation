# ✈️ Flivan Aviation

A premium, modern web application for booking luxury air travel. Flivan provides users with an elegant interface to explore exclusive destinations, book first-class flights, and manage their premium travel profiles seamlessly.

![Flivan Aviation Preview](https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop)

---

## 🌟 Features

- **Premium User Interface:** A stunning, dark-themed responsive design featuring modern glassmorphism, smooth animations, and curated typography.
- **Flight Booking Widget:** An intuitive interface for passengers to search, book, and verify flight statuses.
- **Secure User Authentication:** Full Sign Up and Login flows authenticated securely via JSON Web Tokens (JWT).
- **Personalized Dashboards:** A dedicated user profile showcasing membership tiers, accumulated points, and a detailed history of past and upcoming trips.
- **Exclusive Content Sections:** Dedicated pages for Luxury Lounges, Private Jets, Onboard Dining, and Executive Clubs.

---

## � Tech Stack

### Frontend (Client)

- **Framework:** [React 18](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS (Vanilla CSS for custom animations and tokens)
- **HTTP Client:** Axios for API communication

### Backend (API Server)

- **Framework:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** [Prisma](https://www.prisma.io/)
- **Security:** JWT (JSON Web Tokens) & bcryptjs for password hashing

---

## 📂 Project Structure

```text
Aviation/
├── backend/                  # Node.js / Express Backend
│   ├── prisma/               # Prisma Schema & Database configurations
│   ├── src/
│   │   ├── controllers/      # API Route Handlers (Logic)
│   │   ├── middlewares/      # Express Middlewares (e.g., Auth Protection)
│   │   ├── routes/           # Express Route Definitions
│   │   └── index.ts          # Server Entry Point
│   ├── .env                  # Backend Environment Variables
│   └── package.json          # Backend Dependencies
├── src/                      # React Frontend
│   ├── assets/               # Images, Videos, Global CSS
│   ├── components/           # Reusable UI Components (Navbar, Footer, Booking)
│   ├── pages/                # Page Components (Home, Profile, Login)
│   ├── constants/            # Global Constants (e.g., Airports List)
│   ├── App.tsx               # Main Router
│   └── main.tsx              # React Entry Point
├── package.json              # Frontend Dependencies
└── tailwind.config.js        # Tailwind Utility Configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [PostgreSQL](https://www.postgresql.org/) (Running locally or via Docker)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flivan-aviation.git
cd flivan-aviation
```

### 2. Backend Setup

Open a terminal and navigate to the backend directory:

```bash
cd backend
npm install
```

**Environment Variables:**
Create a `.env` file inside the `backend/` folder and configure your PostgreSQL database connection:

```env
# backend/.env
PORT=5000
DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:5432/flivan?schema=public"
JWT_SECRET="your_super_secret_jwt_key_here"
```

**Initialize the Database:**
Generate the Prisma client and push the schema to your PostgreSQL instance:

```bash
npx prisma generate
npx prisma db push
```

**Start the Server:**

```bash
npm run dev
```

_The backend API will run on `http://localhost:5000`._

### 3. Frontend Setup

Open a new terminal window at the root of the project:

```bash
npm install
```

**Start the React App:**

```bash
npm run dev
```

_The React application will run on `http://localhost:5173` (or the port specified by Vite)._

---

## 📡 API Endpoints

The Express backend exposes the following RESTful endpoints:

### Authentication (`/api/auth`)

- `POST /register`: Register a new user account.
- `POST /login`: Authenticate a user and return a JWT token.
- `GET /me`: _(Protected)_ Get the currently authenticated user's profile.

### Bookings (`/api/bookings`)

- `GET /`: _(Protected)_ Retrieve flight history for the logged-in user.
- `POST /`: _(Protected)_ Create a new flight booking.

_(Note: Protected routes require an `Authorization: Bearer <token>` header)._

---

## 🛠️ Database Schema (Prisma)

**User Model**

- `id` (UUID)
- `name` (String)
- `email` (String, Unique)
- `password` (String, Hashed)
- `role` (String, Default: "USER")
- `points` (Int, Default: 0)
- `memberTier` (String, Default: "Silver Elite")

**Booking Model**

- `id` (UUID)
- `userId` (Foreign Key -> User)
- `flightNo` (String)
- `date` (String)
- `route` (String)
- `class` (String)
- `status` (String, Default: "Scheduled")

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve Flivan, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
