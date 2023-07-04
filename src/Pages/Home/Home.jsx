import { Helmet } from "react-helmet-async";

import Navbar from "../Sheard/Navbar";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home || Abu Jafor</title>
      </Helmet>
      <Navbar />
      <Banner />
      <About />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
