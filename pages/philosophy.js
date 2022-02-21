import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function PhilosophyPage() {
  return (
    <Container className='p-2 p-md-4 p-lg-5 d-grid gap-4'>
      <Row>
        <Col>
          <h1 className='text-center'>Philosophy</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className='mb-3'>Daycare Philosophy Statement</h4>
          <p>
            We strive to support families by providing a safe, healthy, joyful
            and empowering program for young children’s development, which is
            consistent with How Does Learning Happen? Ontario’s Pedagogy for the
            Early Years.
          </p>
          <p>
            We recognize that every child is unique and born to learn. We value
            and develop each child&lsquo;s strengths, interests, skills,
            abilities and knowledge to extend their learning. We believe:
          </p>
          <ul>
            <li>
              Every child has a sense of belonging when he or she is connected
              to others and contributes to their world.
            </li>
            <li>
              Every child is developing a sense of self, health, and well-being.
            </li>
            <li>
              Every child is an active and engaged learner who explores the
              world with body, mind, and senses.
            </li>
            <li>
              Every child is a capable communicator who expresses himself or
              herself in many ways.
            </li>
          </ul>
          <p>
            We recognize that early childhood educators play an important role
            in their commitment to the implementation of high-quality child care
            program. Early childhood educators who interact with children in a
            responsive, warm and caring manner can create secure and engaging
            environments and experiences to foster children’s learning and
            development.
          </p>
          <p>
            We value parents’ engagement and feedback. Parents are experts of
            their own children and have most powerful influence on children’s
            learning and development. We strive to build up a strong
            relationships with families to encourage a high degree of
            involvement and participation.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
