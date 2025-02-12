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
          //"img": "/menuItems/drum-stick.webp"
        },
        {
          "name": "Saffron Grilled Tika",
          "price": 19.99,
          "description": "Tender chicken marinated in aromatic spices, grilled to perfection with a smoky flavor.",
          //"img": "/menuItems/grilled-tikka.jpg"
        },
        {
          "name": "Saffron Curry",
          "price": 19.99,
          "description": "Succulent protein cooked in a rich, creamy gravy with blend of aromatic spices.",
          "options": [
            { "name": "Paneer", "price": 0 },
            { "name": "Chicken (Pasanda)", "price": 0 }
          ],
          //"img": "/menuItems/chicken-curry.jpg"
        },
        {
          "name": "Murg Rara",
          "price": 19.99,
          "description": "Spicy, flavorful chicken cooked in a rich, aromatic gravy with traditional spices.",
          //"img": "/menuItems/murg-rara.jpg"
        },
        {
          "name": "Stuffed Mushroom",
          "price": 14.99,
          "description": "Button mushrooms stuffed with a flavorful blend of spiced vegetables and herbs",
          //"img": "/menuItems/stuffed-mushroom.jpg"
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
              "description": "Crispy soybeans tossed with spices, onions, chilies, and mustard oil.",
              //"img": "/menuItems/bhatmas-sandeko.jpg"
            },
            {
              "name": "Pakora",
              "price": 6.99,
              "special": ["vegetarian", "vegan"],
              "description": "Crispy fritters made with seasoned gram flour, filled with vegetables or paneer.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Paneer", "price": 1 }
              ],
              //"img": "/menuItems/pakora.jpg"
            },
            {
              "name": "Jeera Aloo",
              "price": 8.99,
              "special": ["vegetarian", "vegan"],
              "description": "Spiced potato cubes sautéed with cumin, mustard seeds, and fresh herbs.",
              "addons": [
                { "name": "Buffalo Sukuti", "price": 3 }
              ],
              //"img": "/menuItems/jeera-aloo.jpg"
            },
            {
              "name": "Chatpate",
              "price": 8.99,
              "special": ["vegetarian"],
              "description": "Spicy, tangy, and crunchy mix of puffed rice, potatoes, chickpeas, and zesty spices.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Buffalo Sukuti", "price": 3 }
              ],
              //"img": "/menuItems/chatpate.jpg"
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
                  { "name": "Buffalo", "price": 3 },
                  { "name": "Beyond Meat", "price": 4 }
                ],
                "styles": [
                  { "name": "Steam", "price": 0 },
                  { "name": "Jhol", "price": 0 },
                  { "name": "Kothey", "price": 0 },
                  { "name": "Fried", "price": 0 },
                  { "name": "Chilli", "price": 2 },
                  { "name": "Sandeko", "price": 2 },
                  { "name": "Tandoor", "price": 5 }
                ]
              },
              //"img": "/menuItems/momo.jpg"
            },
            {
              "name": "Momo Platter",
              "price": 24.99,
              "description": "Four varieties of authentic Nepali dumplings.",
              //"img": "/menuItems/momo-platter.jpg"
            },
            {
              "name": "Chowmein",
              "price": 10.99,
              "special": ["vegetarian", "vegan"],
              "description": "Wok-tossed noodles with seasonal veggies and choice of protein.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Paneer", "price": 1 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 2 },
                { "name": "Shrimp", "price": 3 },
                { "name": "Buffalo", "price": 3 },
                { "name": "Combination", "price": 3 },
                { "name": "Beyond Meat", "price": 4 }
              ],
              //"img": "/menuItems/chowmein.jpg"
            },
            {
              "name": "Sukuti Sandeko",
              "price": 18.99,
              "special": ["spicy"],
              "description": "Dried meat, tossed with various spices, onions, and fresh herbs.",
              "options": [
                { "name": "Goat", "price": 0 },
                { "name": "Buff", "price": 0 }
              ],
              //"img": "/menuItems/sukuti-sandeko.jpg"
            },
            {
              "name": "Chhoila Set",
              "price": 14.99,
              "special": ["spicy"],
              "description": "Spiced grilled chicken tossed with mustard oil, garlic, and various herbs.",
              "options": [
                { "name": "Chicken", "price": 0 }
              ],
              //"img": "/menuItems/chhoila-set.jpg"
            },
            {
              "name": "Chilli",
              "price": 12.99,
              "special": ["vegetarian"],
              "description": "Stir-fried with bell peppers, onions, and spices in a tangy chili sauce.",
              "options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Pork", "price": 0 },
                { "name": "Shrimp", "price": 3 },
                { "name": "Buffalo", "price": 3 },
                { "name": "Combination", "price": 3 }
              ],
              //"img": "/menuItems/chilli.jpg"
            },
            {
              "name": "Chicken Sausage",
              "price": 6.99,
              "description": "Infused with various spices.",
              //"img": "/menuItems/chicken-sausage.jpg"
            },
            {
              "name": "Goat Taas",
              "price": 17.99,
              "description": "Pan-fried with a blend of 15+ spices, served with pickled radish and fresh herbs.",
              //"img": "/menuItems/goat-taas.jpg"
            },
            {
              "name": "Bhutan",
              "price": 14.99,
              "description": "Tender goat stomach pieces stir-fried with bold spices, onions, and herbs for a flavorful kick.",
              //"img": "/menuItems/bhutan.jpg"
            },
            {
              "name": "Appetizer Platter",
              "price": 19.99,
              "description": "Our exclusive appetizer assortment.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 2 }
              ],
              //"img": "/menuItems/appetizer-platter.jpg"
            }
          ]
        },
        {
          "name": "Desi Street Appetizers",
          "items": [
            {
              "name": "Gobi Manchurian",
              "price": 10.99,
              "special": ["vegetarian", "vegan"],
              "description": "Crispy cauliflower florets tossed in a flavorful, tangy, and slightly spicy Manchurian sauce.",
              //"img": "/menuItems/gobi-manchurian.jpg"
            },
            {
              "name": "Pani Puri",
              "price": 7.99,
              "special": ["vegetarian", "vegan"],
              "description": "Crispy puris filled with spicy tangy water and spiced potatoes.",
              "note": "Served on the table",
              //"img": "/menuItems/pani-puri.jpg"
            },
            {
              "name": "Fulki",
              "price": 7.99,
              "special": ["vegetarian", "vegan"],
              "description": "Crispy puris filled with tangy, spicy water and chickpeas.",
              "note": "Served on the table",
              //"img": "/menuItems/fulki.jpg"
            },
            {
              "name": "Vegetable Samosa",
              "price": 6.99,
              "description": "Crispy pastry pockets filled with spiced potatoes and peas, perfect for a savory bite.",
              //"img": "/menuItems/vegetable-samosa.jpg"
            },
            {
              "name": "Vegetable Spring Rolls",
              "price": 4.99,
              "description": "Crispy rolls filled with seasoned vegetable, wrapped in a delicate pastry.",
              //"img": "/menuItems/vegetable-spring-rolls.jpg"
            },
            {
              "name": "Onion Rings",
              "price": 5.99,
              "description": "Crispy, golden-brown battered onion rings, seasoned to perfection.",
              //"img": "/menuItems/onion-rings.jpg"
            },
            {
              "name": "Chicken Lollipop",
              "price": 11.99,
              "description": "Crispy, tender chicken drumsticks coated in a tangy, spicy glaze.",
              //"img": "/menuItems/chicken-lollipop.jpg"
            },
            {
              "name": "65",
              "price": 11.99,
              "special": ["vegetarian"],
              "description": "Crispy, spiced protein marinated in tangy flavorful mix.",
              "options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Paneer", "price": 0 }
              ],
              //"img": "/menuItems/65.jpg"
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
          "price": 13.99,
          "description": "Tender, marinated meat skewers grilled with aromatic Nepali spices.",
          "options": [
            { "name": "Chicken", "price": 0 },
            { "name": "Pork", "price": 2 },
            { "name": "Goat", "price": 3 }
          ],
          //"img": "/menuItems/himalayan-sekuwa.jpg"
        },
        {
          "name": "Tandoori",
          "price": 14.99,
          "special": ["vegetarian"],
          "description": "Meat or vegetables marinated in spices and cooked to smoky perfection in a tandoor.",
          "options": [
            { "name": "Paneer", "price": 0 },
            { "name": "Chicken", "price": 1 },
            { "name": "Wings", "price": 1 },
            { "name": "Shrimp", "price": 4 },
            { "name": "Combination", "price": 4 }
          ],
          //"img": "/menuItems/tandoori.jpg"
        },
        {
          "name": "Chicken Tika Kebab",
          "price": 14.99,
          "description": "Marinated chicken tikka grilled to perfection.",
          "variants": ["Garlic", "Malai", "Tika"],
          //"img": "/menuItems/chicken-tika-kebab.jpg"
        },
        {
          "name": "Seekh Kebab",
          "price": 16.99,
          "description": "Juicy minced meat skewers, seasoned with spices and grilled to a smoky finish.",
          "options": [
            { "name": "Chicken", "price": 0 },
            { "name": "Lamb", "price": 3 }
          ],
          //"img": "/menuItems/seekh-kebab.jpg"
        },
        {
          "name": "Sizzler",
          "price": 16.99,
          "description": "A sizzling platter of grilled meat, served with sauce and sides for a hot, aromatic experience.",
          "options": [
            { "name": "Chicken", "price": 0 },
            { "name": "Lamb", "price": 3 }
          ],
          //"img": "/menuItems/sizzler.jpg"
        },
        {
          "name": "Lamb Boti Kebab",
          "price": 19.99,
          "description": "Tender chunks of marinated meat, skewered and grilled with aromatic spices to perfection.",
          //"img": "/menuItems/lamb-boti-kebab.jpg"
        },
        {
          "name": "Lamb Chops",
          "price": 24.99,
          "description": "Succulent lamb chops marinated in aromatic spices and grilled to tender, smoky perfection.",
          //"img": "/menuItems/lamb-chops.jpg"
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
              "price": 13.99,
              "special": ["vegetarian"],
              "description": "Traditional Nepali platter with multiple components.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 3 }
              ],
              //"img": "/menuItems/himalayan-thali.jpg"
            },
            {
              "name": "Indian Thali",
              "price": 13.99,
              "description": "An Indian platter with rice, dal, vegetables, roti, curries, and buttermilk lassi for a complete, authentic meal.",
              "options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 3 }
              ],
              //"img": "/menuItems/indian-thali.jpg"
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
              //"img": "/menuItems/yellow-daal-tadka.jpg"
            },
            {
              "name": "Palak Paneer",
              "price": 16.99,
              "special": ["vegetarian"],
              "description": "Cottage cheese cubes in a creamy, spiced spinach gravy.",
              //"img": "/menuItems/palak-paneer.jpg"
            },
            {
              "name": "Daal Makhani",
              "price": 13.99,
              "special": ["vegetarian"],
              "description": "A creamy, slow-cooked blend of black lentils and kidney beans, enriched with butter, cream, and aromatic spices.",
              //"img": "/menuItems/daal-makhani.jpg"
            },
            {
              "name": "Paneer Makhani",
              "price": 14.99,
              "special": ["vegetarian"],
              "description": "A rich, creamy tomato-based curry with butter and aromatic spices.",
              //"img": "/menuItems/paneer-makhani.jpg"
            },
            {
              "name": "Malai Kofta",
              "price": 14.99,
              "special": ["vegetarian"],
              "description": "Soft, flavorful dumplings made of paneer and vegetables, simmered in a rich, creamy tomato gravy.",
              //"img": "/menuItems/malai-kofta.jpg"
            },
            {
              "name": "Mushroom Aloo Matar",
              "price": 15.99,
              "special": ["vegetarian"],
              "description": "A hearty mix of mushrooms, potatoes, and peas in a spiced gravy.",
              //"img": "/menuItems/mushroom-aloo-matar.jpg"
            },
            {
              "name": "Mixed Vegitable Curry",
              "price": 13.99,
              "special": ["vegetarian"],
              "description": "A medley of vegetables cooked in a flavorful, spiced curry.",
              //"img": "/menuItems/mixed-veg-curry.jpg"
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
              ],
              //"img": "/menuItems/saag.jpg"
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
              ],
              //"img": "/menuItems/tika-masala.jpg"
            },
            {
              "name": "Korma",
              "price": 15.99,
              "description": "A creamy, mild curry with tender meat or vegetables, simmered in spices, yogurt, and nuts.",
              "options": [
                { "name": "Chicken", "price": 0 },
                { "name": "Lamb", "price": 3 }
              ],
              //"img": "/menuItems/korma.jpg"
            },
            {
              "name": "Kadahi",
              "price": 14.99,
              "description": "A spiced curry cooked in a wok, with meat or vegetables and aromatic herbs.",
              "options": [
                { "name": "Paneer", "price": 0 },
                { "name": "Chicken", "price": 0 },
                { "name": "Shrimp", "price": 4 }
              ],
              //"img": "/menuItems/kadahi.jpg"
            },
            {
              "name": "Butter Chicken",
              "price": 16.99,
              "description": "Tender chicken in a rich, creamy tomato-based sauce with butter and spices.",
              //"img": "/menuItems/butter-chicken.jpg"
            },
            {
              "name": "Fish Curry",
              "price": 15.99,
              "description": "Fish cooked in a rich, spiced tomato gravy with aromatic herbs.",
              "options": [
                { "name": "Tilapia", "price": 0 },
                { "name": "Shrimp", "price": 4 },
                { "name": "Mix Sea Food", "price": 4 }
              ],
              //"img": "/menuItems/fish-curry.jpg"
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
              //"img": "/menuItems/naan.jpg"
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
              ],
              //"img": "/menuItems/rice.jpg"
            },
            {
              "name": "Briyani",
              "price": 12.99,
              "special": ["vegetarian"],
              "description": "Aromatic rice and spiced meat or vegetables, slow-cooked together for rich, layered flavors.",
              "type_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Goat", "price": 3 },
                { "name": "Lamb", "price": 3 },
                { "name": "Shrimp", "price": 4 }
              ],
              //"img": "/menuItems/briyani.jpg"
            },
            {
              "name": "Fried Rice",
              "price": 12.99,
              "special": ["vegetarian", "vegan"],
              "description": "Aromatic rice tossed with seasonal vegetables and choice of meats.",
              "type_options": [
                { "name": "Vegetarian", "price": 0 },
                { "name": "Chicken", "price": 1 },
                { "name": "Pork", "price": 2 },
                { "name": "Shrimp", "price": 4 },
                { "name": "Combination", "price": 4 }
              ],
              //"img": "/menuItems/fried-rice.jpg"
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
          //"img": "/menuItems/ice-cream-trio.jpg"
        },
        {
          "name": "Rasmalai",
          "price": 4.99,
          //"img": "/menuItems/rasmalai.jpg"
        },
        {
          "name": "Gulab Jamon",
          "price": 4.99,
          //"img": "/menuItems/gulab-jamon.jpg"
        }
      ]
    },
    {
      "category": "Drinks",
      "items": [
        {
          "name": "Lassi",
          "price": 4.99,
          "type_options": ["Mango", "Sweet", "Salt"],
          //"img": "/menuItems/lassi.jpg"
        },
        {
          "name": "Buttermilk Lassi (Mohi)",
          "price": 4.99,
          //"img": "/menuItems/buttermilk-lassi.jpg"
        },
        {
          "name": "Coffee",
          "price": 2.99,
          //"img": "/menuItems/coffee.jpg"
        },
        {
          "name": "Masala Tea",
          "price": 2.99,
          "type_options": ["Hot", "Cold"],
          //"img": "/menuItems/masala-tea.jpg"
        },
        {
          "name": "Soft Drinks",
          "price": 2.99,
          "type_options": ["Coke", "Fanta", "Sprite"],
          //"img": "/menuItems/soft-drinks.jpg"
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
              "price": 4.99,
              "description": "A rich, flavorful goat bone broth simmered with spices.",
              //"img": "/menuItems/goat-bone-soup.jpg"
            },
            {
              "name": "Tomyum Soup",
              "price": 4.99,
              "description": "A tangy, spicy soup with shrimp, mushrooms, and herbs.",
              //"img": "/menuItems/tomyum-soup.jpg"
            },
            {
              "name": "Manchow Soup",
              "price": 4.99,
              "description": "A spicy, tangy Indo Chinese soup with mixed vegetables and crispy noodles.",
              //"img": "/menuItems/manchow-soup.jpg"
            },
            {
              "name": "Muligatwan Soup",
              "price": 4.99,
              "description": "A flavorful, spiced Indian soup with lentils, vegetables, and a hint of curry.",
              //"img": "/menuItems/muligatwan-soup.jpg"
            },
            {
              "name": "Veggie Soup",
              "price": 3.99,
              "description": "A light, comforting soup made with a blend of fresh vegetables and aromatic spices.",
              //"img": "/menuItems/veggie-soup.jpg"
            }
          ]
        },
        {
          "name": "Salads",
          "items": [
            {
              "name": "Garden Fresh Salad",
              "price": 6.99,
              "description": "Crispy mix of greens laced with cheese with chef's special dressing.",
              //"img": "/menuItems/garden-fresh-salad.jpg"
            },
            {
              "name": "Nepali Salad",
              "price": 5.99,
              "description": "Crunchy sliced carrot, cucumber and radish in homemade dipping.",
              //"img": "/menuItems/nepali-salad.jpg"
            }
          ]
        }
      ]
    },
    {
      "category": "For Kids: Simple Flavors, Big Smiles",
      "items": [
        {
          "name": "Tika Masala",
          "price": 8.99,
          "special_tags": ["vegetarian"],
          "description": "Mild, creamy tikka masala with tender chicken and served with rice or naan, perfect for kids.",
          "type_options": [
            { "name": "Paneer", "price": 0 },
            { "name": "Chicken", "price": 2 }
          ],
          //"img": "/menuItems/tika-masala.jpg"
        },
        {
          "name": "Chicken Strips & Fries",
          "price": 7.99,
          "description": "Crispy chicken strips served with golden fries, a perfect snack or meal.",
          //"img": "/menuItems/chicken-strips.jpg"
        },
        {
          "name": "Butter Pasta w. Tikka Masala Sauce",
          "price": 6.99,
          "description": "Creamy pasta tossed in a rich, buttery sauce for a comforting dish.",
          //"img": "/menuItems/butter-pasta.jpg"
        }
      ]
    }
  ]
};

export default menuItems;

