const menuItems = {
  "menu": [
    {
      "category": "Chef's Specials",
      "items": [
        {
          "name": "Chicken Masala Drums of Heaven",
          "price": 17.99,
          "special": ["spicy"],
          "description": "Crispy, flavorful chicken drumsticks coated in a spicy, tangy glaze.",
          "img": "/menuItems/drum-stick.jpg"
        },
        {
          "name": "Saffron Grilled Tika",
          "price": 19.99,
          "description": "Tender chicken marinated in aromatic spices, grilled to perfection with a smoky flavor.",
          "img": "/menuItems/SAFFRON_GRILLED_TIKA.jpg"
        },
        {
          "name": "Saffron Curry",
          "price": 19.99,
          "description": "Succulent ground Chicken wrapped in egg or Paneer cooked in a rich, creamy gravy with a blend of aromatic spices.",
          "options": [
            { "name": "Paneer", "price": 0 },
            { "name": "Chicken", "price": 0 }
          ],
          "img": "/menuItems/saffron-curry.jpg"
        },
        {
          "name": "Murg Rara",
          "price": 19.99,
          "description": "Spicy, flavorful chicken cooked in a rich, aromatic gravy with traditional spices."
        },
        {
          "name": "Stuffed Mushroom",
          "price": 16.99,
          "description": "Button mushrooms stuffed with a flavorful blend of spiced vegetables and herbs"
        }
      ]
    },
    {
      "category": "Happy Hour Specials",
      "subcategories": [
        {
          "name": "Craft Drinks",
          "items": [
            {
              "name": "Draft Beer",
              "price": "$3.00 | $5.00",
              "description": "Selection varies daily"
            },
            {
              "name": "Bottle Beer",
              "price": 5,
              "description": "Imported & craft options"
            },
            {
              "name": "Cocktails",
              "price": 8,
              "description": "Classic & signature mixes"
            },
            {
              "name": "Mocktails",
              "price": 5,
              "description": "Refreshing non-alcoholic blends"
            },
            {
              "name": "Hose Wine",
              "price": "$5.00 | $10.00",
              "description": "Red, white, or sparkling"
            }
          ]
        },
        {
          "name": "Irresistible Bites",
          "items": [
            {
              "name": "Jeera Aloo",
              "price": 5,
              "description": "Spiced cumin potatoes"
            },
            {
              "name": "Seekh Kabab",
              "price": 6,
              "description": "Grilled spiced lamb skewers"
            },
            {
              "name": "Tandoori Wings",
              "price": 6,
              "description": "Smoky chili chicken wings"
            },
            {
              "name": "Pakora",
              "price": 5,
              "description": "Crispy vegetable fritters"
            },
            {
              "name": "Edamame",
              "price": 6,
              "description": "Spiced soybeans with sea salt"
            },
            {
              "name": "Masala Papad",
              "price": 5,
              "description": "Spiced lentil crackers"
            },
            {
              "name": "Aloo Tikki Chaat",
              "price": 5,
              "description": "Spiced potato patties"
            },
            {
              "name": "Stir Fried Pork Belly",
              "price": 6,
              "description": "Chili garlic pork belly"
            }
          ]
        }
      ]
    },
    {
      "category": "Appetizers",
      "subcategories": [
        {
          "name": "Himalayan Specialties",
          "items": [
            {
              "name": "Bhatmas Sandeko",
              "price": 6.99,
              "special": ["vegetarian", "vegan"],
              "description": "Crispy soybeans tossed with spices, onions, chilies, and mustard oil."
            },
            {
              "name": "Pakora",
              "price": 6.99,
              "special": ["vegetarian", "vegan"],
              "description": "Crispy fritters made with seasoned gram flour, filled with vegetables or paneer.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Paneer", "price": 1 }
              ]
            },
            {
              "name": "Jeera Aloo",
              "price": 8.99,
              "special": ["vegetarian", "vegan"],
              "description": "Spiced potato cubes sautéed with cumin, mustard seeds, and fresh herbs.",
              "addons": [
                { "name": "Buffalo Sukuti", "price": 3 }
              ]
            },
            {
              "name": "Chatpate",
              "price": 8.99,
              "special": ["vegetarian"],
              "description": "Spicy, tangy, and crunchy mix of puffed rice, potatoes, chickpeas, and zesty spices.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Buffalo Sukuti", "price": 3 }
              ]
            },
            {
              "name": "Momo",
              "price": 10.99,
              "special": ["vegetarian", "vegan"],
              "description": "Steamed Nepali dumplings filled with seasoned meat or vegetables, served with a tangy dipping sauce.",
              "options": {
                "fillings": [
                  { "name": "Vegetarian", "price": 0 },
                  { "name": "Chicken", "price": 1 },
                  { "name": "Buffalo", "price": 3 }
                ],
                "styles": [
                  { "name": "Steam", "price": 0 },
                  { "name": "Jhol", "price": 1 },
                  { "name": "Kothey", "price": 2 },
                  { "name": "Fried", "price": 0 },
                  { "name": "Chilli", "price": 3 },
                  { "name": "Tandoor", "price": 5 }
                ]
              },
              "img": "/menuItems/MOMO.jpg"
            },
            {
              "name": "Momo Platter",
              "price": 24.99,
              "description": "Four varieties of authentic Nepali dumplings.",
              "img": "/menuItems/momo-platter.jpg"
            },
            {
              "name": "Chowmein",
              "price": 13.99,
              "special": ["vegetarian", "vegan"],
              "description": "Wok-tossed noodles with seasonal veggies, your choice of meat, and a touch of Himalayan spices.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Paneer", "price": 1 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 2 },
                { "name": "Shrimp", "price": 3 },
                { "name": "Buffalo", "price": 3 },
                { "name": "Combination", "price": 3 }
              ],
              "img": "/menuItems/CHOWMEIN.jpg"
            },
            {
              "name": "Sukuti Sandeko",
              "price": 18.99,
              "special": ["spicy"],
              "description": "Dried meat, tossed with various spices, onions, and fresh herbs.",
              "options": [
                { "name": "Goat", "price": 0 },
                { "name": "Buff", "price": 0 }
              ]
            },
            {
              "name": "Chilli",
              "price": 13.99,
              "special": ["vegetarian"],
              "description": "Stir-fried with bell peppers, onions, and spices in a tangy chili sauce.",
              "options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Pork", "price": 0 },
                { "name": "Shrimp", "price": 3 },
                { "name": "Buffalo", "price": 3 },
                { "name": "Combination", "price": 3 }
              ]
            },
            {
              "name": "Chicken Sausage",
              "price": 6.99,
              "description": "Chicken sausage infused with various spices"
            },
            {
              "name": "Goat Taas",
              "price": 17.99,
              "description": "Pan-fried with a blend of 15+ spices, served with pickled radish and fresh herbs."
            },
            {
              "name": "Bhutan",
              "price": 15.99,
              "description": "Tender goat stomach pieces stir-fried with bold spices, onions, and herbs for a flavorful kick"
            },
            {
              "name": "Appetizer Platter",
              "price": 19.99,
              "description": "Our exclusive appetizer assortment.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 2 }
              ]
            }
          ]
        },
        {
          "name": "Desi Street Appetizers",
          "items": [
            {
              "name": "Gobi Manchurian",
              "price": 13.99,
              "special": ["vegetarian", "vegan"],
              "description": "Crispy cauliflower florets tossed in a flavorful, tangy, and slightly spicy Manchurian sauce.",
              "img": "/menuItems/gobi-manchurian.jpg"
            },
            {
              "name": "Pani Puri",
              "price": 7.99,
              "special": ["vegetarian", "vegan"],
              "description": "Crispy puris filled with a spicy, tangy water and spiced potatoes for a burst of flavor."
            },
            {
              "name": "Fulki",
              "price": 7.99,
              "special": ["vegetarian", "vegan"],
              "description": "Crispy puris filled with tangy, spicy water and chickpeas for a burst of flavor."
            },
            {
              "name": "Vegetable Samosa",
              "price": 6.99,
              "description": "Crispy pastry pockets filled with spiced potatoes and peas, perfect for a savory bite.",
              "img": "/menuItems/VEGETABLE_SAMOSA.jpg"
            },
            {
              "name": "Vegetable Spring Rolls",
              "price": 5.99,
              "description": "Crispy rolls filled with seasoned vegetable, wrapped in a delicate pastry.",
              "img": "/menuItems/SPRING_ROLLS.jpg"
            },
            {
              "name": "Onion Rings",
              "price": 5.99,
              "description": "Crispy, golden-brown battered onion rings, seasoned to perfection.",
              "img": "/menuItems/onion-rings.jpg"
            },
            {
              "name": "Chicken Lollipop",
              "price": 13.99,
              "description": "Crispy, tender chicken drumsticks coated in a tangy, spicy glaze.",
              "img": "/menuItems/CHICKEN_LOLLIPOP.jpg"
            },
            {
              "name": "65",
              "price": 13.99,
              "special": ["vegetarian"],
              "description": "Crispy, spiced chicken or paneer marinated in a tangy, flavorful mix and fried to perfection.",
              "options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Paneer", "price": 0 }
              ]
            }
          ]
        }
      ]
    },
    {
      "category": "Tandoor & Grill",
      "items": [
        {
          "name": "Himalayan Sekuwa",
          "price": 14.99,
          "description": "Tender, marinated meat skewers grilled to perfection with aromatic Nepali spices.",
          "options": [
            { "name": "Chicken", "price": 0 },
            { "name": "Pork", "price": 2 },
            { "name": "Goat", "price": 3 }
          ],
          "img": "/menuItems/PORK_SEKUWA.jpg"
        },
        {
          "name": "Tandoori",
          "price": 15.99,
          "special": ["vegetarian"],
          "description": "Meat or vegetables marinated in spices and cooked to smoky perfection in a tandoor.",
          "options": [
            { "name": "Paneer", "price": 0 },
            { "name": "Chicken", "price": 1 },
            { "name": "Wings", "price": 1 },
            { "name": "Shrimp", "price": 4 },
            { "name": "Combination", "price": 4 }
          ],
          "img": "/menuItems/TANDOORI_CHICKEN.jpg"
        },
        {
          "name": "Chicken Tika Kebab",
          "price": 14.99,
          "description": "Marinated, boneless chicken grilled to a smoky perfection.",
          "variants": ["Garlic", "Malai", "Tika"],
          "img": "/menuItems/CHICKEN_TIKA_KEBAB.jpg"
        },
        {
          "name": "Seekh Kebab",
          "price": 16.99,
          "description": "Juicy minced meat skewers, seasoned with spices and grilled to a smoky finish.",
          "options": [
            { "name": "Chicken", "price": 0 },
            { "name": "Lamb", "price": 3 }
          ],
          "img": "/menuItems/SEEKH_KEBAB.jpg"
        },
        {
          "name": "Sizzler",
          "price": 16.99,
          "description": "A sizzling platter of grilled meat, served with sauce and sides for a hot, aromatic experience.",
          "options": [
            { "name": "Chicken", "price": 0 },
            { "name": "Lamb", "price": 3 }
          ]
        },
        {
          "name": "Lamb Boti Kebab",
          "price": 19.99,
          "description": "Tender chunks of marinated meat, skewered and grilled with aromatic spices to perfection"
        },
        {
          "name": "Lamb Chops",
          "price": 24.99,
          "description": "Succulent lamb chops marinated in aromatic spices and grilled to tender, smoky perfection.",
          "img": "/menuItems/lamb-chop.jpg"
        }
      ]
    },
    {
      "category": "Entrées",
      "subcategories": [
        {
          "name": "Thali Meals",
          "items": [
            {
              "name": "Himalayan Thali",
              "price": 14.99,
              "special": ["vegetarian"],
              "description": "A traditional Nepali platter with rice, lentils, vegetables, curries, chutneys, and buttermilk lassi for a complete, authentic meal.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 3 }
              ],
              "img": "/menuItems/HIMALAYAN_THALI.jpg"
            },
            {
              "name": "Indian Thali",
              "price": 15.99,
              "description": "An Indian platter with rice, dal, vegetables, roti, curries, and buttermilk lassi for a complete, authentic meal.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 3 }
              ]
            }
          ]
        },
        {
          "name": "Vegetarian Curries",
          "items": [
            {
              "name": "Yellow Daal Tadka",
              "price": 15.99,
              "special": ["vegetarian", "vegan"],
              "description": "Yellow lentils cooked with spices and topped with a fragrant ghee tempering.",
              "img": "/menuItems/YELLO_DAAL_TADKA.jpg"
            },
            {
              "name": "Palak Paneer",
              "price": 16.99,
              "special": ["vegetarian"],
              "description": "Cottage cheese cubes in a creamy, spiced spinach gravy.",
              "img": "/menuItems/PALAK_PANEER.jpg"
            },
            {
              "name": "Daal Makhani",
              "price": 16.99,
              "special": ["vegetarian"],
              "description": "A creamy, slow-cooked blend of black lentils and kidney beans, enriched with butter, cream, and aromatic spices."
            },
            {
              "name": "Paneer Makhani",
              "price": 15.99,
              "special": ["vegetarian"],
              "description": "A rich, creamy tomato-based curry with butter and aromatic spices."
            },
            {
              "name": "Malai Kofta",
              "price": 15.99,
              "special": ["vegetarian"],
              "description": "Soft, flavorful dumplings made of paneer and vegetables, simmered in a rich, creamy tomato gravy."
            },
            {
              "name": "Mushroom Aloo Matar",
              "price": 15.99,
              "special": ["vegetarian"],
              "description": "A hearty mix of mushrooms, potatoes, and peas in a spiced gravy."
            },
            {
              "name": "Mixed Vegetable Curry",
              "price": 13.99,
              "special": ["vegetarian"],
              "description": "A medley of vegetables cooked in a flavorful, spiced curry."
            },
            {
              "name": "Saag",
              "price": 13.99,
              "special": ["vegetarian"],
              "description": "A flavorful, spiced leafy greens gravy.",
              "options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 },
                { "name": "Shrimp", "price": 4 }
              ]
            }
          ]
        },
        {
          "name": "Non-Vegetarian Curries",
          "items": [
            {
              "name": "Tika Masala",
              "price": 15.99,
              "description": "Tender meat or vegetables cooked in a rich, creamy tomato-based sauce with aromatic spices.",
              "options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 },
                { "name": "Shrimp", "price": 4 }
              ]
            },
            {
              "name": "Korma",
              "price": 15.99,
              "description": "A creamy, mild curry with tender meat or vegetables, simmered in spices, yogurt, and nuts.",
              "options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 }
              ],
              "img": "/menuItems/korma.jpg"
            },
            {
              "name": "Kadahi",
              "price": 15.99,
              "description": "A spiced curry cooked in a wok, with meat or vegetables and aromatic herbs.",
              "options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Shrimp", "price": 4 }
              ]
            },
            {
              "name": "Butter Chicken",
              "price": 16.99,
              "description": "Tender chicken in a rich, creamy tomato-based sauce with butter and spices.",
              "img": "/menuItems/Butter_Chicken.jpg"
            },
            {
              "name": "Fish Curry",
              "price": 16.99,
              "description": "Fish cooked in a rich, spiced tomato gravy with aromatic herbs.",
              "options": [
                { "name": "Tilapia", "price": 0 },
                { "name": "Shrimp", "price": 4 },
                { "name": "Mix Sea Food", "price": 4 }
              ]
            }
          ]
        }
      ]
    },
    {
      "category": "Breads & Rice",
      "subcategories": [
        {
          "name": "Breads",
          "items": [
            {
              "name": "Naan",
              "price": 3.49,
              "type_options": [
                { "name": "Regular", "price": 0 },
                { "name": "Butter", "price": 0.5 },
                { "name": "Masala", "price": 2 },
                { "name": "Bullet", "price": 0.5 },
                { "name": "Garlic Cilantro", "price": 0.5 },
                { "name": "Onion Naan", "price": 0.5 },
                { "name": "Cheese", "price": 3 },
                { "name": "Keema", "price": 3 }
              ],
              "img": "/menuItems/GARLIC_NAAN.jpg"
            }
          ]
        },
        {
          "name": "Rice",
          "items": [
            {
              "name": "Rice",
              "price": 1.99,
              "description": "Fluffy, perfectly cooked Basmati rice, a simple and classic accompaniment.",
              "type_options": [
                { "name": "Regular", "price": 0 },
                { "name": "Zeera", "price": 1 },
                { "name": "Nepali Pulao", "price": 3 }
              ]
            },
            {
              "name": "Briyani",
              "price": 13.99,
              "special": ["vegetarian"],
              "description": "Aromatic rice and spiced meat or vegetables, slow-cooked together for rich, layered flavors.",
              "type_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 3 },
                { "name": "Lamb", "price": 3 },
                { "name": "Shrimp", "price": 4 }
              ],
              "img": "/menuItems/Briyani-min.jpg"
            },
            {
              "name": "Fried Rice",
              "price": 12.99,
              "special": ["vegetarian", "vegan"],
              "description": "Aromatic rice tossed with seasonal vegetables and choice of protein.",
              "type_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Pork", "price": 2 },
                { "name": "Shrimp", "price": 4 },
                { "name": "Combination", "price": 4 }
              ]
            }
          ]
        }
      ]
    },
    {
      "category": "Desserts",
      "items": [
        {
          "name": "Ice-cream Trio",
          "price": 3.99
        },
        {
          "name": "Rasmalai",
          "price": 4.99,
          "img": "/menuItems/RASMALAI.jpg"
        },
        {
          "name": "Gulab Jamon",
          "price": 4.99
        }
      ]
    },
    {
      "category": "Drinks",
      "items": [
        {
          "name": "Lassi",
          "price": 4.99,
          "type_options": ["Mango", "Sweet", "Salt"]
        },
        {
          "name": "Buttermilk Lassi (Mohi)",
          "price": 4.99
        },
        {
          "name": "Coffee",
          "price": 2.99
        },
        {
          "name": "Masala Tea",
          "price": 3.99,
          "type_options": ["Hot"]
        },
        {
          "name": "Soft Drinks",
          "price": 2.99,
          "type_options": ["Coke", "Fanta", "Sprite"]
        }
      ]
    },
    {
      "category": "Soul-Warming Soups",
      "subcategories": [
        {
          "name": "Soups",
          "items": [
            {
              "name": "Goat Bone Soup",
              "price": 5.99,
              "description": "A rich, flavorful goat bone broth simmered with spices."
            },
            {
              "name": "Tomyum Soup",
              "price": 4.99,
              "description": "A tangy, spicy soup with shrimp, mushrooms, and herbs."
            },
            {
              "name": "Manchow Soup",
              "price": 4.99,
              "description": "A spicy, tangy Indo Chinese soup with mixed vegetables and crispy noodles."
            },
            {
              "name": "Muligatwan Soup",
              "price": 4.99,
              "description": "A flavorful, spiced Indian soup with lentils, vegetables, and a hint of curry.",
              "img": "/menuItems/MULIGATWAN_SOUP.jpg"
            },
            {
              "name": "Vegetable Soup",
              "price": 3.99,
              "description": "A light, comforting soup made with a blend of fresh vegetables and aromatic spices."
            }
          ]
        },
        {
          "name": "Salads",
          "items": [
            {
              "name": "Garden Fresh Salad",
              "price": 6.99,
              "description": "Crispy mix of greens laced with cheese with chef's special dressing."
            },
            {
              "name": "Nepali Salad",
              "price": 5.99,
              "description": "Crunchy sliced carrot, cucumber and radish in homemade dipping.",
              "img": "/menuItems/nepali-salad.jpg"
            }
          ]
        }
      ]
    },
    {
      "category": "For Kids: Simple Flavors, Big Smiles",
      "items": [
        {
          "name": "Kids Tika Masala",
          "price": 9.99,
          "special": ["vegetarian"],
          "description": "Mild, creamy tikka masala with tender chicken and served with rice or naan, perfect for kids.",
          "options": [
            { "name": "Paneer", "price": 0 },
            { "name": "Chicken", "price": 2 }
          ]
        },
        {
          "name": "Chicken Strips & Fries",
          "price": 7.99,
          "description": "Crispy chicken strips served with golden fries, a perfect snack or meal."
        },
        {
          "name": "Butter Pasta with Fries",
          "price": 7.99,
          "special": ["vegetarian"],
          "description": "Creamy pasta tossed in a rich, buttery sauce for a comforting dish."
        }
      ]
    }
  ]
};

export default menuItems;