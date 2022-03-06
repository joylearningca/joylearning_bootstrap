import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Button from "react-bootstrap/Button"
// import Image from "next/image"

export default function Home() {
  return (
    <Container className='p-2 p-md-4 p-lg-5'>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100 rounded-3'
                src='/images/slide1.jpg'
                alt='First slide'
                layout='responsive'
                width='100%'
                // height='500'
              />
              <Carousel.Caption>
                <h3>Welcome to Joyfulness Home Daycare at Kanata!</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 rounded-3'
                src='/images/slide2.jpg'
                alt='Second slide'
                layout='responsive'
                width='100%'
                // height='500'
              />

              <Carousel.Caption>
                <h3>High quality child care services for young children.</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100 rounded-3'
                src='/images/slide3.jpg'
                alt='Third slide'
                layout='responsive'
                width='100%'
                // height='500'
              />

              <Carousel.Caption>
                <h3>
                  Learning Chinese in a joyful, caring home environment at early
                  age!
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}
