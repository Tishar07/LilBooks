import { Accordion, Container } from "react-bootstrap";
import "@/style/footer.css"

function FAQComponent() {
  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <h2>Frequently Asked Questions</h2>
        <p className="text-muted">
          Find answers to the most common questions about our eBook store.
        </p>
      </div>

      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            How do I purchase an eBook?
          </Accordion.Header>
          <Accordion.Body>
            Browse our collection, select the eBook you want, add it to your
            cart, and proceed to checkout. Once payment is confirmed, the eBook
            will be available for download in your account.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What file formats are available?
          </Accordion.Header>
          <Accordion.Body>
            Most of our eBooks are available in PDF, EPUB, and MOBI formats,
            depending on the publisher.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Can I read my eBooks on any device?
          </Accordion.Header>
          <Accordion.Body>
            Yes. Our eBooks are compatible with most smartphones, tablets,
            laptops, desktops, and popular eReaders that support the provided
            file formats.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Will I receive my eBook immediately?
          </Accordion.Header>
          <Accordion.Body>
            Yes. After a successful payment, your download link becomes
            available instantly in your account and is also sent to your email.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Can I download my eBook more than once?
          </Accordion.Header>
          <Accordion.Body>
            Yes. Purchased eBooks remain in your account, allowing you to
            download them again whenever needed, subject to our download policy.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            What payment methods do you accept?
          </Accordion.Header>
          <Accordion.Body>
            We accept major credit/debit cards and other secure online payment
            methods available during checkout.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Can I get a refund?
          </Accordion.Header>
          <Accordion.Body>
            Due to the nature of digital products, eBook purchases are generally
            non-refundable unless the file is defective or there is a technical
            issue preventing access.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            How can I contact customer support?
          </Accordion.Header>
          <Accordion.Body>
            You can reach our support team through the Contact Us page or by
            sending us an email. We're happy to help with any questions or
            technical issues.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default FAQComponent;