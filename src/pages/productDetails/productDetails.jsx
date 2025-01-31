
import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterEx from '../../components/footer';
import NavEx from '../../components/navbar';
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
            <div className='aut'>
                <div className='d-flex justify-content-center'>
                    <div className='image-card'>
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
                    </div>

                </div>

                {/* naming section */}
                <div className='product-row'>
                    <div className='product-name'>
                        <div className='product-namecard'>
                            <h2 className='border-bottom border-2'>Maruti Suzuki Swift(2020)</h2>
                            <div className='d-flex flex-row justify-content-between'>
                                <h6><i class="fa-solid fa-gas-pump" />Petrol</h6>
                                <h6><i class="fa-solid fa-gauge"></i>100132km</h6>
                                <h6><i class="fa-solid fa-sitemap"></i>Manual</h6>
                            </div>
                        </div>
                    </div>

                    <div className='price-container'>
                        <div className='price-card'>
                            <h3><p className="product-price">{product.price}</p></h3>
                            <button className="offer-button">Make Offers</button>
                        </div>
                    </div>
                </div>

                {/* overview section */}
                <div className='cards-container'>
                    <div className='product-overview'>
                        <h2 className='border-bottom border-2' >Overview</h2>
                        <div className='d-flex flex-row justify-content-between'>
                            <h6><i className="fa-solid fa-user" /> 1st owner</h6>
                            <h6><i className="fa-solid fa-location-dot" /> Location</h6>
                            <h6><i className="fa-solid fa-calendar-days" /> Posting Date</h6>
                        </div>
                    </div>

                    <div className='seller-card'>
                        <div className='seller-details'>
                            <h3>Royal Drive Kochi</h3>
                            <button className="contact-seller-button">
                                <h6>Chat with Seller</h6>
                            </button>
                            <i class="fa-solid fa-phone"></i>
                        </div>
                    </div>
                </div>

                {/* description section */}
                <div className='productdesc-row'>
                    <div className="product-details-card">
                        <div className="product-details-info">
                            <h2 className='border-bottom border-2'>Description</h2>
                            <p>
                                Variant: VXI AMT<br />
                                ADDITIONAL VEHICLE INFORMATION:<br />
                                Accidental: No<br />
                                Adjustable External Mirror: Power<br />
                                Adjustable Steering: Yes<br />
                                Air Conditioning: Automatic Climate Control<br />
                                Number of Airbags: 2 Airbags<br />
                                Aux Compatibility: Yes<br />
                                Battery Condition: New<br />
                                Color: Red<br />
                                Engine Capacity (CC): 1197<br />
                                Insurance Type: Comprehensive<br />
                                Lock System:Remote Controlled Central<br />
                                Registration Place: KL<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterEx />
        </>
    );
}

export default ProductDetails;
