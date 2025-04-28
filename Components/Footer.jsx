import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="text-center text-md-start mb-4">
          <Col md={6} className="mb-3">
            <h5>
              {" "}
              <strong>
                For better experience, download the Swiggy app now{" "}
              </strong>
            </h5>
          </Col>
          <Col md={6} className="text-md-end">
            {/* Google Play */}
            <a href="#" className="me-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                style={{ width: "150px" }}
              />
            </a>
            {/* App Store */}
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                style={{ width: "150px" }}
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={2} className="mb-4">
            <img
              src="../images/swiggy-footer.png"
              alt="Swiggy Logo"
              className="w-50"
            />
            <p>© 2025 Swiggy Limited</p>
          </Col>
          <Col md={2} className="mb-4">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Swiggy Genie</li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h6>Contact us</h6>
            <ul className="list-unstyled">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h6>Available in:</h6>
            <ul className="list-unstyled">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <Col md={8}>
              <select className="form-select">
                <option>679 cities</option>
              </select>
            </Col>
          </Col>
          <Col md={2} className="mb-4">
            <h6>Legal</h6>
            <ul className="list-unstyled">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h6>Life at Swiggy</h6>
            <ul className="list-unstyled">
              <li>Explore with Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-center mt-3">
          <Col md={4} className="text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3">
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
