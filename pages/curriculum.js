import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Image from "next/image"

export default function curriculum() {
  return (
    <Container className='p-2 p-md-4 p-lg-5 d-grid gap-4'>
      <Row>
        <Col>
          <h1 className='text-center'>Curriculum</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>
            At Joyfulness, we provide educational play-based early learning
            curriculum combined with child-initiated and teacher-led activities,
            delivered in Mandarin and English by two professional educators to
            help children develop social, emotional, physical, cognitive,
            language and literacy skills.
          </p>
          <p>
            Being bilingual or multilingual has numerous advantages for
            children’s early development, future academic and career success.
            Lots of evidences suggest that children pick up languages better at
            an earlier age.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className='float-start me-4 col-12 col-md-6 mb-2'>
            <img
              className='rounded-3'
              src='/images/chinese.png'
              alt='Second slide'
              layout='responsive'
              width='100%'
              // height='240'
            />
          </div>
          <h4 className='mb-3 fst-italic'>Why Chinese?</h4>
          <p>
            Chinese is a rewarding language to learn. As we known, China is one
            of the world’s oldest and richest continuous cultures, over 5000
            years old. Now China is the second largest economy in the world and
            is one of the largest trading partners of Canada.
          </p>

          <p>
            Chinese is also a language that is particularly beneficial to
            children’s brain development, which is fun and easy for young
            children to learn. Chinese is a tonal language and Chinese
            characters look like pictures, which are represented by graphic
            texts, simultaneously conduct three types of information: sound,
            shape, and meaning, and stimulate the left and right hemispheres of
            the brain at the same time when children learning. As a result,
            young children gain active development of cognitive, logical and
            creative thinking skills.
          </p>
        </Col>
      </Row>
      <div className='m-auto col-12 col-md-6 mb-3'>
        <img
          className='rounded-3 text-center'
          src='/images/kids.jpg'
          alt='Second slide'
          layout='responsive'
          width='100%'
          // height='180'
        />
      </div>
      <Row>
        <Col>
          <h4 className='mb-3 fst-italic'>Curriculum Highlights</h4>
          <ul>
            <li>
              “Easier Daycare” (“入园适应”课程)
              <p>
                In the first month after children enter daycare, we will pay
                special attention to their emotion, diet, self-help skills,
                sleep and other aspects, through music, stories, games and other
                forms help children alleviate their anxiety and establish a
                sense of security, so that they can adapt to daycare easily and
                quickly.
              </p>
            </li>
            <li>
              Language&Literacy（语言与识字）
              <p>
                Joyfulness is a daycare of readers! Everyday children are
                exposed to quality, developmentally appropriate reading
                materials, such as English and Chinese children books, and they
                have reading routine led by our educators. Listening, reading,
                writing, and literacy skills will be taught in the context of
                everyday activities and interactions.
              </p>
            </li>
            <li>
              Music&Dance（音乐律动）
              <p>
                At Joyfulness, children are happy singers! we set up a
                Music&Dance area to children and give them the opportunity to
                listen to music, play instruments, experiment with sound and
                move their bodies. Through carefully designed activities by our
                educators, children learn to sing in Chinese and English and
                dance, which can help them develop gross and fine motor skills,
                improve their balance and coordination, language and
                social/emotional skills.
              </p>
            </li>
            <li>
              Math&Science（数学&科学）
              <p>
                Children are naturally curious. They develop mathematical
                concepts and early scientific thinking through play. At
                Joyfulness, we provide a variety of materials for children to
                explore and discover, raise questions and problems as they play,
                and encourage them to observe, predict, describe, and theorize
                about what they’re doing. Every Friday is children&lsquo;s
                discovery day. Under the guidance of educators, they walk across
                the community, into parks and woods, enjoyed playing and
                exploring.
              </p>
            </li>
            <li>
              Creative Arts（创意美术）
              <p>
                At Joyfulness, every child is an artist! We expose children to a
                variety of art materials and carefully plan activities that
                support children’s creative thinking . By stressing the process
                we encourage children to use their imaginations to make choices
                and allow the children the freedom to try things out on their
                own.
              </p>
            </li>
            <li>
              Social&Emotional（情商教育）
              <p>
                Through stories, games, role-playing and other interactive
                experience, educators help children understand and manage their
                emotions; learn how to communicate with friends, how to face
                conflicts, and learn and grow in conflicts.
              </p>
            </li>
            <li>
              Health Education（健康教育）
              <p>
                Through interactive games and activities children learn and
                practise healthy eating, dental hygiene, hand-washing, etc, and
                develop the good habit of hygiene since early childhood.
              </p>
            </li>
            <li>
              “Ready for Kindergarten”（幼小衔接）
              <p>
                From June to August, Joyfulness launch this course for children
                who are moving to kindergarten in September. Through stories,
                pictures, games and other forms, our educators will introduce
                the environment and experience of kindergarten to children, help
                them familiarize with kindergarten schedule and routine in
                advance, strengthen their self-help skills and improve their
                independence to get ready for kindergarten. Meanwhile, some
                kindergarten curriculum contents will be introduced to children.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
