import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { trendingBooks } from "@/services/bookService";
import { Button } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "@/style/TopSelling.css";




function TopSelling(){

    const   {
        data : TrendingBooks = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey:["TrendingBooks"],
        queryFn: trendingBooks,
    })

    if (isLoading){
        return(
            <>
                <div className="container-fluid d-flex align-items-center gap-4 px-4 mt-4 ">
                    <span><h3>Top Selling Books</h3></span>
                    <Button  variant="outline-dark">Show More</Button>
                </div>            
                <p>Loading...</p>
            
            </>

        )
    }
    if(isError){
        return(
            <>
                <div className="container-fluid d-flex align-items-center gap-4 px-4 mt-4 ">
                    <span><h3>Top Selling Books</h3></span>
                    <Button  variant="outline-dark">Show More</Button>
                </div>        
                <p>{error.message}</p>
            </>
            
        )
    }

    return(
            <>
                <div className="container-fluid d-flex justify-content-between align-items-center px-4 mt-5">
                    <div>
                        <h2 className="fw-bold mb-1">Top Selling Books</h2>
                        <p className="text-muted mb-0">
                            Discover the books everyone is reading
                        </p>
                    </div>

                    <Button 
                        variant="outline-dark" 
                        className="px-4 rounded-pill fw-semibold"
                    >
                        Show More
                    </Button>
                </div>

                <div className="container-fluid px-4 mt-4">

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView="auto"
                        spaceBetween={25}
                        navigation
                        watchOverflow={true}
                        loop={false}
                        className="mySwiper"
                    >

                        {TrendingBooks.map((tBook) => (
                            <SwiperSlide 
                                key={tBook.bookId}
                                style={{width:"230px"}}
                            >

                                <div className="
                                    book-card 
                                    bg-white 
                                    rounded-4 
                                    shadow-sm 
                                    p-3
                                    h-100
                                ">

                                    <div className="position-relative">

                                        <img
                                            src={tBook.coverImage}
                                            alt={tBook.title}
                                            className="card-img rounded-3"
                                        />


                                        <span className="
                                            position-absolute 
                                            top-0 
                                            end-0 
                                            m-2
                                            bg-dark
                                            text-white
                                            px-3
                                            py-1
                                            rounded-pill
                                            small
                                        ">
                                            ${tBook.price}
                                        </span>

                                    </div>


                                    <div className="mt-3">

                                        <h5 className="fw-bold text-truncate">
                                            {tBook.title}
                                        </h5>

                                    </div>

                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
    </>
       
    )
    
}

export default TopSelling;