import React from 'react';
import brandLogo from "../../assets/logo.jpg"

export default function BrandLogo() {
    return (
        // <div className="flex flex-col">
        //     <span className="text-2xl font-eyescript text-black font-bold tracking-wider">
        //         Sa<span style={{ color: "#CC963C" }}>ff</span>ron
        //     </span>
        //     <span className="text-sm text-gray-700">Kitchen & Bar</span>
        // </div>
        <img src={brandLogo} alt="Saffron Kitchen & Bar" className="h-16" />
    );
}
