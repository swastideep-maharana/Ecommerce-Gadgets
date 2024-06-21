
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/services"; 
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import smartwatch from "./assets/category/smartwatch2-removebg-preview.png";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners.jsx";
import Footer from "./components/Footer/Footer.jsx"

const BannerData = {
  discount: '30% OFF',
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: '30% OFF',
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: smartwatch, // Corrected variable name
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Eaque reiciendis",
  bgColor: "#2dcc6f",
};

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar />
        <Hero />
        <Category />
        <Category2 />
        <Services/>
        <Banner data={BannerData} />
        <Products />
        <Banner data={BannerData2} />
        <Blogs />
        <Partners />
        <Footer />
      </div>
    </>
  );
}

export default App;
