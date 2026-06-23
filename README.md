# 🍳 ChefByNeed (Smart Fridge Recipe Finder)

An intelligent web app that looks at what ingredients you have in your fridge and instantly finds recipes you can cook! Built using Vanilla JavaScript, CSS3, and the Spoonacular API.

🔗 **Live Project Link:** Coming Soon (Hosting in progress)

---

##  Features
* **Quick-Add** Tags: Click common items like Milk, Eggs, or Cheese to instantly update your fridge layout.
* **Smart Search:** Type any ingredient and add it to your live list.
* **Perfect Match Modal:** Displays exactly what ingredients you have (`✔`) and what you are missing (`✕`).
* **Nutrient Tracker:** Calculates total calories and fat for the chosen dish.
* **Mobile Responsive:** Completely optimized to look great on mobile screens.

---

##  Key Things I Learned Making This Project

While building this app, I didn't just write working code—I learned some deep JavaScript and CSS concepts:

1. **Smart Array Optimization with `.some()`**: Instead of using `.includes()`, I used `.some()` to perform case-insensitive checks. It stops searching the exact millisecond it finds a match, which saves computer memory and processing power.
2. **Defensive Programming (`onerror`)**: To prevent broken image links from crashing the app, I used an `onerror` layout fallback. By setting `this.onerror = null` inside the code, I stopped the browser from falling into an infinite crash loop.
3. **Handling Asynchronous API Data**: Learned how to wrap network requests inside `try...catch` blocks to handle real-world network drops safely.
4. **CSS Flexbox Constraints**: Learned how to pair `flex-grow: 1` with `overflow-y: auto` to create custom-bounded scrollable areas for long text blocks (like recipe steps) so they don't break the layout.

---

## 💻 Tech Stack
* HTML5
* CSS3 (Custom Variables & Media Queries)
* Vanilla JavaScript (ES6+, Async/Await, Fetch API)
* Git & GitHub

---

## 🚀 How to Run It Locally
1. Clone this repository to your computer.
2. Open `index.html` in your browser.
3. Make sure to add your active Spoonacular API key inside `script.js`.
