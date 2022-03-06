import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState, useEffect, useRef } from "react"

export default function ContactPage() {
  // const [loading, setLoading] = useState(true)

  // const mapRef = useRef(null)

  // useEffect(() => {
  //   if (mapRef.current) {
  //     setLoading(false)
  //   }
  // }, [])

  // if ($iframe.current.onload === true) {
  //   console.log("iframe loaded")
  //   setLoading(false)
  //   console.log({ loading })
  // }

  return (
    <Container className='p-2 p-md-4 p-lg-5 d-grid gap-4'>
      <Row>
        <Col>
          <h1 className='text-center'>Contact</h1>
        </Col>
      </Row>

      {/* {loading && (
        <button className='btn btn-primary' type='button' disabled>
          <span
            className='spinner-border spinner-border-sm'
            role='status'
            aria-hidden='true'></span>
          Loading...
        </button>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.6665095321855!2d-75.93106094826544!3d45.315161851293205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2006a8079c85d%3A0x5fcbb28c0236398f!2sCambior%20Crescent%2C%20Kanata%2C%20ON%20K2T%201J3!5e0!3m2!1sen!2sca!4v1646590732902!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      )} */}

      <Row>
        <Col className='text-center'>
          <iframe
            // ref={mapRef}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.6665095321855!2d-75.93106094826544!3d45.315161851293205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2006a8079c85d%3A0x5fcbb28c0236398f!2sCambior%20Crescent%2C%20Kanata%2C%20ON%20K2T%201J3!5e0!3m2!1sen!2sca!4v1646590732902!5m2!1sen!2sca'
            width='100%'
            height='400'
            style={{ border: 0 }}
            placeholder='blur'
            allowFullScreen={false}
            loading='eager'></iframe>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <p>Address: Cambior Crescent, Kanata, Ontario, K2T1J3</p>
          <p>Email: info@joylearning.ca</p>
        </Col>
      </Row>
    </Container>
  )
}
