import classicwhitet1 from './assets/productimages/classic_white_tee_1.png';
import classicwhitet2 from './assets/productimages/classic_white_tee_2.png';
import classicwhitet3 from './assets/productimages/classic_white_tee_3.png';
import grpahict1 from './assets/productimages/graphic_print_tshirt_1.png';
import grpahict2 from './assets/productimages/graphic_print_tshirt_2.png';
import grpahict3 from './assets/productimages/graphic_print_tshirt_3.png';
import stripepolo1 from './assets/productimages/striped_polo_tee_1.png';
import stripepolo2 from './assets/productimages/striped_polo_tee_2.png';
import stripepolo3 from './assets/productimages/striped_polo_tee_3.png';
import tshirt1 from './assets/productimages/tshirt00005.png';
import tshirt2 from './assets/productimages/tshirt00006.png';
import tshirt3 from './assets/productimages/tshirt00007.png';
import logo from './logo.svg';
import atta from './assets/categories/atta.avif';
import bakery from './assets/categories/bakery.avif';
import breakfast from './assets/categories/breakfast.avif';
import colddrinks from './assets/categories/colddrinks.avif';
import paan from './assets/categories/paan-corner_web.avif';
import sweet_tooth from './assets/categories/sweet_tooth.avif';
import tea from './assets/categories/tea.avif';
import fruits from './assets/categories/fruits.avif';
import dairy from './assets/categories/dairy.avif';
import baby from './assets/categories/baby.avif';
import chicken from './assets/categories/chicken.avif';
import clean from './assets/categories/clean.avif';
import home from './assets/categories/home.avif';
import masala from './assets/categories/masala.avif';
import organic from './assets/categories/organic.avif';
import personal from './assets/categories/personal.avif';
import pet from './assets/categories/pet.avif';
import sauces from './assets/categories/sauces.avif';
import pharma from './assets/categories/pharma.avif';



const data = {
  menuItems: [
    { key: '1', label: 'New' },
    { key: '2', label: 'Sale' },
    { key: '3', label: 'Shop' },
    { key: '4', label: 'About' },
    { key: '5', label: 'Contact' },
    { key: '6', label: 'Home' }
  ],
  companyName: 'T-Shop',
  logo: logo,
  siteContent: {
    title: 'Welcome to E-Shop!',
    description: 'Enjoy exploring our services and information.'
  },
  products: [
    {
      id: '1',
      name: 'Classic White Tee',
      description: 'A timeless classic, this white tee offers comfort and style.',
      price: 19.99,
      images: [
        [classicwhitet1],
        [classicwhitet2],
        [classicwhitet3]
      ],
      category: 'New'
    },
    {
      id: '2',
      name: 'Graphic Print T-shirt',
      description: 'Express your style with this vibrant graphic print tee.',
      price: 24.99,
      images: [
        [grpahict1],
        [grpahict2],
        [grpahict3]
      ],
      category: 'New'
    },
    {
      id: '3',
      name: 'Striped Polo Tee',
      description: 'Stay classy with this smart and comfortable striped polo tee.',
      price: 29.99,
      images: [
        [stripepolo1],
        [stripepolo2],
        [stripepolo3]
      ],
      category: 'New'
    },
    {
      "id": "4",
      "name": "Vintage Logo Tee",
      "description": "Showcase retro style with this vintage logo tee.",
      "price": 22.99,
      "images": [
        [tshirt1],
        [tshirt2],
        [tshirt3]
      ],
      "category": "Sale"
    },
    {
      "id": "5",
      "name": "Plain V-neck Tee",
      "description": "A simple yet elegant V-neck tee for everyday wear.",
      "price": 17.99,
      "images": [
        [grpahict1],
        [grpahict2],
        [grpahict3]
      ],
      "category": "Sale"
    },
    {
      "id": "6",
      "name": "Retro Print T-shirt",
      "description": "Revive the old-school vibe with this retro print tee.",
      "price": 26.99,
      "images": [
        [grpahict1],
        [grpahict2],
        [grpahict3]

      ],
      "category": "New"
    },
    {
      "id": "7",
      "name": "Sports Logo Tee",
      "description": "Get sporty with this logo tee perfect for casual outings.",
      "price": 21.99,
      "images": [
        [tshirt1],
        [tshirt2],
        [tshirt3]
      ],
      "category": "Sale"
    },
    {
      "id": "8",
      "name": "Vintage Striped Tee",
      "description": "Embrace vintage vibes with this striped tee.",
      "price": 23.99,
      "images": [
        [tshirt1],
        [tshirt2],
        [tshirt3]
      ],
      "category": "New"
    },
    {
      "id": "9",
      "name": "Camo Print T-shirt",
      "description": "Blend into style with this trendy camo print tee.",
      "price": 25.99,
      "images": [
        [classicwhitet1],
        [classicwhitet2],
        [classicwhitet3]
      ],
      "category": "New"
    },
    {
      "id": "10",
      "name": "Long Sleeve Striped Tee",
      "description": "Stay warm and stylish with this long sleeve striped tee.",
      "price": 27.99,
      "images": [
        [classicwhitet1],
        [classicwhitet2],
        [classicwhitet3]
      ],
      "category": "Sale"
    },
    {
      id: '11',
      name: 'Classic White Tee',
      description: 'A timeless classic, this white tee offers comfort and style.',
      price: 19.99,
      images: [
        [classicwhitet1],
        [classicwhitet2],
        [classicwhitet3]
      ],
      category: 'New'
    },
    {
      id: '12',
      name: 'Graphic Print T-shirt',
      description: 'Express your style with this vibrant graphic print tee.',
      price: 24.99,
      images: [
        [grpahict1],
        [grpahict2],
        [grpahict3]
      ],
      category: 'New'
    },
    {
      id: '13',
      name: 'Striped Polo Tee',
      description: 'Stay classy with this smart and comfortable striped polo tee.',
      price: 29.99,
      images: [
        [stripepolo1],
        [stripepolo2],
        [stripepolo3]
      ],
      category: 'New'
    },
    {
      "id": "14",
      "name": "Vintage Logo Tee",
      "description": "Showcase retro style with this vintage logo tee.",
      "price": 22.99,
      "images": [
        [tshirt1],
        [tshirt2],
        [tshirt3]
      ],
      "category": "Sale"
    },
    {
      "id": "15",
      "name": "Plain V-neck Tee",
      "description": "A simple yet elegant V-neck tee for everyday wear.",
      "price": 17.99,
      "images": [
        [grpahict1],
        [grpahict2],
        [grpahict3]
      ],
      "category": "Sale"
    },
    {
      "id": "16",
      "name": "Retro Print T-shirt",
      "description": "Revive the old-school vibe with this retro print tee.",
      "price": 26.99,
      "images": [
        [grpahict1],
        [grpahict2],
        [grpahict3]

      ],
      "category": "New"
    },
    {
      "id": "17",
      "name": "Sports Logo Tee",
      "description": "Get sporty with this logo tee perfect for casual outings.",
      "price": 21.99,
      "images": [
        [tshirt1],
        [tshirt2],
        [tshirt3]
      ],
      "category": "Sale"
    },
    {
      "id": "18",
      "name": "Vintage Striped Tee",
      "description": "Embrace vintage vibes with this striped tee.",
      "price": 23.99,
      "images": [
        [tshirt1],
        [tshirt2],
        [tshirt3]
      ],
      "category": "New"
    },
    {
      "id": "19",
      "name": "Camo Print T-shirt",
      "description": "Blend into style with this trendy camo print tee.",
      "price": 25.99,
      "images": [
        [classicwhitet1],
        [classicwhitet2],
        [classicwhitet3]
      ],
      "category": "New"
    },
    {
      "id": "20",
      "name": "Long Sleeve Striped Tee",
      "description": "Stay warm and stylish with this long sleeve striped tee.",
      "price": 27.99,
      "images": [
        [classicwhitet1],
        [classicwhitet2],
        [classicwhitet3]
      ],
      "category": "Sale"
    }
  ],
  "categories": [
    { "id": 1, "name": "Paan Corner", imageUrl: paan },
    { "id": 2, "name": "Dairy, Bread & Eggs", imageUrl: dairy },
    { "id": 3, "name": "Fruits & Vegetables", imageUrl: fruits },
    { "id": 4, "name": "Cold Drinks & Juices", imageUrl: colddrinks },
    { "id": 5, "name": "Snacks & Munchies", imageUrl: atta },
    { "id": 6, "name": "Breakfast & Instant Food", imageUrl: breakfast },
    { "id": 7, "name": "Sweet Tooth", imageUrl: sweet_tooth },
    { "id": 8, "name": "Bakery & Biscuits", imageUrl: bakery },
    { "id": 9, "name": "Tea, Coffee & Health Drink", imageUrl: tea },
    { "id": 10, "name": "Atta, Rice & Dal", imageUrl: atta },
    { "id": 11, "name": "Masala, Oil & More", imageUrl: masala },
    { "id": 12, "name": "Sauces & Spreads", imageUrl: sauces },
    { "id": 13, "name": "Chicken, Meat & Fish", imageUrl: chicken },
    { "id": 14, "name": "Organic & Healthy Living", imageUrl: organic },
    { "id": 15, "name": "Baby Care", imageUrl: baby },
    { "id": 16, "name": "Pharma & Wellness", imageUrl: pharma },
    { "id": 17, "name": "Cleaning Essentials", imageUrl: clean },
    { "id": 18, "name": "Home & Office", imageUrl: home },
    { "id": 19, "name": "Personal Care", imageUrl: personal },
    { "id": 20, "name": "Pet Care", imageUrl: pet }
  ]
};

export default data;



