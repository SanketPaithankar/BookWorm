import React from 'react';
import { BsCartPlus } from "react-icons/bs";

const ProductGrid = ({ filteredProducts, addToCart }) => {
    return (
        <div className="grid-container">
            {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.imgSrc} alt={product.productName} onError={(e) => e.target.src='default-image.jpg'} />
                    <h2>{product.productName}</h2>
                    <p className="description">{product.productDescriptionShort}</p>
                    <p className="author">By {product.productAuthor}</p>
                    <p className="price">Price: ${product.productBasePrice}</p>
                    <button className="cart-button" onClick={() => addToCart(product)}>
                        <BsCartPlus /> Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
