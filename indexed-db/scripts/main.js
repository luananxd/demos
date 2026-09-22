import "./filter.js";
import { updateTable } from "./table.js";
import { QZDatabase } from "./database-js/database.js";

const MOCK_GOODS = [
  {
    id: 1,
    icon: "🎧",
    title: "Wireless Headphones",
    category: "Electronics",
    description:
      "Comfortable wireless headphones with clear sound and long battery life.",
    price: 89.99,
  },
  {
    id: 2,
    icon: "⌚",
    title: "Smart Watch",
    category: "Electronics",
    description:
      "A lightweight smart watch for tracking workouts, sleep, and daily activity.",
    price: 149.99,
  },
  {
    id: 3,
    icon: "🎒",
    title: "Travel Backpack",
    category: "Accessories",
    description:
      "A spacious and durable backpack designed for travel and everyday use.",
    price: 64.5,
  },
  {
    id: 4,
    icon: "☕",
    title: "Ceramic Coffee Mug",
    category: "Home & Kitchen",
    description:
      "A minimalist ceramic mug perfect for coffee, tea, and other hot drinks.",
    price: 18.99,
  },
  {
    id: 5,
    icon: "💡",
    title: "Desk Lamp",
    category: "Home & Office",
    description: "An adjustable LED desk lamp with multiple brightness levels.",
    price: 39.99,
  },
];

updateTable(MOCK_GOODS);

async function init() {
  const database = new QZDatabase();
  await database.create("Sample Database", 1, migrationReducer);
}

function migrationReducer(migrator, currentVersion) {
  switch (currentVersion) {
    case 0:
      migrator.createTable("Goods", "id");

      migrator.createIndex({
        tableName: "Goods",
        indexName: "title_idx",
        field: "title",
        unique: false,
      });

      migrator.createIndex({
        tableName: "Goods",
        indexName: "price_idx",
        field: "price",
        unique: false,
      });

    default:
      break;
  }
}

init();
