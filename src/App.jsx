import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

const Home     = lazy(() => import("./pages/Home/Home"));
const About    = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const Contact  = lazy(() => import("./pages/Contact/Contact"));
const Blogs    = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

function App() {
  return (
    <>
      <ScrollToTop />
      {/* <Header /> */}
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;