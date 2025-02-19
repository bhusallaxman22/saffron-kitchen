import React from 'react';
import { Heading, Subheading } from '../ui/Typography';
import menuData from '../../constants/menuItems';
import DishCard from './DishCard';

const SpecialDishes = () => {
    // Retrieve the Chef's Specials category from your menu data
    const specialsCategory = menuData.menu.find(
        (cat) => cat.category === "Chef's Specials"
    );
    const dishes =
        specialsCategory && specialsCategory.items ? specialsCategory.items : [];

    return (
        <section
            id="special-dishes"
            className="py-20 px-6 bg-gray-50"
            itemScope
            itemType="https://schema.org/MenuSection"
        >
            {/* Define the name of this menu section */}
            <meta itemProp="name" content="Chef's Specials" />
            <div className="container mx-auto text-center mb-10">
                <Heading>Chef's Specials</Heading>
                <Subheading>Our Signature Dishes</Subheading>
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {dishes.map((dish, index) => (
                    // Assume DishCard further includes microdata for each MenuItem
                    <DishCard key={index} dish={dish} />
                ))}
            </div>
        </section>
    );
};

export default SpecialDishes;
