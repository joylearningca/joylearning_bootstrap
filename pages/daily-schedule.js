import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function DailySchedulePage() {
  return (
    <Container className='p-2 p-md-4 p-lg-5 d-grid gap-4'>
      <Row>
        <Col>
          <h1 className='text-center'>Daily Schedule</h1>
        </Col>
      </Row>

      <Row className='text-center'>
        <Col>
          <p>Joyfulness home daycare daily runs from 8 a.m. to 5 p.m.</p>
          <table className='table table-striped text-center bg-light w-auto rounded-3 m-auto'>
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <span>8:00</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>
                      Daycare Opens. Children Arrival. Parents sign in.
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>8:00-8:30</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Free play</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>8:30-9:00</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Morning snack</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>9:00-9:30</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Morning Circle Time/Group Activity (Chinese)</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>9:30-9:45</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Toilet routine/children dress for outdoors</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>9:45-11:00</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Outdoor play at backyard (weather permitted)</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <p>
                    <span>
                      ＊Friday is “Outdoor Discover Day” in the woods &amp;
                      parks.
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>11:00-11:30</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Transition time/Indoor free play</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>11:30-12:00</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Lunch time</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>12:00-12:15</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Diaper/Toilet routine</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>12:15-2:15pm</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Nap time</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>2:15-2:30pm</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Diaper/Toilet routine</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>2:30-3:00pm</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Afternoon Snack Time</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>3:00-3:20pm</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Afternoon Circle Time/Group Activity (English)</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>3:30-4:15pm</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Outdoor play at backyard</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>4:15-5:00pm</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Indoor free play</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>5:00</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Daycare close</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  )
}
