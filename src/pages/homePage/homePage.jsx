
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homePage.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavEx from '../../components/navbar';
import FooterEx from '../../components/footer';

function HomePage() {
  const [isFeatured, setIsFeatured] = useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
      if (!location.state) {
          navigate('/');
      }
  }, [location.state, navigate]);
  
  // Function to handle card click
  const handleCardClick = () => {
    navigate('/product-details', {
      state: {
        id: 1,
        name: 'Maruti Suzuki Swift',
        price: '₹ 4,50,000',
        year: '2020',
        kilometers: '100,132 km',
        location: 'Kannur',
        images: ['/Swift.jpg', '/sw.jpg', '/sw3.jpg', '/sw4.jpeg'], 
        description: 'Well-maintained Maruti Suzuki Swift with excellent mileage and good condition. Color red with remote controlled lock system. No accidental claims.',
      },
    });
  };


  return (
    <>
      <NavEx />
      {isFeatured ? (
        <div className="home-featured ">
          <Card className="home-cardfe" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <div className="featured-container position-relative">
              <Card.Img
                variant="top"
                src="/public/Swift.jpg"
                alt="Card image"
                className="p-2 position-absolute"
              />
              <div
                className="position-absolute bg-warning rounded-1 ps-1 pe-1"
                style={{ left: '5%', bottom: '1%' }}
              >
                Featured
              </div>
            </div>
            <div className="ps-2 bg-warning">
              <Card.Body className="bg-white">
                <Card.Text>
                  <h5>₹ 4,50,000</h5>
                  2020- 100132km
                  <h5>Maruti Suzuki Swift</h5>
                  Kannur
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
      ) : (
        <div className="home-container">
          <Card className="home-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <Card.Img variant="top" src="/public/Swift.jpg" alt="Card image" />
            <Card.Body>
              <Card.Text>
                <h5>₹ 4,50,000</h5>
                2020- 100132km
                <h5>Maruti Suzuki Swift</h5>
              </Card.Text>
              <Button variant="secondary">Chat with seller</Button>
            </Card.Body>
          </Card>
        </div>
      )}
      <FooterEx />
    </>
  );
}

export default HomePage;
