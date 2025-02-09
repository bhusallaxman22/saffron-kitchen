import React from 'react';
import { GiPlantSeed } from 'react-icons/gi';
import { FaLeaf, FaPepperHot } from 'react-icons/fa';

export const VeganIcon = () => (
    <GiPlantSeed className="w-5 h-5 text-green-500" title="Vegan" />
);

export const VegetarianIcon = () => (
    <FaLeaf className="w-5 h-5 text-green-700" title="Vegetarian" />
);

export const SpicyIcon = () => (
    <FaPepperHot className="w-5 h-5 text-red-500" title="Spicy" />
);
