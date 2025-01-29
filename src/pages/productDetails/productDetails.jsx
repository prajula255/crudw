
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
                        <h2>Maruti Suzuki Swift(2020)</h2>
                        <div className='d-flex flex-row justify-content-between'>
                            <h6><i class="fa-solid fa-gas-pump" />Petrol</h6>
                            <h6><i class="fa-solid fa-gauge"></i>100132km</h6>
                            <h6><i class="fa-solid fa-sitemap"></i>Manual</h6>
                        </div>
                    </div>
                </div>

                {/* price section */}
                <div className='price-container'>
                    <div className='price-card'>
                        <h3><p className="product-price">{product.price}</p></h3>
                        <button className="offer-button">Make Offers</button>
                    </div>
                </div>

            </div>

            {/* overview section */}
            <div className='overview-row'>
                <div className='product-overview'>
                    <div className='product-overview-card'>
                        <h3>Overview</h3>
                        <div className='d-flex flex-row justify-content-between'>
                            <h6><i class="fa-solid fa-user" />1st owner</h6>
                            <h6><i class="fa-solid fa-location-dot" />Location</h6>
                            <h6><i class="fa-solid fa-calendar-days" />Posting Date</h6>
                        </div>
                    </div>
                </div>

                <div className='seller-card'>
                    <div className='seller-details'><h3>Royal Drive Kochi</h3>
                        <button className="contact-seller-button"><h6>Chat with Seller</h6></button>

                    </div>
                </div>
            </div>



            {/* Product Details Section */}
            <div className="product-details-container">
                <div className="product-details-card">
                    <div className="product-details-info">
                        <h3>Description</h3>
                        <p>Variant: VXI AMT<br></br>
                            ADDITIONAL VEHICLE INFORMATION:<br></br>
                            Accidental: No<br></br>
                            Adjustable External Mirror: Power<br></br>
                            Adjustable Steering: Yes<br></br>
                            Air Conditioning: Automatic Climate Control<br></br>
                            Number of Airbags: 2 airbags<br></br>
                            Aux Compatibility: Yes<br></br>
                            Battery Condition: New<br></br>
                            Color: Red<br></br>
                            Engine Capacity (CC): 1197<br></br>
                            Insurance Type: Comprehensive<br></br>
                            Lock System: Remote Controlled Central<br></br>
                            Registration Place: KL<br></br>
                        </p>

                    </div>
                </div>
            </div>




            <FooterEx />
        </>
    );
}

export default ProductDetails;
