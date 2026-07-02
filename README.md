# ⚛️ Mini Context — React Context API Login Demo

A minimal yet practical React project that demonstrates **global state management using the Context API**. Users can log in through a form, and the authenticated username is displayed across components — all without prop drilling.

---

## 🚀 Live Preview

> Clone the repo and run locally (see [Getting Started](#-getting-started))

---

## ✨ Features

- 🔐 **Login Form** — accepts username & password, updates global state on submit
- 👤 **Profile Component** — reads from Context and displays a personalized welcome message
- 🌐 **Global State via Context API** — no prop drilling; state flows through `UserContextProvider`
- 🎨 **Styled with Tailwind CSS v4** — dark-themed UI with a clean, minimal layout
- ⚡ **Powered by Vite** — blazing-fast dev server and build tooling

---

## 🧠 Concepts Covered

| Concept | Description |
|---|---|
| `React.createContext` | Creates the `UserContext` object |
| `Context.Provider` | Wraps the component tree, exposing `user` and `setUser` |
| `useContext` | Consumed in `Login` and `Profile` to read/write global state |
| `useState` | Local state for form inputs; global state for `user` in the provider |

---

## 📁 Project Structure

```
05.miniContext_project/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.jsx          # Form that sets the user in Context
│   │   └── Profile.jsx        # Reads user from Context and shows welcome message
│   ├── context/
│   │   ├── UserContext.js     # Creates the Context object
│   │   └── UserContextProvider.jsx  # Holds state & provides it to the tree
│   ├── App.jsx                # Root component; wraps children with the Provider
│   └── main.jsx               # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔄 How It Works

```
App
 └── UserContextProvider  ← holds { user, setUser } state
      ├── Login           ← writes to context via setUser()
      └── Profile         ← reads from context via user
```

1. `UserContext.js` creates the context with `React.createContext()`.
2. `UserContextProvider` wraps the app, holding `user` state and exposing it via the `Provider`.
3. `Login` uses `useContext(UserContext)` to call `setUser` on form submit.
4. `Profile` uses `useContext(UserContext)` to read `user` and render the welcome message.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ABHI-JURO/useContext_login_mini_project.git

# 2. Navigate into the project folder
cd useContext_login_mini_project

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧰 Tech Stack

| Tool | Version |
|---|---|
| React | ^19 |
| Tailwind CSS | ^4 |
| Vite | ^8 |
| React Router DOM | ^7 |

---

## 📸 Screenshot

> _Dark-themed login screen with username/password inputs and a personalized welcome message after login._

---

## 📚 Learning Reference

This project is part of a **React learning series** exploring core React concepts step-by-step:

1. Basics & JSX
2. State & Props
3. Hooks (`useState`, `useEffect`, `useRef`, `useCallback`)
4. Custom Hooks
5. **Context API** ← *You are here*
6. React Router
7. ...and more

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ while learning React</p>
