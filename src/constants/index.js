import { food1, food2, food3, food4, food5, food6, food7, food8, food9, special1, special2, special3, special4, special5 } from "../assets";

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
        price: 9.99,
        ingredients: "lettuce, date, oil, scotch bonnet",
        category: "veggies",
        rating: 4.4,
      },
      {
        name: "steaky potato",
        img: food2,
        price: 12.50,
        ingredients: "steak, baked potatoes, tomatoes, brocolli",
        category: "steak",
        rating: 4.6,
      },
      {
        name: "stir fry pasta",
        img: food3,
        price: 45.10,
        ingredients: "pasta, hotdog, onion, pepper",
        category: "feast",
        rating: 4.2,
      },
      {
        name: "steaked egg",
        img: food4,
        price: 10.99,
        ingredients: "egg, leaves, tomato, brocolli",
        category: "steak",
        rating: 4.0,
      },
      {
        name: "mushroom stroganoff",
        img: food5,
        price: 22.99,
        ingredients: "cauliflower, mushroom, carrot, filede",
        category: "feast",
        rating: 4.8,
      },
      {
        name: "tacos Islands",
        img: food6,
        price: 8.99,
        ingredients: "corn totillas, lime, mashed avocade, pork",
        category: "feast",
        rating: 4.1,
      },
      {
        name: "adamco salad",
        img: food7,
        price: 13.25,
        ingredients: "cucumber, chill, apple, cayenne pepper",
        category: "veggies",
        rating: 4.6,
      },
      {
        name: "tomato fajitas",
        img: food8,
        price: 9.5,
        ingredients: "tomato, spinach, tomato, sauce",
        category: "veggies",
        rating: 4.8,
      },
      {
        name: "apple zazoo",
        img: food9,
        price: 6.99,
        ingredients: "apple, steak, jute leaves, hot chilli",
        category: "steak",
        rating: 4.2,
      },
    ],
  },
];


export const specialsData = [
  {
    title: "specials",
    subtitle: "explore our signature dishes today.",
    dishes: [
      {
        name: "Nigiri",
        description: "Japanese dish consisting of small balls or rolls of vinegar-flavored cold cooked rice served with a garnish of raw fish, vegetables, or egg.",
        price: 25.99,
        img: special1,
        origin: {
          country: "Japan",
          region: "East Asia"
        },
        preparation: "Sushi is prepared by first cooking short-grain rice and then mixing it with vinegar, sugar, and salt. The rice is then cooled and shaped into bite-sized pieces or rolls. Fresh fish or vegetables are then sliced and added as a topping."
      },
      {
        name: "Chicken Tikka Masala",
        description: "A spicy, creamy and tomato-based curry dish made with marinated and grilled chicken pieces served with rice.",
        price: 19.99,
        img: special2,
        origin: {
          country: "India",
          region: "South Asia"
        },
        preparation: "Chicken Tikka Masala is prepared by marinating chicken in yogurt and spices, then grilling it before adding it to a creamy tomato-based sauce. The sauce is usually flavored with garam masala, cumin, coriander, and turmeric."
      },
      {
        name: "Falafel",
        description: "Middle Eastern dish made of ground chickpeas, onions, and spices formed into balls or patties and then fried or baked, often served in a pita pocket with vegetables and tahini sauce.",
        price: 14.99,
        img: special3,
        origin: {
          country: "Middle East",
          region: "Western Asia, North Africa, and parts of Mediterranean Europe"
        },
        preparation: "Falafel is prepared by soaking chickpeas in water overnight, then grinding them with onions, herbs, and spices. The resulting mixture is formed into balls or patties and then fried or baked until golden brown. It is typically served in a pita pocket with vegetables and a creamy tahini sauce."
      },
      {
        name: "Pho",
        description: "Vietnamese soup consisting of broth, rice noodles, herbs, and meat, usually beef, sometimes chicken.",
        price: 12.99,
        img: special4,
        origin: {
          country: "Vietnam",
          region: "Southeast Asia"
        },
        preparation: "Pho is prepared by simmering beef or chicken bones in water for several hours to create a flavorful broth. Rice noodles and thinly sliced meat are then added to the broth along with herbs like Thai basil, cilantro, and mint. It is typically served with lime wedges, bean sprouts, and hoisin sauce."
      },
      {
        name: "Moussaka",
        description: "Greek dish made with layers of eggplant, tomato, onion, and minced beef or lamb, topped with a creamy bechamel sauce.",
        price: 16.99,
        img: special5,
        origin: {
          country: "Greece",
          region: "Eastern Mediterranean"
        },
        preparation: "Moussaka is prepared by layering thinly sliced eggplant with a tomato-based meat sauce made"
      },
    ],
  },
];