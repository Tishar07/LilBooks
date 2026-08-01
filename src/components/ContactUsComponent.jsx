import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import "@/style/ContactUs.css"

function ContactUs() {
  return (
    <div className="container py-5">

      <div className="contact-card shadow-lg rounded-4 p-4 p-md-5">

        <div className="text-center mb-4">
          <h2 className="fw-bold">
            Contact Us
          </h2>

          <p className="text-muted">
            Have a question or need help? Send us a message and we'll get back to you.
          </p>
        </div>


        <Form>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">
              Email Address
            </Form.Label>

            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="modern-input"
            />

          </Form.Group>



          <Form.Group className="mb-4">

            <Form.Label className="fw-semibold">
              Message
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Write your message..."
              className="modern-input"
            />

          </Form.Group>



          <div className="text-center">
            <Button variant='success'>Send Message</Button>
          </div>


        </Form>


      </div>

    </div>
  );
}
export default ContactUs;