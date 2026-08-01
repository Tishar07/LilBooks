import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/services/bookService";
import { Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function ListBookCards(){

    useEffect(()=>{
        AOS.init({
            duration:500,
            once:true,
        });
    },[]);

    const {
        data : Listbook = [],
        isLoading,
        isError,
        error,
    } = useQuery ({
        queryKey:["Listbook"],
        queryFn: getBooks,
    });
    if (isLoading){
        return(
            <p>Loading...</p>
        )
    }
    if(isError){
        return(
            <p>{error.message}</p>
        )
    }

    return(
        <div className="container d-flex justify-content-center align-items-start flex-wrap gap-4">
            <div className="row">
                {Listbook.map((book)=>(
                    <div className="col-12 col-lg-3 col-sm-6 my-3" data-aos="fade-left">
                        <a href={book.bookId} className="text-decoration-none">
                            <Card style={{ width: '18rem' }}  className="h-100" >
                                <Card.Img variant="top" src={book.coverImage}/>
                                <Card.Body>
                                    <Card.Title className="text-bold">{book.title}</Card.Title>
                                    <Card.Text>{book.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}