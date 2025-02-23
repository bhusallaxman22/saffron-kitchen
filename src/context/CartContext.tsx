import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image_url: string;
    options?: Record<string, any>; // Selected customization options
}

interface CartContextProps {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (itemId: string, options?: Record<string, any>) => void;
    updateQuantity: (itemId: string, quantity: number, options?: Record<string, any>) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};

// Helper to compare two options objects.
const areOptionsEqual = (
    options1?: Record<string, any>,
    options2?: Record<string, any>
) => {
    return JSON.stringify(options1) === JSON.stringify(options2);
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (item: CartItem) => {
        setItems((prev) => {
            // If an item with the same id and options already exists, update quantity.
            const existing = prev.find(
                (i) => i.id === item.id && areOptionsEqual(i.options, item.options)
            );
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id && areOptionsEqual(i.options, item.options)
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }
            return [...prev, item];
        });
    };

    const removeItem = (itemId: string, options?: Record<string, any>) => {
        setItems((prev) =>
            prev.filter(
                (i) => !(i.id === itemId && areOptionsEqual(i.options, options))
            )
        );
    };

    const updateQuantity = (
        itemId: string,
        quantity: number,
        options?: Record<string, any>
    ) => {
        setItems((prev) =>
            prev.map((i) =>
                i.id === itemId && areOptionsEqual(i.options, options)
                    ? { ...i, quantity }
                    : i
            )
        );
    };

    const clearCart = () => setItems([]);

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, updateQuantity, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
