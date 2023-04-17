import { food1, food2, food3, food4, food5, food6, food7, food8, food9, special1, special2, special3, special4, special5, event1, event2, event3, testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, chef1, chef2, chef3 } from "../assets";

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
    id: "chefs",
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

export const contacts = [
  {
    id: "location",
    name: "Obafemi Awolowo University, Ile-ife",
    icon: "bi bi-geo-alt",
  },
  {
    id: "open",
    name: "Mon-Sat: 11AM - 23PM",
    icon: "bi bi-clock",
  },
  {
    id: "email",
    name: "fork-nd-knife@gmail.com",
    icon: "bi bi-envelope-at",
  },
  {
    id: "phone",
    name: "+234 708 940 9288",
    icon: "bi bi-phone",
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

export const checks = [
  {
    name: "We take great pride in serving only the highest quality ingredients, which are locally sourced whenever possible",
  },
  {
    name: "Our menu features a wide range of options, from light and refreshing salads to hearty entrees and decadent desserts",
  },
  {
    name: "We believe that dining out should be an experience, which is why we pay careful attention to every detail, from the atmosphere to the service",
  },
]


export const reasons = [
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
]

export const filters = [
  {
    id: 1,
    name: "all",
  },
  {
    id: 2,
    name: "steaky",
  },
  {
    id: 3,
    name: "veggy",
  },
  {
    id: 4,
    name: "feast",
  },
]


export const menus = [
  {
    name: "lettuce pepper",
    img: food1,
    price: 9.99,
    ingredients: "lettuce, date, oil, scotch bonnet",
    category: "veggy",
    rating: 4.4,
  },
  {
    name: "steaky potato",
    img: food2,
    price: 12.50,
    ingredients: "steak, baked potatoes, tomatoes, brocolli",
    category: "steaky",
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
    name: "steaky egg",
    img: food4,
    price: 10.99,
    ingredients: "egg, leaves, tomato, brocolli",
    category: "steaky",
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
    category: "veggy",
    rating: 4.6,
  },
  {
    name: "tomato fajitas",
    img: food8,
    price: 9.5,
    ingredients: "tomato, spinach, tomato, sauce",
    category: "veggy",
    rating: 4.8,
  },
  {
    name: "apple zazoo",
    img: food9,
    price: 6.99,
    ingredients: "apple, steak, jute leaves, hot chilli",
    category: "steaky",
    rating: 4.2,
  },
]

export const dishes = [
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
      region: "North Africa"
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
]

export const parties = [
  {
    img: event1,
    title: "Intimate Gatherings",
    price: 112,
    details: [
      {
        description: "For smaller groups of up to 20 people, we offer intimate gathering packages that includes",
        list: [
          {
            li: "a private dining room",
          },
          {
            li: "personalized menu options",
          },
          {
            li: "dedicated waitstaff",
          },
        ],
        conclusion: "Our cozy and intimate setting is perfect for family gatherings, anniversary celebrations, or small business dinners",
      },
    ],
  },
  {
    img: event2,
    title: "Corporate Events",
    price: 299,
    details: [
      {
        description: " Our restaurant is equipped to host large-scale corporate events with all the amenities you need to impress your clients or employees. Our corporate event packages include",
        list: [
          {
            li: "access to audio/visual equipment",
          },
          {
            li: "customizable menus",
          },
          {
            li: "dedicated event coordinators to ensure a successful event",
          },
        ],
        conclusion: "Every detail is taken care of, so you can focus on building relationships with your clients or employees.",
      },
    ],
  },
  {
    img: event3,
    title: "Wedding Receptions",
    price: 529,
    details: [
      {
        description: " We know that your wedding day is one of the most important days of your life, and we're here to help you make it perfect. Our wedding reception packages include",
        list: [
          {
            li: "access to our beautiful event spaces",
          },
          {
            li: "customizable menus",
          },
          {
            li: "dedicated event coordinators to ensure your special day is everything you've dreamed of",
          },
        ],
        conclusion: "our experienced staff will take care of all the details so you can enjoy your special day stress-free.",
      },
    ],
  },
]

export const testimonials = [
  {
    name: 'Samantha Jones',
    img: testimonial1,
    profession: 'Food Critic',
    review: 'The flavors were well-balanced and the presentation was impeccable. This is easily one of the best restaurants in the city.'
  },
  {
    name: 'Javier Rodriguez',
    img: testimonial2,
    profession: 'Chef',
    review: 'I was blown away by the creativity and attention to detail in every dish. The chef is a true master of their craft.'
  },
  {
    name: 'Emily Nguyen',
    img: testimonial3,
    profession: 'Server',
    review: 'The service was exceptional - our server was friendly, knowledgeable, and attentive throughout the meal.'
  },
  {
    name: 'Alex Martinez',
    img: testimonial4,
    profession: 'Bartender',
    review: 'The cocktail menu was top-notch and the drinks were expertly crafted. The bar staff really knows their stuff.'
  },
  {
    name: 'William Chen',
    img: testimonial5,
    profession: 'Sommelier',
    review: 'The wine list was impressive and our sommelier recommended the perfect pairing for each course. A truly memorable dining experience.'
  },
  {
    name: 'Maya Patel',
    img: testimonial6,
    profession: 'Food Blogger',
    review: 'I couldn\'t get enough of the dishes here - each one was more delicious than the last. I\'ll definitely be recommending this restaurant to my readers.'
  },
  {
    name: 'John Smith',
    img: testimonial7,
    profession: 'Tourist',
    review: 'I stumbled upon this restaurant while exploring the city and I\'m so glad I did. The food was amazing and the atmosphere was charming.'
  }
];

export const gallery = [
  {
    img: gallery1
  },
  {
    img: gallery2
  },
  {
    img: gallery3
  },
  {
    img: gallery4
  },
  {
    img: gallery5
  },
  {
    img: gallery6
  },
  {
    img: gallery7
  },
  {
    img: gallery8
  },
];

export const chefs = [
  {
    img: chef1,
    name: 'John Smith',
    role: 'executive chef',
    facebook: 'http://www.facebook.com',
    twitter: 'http://twitter.com',
    instagram: 'http://instagram.com',
    linkedin: 'http://www.linkedin.com',
  },
  {
    img: chef2,
    name: 'sarah davis',
    role: 'expediter',
    facebook: 'http://www.facebook.com',
    twitter: 'http://twitter.com',
    instagram: 'http://instagram.com',
    linkedin: 'http://www.linkedin.com',
  },
  {
    img: chef3,
    name: 'James Lee',
    role: 'line cook',
    facebook: 'http://www.facebook.com',
    twitter: 'http://twitter.com',
    instagram: 'http://instagram.com',
    linkedin: 'http://www.linkedin.com',
  },
]

export const footerLinks = [
  {
    title: "About",
    links: [
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Features",
        link: "#",
      },
      {
        name: "New & Blog",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Team",
        link: "#",
      },
      {
        name: "Plan & Pricing",
        link: "#",
      },
      {
        name: "Become a member",
        link: "#",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "FAQs",
        link: "#",
      },
      {
        name: "Support Center",
        link: "#",
      },
      {
        name: "Contact Us",
        link: "#",
      },
    ],
  },
];