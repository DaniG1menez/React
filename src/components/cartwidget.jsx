import React from 'react';

const CartWidget = () => {
    return (
        <div id="carritoNav">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span id="cart-count">3</span> {/* Número hardcodeado */}
        </div>
    );
};

export default CartWidget;