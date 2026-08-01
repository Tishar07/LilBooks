import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Adventure from "@/assets/categories/Adventure.png"
import Horror from "@/assets/categories/Horror.png"
import Romance from "@/assets/categories/Romance.png"
import Fantasy from "@/assets/categories/Fantasy.png"
import NonFiction from "@/assets/categories/NonFiction.png"
import Technology from "@/assets/categories/Technology.jpg"
import "@/style/categoryCard.css";



export default function CategoryList() {
    return (
        <section className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Discover Categories</h2>
                    <p className="text-muted mb-0">
                        Browse books by your favorite genres.
                    </p>
                </div>

                <Button variant="outline-dark" className="rounded-pill px-4">
                    Show More
                </Button>
            </div>

            <div className="row g-4">

                <div className="col-6 col-md-4 col-lg-2">
                    <Card className="category-card border-0 shadow-sm h-100">
                        <Card.Img variant="top" src={Adventure} className="category-img" />
                        <Card.Body className="text-center">
                            <Card.Title className="fw-semibold">
                                Adventure
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <Card className="category-card border-0 shadow-sm h-100">
                        <Card.Img variant="top" src={Horror} className="category-img" />
                        <Card.Body className="text-center">
                            <Card.Title className="fw-semibold">
                                Horror
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <Card className="category-card border-0 shadow-sm h-100">
                        <Card.Img variant="top" src={Romance} className="category-img" />
                        <Card.Body className="text-center">
                            <Card.Title className="fw-semibold">
                                Romance
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <Card className="category-card border-0 shadow-sm h-100">
                        <Card.Img variant="top" src={Fantasy} className="category-img" />
                        <Card.Body className="text-center">
                            <Card.Title className="fw-semibold">
                                Fantasy
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <Card className="category-card border-0 shadow-sm h-100">
                        <Card.Img variant="top" src={NonFiction} className="category-img" />
                        <Card.Body className="text-center">
                            <Card.Title className="fw-semibold">
                                Non-Fiction
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                    <Card className="category-card border-0 shadow-sm h-100">
                        <Card.Img variant="top" src={Technology} className="category-img" />
                        <Card.Body className="text-center">
                            <Card.Title className="fw-semibold">
                                Technology
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </section>
    );
}