import Navbar from "../../components/navbar";
import Header from "../../components/header";
import City from "../../components/city";
import Type from "../../components/type";
import HotelList from "../../components/hotelList";
import FormSubcribe from "../../components/detail/Contact";
import Footer from "../../components/footer";
import footerData from "../../data/footer.json";
import hotelListData from "../../data/hotel_list.json";

const Home = () => {
  return (
    <>
      <header className="Main-Header">
        <Navbar />
        <Header />
      </header>
      <article className="Main-Article">
        <City />
        <Type />
        <HotelList data={hotelListData} />
      </article>
      <section className="Main-Section">
        <FormSubcribe />
      </section>
      <footer className="Main-Footer">
        <Footer data={footerData} />
      </footer>
    </>
  );
};

export default Home;
