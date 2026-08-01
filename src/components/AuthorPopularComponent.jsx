import Wallace from "@/assets/EdgarWallace.jpeg";
import { Button } from "react-bootstrap";
import "@/style/authorBanner.css"

export default function AuthorPopular() {
    return (
        <section className="container my-5">
            <div className="container my-5">
                <div className="row align-items-center author-banner">

                    <div className="col-lg-7">
                        <span className="badge bg-light text-success mb-3">
                            Featured Author
                        </span>

                        <h1 className="display-4 fw-bold">
                            Edgar Wallace
                        </h1>

                        <p className="lead opacity-75">
                            Discover the legendary master of mystery and crime fiction.
                            Explore gripping stories filled with suspense, unforgettable
                            detectives, and timeless adventures.
                        </p>

                        <button className="btn btn-light text-success">
                            Explore Collection
                        </button>
                    </div>

                    <div className="col-lg-5 text-center mt-4 mt-lg-0">
                        <img
                            src={Wallace}
                            alt="Edgar Wallace"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}