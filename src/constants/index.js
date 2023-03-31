import { food1, food2, food3, food4, food5, food6, food7, food8, food9, food10 } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "specials",
    title: "Specials",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "Chefs",
    title: "Chefs",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const tops = [
  {
    id: "phone",
    name: "07089409288",
    icon: "bi bi-phone",
  },
  {
    id: "open",
    name: "Mon-Sat: 11AM - 23PM",
    icon: "bi bi-clock",
  },
];

export const heroButton = [
  {
    id: "menu",
    name: "Our Menu",
  },
  {
    id: "book",
    name: "Book Table",
  },
];

export const aboutData = [
  {
    title: "Fork nd Knife, where we offer a unique dining experience that is sure to satisfy your taste buds.",
    description: "Our restaurant is the perfect spot for anyone who is looking for exceptional food, friendly service, and a warm, inviting atmosphere.",
    checks: [
      {
        name: "We take great pride in serving only the highest quality ingredients, which are locally sourced whenever possible",
      },
      {
        name: "Our menu features a wide range of options, from light and refreshing salads to hearty entrees and decadent desserts",
      },
      {
        name: "We believe that dining out should be an experience, which is why we pay careful attention to every detail, from the atmosphere to the service",
      },
    ],
    last: "So come and join us at Fork nd Knife, where we are committed to providing exceptional food, service, and ambiance that will keep you coming back for more.",
  },
]

export const whyData = [
  {
    title: "why us",
    subtitle: "reason to count on us.",
    reasons: [
      {
        icon: "bi bi-emoji-heart-eyes",
        why: "Better Experience",
        reason: "Want good service in a restaurant? Don't just expect it. Make it happen.",
      },
      {
        icon: "bi bi-egg",
        why: "Delicious Food",
        reason: "We take great pride in serving only the highest quality ingredients, which are locally sourced whenever possible",
      },
      {
        icon: "bi bi-cart-plus",
        why: "Fast Delivery",
        reason: "We take great pride in serving only the highest quality ingredients, which are locally sourced whenever possible",
      },
    ],
    last: "So come and join us at Fork nd Knife, where we are committed to providing exceptional food, service, and ambiance that will keep you coming back for more.",
  },
]

export const menuData =  [
  {
    title: "menu",
    subtitle: "check out our forky.",
    filters: [
      {
        id: "*",
        name: "all",
      },
      {
        id: ".filter-steaked",
        name: "steaked",
      },
      {
        id: ".filter-veggies",
        name: "veggies",
      },
      {
        id: ".filter-feast",
        name: "feast",
      },
    ],
    menus: [
      {
        name: "lettuce pepper",
        img: food1,
        price: 200,
        ingredients: "lettuce, date, oil, scotch bonnet",
        category: "veggies",
        rating: 4.9,
      },
      {
        name: "steak and potato",
        img: food2,
        price: 200,
        ingredients: "steak, baked potatoes, tomatoes, brocolli",
        category: "steak",
        rating: 4.9,
      },
      {
        name: "stir fry pasta",
        img: food3,
        price: 200,
        ingredients: "pasta, hotdog, onion, pepper",
        category: "feast",
        rating: 4.9,
      },
      {
        name: "steaked egg",
        img: food4,
        price: 200,
        ingredients: "egg, leaves, tomato, brocolli",
        category: "steak",
        rating: 4.9,
      },
      {
        name: "mushroom stroganoff",
        img: food5,
        price: 200,
        ingredients: "cauliflower, mushroom, carrot, filede",
        category: "feast",
        rating: 4.9,
      },
      {
        name: "tacos Islands",
        img: food6,
        price: 200,
        ingredients: "corn totillas, lime, mashed avocade, pork",
        category: "feast",
        rating: 4.9,
      },
      {
        name: "adamco salad",
        img: food7,
        price: 200,
        ingredients: "cucumber, chill, apple, cayenne pepper",
        category: "veggies",
        rating: 4.9,
      },
      {
        name: "tomato fajitas",
        img: food8,
        price: 200,
        ingredients: "tomato, spinach, tomato, sauce",
        category: "veggies",
        rating: 4.9,
      },
      {
        name: "apple zazoo",
        img: food9,
        price: 200,
        ingredients: "apple, steak, jute leaves, hot chilli",
        category: "steak",
        rating: 4.9,
      },
    ],
  },
];
