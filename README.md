# 📝 Real-Time Comment Wall

A tiny full-stack demo that lets multiple users leave comments **in real time**.  
Built with **Node.js + Express**, **Socket.IO**, and **MongoDB** – all wrapped in a lightweight front end (plain HTML/Bootstrap & a splash of custom CSS).

![Screenshot 2025-06-26 074131](https://github.com/user-attachments/assets/ac96c840-b72f-46a2-892a-aeb6595e5b0b)




## ✨ Features
| Capability | What it does |
|------------|--------------|
| 🚀 **Instant updates** | Every new comment is broadcast via WebSockets – no page refresh required. |
| ⌨️ **Typing indicator** | See who’s typing (debounced for performance). |
| 💾 **Persistence** | Comments are stored in MongoDB so they survive reloads. |
| 🕒 **Timestamps** | Human-friendly times with *moment.js*. |
| 🪄 **Animation** | Comments slide in with a simple CSS keyframe. |

---

## 🔧 Tech Stack
- **Backend:** Node.js • Express • Socket.IO  
- **Database:** MongoDB (Mongoose ODM)  
- **Frontend:** Vanilla JS • Bootstrap 5 • Moment.js  
- **Realtime:** WebSockets via Socket.IO  
- **Styling:** Google Fonts (Mulish) + custom CSS  

---

## 📁 Project Structure
comment-wall/
├── model/
│ └── comment.js # Mongoose schema
├── public/
│ ├── css/style.css
│ ├── img/clock.jpg
│ └── index.html # served at "/"
├── index.js # client-side JS (served statically)
├── server.js # Express + Socket.IO
├── db.js # Mongo connection helper
└── package.json



---

## ▶️ Getting Started

### 1. Prerequisites
* **Node.js** ≥ 18  
* **MongoDB** running locally on `mongodb://localhost:27017`

### 2. Clone & Install
```bash
git clone https://github.com/<your-user>/comment-wall.git
cd comment-wall
npm install

# start Mongo (if not already running)
mongod

# start the server
node server.js       # listens on http://localhost:3000


| Method | Endpoint        | Body / Params           | Description                       |
| ------ | --------------- | ----------------------- | --------------------------------- |
| `GET`  | `/api/comments` | –                       | Fetch all comments (latest first) |
| `POST` | `/api/comments` | `{ username, comment }` | Persist a new comment             |


| Event     | Direction                           | Payload                 | Purpose                 |
| --------- | ----------------------------------- | ----------------------- | ----------------------- |
| `comment` | client ⮕ server<br>server ⮕ **all** | `{ username, comment }` | Broadcast a new comment |
| `typing`  | client ⮕ server<br>server ⮕ **all** | `{ username }`          | Show “user is typing…”  |


Built as a learning exercise – use it, tweak it, break it, fix it. Have fun! 🎉

