import api from "@/api/axios";

export const getBooks = async () =>{
    const res = await api.get("/Book/GetAllBooks")
    return res.data;
};

export const getBookById= async (id)=>{
    const res = await api.post("/Book/GetBookById",{id:id});
    return res.data;
};

export const trendingBooks = async ()=>{
    const res = await api.get("/Book/TrendingBooks");
    return res.data;
};