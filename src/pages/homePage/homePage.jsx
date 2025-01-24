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
          <Card.Img variant="top" src="path/to/your/image.jpg" alt="Card image" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              This is a simple card component that can be used to display content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>

          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default HomePage;