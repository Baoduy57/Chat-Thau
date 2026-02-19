# ChatThau 💬

Ứng dụng chat thời gian thực được xây dựng với React, Node.js, Express, MongoDB và Socket.io.

## 📋 Mục Lục

- [Giới Thiệu](#giới-thiệu)
- [Tính Năng](#tính-năng)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Cài Đặt](#cài-đặt)
- [Cấu Hình](#cấu-hình)
- [Chạy Ứng Dụng](#chạy-ứng-dụng)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [API Documentation](#api-documentation)

## 🌟 Giới Thiệu

ChatThau là một ứng dụng nhắn tin thời gian thực cho phép người dùng kết nối, trò chuyện và chia sẻ với bạn bè. Ứng dụng được xây dựng với kiến trúc client-server hiện đại, cung cấp trải nghiệm người dùng mượt mà và responsive.

## ✨ Tính Năng

### Xác Thực & Quản Lý Người Dùng

- ✅ Đăng ký / Đăng nhập
- ✅ Xác thực JWT với HTTP-only cookies
- ✅ Quản lý phiên đăng nhập
- ✅ Profile người dùng với avatar

### Quản Lý Bạn Bè

- ✅ Tìm kiếm người dùng theo username
- ✅ Gửi lời mời kết bạn
- ✅ Chấp nhận / Từ chối lời mời kết bạn
- ✅ Xem danh sách bạn bè
- ✅ Xem lời mời đã gửi và đã nhận

### Nhắn Tin

- ✅ Chat trực tiếp 1-1 (Direct Messages)
- ✅ Tạo và quản lý nhóm chat
- ✅ Gửi tin nhắn văn bản
- ✅ Upload và chia sẻ hình ảnh
- ✅ Emoji picker
- ✅ Real-time messaging với Socket.io
- ✅ Hiển thị trạng thái online/offline
- ✅ Infinite scroll cho lịch sử tin nhắn
- ✅ Số lượng tin nhắn chưa đọc

### Giao Diện

- ✅ Responsive design (desktop & mobile)
- ✅ Dark mode / Light mode
- ✅ UI hiện đại với Tailwind CSS và shadcn/ui
- ✅ Sidebar navigation
- ✅ Toast notifications

## 🛠 Công Nghệ Sử Dụng

### Frontend

- **React 18** - Thư viện UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling framework
- **shadcn/ui** - Component library
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Axios** - HTTP client
- **Socket.io Client** - Real-time communication
- **React Router** - Routing
- **Emoji Mart** - Emoji picker

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Socket.io** - Real-time engine
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage
- **Multer** - File upload
- **Swagger UI** - API documentation

## 📦 Cài Đặt

### Yêu Cầu Hệ Thống

- Node.js (v16 trở lên)
- MongoDB (local hoặc MongoDB Atlas)
- npm hoặc yarn

### Các Bước Cài Đặt

1. **Clone repository**

```bash
git clone <repository-url>
cd ChatThau
```

2. **Cài đặt dependencies cho Backend**

```bash
cd backend
npm install
```

3. **Cài đặt dependencies cho Frontend**

```bash
cd ../frontend
npm install
```

## ⚙️ Cấu Hình

### Backend Configuration

Tạo file `.env` trong thư mục `backend/`:

```env
# Server
PORT=8888
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Client
CLIENT_URL=http://localhost:5173

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Frontend Configuration

Tạo file `.env` trong thư mục `frontend/`:

```env
VITE_API_URL=http://localhost:8888
```

## 🚀 Chạy Ứng Dụng

### Development Mode

1. **Chạy Backend**

```bash
cd backend
npm run dev
```

Backend sẽ chạy trên `http://localhost:8888`

2. **Chạy Frontend** (terminal mới)

```bash
cd frontend
npm run dev
```

Frontend sẽ chạy trên `http://localhost:5173`

### Production Mode

1. **Build Frontend**

```bash
cd frontend
npm run build
```

2. **Chạy Backend**

```bash
cd backend
npm start
```

## 📁 Cấu Trúc Dự Án

```
ChatThau/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Business logic
│   │   ├── models/           # Database schemas
│   │   ├── routes/           # API routes
│   │   ├── middlewares/      # Custom middlewares
│   │   ├── socket/           # Socket.io configuration
│   │   ├── libs/             # Database connection
│   │   ├── utils/            # Helper functions
│   │   ├── swagger.json      # API documentation
│   │   └── server.js         # Entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/       # React components
    │   │   ├── auth/        # Authentication components
    │   │   ├── chat/        # Chat components
    │   │   ├── friendRequest/
    │   │   ├── sidebar/
    │   │   └── ui/          # shadcn/ui components
    │   ├── pages/           # Page components
    │   ├── services/        # API services
    │   ├── stores/          # Zustand stores
    │   ├── types/           # TypeScript types
    │   ├── hooks/           # Custom hooks
    │   ├── lib/             # Utilities
    │   ├── App.tsx
    │   └── main.tsx
    └── package.json
```

## 📚 API Documentation

Khi backend đang chạy, truy cập Swagger UI tại:

```
http://localhost:8888/api-docs
```

### Các API Endpoints Chính

#### Authentication

- `POST /api/auth/register` - Đăng ký tài khoản
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/logout` - Đăng xuất
- `GET /api/auth/me` - Lấy thông tin user hiện tại

#### Users

- `GET /api/users/:id` - Lấy thông tin user
- `PUT /api/users/profile` - Cập nhật profile

#### Friends

- `GET /api/friends/search` - Tìm kiếm user
- `POST /api/friends/request` - Gửi lời mời kết bạn
- `PUT /api/friends/accept/:requestId` - Chấp nhận lời mời
- `PUT /api/friends/reject/:requestId` - Từ chối lời mời
- `GET /api/friends` - Lấy danh sách bạn bè
- `GET /api/friends/requests/received` - Lời mời đã nhận
- `GET /api/friends/requests/sent` - Lời mời đã gửi

#### Messages

- `POST /api/messages` - Gửi tin nhắn
- `GET /api/messages/:conversationId` - Lấy tin nhắn của cuộc trò chuyện

#### Conversations

- `GET /api/conversations` - Lấy danh sách cuộc trò chuyện
- `POST /api/conversations/group` - Tạo group chat
- `GET /api/conversations/:id` - Lấy thông tin cuộc trò chuyện

## 🔌 Socket Events

### Client -> Server

- `send_message` - Gửi tin nhắn mới
- `join_conversation` - Tham gia cuộc trò chuyện
- `leave_conversation` - Rời cuộc trò chuyện
- `typing` - Đang gõ tin nhắn
- `stop_typing` - Dừng gõ tin nhắn

### Server -> Client

- `receive_message` - Nhận tin nhắn mới
- `user_online` - User online
- `user_offline` - User offline
- `typing` - Ai đó đang gõ
- `stop_typing` - Dừng gõ
- `message_read` - Tin nhắn đã đọc

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Dự án này được phát hành bởi ThauDuy.

## 👥 Tác Giả

ThauDuy

## 📞 Liên Hệ

Nếu có bất kỳ câu hỏi nào, vui lòng tạo issue trên GitHub.

---

⭐ Đừng quên star repository nếu bạn thấy dự án hữu ích!
