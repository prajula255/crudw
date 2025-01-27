import React, { useState } from 'react';
import './homePage.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavEx from '../../components/navbar';
import FooterEx from '../../components/footer';
function HomePage() {
  const [isFeatured, setIsFeatured] = useState(true)

  return (
    <>
      <NavEx />
      {
        isFeatured ?

          <div className="home-featured ">
            <Card className="home-cardfe" >
              <div className='featured-container position-relative' >
                <Card.Img variant="top" src="/public/Swift.jpg" alt="Card image" className='p-2 position-absolute' />
                <div className='position-absolute bg-warning rounded-1 ps-1 pe-1' style={{ left: "5%", bottom: "1%" }} >Featured</div>
              </div>
              <div className='ps-2 bg-warning'>
                <Card.Body className='bg-white'>
                  {/* <Card.Title><h2>Maruti Suzuki Swift(2023)</h2></Card.Title> */}
                  <Card.Text>
                    <h5>₹ 4,50,000</h5>
                    2020- 100132km
                    <h5>Maruti Suzuki Swift</h5>
                    Kannur

                  </Card.Text>
                  {/* <Button variant="secondary">Chat with seller</Button> */}

                </Card.Body>
              </div>
            </Card>
          </div>
          :
          <div className="home-container">
            <Card className="home-card" >
              <Card.Img variant="top" src="/public/Swift.jpg" alt="Card image" />
              <Card.Body>
                {/* <Card.Title><h2>Maruti Suzuki Swift(2023)</h2></Card.Title> */}

                <Card.Text>
                  <h5>₹ 4,50,000</h5>
                  2020- 100132km
                  <h5>Maruti Suzuki Swift</h5>
                </Card.Text>
                <Button variant="secondary">Chat with seller</Button>

              </Card.Body>
            </Card>
          </div>
      }
      <FooterEx />
    </>
  );
}

export default HomePage;