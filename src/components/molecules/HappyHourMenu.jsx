import { useState } from 'react';
import { Heading, Subheading } from '../ui/Typography';

const HappyHourMenu = () => {
    const [activeTab, setActiveTab] = useState('drinks');

    const drinks = [
        { name: 'Draft Beer', price: '$3 | $5', description: 'Selection varies daily' },
        { name: 'Bottle Beer', price: '$5', description: 'Imported & craft options' },
        { name: 'Cocktails', price: '$8', description: 'Classic & signature mixes' },
        { name: 'Mocktails', price: '$5', description: 'Refreshing non-alcoholic blends' },
        { name: 'House Wine', price: '$5 | $10', description: 'Red, white, or sparkling' },
    ];

    const snacks = [
        { name: 'Jeera Aloo', price: '$5', description: 'Spiced cumin potatoes' },
        { name: 'Seekh Kabab', price: '$6', description: 'Grilled spiced lamb skewers' },
        { name: 'Tandoori Wings', price: '$6', description: 'Smoky chili chicken wings' },
        { name: 'Pakora', price: '$5', description: 'Crispy vegetable fritters' },
        { name: 'Edamame', price: '$6', description: 'Spiced soybeans with sea salt' },
        { name: 'Masala Papad', price: '$5', description: 'Spiced lentil crackers' },
        { name: 'Aloo Tikki Chaat', price: '$5', description: 'Spiced potato patties' },
        { name: 'Stir Fried Pork Belly', price: '$6', description: 'Chili garlic pork belly' },
    ];

    return (
        <section className="mt-3 mx-auto bg-gray-50 p-8 shadow-xl font-poppins scroll-mt-[100px]" id='happy-hour' itemScope itemType="https://schema.org/MenuSection">
            <meta itemProp="name" content="Happy Hour Special" />
            <div className="container mx-auto text-center mb-10">
                <Heading>Happy Hour Special</Heading>
                <Subheading className={"mt-1"}>🕒 Mon-Fri • 5PM-7PM</Subheading>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                    onClick={() => setActiveTab('drinks')}
                    className={`px-8 py-3 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 ${activeTab === 'drinks'
                        ? 'bg-amber-500 text-gray-900 shadow-lg shadow-amber-500/30'
                        : 'bg-gray-500 text-white hover:bg-gray-700 hover:-translate-y-1'
                        }`}
                >
                    🍹 Craft Drinks
                </button>
                <button
                    onClick={() => setActiveTab('snacks')}
                    className={`px-8 py-3 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 ${activeTab === 'snacks'
                        ? 'bg-amber-500 text-gray-900 shadow-lg shadow-amber-500/30'
                        : 'bg-gray-500 text-white hover:bg-gray-700 hover:-translate-y-1'
                        }`}
                >
                    🍢 Irresistible Bites
                </button>
            </div>

            <div className="max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {(activeTab === 'drinks' ? drinks : snacks).map((item, index) => (
                    <div
                        key={index}
                        className="group bg-gradient-to-r from-gray-100 to-gray-200 text-white p-6 rounded-xl transition-all duration-300 hover:border-2 hover:border-amber-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-amber-500 text-xl font-semibold">{item.name}</h3>
                            <span className="bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full">
                                {item.price}
                            </span>
                        </div>
                        <p className="text-purple-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>

            <p className="text-center text-gray mt-12 text-lg italic py-6 border-t border-amber-500/20">
                Stop by and treat yourself to refreshing drinks and irresistible happy hour bites!
            </p>
        </section>
    );
};

export default HappyHourMenu;