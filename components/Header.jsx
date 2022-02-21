import { useState } from "react"
import Link from "next/link"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()
  const Tab = router.pathname
  // console.log({ Tab })
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark' className='pt-4'>
      <Container>
        <Navbar.Brand href='#home'>
          {/* <Image
            src='/android-chrome-192x192.png'
            width={100}
            height={100}
            layout='fixed'
            alt='logo'
          /> */}
          <h3>
            J<strong className='text-warning'>☻</strong>Y LEARNING
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* <Nav className='me-auto'>
              <Nav.Link href='#features'>Features</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
          <Nav className='ms-auto'>
            <Link href='/' passHref>
              <Nav.Link as='a' className={Tab === "/" && "active"} href='/'>
                Home
              </Nav.Link>
            </Link>

            <Link href='/program' passHref>
              <Nav.Link
                as='a'
                className={Tab === "/program" && "active"}
                href='/program'>
                Program
              </Nav.Link>
            </Link>

            <Link href='/philosophy' passHref>
              <Nav.Link
                as='a'
                href='/philosophy'
                className={Tab === "/philosophy" && "active"}>
                Philosophy
              </Nav.Link>
            </Link>

            <Link href='/curriculum' passHref>
              <Nav.Link
                as='a'
                href='/curriculum'
                className={Tab === "/curriculum" && "active"}>
                Curriculum
              </Nav.Link>
            </Link>

            <Link href='/daily-schedule' passHref>
              <Nav.Link
                as='a'
                href='/daily-schedule'
                className={Tab === "/daily-schedule" && "active"}>
                Daily Schedule
              </Nav.Link>
            </Link>

            <Link href='/meal-plan' passHref>
              <Nav.Link
                as='a'
                href='/meal-plan'
                className={Tab === "/meal-plan" && "active"}>
                Meal Plan
              </Nav.Link>
            </Link>

            <Link href='/contact' passHref>
              <Nav.Link
                as='a'
                href='/contact'
                className={Tab === "/contact" && "active"}>
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
