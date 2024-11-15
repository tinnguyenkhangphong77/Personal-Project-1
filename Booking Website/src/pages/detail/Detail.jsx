import Navbar from "../../components/navbar";
import FormSubcribe from "../../components/detail/Contact";
import Footer from "../../components/footer";
import DetailList from "../../components/detail/detailList";
import data from "../../data/detail.json";
import footerData from "../../data/footer.json";

const Detail = () => {
  return (
    <>
      <header className="Main-Header">
        <Navbar />
      </header>
      <article className="Main-Article">
        <DetailList data={data} />
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

export default Detail;
