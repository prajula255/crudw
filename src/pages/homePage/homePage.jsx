import React from 'react';
import './homePage.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function HomePage() {
  return (
    <>
      <div className="home-container">
        {/* <h1>hii</h1>  */}
        <Card className="home-card">
          <Card.Img variant="top" src="/public/Swift.jpg" alt="Card image" />
          <Card.Body>
            <Card.Title><h2>Maruti Suzuki Swift(2023)</h2></Card.Title>

            <Card.Title>Description</Card.Title>
            <Card.Text>
              *SWIFT ZXI*
              *2021 MODEL*
              *KM 60000*
              *SERVICE DONE*
              *SINGLE OWNER*
              *4 NEW TYRES*
              *NEW INSURANCE*
              *INSURANCE UP TO*
              *06 - 09 - 2025*
              *COMPANY SERVICE*
              *NO ACCIDENT*
              *NO REPLACEMENT*
              ADDITIONAL VEHICLE INFORMATION:
              Accidental: No
              Service History: Available
            </Card.Text>
            <Button variant="secondary">Chat with seller</Button>

          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default HomePage;