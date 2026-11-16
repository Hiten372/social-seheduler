# 🚀 Social Scheduler

### AI-Powered Social Media Management & Scheduling Platform

Social Scheduler is a web-based social media management platform designed to simplify content creation and social media management. It provides a centralized dashboard where users can manage social accounts, prepare posts, schedule content and explore AI-assisted content creation.

The project aims to help creators, professionals and businesses manage their social media presence more efficiently through a clean and intuitive interface.

---

## ✨ Features

### 📊 Dashboard
- Centralized dashboard for social media management.
- Overview of scheduled and published posts.
- Connected social account overview.
- Recent activity section.

### 🔗 Social Media Account Management
- Connect social media platforms.
- Manage connected social accounts.
- Disconnect existing accounts.
- Zernio API integration for social account authorization and synchronization.

**Supported Platforms:**
- X (Twitter)
- LinkedIn
- Facebook
- Instagram

### 📅 Post Scheduler
- Compose social media posts.
- Select social media platforms.
- Choose scheduling date and time.
- View scheduled and published posts.

### 🤖 AI Content Composer
- Generate social media content using prompts.
- Choose different content tones.
- AI-assisted content creation interface.
- Option to generate visual content.
- Prepare generated content for scheduling.

### 🔐 Authentication
- User registration and login interfaces.
- JWT-based authentication support in the backend.
- Password hashing using bcrypt.
- Protected API middleware.

### 🎨 Modern User Interface
- Responsive application layout.
- Clean dashboard interface.
- Reusable React components.
- Interactive navigation and modals.

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 19 | User interface |
| TypeScript | Type safety |
| Vite | Development and build tool |
| Tailwind CSS 4 | Styling |
| React Router DOM | Navigation |
| Lucide React | Icons |
| ESLint | Code quality |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js 5 | REST API |
| TypeScript | Backend development |
| MongoDB | Database |
| Mongoose | Object Data Modeling |
| JWT | Authentication |
| bcrypt | Password hashing |
| Zernio SDK | Social media integration |

---

## 📁 Project Structure

```text
social-seheduler/
│
├── client/
│   ├── public/
│   │
│   └── src/
│       ├── assets/
│       │
│       ├── components/
│       │   ├── Home/
│       │   │   ├── CTA.tsx
│       │   │   ├── Features.tsx
│       │   │   ├── Footer.tsx
│       │   │   ├── Hero.tsx
│       │   │   ├── HowItWorks.tsx
│       │   │   ├── Navbar.tsx
│       │   │   ├── Pricing.tsx
│       │   │   └── Testimonials.tsx
│       │   │
│       │   ├── AccountList.tsx
│       │   ├── Layout.tsx
│       │   ├── PlatformPickerModal.tsx
│       │   └── Sidebar.tsx
│       │
│       ├── pages/
│       │   ├── Accounts.tsx
│       │   ├── AiComposer.tsx
│       │   ├── Dashboard.tsx
│       │   ├── Home.tsx
│       │   ├── Login.tsx
│       │   └── Scheduler.tsx
│       │
│       ├── App.tsx
│       ├── index.css
│       └── main.tsx
│
├── server/
│   ├── config/
│   │   ├── db.ts
│   │   └── zernio.ts
│   │
│   ├── controllers/
│   │   ├── accountController.ts
│   │   ├── authController.ts
│   │   └── socialAuthController.ts
│   │
│   ├── middlewares/
│   │   └── authMiddleware.ts
│   │
│   ├── models/
│   │   ├── Accounts.ts
│   │   ├── Generation.ts
│   │   ├── Post.ts
│   │   └── User.ts
│   │
│   ├── routes/
│   │   ├── accountRoutes.ts
│   │   ├── authRoute.ts
│   │   └── socialAuthRouters.ts
│   │
│   ├── server.ts
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Hiten372/social-seheduler.git
```

### 2. Navigate to the Project

```bash
cd social-seheduler
```

### 3. Setup Frontend

```bash
cd client
npm install
```

Create a `.env` file in the client directory if you need to configure frontend environment variables.

Start the development server:

```bash
npm run dev
```

### 4. Setup Backend

Open another terminal:

```bash
cd server
npm install
```

Create a `.env` file inside the server directory.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ZERNIO_API_KEY=your_zernio_api_key
```

Start the backend:

```bash
npm run server
```

For normal startup:

```bash
npm start
```

---

## 🔌 Backend API Structure

The backend exposes REST API endpoints for authentication, account management and social media authorization.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Authenticate a user |
| GET | `/api/accounts` | Retrieve connected accounts |
| POST | `/api/accounts` | Add a social account |
| DELETE | `/api/accounts/:id` | Disconnect an account |
| GET | `/api/oauth/:platform/url` | Generate social authorization URL |
| GET | `/api/oauth/sync` | Synchronize social accounts |

**Note:** These are the routes currently defined in the backend. Authentication middleware and route configuration should be verified before using the endpoints in production.

---

## 🗄️ Database Models

The application currently contains four Mongoose models:

| Model | Responsibility |
|---|---|
| User | Stores user information and Zernio profile ID |
| Accounts | Stores connected social account information |
| Post | Stores the user reference for posts |
| Generation | Stores AI content generation information |

---

## 🧠 Application Architecture

The project follows a frontend-backend architecture:

```text
           React Frontend
                 |
                 |
          REST API Requests
                 |
                 ▼
          Express Backend
                 |
          ┌──────┴──────┐
          |             |
          ▼             ▼
      MongoDB        Zernio API
          |             |
          ▼             ▼
    User & Account   Social Media
       Data          Authorization
```

---

## 🚧 Development Status

Social Scheduler is an actively developing project.

| Module | Status |
|---|---|
| Landing Page | UI Implemented |
| Login & Registration | UI Implemented |
| Dashboard | UI with Sample Data |
| Account Management | UI with Sample Data |
| Post Scheduler | UI with Sample Data |
| AI Composer | UI with Simulated Generation |
| Backend Authentication | API Implemented |
| Account Management API | API Implemented |
| Zernio Integration | Integration Code Implemented |
| Complete Frontend-Backend Integration | In Progress |

Some frontend interactions currently use sample data and simulated loading states. Full end-to-end functionality is still under development.

---

## 🔮 Future Improvements

- Complete frontend and backend integration.
- Implement persistent post scheduling.
- Integrate an AI content generation service.
- Add media upload and management.
- Improve authentication and authorization.
- Add post analytics and performance tracking.
- Introduce calendar-based scheduling.
- Add automated publishing and notifications.

---

## 👨‍💻 Author

**Hiten Prasad**

GitHub: [@Hiten372](https://github.com/Hiten372)

Project Repository: [Social Scheduler](https://github.com/Hiten372/social-seheduler)

---

## ⭐ Support

If you find this project interesting, consider giving the repository a star!

Contributions, suggestions and feedback are always welcome.

**Built with ❤️ using React, TypeScript, Node.js and MongoDB.**
