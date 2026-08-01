import { useQuery } from "@tanstack/react-query";
import { getAuthors } from "@/services/authorServices";
import "../style/author.css"

function AuthorCardList() {
    const {
        data: authors = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["authors"],
        queryFn: getAuthors,
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>{error.message}</p>;

    return (
        <div className="d-flex justify-content-center align-items-center flex-row gap-3 flex-wrap m-1 ">
            {authors.map((author)=>(
                <a href="" className="text-decoration-none">
                    <div className="card-color text-start text-white p-2 card-author-size">
                        <p>{author.firstName} {author.lastName}</p>
                    </div>
                </a>
             ))}
        </div>
    );
}

export default AuthorCardList;