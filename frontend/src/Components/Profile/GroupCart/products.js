const products = [
  {
    name: "Denim Jacket",
    brand: "U.S. Denim",
    price: 25.0,
    countInStock: 3,
    rating: 4,
    gender: "Male",
    category: "Jackets",
    image: "/images/denimjacket.jpg",
  },
  {
    name: "Black Watch",
    brand: "Rolex",
    price: 44.0,
    countInStock: 10,
    rating: 4.1,
    gender: "Male",
    category: "Watches",
    image: "/images/blackwatch.jpg",
  },
  {
    name: "Denim Shirt",
    brand: "U.S. Denim",
    price: 20.0,
    countInStock: 2,
    rating: 4,
    gender: "Male",
    category: "Shirts",
    image: "/images/denimshirt.jpg",
  },
  {
    name: "Grey Handbag",
    brand: "Gucci",
    price: 50.0,
    countInStock: 8,
    rating: 3.5,
    gender: "Female",
    category: "Handbags",
    image: "/images/greyhandbag.jpg",
  },
  {
    name: "Hang Watch",
    brand: "U.S. Watch",
    price: 28.0,
    countInStock: 13,
    rating: 4.6,
    gender: "Female",
    category: "Watches",
    image: "/images/hangwatch.jpg",
  },
  {
    name: "Leather Handbag",
    brand: "Prada",
    price: 40.0,
    countInStock: 6,
    rating: 4.2,
    gender: "Female",
    category: "Handbags",
    image: "/images/leatherhandbag.jpg",
  },
  {
    name: "Formal Watch",
    brand: "Rolex",
    price: 45.0,
    countInStock: 9,
    rating: 3.9,
    gender: "Male",
    category: "Watches",
    image: "/images/leatherwatch.jpg",
  },
  {
    name: "Red Handbag",
    brand: "U.S. Bags",
    price: 30.0,
    countInStock: 12,
    rating: 4,
    gender: "Female",
    category: "Handbags",
    image: "/images/redhandbag.jpg",
  },
  {
    name: "Red Sweatshirt",
    brand: "HRX",
    price: 18.0,
    countInStock: 15,
    rating: 4.6,
    gender: "Male",
    category: "Sweatshirts",
    image: "/images/redsweatshirt.jpg",
  },
  {
    name: "Black Heels",
    brand: "Indie Shoes",
    price: 23.0,
    countInStock: 5,
    rating: 4,
    gender: "Female",
    category: "Shoes",
    image: "/images/shoesfive.jpg",
  },
  {
    name: "Orange Sneakers",
    brand: "Sparx",
    price: 12.0,
    countInStock: 8,
    rating: 4,
    gender: "Male",
    category: "Shoes",
    image: "/images/shoesfour.jpg",
  },
  {
    name: "White Sports Shoes",
    brand: "Nike",
    price: 30.0,
    countInStock: 12,
    rating: 4.5,
    gender: "Male",
    category: "Shoes",
    image: "/images/shoesone.jpg",
  },
  {
    name: "White Casuals",
    brand: "Puma",
    price: 20.0,
    countInStock: 8,
    rating: 3.6,
    gender: "Male",
    category: "Shoes",
    image: "/images/shoesthree.jpg",
  },
  {
    name: "Green Sports Shoes",
    brand: "HRX",
    price: 15.0,
    countInStock: 9,
    rating: 4.7,
    gender: "Male",
    category: "Shoes",
    image: "/images/shoestwo.jpg",
  },
  {
    name: "Leather Wallet",
    brand: "U.S. Wallets",
    price: 10.0,
    countInStock: 14,
    rating: 4.3,
    gender: "Male",
    category: "Wallet",
    image: "/images/walletone.jpg",
  },
  {
    name: "Custom Name Wallet",
    brand: "U.S. Wallets",
    price: 15.0,
    countInStock: 13,
    rating: 4.8,
    gender: "Male",
    category: "Wallet",
    image: "/images/walletthree.jpg",
  },
  {
    name: "Wallet with Card Holder",
    brand: "Woodland",
    price: 18.0,
    countInStock: 15,
    rating: 4.2,
    gender: "Male",
    category: "Wallet",
    image: "/images/wallettwo.jpg",
  },
  {
    name: "White Shirt",
    brand: "Raymonds",
    price: 35.0,
    countInStock: 18,
    rating: 4.2,
    gender: "Male",
    category: "Shirts",
    image: "/images/whiteshirt.jpg",
  },
  {
    name: "Denim Set",
    brand: "United Benetton",
    price: 22.0,
    countInStock: 6,
    rating: 3.8,
    gender: "Female",
    category: "Jackets",
    image: "/images/denimset.jpg",
  },
  {
    name: "White Dress",
    brand: "Madame",
    price: 13.0,
    countInStock: 12,
    rating: 4.1,
    gender: "Female",
    category: "Dresses",
    image: "/images/dress.jpg",
  },
  {
    name: "Jump Suit",
    brand: "Madame",
    price: 16.0,
    countInStock: 10,
    rating: 4.2,
    gender: "Female",
    category: "Dresses",
    image: "/images/jumpsuit.jpg",
  },
  {
    name: "Yellow Hoodie",
    brand: "Puma",
    price: 20,
    countInStock: 8,
    rating: 4.4,
    gender: "Male",
    category: "Sweatshirt",
    image: "/images/malehoodie.jpg",
  },
  {
    name: "Red Shirt",
    brand: "Raymonds",
    price: 12.0,
    countInStock: 7,
    rating: 4.3,
    gender: "Male",
    category: "Shirts",
    image: "/images/shirt.jpg",
  },
  {
    name: "Black Top",
    brand: "Madame",
    price: 8,
    countInStock: 5,
    rating: 4.3,
    gender: "Male",
    category: "Tops",
    image: "/images/top.jpg",
  },
  {
    name: "White Sweatshirt",
    brand: "HRX",
    price: 13.0,
    countInStock: 5,
    rating: 4.3,
    gender: "Male",
    category: "Sweatshirt",
    image: "/images/sweatshirt.jpg",
  },
];

export default products;
