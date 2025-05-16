# 🌿 House Plant Ecommerce App

A modern, elegant React.js ecommerce frontend for discovering and purchasing indoor plants. Powered by live plant data from RapidAPI.

![Home](https://github.com/user-attachments/assets/6397e19c-3b8a-4254-917c-36a7cea089ed)


## 🚀 Features

- 🌱 Dynamic categories (Indoor, Succulents, Herbs, etc.)
- 🪴 Real-time plant data via [RapidAPI](https://rapidapi.com/)
- 📱 Fully responsive design
- 💡 Lazy loading with skeleton loaders for smooth UX
- 🎨 CSS module-based styling for scoped and clean design
- 🔍 Explore by category or product

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Hooks)
- **Styling:** CSS Modules
- **API:** [RapidAPI - House Plants API](https://rapidapi.com/apidojo/api/house-plants2/)

---

## 🔑 API Integration

To connect with the **House Plants API** via RapidAPI:

1. Go to [RapidAPI - House Plants](https://rapidapi.com/apidojo/api/house-plants2/)
2. Subscribe to the API (free tier available).
3. Copy your `X-RapidAPI-Key`.

Then in your code (`CategorySection.jsx` or `.env`):

```js
const response = await fetch('https://house-plants2.p.rapidapi.com/indoor', {
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
  },
});


📦 Installation

# 1. Clone the repo
git clone https://github.com/yourusername/house-plant-shop.git
cd house-plant-shop

# 2. Install dependencies
npm install

# 3. Run development server
npm start

📌 TODO

Add search and filter functionality

Implement cart & checkout logic

Add product detail pages

    Setup backend with caching + rate-limit protection

📄 License

This project is licensed under the MIT License.
🙋‍♀️ Support

Having issues or want to contribute?
Feel free to open an issue or submit a PR.
🌸 Acknowledgements

    Data provided by House Plants API

    Built with ❤️ by Moriarty
