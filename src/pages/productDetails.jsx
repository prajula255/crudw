
import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterEx from '../components/footer';
import NavEx from '../components/navbar';
import { Carousel } from 'react-bootstrap';
import './productDetails.css';

function ProductDetails() {
    const location = useLocation();

    const product = location.state || {
        id: 1,
        name: 'Maruti Suzuki Swift',
        price: '₹ 4,50,000',
        year: '2020',
        kilometers: '100,132 km',
        location: 'Kannur',
        images: ['/Swift.jpg', '/sw.jpg', '/sw3.jpg', '/sw4.jpeg'],
        description: 'Well-maintained Maruti Suzuki Swift with excellent mileage and good condition. Color red with remote controlled lock system. No accidental claims.',
    };

    return (
        <>
            <NavEx />

            {/* Carousel Section */}
            <div className="carousel-container">
                <Carousel>
                    {product.images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt={`Slide ${index + 1}`}
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            {/* Product Details Section */}
            <div className="product-details-container">
                <div className="product-details-card">
                    <div className="product-details-info">
                        <h2>{product.name}</h2>
                        <p className="product-price">{product.price}</p>
                        <p>
                            <strong>Year:</strong> {product.year}
                        </p>
                        <p>
                            <strong>Kilometers:</strong> {product.kilometers}
                        </p>
                        <p>
                            <strong>Location:</strong> {product.location}
                        </p>
                        <p className="product-description">{product.description}</p>
                        <button className="contact-seller-button">Chat with Seller</button>
                    </div>
                </div>
            </div>

            <FooterEx />
        </>
    );
}

export default ProductDetails;
