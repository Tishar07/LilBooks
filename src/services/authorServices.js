import api from "@/api/axios";

export const getAuthors = async ()=>{
    const res = await api.get("Author/GetAllAuthor");
    console.log(res);
    return res.data;
};