import { Container, Row, Col } from "react-bootstrap";

function FooterComponent() {
  return (
    <footer className="footer py-5 mt-5">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h4 className="fw-bold text-white">LilBooks</h4>
            <p className="text-light">
              Your one-stop destination for thousands of eBooks across every
              genre. Read anytime, anywhere.
            </p>
          </Col>

          <Col md={4}>
            <h5 className="text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/books" className="footer-link">
                  Books
                </a>
              </li>
              <li>
                <a href="/categories" className="footer-link">
                  Categories
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="text-white">Contact</h5>
            <p className="text-light mb-1">
              Email: support@lilbooks.com
            </p>
            <p className="text-light mb-1">
              Phone: +230 1234 5678
            </p>
            <p className="text-light">
              Mauritius
            </p>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        <div className="text-center text-light">
          © {new Date().getFullYear()} LilBooks. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default FooterComponent;