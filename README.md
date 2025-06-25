# Crypto Trades Dashboard

A real-time cryptocurrency trades dashboard built with Angular (frontend) and Node.js/Express (backend). This project displays mock trade data for BTC/USDT using Angular Material components.

---

## 📁 Project Structure

- `frontend/` - Angular application displaying trade data in a table.
- `backend/` - Express server serving mock trade data via REST API.

---

## ▶️ How to Run the Project

### 1. Backend

Navigate to the backend directory and run the server:

```bash
cd backend
npm install
npm start
```

- This will start the Express server on `http://localhost:3000`.
- Endpoint available: `GET /api/trades` returns mock trade data.

---

### 2. Frontend

Navigate to the frontend directory and run the Angular app:

```bash
cd frontend
npm install
ng serve
```

- This runs the Angular app at `http://localhost:4200`.
- Make sure the backend is running on port `3000`.

---

## 🧪 How to Run Tests

In the `frontend` folder, run:

```bash
ng test
```

- Opens Karma test runner in the browser.
- Includes unit tests for basic functionality (e.g., default filter value, component creation).

---

## ⚙️ Notes

- **Mock Trade Generator:** The backend uses a simple function to generate 20 mock BTC/USDT trades every 5 seconds.
- **TradeService:** Angular service that fetches trade data from the backend and refreshes it in the table.
- **Pagination:** Implemented using `MatPaginator`.
- **Sorting & Filtering:** Trades can be sorted by price or timestamp, and filtered by type (BUY / SELL / ALL).
- **Styling:** UI styled with Angular Material and custom CSS.

---

## ✅ Requirements

- Node.js (v16+)
- Angular CLI (v15+)
- npm

---

## 🔗 Example Endpoints

- `GET http://localhost:3000/api/trades` → Returns array of mock trades.

---

## 💡 Development Tips

- Don’t forget to enable CORS in the backend if frontend and backend run on different ports during development.
- You can change the mock trade generator logic in `backend/trades.js`.

---

## 📄 License

MIT – Free to use and modify.
