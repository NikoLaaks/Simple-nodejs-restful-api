const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      ingredients: ["pasta", "ground beef", "tomato sauce", "onion", "garlic"],
      cookTimeMinutes: 40,
      vegetarian: false,
      createdAt: "2023-10-01",
      author: { name: "Chef Mario", isPro: true }
    },
    {
      id: 2,
      title: "Vegan Buddha Bowl",
      ingredients: ["quinoa", "chickpeas", "avocado", "spinach", "carrot"],
      cookTimeMinutes: 25,
      vegetarian: true,
      createdAt: "2024-02-15",
      author: { name: "PlantLover", isPro: false }
    },
    {
      id: 3,
      title: "Chicken Tikka Masala",
      ingredients: ["chicken", "yogurt", "tomato", "spices", "cream"],
      cookTimeMinutes: 50,
      vegetarian: false,
      createdAt: "2023-12-10",
      author: { name: "SpiceQueen", isPro: true }
    },
    {
      id: 4,
      title: "Caprese Salad",
      ingredients: ["mozzarella", "tomato", "basil", "olive oil"],
      cookTimeMinutes: 10,
      vegetarian: true,
      createdAt: "2024-04-02",
      author: { name: "FreshGuy", isPro: false }
    },
    {
      id: 5,
      title: "Beef Stroganoff",
      ingredients: ["beef", "mushrooms", "onion", "sour cream", "pasta"],
      cookTimeMinutes: 45,
      vegetarian: false,
      createdAt: "2023-11-22",
      author: { name: "ClassicCook", isPro: true }
    },
    {
      id: 6,
      title: "Avocado Toast",
      ingredients: ["bread", "avocado", "lemon", "salt", "pepper"],
      cookTimeMinutes: 5,
      vegetarian: true,
      createdAt: "2024-03-12",
      author: { name: "BrunchMaster", isPro: false }
    },
    {
      id: 7,
      title: "Pad Thai",
      ingredients: ["rice noodles", "shrimp", "egg", "peanuts", "bean sprouts"],
      cookTimeMinutes: 35,
      vegetarian: false,
      createdAt: "2023-08-05",
      author: { name: "ThaiChef", isPro: true }
    },
    {
      id: 8,
      title: "Mushroom Risotto",
      ingredients: ["arborio rice", "mushroom", "parmesan", "white wine"],
      cookTimeMinutes: 60,
      vegetarian: true,
      createdAt: "2024-01-20",
      author: { name: "RisottoKing", isPro: false }
    },
    {
      id: 9,
      title: "Grilled Cheese Sandwich",
      ingredients: ["bread", "cheddar cheese", "butter"],
      cookTimeMinutes: 8,
      vegetarian: true,
      createdAt: "2024-04-10",
      author: { name: "CheesyBoi", isPro: false }
    },
    {
      id: 10,
      title: "Salmon Teriyaki",
      ingredients: ["salmon", "teriyaki sauce", "rice", "broccoli"],
      cookTimeMinutes: 30,
      vegetarian: false,
      createdAt: "2024-03-05",
      author: { name: "SushiSensei", isPro: true }
    }
  ];
  
  module.exports = recipes;