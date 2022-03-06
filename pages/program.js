import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"
// import Image from "next/image"
import Link from "next/link"

export default function ProgramPage() {
  return (
    <Container className='p-2 p-md-4 p-lg-5 d-grid gap-4'>
      <Row>
        <Col>
          <h1 className='text-center'>Program</h1>
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className='float-end ms-4 col-12 col-md-6 mb-3'>
            <img
              className='rounded-3'
              src='/images/daycare.jpg'
              alt='Second slide'
              layout='responsive'
              width='100%'
              // height='240'
            />
          </div>
          <h4>Full Day Home Daycare</h4>
          <p className='text-nwrap'>
            Welcome to Joyfulness Home Daycare. Our daycare is located in a
            quiet and safe street at Kanata Lakes, which is 5-minute drive from
            Kanata north high-tech industrial park. Daycare is open from 8:00 am
            to 5:00 pm, and currently we can care for up to five children under
            the age of 5.
          </p>
          <p>
            Joyfulness are so proud that we have a very bright and spacious
            activity room and a indoor gym for children. We have two experienced
            Chinese and English teachers, including one Registered Early
            Childhood Educators(RECE) and one educator assistant(ECA). Both the
            space per child and the ratio of teachers to children exceed the
            regulation of Ontario Child Care and Early Years Act(CCEYA).
          </p>

          <Link href='/contact'>
            <a>
              <Alert
                variant='warning'
                className='my-3 fst-italic border-0 text-decoration-underline text-center'>
                Registration is opening. Please <strong>contact us</strong>.
              </Alert>
            </a>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>1Vs1 Private Chinese Lesson</h4>
          <p className='fst-italic'>
            Professional teacher, flexible learning time, in person or virtual
            model.
          </p>
          <p className='fst-italic'>Currently registration is closed.</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>Small Group Chinese Lesson</h4>
          <p className='fst-italic'>Currently registration is closed.</p>
        </Col>
      </Row>
    </Container>
  )
}
