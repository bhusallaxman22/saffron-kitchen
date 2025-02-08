const menuItems = {
  "menu": [
    {
      "category": "Starters",
      "subcategories": [
        {
          "name": "Himalayan Appetizers",
          "items": [
            {
              "name": "Momo",
              "price": 10.99,
              "img": "/menuItems/momos.jpg",
              "special": ["vegetarian", "vegan"],
              "description": "Steamed Nepali dumplings filled with seasoned meat or vegetables, served with a tangy dipping sauce.",
              "options": {
                "fillings": [
                  { "name": "Vegetarian", "price": 0 },
                  { "name": "Chicken", "price": 1 },
                  { "name": "Buffalo", "price": 3 },
                  { "name": "Vegan", "price": 4 }
                ],
                "cooking_methods": [
                  { "name": "Steam", "price": 0 },
                  { "name": "Jhol", "price": 0 },
                  { "name": "Kothey", "price": 0 },
                  { "name": "Fried", "price": 0 },
                  { "name": "Chilli", "price": 2 },
                  { "name": "Sandeko", "price": 2 },
                  { "name": "Tandoor", "price": 5 }
                ]
              }
            },
            {
              "name": "Momo Platter",
              "price": 24.99,
              "img": "",
              "description": "Four different type of Nepali dumplings."
            },
            {
              "name": "Chowmein",
              "price": 10.99,
              "img": "/menuItems/chowmein.jpg",
              "special": ["vegetarian", "vegan"],
              "description": "Wok-tossed noodles with seasonal veggies, your choice of meat, and a touch of Himalayan spices.",
              "protein_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Paneer", "price": 1 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 2 },
                { "name": "Shrimp", "price": 3 },
                { "name": "Buffalo", "price": 3 },
                { "name": "Combination", "price": 3 }
              ]
            },
            {
              "name": "Sukuti Sandeko",
              "price": 18.99,
              "img": "",
              "special": ["spicy"],
              "description": "Dried meat, tossed with various spices, onions, and fresh herbs.",
              "protein_options": [
                { "name": "Goat", "price": 0 },
                { "name": "Buff", "price": 0 }
              ]
            },
            {
              "name": "Chhoila Set",
              "price": 14.99,
              "img": "",
              "special": ["spicy"],
              "description": "Spiced grilled chicken tossed with mustard oil, garlic, and various herbs.",
              "protein_options": [
                { "name": "Chicken", "price": 0 }
              ]
            },
            {
              "name": "Chilli",
              "price": 12.99,
              "img": "",
              "special": ["vegetarian"],
              "description": "Stir-fried with bell peppers, onions, and spices in a tangy chili sauce.",
              "protein_options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Pork", "price": 0 },
                { "name": "Shrimp", "price": 3 },
                { "name": "Buffalo", "price": 3 },
                { "name": "Combination", "price": 3 }
              ]
            },
            {
              "name": "Chatpate",
              "price": 8.99,
              "img": "",
              "special": ["vegetarian"],
              "description": "Spicy, tangy, and crunchy mix of puffed rice, potatoes, chickpeas, and zesty spices.",
              "protein_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Buffalo Sukuti", "price": 3 }
              ]
            },
            {
              "name": "Chicken Sausage",
              "price": 6.99,
              "img": "",
              "description": "Infused with various spices."
            },
            {
              "name": "Goat Taas",
              "price": 17.99,
              "img": "",
              "description": "Pan-fried with a blend of 15+ spices, served with pickled radish and fresh herbs."
            },
            {
              "name": "Appetizer Platter",
              "price": 19.99,
              "img": "",
              "description": "",
              "protein_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 2 }
              ]
            },
            {
              "name": "Bhatmas Sandeko",
              "price": 6.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "Crispy soybeans tossed with spices, onions, chilies, and mustard oil."
            },
            {
              "name": "Pakora",
              "price": 6.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "Crispy fritters made with seasoned gram flour, filled with vegetables or paneer.",
              "protein_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Paneer", "price": 1 }
              ]
            },
            {
              "name": "Jeera Aloo",
              "price": 8.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "Spiced potato cubes sautéed with cumin, mustard seeds, and fresh herbs.",
              "addons": [
                { "name": "Buffalo Sukuti", "price": 3 }
              ]
            },
            {
              "name": "Bhutan",
              "price": 14.99,
              "img": "",
              "description": "Tender goat stomach pieces stir-fried with bold spices, onions, and herbs for a flavorful kick."
            }
          ]
        },
        {
          "name": "Desi Street Appetizers",
          "items": [
            {
              "name": "Chicken Lollipop",
              "price": 11.99,
              "img": "",
              "description": "Crispy, tender chicken drumsticks coated in a tangy, spicy glaze."
            },
            {
              "name": "65",
              "price": 11.99,
              "img": "",
              "special": ["vegetarian"],
              "description": "Crispy, spiced chicken or paneer marinated in a tangy, flavorful mix and fried to perfection.",
              "protein_options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Paneer", "price": 0 }
              ]
            },
            {
              "name": "Gobi Manchurian",
              "price": 10.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "Crispy cauliflower florets tossed in a flavorful, tangy, and slightly spicy Manchurian sauce."
            },
            {
              "name": "Pani Puri",
              "price": 7.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "Crispy puris filled with a spicy, tangy water and spiced potatoes for a burst of flavor.",
              "notes": "On the table"
            },
            {
              "name": "Fulki",
              "price": 7.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "Crispy puris filled with tangy, spicy water and chickpeas for a burst of flavor.",
              "notes": "On the table"
            },
            {
              "name": "Vegetable Samosa",
              "price": 6.99,
              "img": "",
              "description": "Crispy pastry pockets filled with spiced potatoes and peas, perfect for a savory bite."
            },
            {
              "name": "Spring Rolls",
              "price": 4.99,
              "img": "",
              "description": "Crispy rolls filled with seasoned vegetable, wrapped in a delicate pastry."
            },
            {
              "name": "Onion Rings",
              "price": 5.99,
              "img": "",
              "description": "Crispy, golden-brown battered onion rings, seasoned to perfection."
            }
          ]
        }
      ]
    },
    {
      "category": "Saffron Specials",
      "items": [
        {
          "name": "Chicken Drumstick | Drums of Heaven",
          "price": 17.99,
          "img": "",
          "special": ["spicy"],
          "description": "Crispy, flavorful chicken drumsticks coated in a spicy, tangy glaze."
        },
        {
          "name": "Saffron Grilled Tika",
          "price": 19.99,
          "img": "",
          "description": "Tender chicken marinated in aromatic spices, grilled to perfection with a smoky flavor."
        },
        {
          "name": "Saffron Chicken Curry",
          "price": 19.99,
          "img": "",
          "description": "Succulent chicken cooked in a rich, creamy gravy with a blend of aromatic spices."
        },
        {
          "name": "Paneer Chakori",
          "price": 19.99,
          "img": "",
          "description": "Crispy paneer cubes marinated in spices, fried to golden perfection and served with a tangy dip."
        },
        {
          "name": "Paneer Pasanda",
          "price": 24.99,
          "img": "",
          "description": "Soft paneer slices stuffed with a flavorful mixture, cooked in a rich, creamy gravy."
        },
        {
          "name": "Murg Rara",
          "price": 19.99,
          "img": "",
          "description": "Spicy, flavorful chicken cooked in a rich, aromatic gravy with traditional spices."
        },
        {
          "name": "Stuffed Mushroom",
          "price": 14.99,
          "img": "",
          "description": "Button mushrooms stuffed with a flavorful blend of spiced vegetables and herbs."
        }
      ]
    },
    {
      "category": "Mains",
      "subcategories": [
        {
          "name": "Grill & Tandoor",
          "items": [
            {
              "name": "Himalayan Sekuwa",
              "price": 13.99,
              "img": "",
              "description": "Tender, marinated meat skewers grilled to perfection with aromatic Nepali spices.",
              "protein_options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Pork", "price": 2 },
                { "name": "Goat", "price": 3 }
              ]
            },
            {
              "name": "Tandoori",
              "price": 14.99,
              "img": "",
              "special": ["vegetarian"],
              "description": "Meat or vegetables marinated in spices and cooked to smoky perfection in a tandoor.",
              "protein_options": [
                { "name": "Paneer Tika", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Wings", "price": 1 },
                { "name": "Shrimp", "price": 4 },
                { "name": "Combination", "price": 4 }
              ]
            },
            {
              "name": "Lamb Chops",
              "price": 24.99,
              "img": "",
              "description": "Succulent lamb chops marinated in aromatic spices and grilled to tender, smoky perfection."
            },
            {
              "name": "Seekh Kebab",
              "price": 16.99,
              "img": "",
              "description": "Juicy minced meat skewers, seasoned with spices and grilled to a smoky finish.",
              "protein_options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 }
              ]
            },
            {
              "name": "Boti Kebab",
              "price": 16.99,
              "img": "",
              "description": "Tender chunks of marinated meat, skewered and grilled with aromatic spices to perfection.",
              "protein_options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 }
              ]
            },
            {
              "name": "Sizzler",
              "price": 16.99,
              "img": "",
              "description": "A sizzling platter of grilled meat, served with sauce and sides for a hot, aromatic experience.",
              "protein_options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 }
              ]
            }
          ]
        },
        {
          "name": "Curries & Entrées",
          "items": [
            {
              "name": "Himalayan Thali",
              "price": 13.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "A traditional Nepali platter with rice, lentils, vegetables, curries, chutneys, and buttermilk lassi for a complete, authentic meal.",
              "protein_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 3 }
              ]
            },
            {
              "name": "Indian Thali",
              "price": 13.99,
              "img": "",
              "description": "An Indian platter with rice, dal, vegetables, roti, curries, and buttermilk lassi for a complete, authentic meal.",
              "protein_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 3 }
              ]
            },
            {
              "name": "Tika Masala",
              "price": 15.99,
              "img": "",
              "description": "Tender meat or vegetables cooked in a rich, creamy tomato-based sauce with aromatic spices.",
              "protein_options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 },
                { "name": "Shrimp", "price": 4 }
              ]
            },
            {
              "name": "Malai Kofta",
              "price": 14.99,
              "img": "",
              "special": ["vegetarian"],
              "description": "Soft, flavorful dumplings made of paneer and vegetables, simmered in a rich, creamy tomato gravy."
            },
            {
              "name": "Korma",
              "price": 15.99,
              "img": "",
              "description": "A creamy, mild curry with tender meat or vegetables, simmered in spices, yogurt, and nuts.",
              "protein_options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 }
              ]
            },
            {
              "name": "Yellow Daal Tadka",
              "price": 15.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "Yellow lentils cooked with spices and topped with a fragrant ghee tempering."
            },
            {
              "name": "Palak Paneer",
              "price": 16.99,
              "img": "",
              "special": ["vegetarian"],
              "description": "Cottage cheese cubes in a creamy, spiced spinach gravy."
            },
            {
              "name": "Makhani",
              "price": 13.99,
              "img": "",
              "special": ["vegetarian"],
              "description": "A rich, creamy tomato-based curry with butter and aromatic spices.",
              "protein_options": [
                { "name": "Daal", "price": 0 },
                { "name": "Paneer", "price": 1 }
              ]
            },
            {
              "name": "Kadahi",
              "price": 14.99,
              "img": "",
              "description": "A spiced curry cooked in a wok, with meat or vegetables and aromatic herbs.",
              "protein_options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Shrimp", "price": 4 }
              ]
            },
            {
              "name": "Mushroom Aloo Matar",
              "price": 15.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "A hearty mix of mushrooms, potatoes, and peas in a spiced gravy."
            },
            {
              "name": "Butter Chicken",
              "price": 16.99,
              "img": "",
              "description": "Tender chicken in a rich, creamy tomato-based sauce with butter and spices."
            },
            {
              "name": "Mixed Veggie Curry",
              "price": 13.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "A medley of vegetables cooked in a flavorful, spiced curry."
            },
            {
              "name": "Saag",
              "price": 13.99,
              "img": "",
              "special": ["vegetarian"],
              "description": "A flavorful, spiced leafy greens gravy.",
              "protein_options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 },
                { "name": "Shrimp", "price": 4 }
              ]
            },
            {
              "name": "Fish Curry",
              "price": 15.99,
              "img": "",
              "description": "Fish cooked in a rich, spiced tomato gravy with aromatic herbs.",
              "protein_options": [
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
              "price": 2.99,
              "img": "",
              "type_options": [
                { "name": "Regular", "price": 0 },
                { "name": "Butter", "price": 0.5 },
                { "name": "Masala", "price": 0.5 },
                { "name": "Bullet", "price": 0.5 },
                { "name": "Garlic Cilantro", "price": 0.5 },
                { "name": "Onion Naan", "price": 1 },
                { "name": "Cheese", "price": 2 },
                { "name": "Keema", "price": 3 }
              ]
            }
          ]
        },
        {
          "name": "Rice",
          "items": [
            {
              "name": "Rice",
              "price": 1.99,
              "img": "",
              "description": "Fluffy, perfectly cooked Basmati rice, a simple and classic accompaniment.",
              "type_options": [
                { "name": "Regular", "price": 0 },
                { "name": "Zeera", "price": 1 },
                { "name": "Nepali Pulao", "price": 3 }
              ]
            },
            {
              "name": "Briyani",
              "price": 12.99,
              "img": "",
              "special": ["vegetarian", "vegan"],
              "description": "Aromatic rice and spiced meat or vegetables, slow-cooked together for rich, layered flavors.",
              "protein_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 3 },
                { "name": "Lamb", "price": 3 },
                { "name": "Shrimp", "price": 4 }
              ]
            },
            {
              "name": "Fried Rice",
              "price": 12.99,
              "img": "",
              "special": ["vegetarian"],
              "description": "Aromatic rice tossed with seasonal vegetables and choice of meats.",
              "protein_options": [
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
          "price": 2.99,
          "img": ""
        },
        {
          "name": "Rasmalai",
          "price": 4.99,
          "img": ""
        },
        {
          "name": "Gulab Jamon",
          "price": 4.99,
          "img": ""
        }
      ]
    },
    {
      "category": "Drinks",
      "items": [
        {
          "name": "Lassi",
          "price": 4.99,
          "img": "",
          "flavors": ["Mango", "Sweet", "Salt"]
        },
        {
          "name": "Buttermilk Lassi (Mohi)",
          "price": 4.99,
          "img": ""
        },
        {
          "name": "Coffee",
          "price": 2.99,
          "img": ""
        },
        {
          "name": "Masala Tea",
          "price": 2.99,
          "img": "",
          "flavors": ["Hot", "Cold"]
        }
      ]
    },
    {
      "category": "Soups & Salads",
      "subcategories": [
        {
          "name": "Soups",
          "items": [
            {
              "name": "Goat Bone Soup",
              "price": 4.99,
              "img": "",
              "description": "A rich, flavorful goat bone broth simmered with spices."
            },
            {
              "name": "Tomyum Soup",
              "price": 4.99,
              "img": "",
              "description": "A tangy, spicy soup with shrimp, mushrooms, and herbs."
            },
            {
              "name": "Manchow Soup",
              "price": 4.99,
              "img": "",
              "description": "A spicy, tangy Indo Chinese soup with mixed vegetables and crispy noodles."
            },
            {
              "name": "Muligatwan Soup",
              "price": 4.99,
              "img": "",
              "description": "A flavorful, spiced Indian soup with lentils, vegetables, and a hint of curry."
            },
            {
              "name": "Veggie Soup",
              "price": 3.99,
              "img": "",
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
              "img": "",
              "description": "Crispy mix of greens laced with cheese with chef's special dressing."
            },
            {
              "name": "Nepali Salad",
              "price": 5.99,
              "img": "",
              "description": "Crunchy sliced carrot, cucumber and radish in homemade dipping."
            }
          ]
        }
      ]
    },
    {
      "category": "Kids",
      "items": [
        {
          "name": "Tika Masala (Kids)",
          "price": 8.99,
          "img": "",
          "special": ["vegetarian"],
          "description": "Mild, creamy tikka masala with tender chicken and served with rice, perfect for kids.",
          "protein_options": [
            { "name": "Paneer", "price": 0 },
            { "name": "Chicken", "price": 2 }
          ]
        },
        {
          "name": "Chicken Strips & Fries",
          "price": 7.99,
          "img": "",
          "description": "Crispy chicken strips served with golden fries, a perfect snack or meal."
        },
        {
          "name": "Butter Pasta with Tika Masala Sauce",
          "price": 7.99,
          "img": "",
          "special": ["vegetarian"],
          "description": "Creamy pasta tossed in a rich, buttery sauce for a comforting dish."
        }
      ]
    }
  ]
};

export default menuItems;