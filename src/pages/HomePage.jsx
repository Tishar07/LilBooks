import NavbarComponent from "../components/NavbarComponent"
import CarouselComponent from "../components/CarouselComponent"
import FeatureBanner from "@/components/FeatureBannerComponent"
import TopSelling from "../components/TopSelling";
import CategoryList from "@/components/CategoryListComponent";
import AuthorPopular from "@/components/AuthorPopularComponent";
import ContactUs from "@/components/ContactUsComponent";
import FAQComponent from "@/components/FAQComponent";
import FooterComponent from "@/components/FooterComponent";

function HomePage(){
    return(
        <>
            <NavbarComponent/>
            <CarouselComponent/>
            <div className="mt-3"></div>
            <FeatureBanner/>
            <TopSelling/>
            <CategoryList/>
            <AuthorPopular/>
            <ContactUs/> 
            <FAQComponent/>  
            <FooterComponent/>         
        </>

    )
}


export default HomePage