import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function MealPlanPage() {
  return (
    <Container className='p-2 p-md-4 p-lg-5 d-grid gap-4'>
      <Row>
        <Col>
          <h1 className='text-center'>Meal Plan</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>
            At Joyfulness, everyday we provide fresh hot lunch and nutritious
            snacks. Meals are planed with Canada Food Guide in mind. Kids have
            opportunities to taste lots of delicious Chinese food. Here are some
            examples of meal plan. Milk, water and fruit is offered with each
            meal. Meals will not repeat within three weeks.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>Example: Week 1</p>
          <table className='table table-striped text-center bg-light w-auto rounded-3 overflow-hiden'>
            <tbody>
              <tr>
                <td> </td>
                <td>
                  <p>
                    <strong>Morning snack</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Lunch</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Afternoon snack</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Monday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>banana muffin</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>meat &amp; egg custard (肉沫蛋羹), veggie, rice</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>rice cake</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Tuesday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>red bean bun</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>rice with chicken and potato (土豆鸡丁饭)</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>cereals, yogurt</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Wednesday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>cereals, yogurt</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>tomato &amp; beef pasta (西红柿牛肉意面)</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>cupcake</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Thursday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>scallion rolls</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>steamed basa (清蒸龙利鱼柳), rice, veggie</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>croissants, yogurt</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Friday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>boiled egg</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>stewed pork &amp; cabbage (白菜炖肉), rice</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>muffin</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>Example: Week 2</p>
          <table className='table table-striped text-center bg-light w-auto rounded-3 overflow-hidden'>
            <tbody>
              <tr>
                <td> </td>
                <td>
                  <p>
                    <strong>Morning snack</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Lunch</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Afternoon snack</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Monday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>scallion rolls</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>fried rice with shrimp &amp; egg (虾仁蛋炒饭)</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>carrot cupcake</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Tuesday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>veggie &amp; meat bun</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>pork &amp; veggie dumpling</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>veggie cracker, yogurt</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Wednesday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>cheerios</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>
                      chicken noodle with carrot &amp; spinach
                      (胡萝卜菠菜鸡丝面)
                    </span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>bagel</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Thursday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>pumpkin pie</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>macaroni pizza, veggie salad</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>pita bread, yogurt</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Friday</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <span>blueberry cupcake</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>tofu shrimp soup(虾仁豆腐羹), rice</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>raspberry</span>
                  </p>
                  <p>
                    <span>cupcake</span>
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
