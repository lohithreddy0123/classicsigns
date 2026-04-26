import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

function App() {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/" ||
    location.pathname === "/blogs" ||
    location.pathname.startsWith("/blogs/");

  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />

            <Route
              path="*"
              element={
                <div
                  style={{
                    minHeight: "80vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px"
                  }}
                >
                  <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
                    404
                  </h1>

                  <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                    Page not found
                  </p>

                  <a
                    href="/"
                    style={{
                      padding: "10px 20px",
                      background: "#000",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "6px"
                    }}
                  >
                    Go Home
                  </a>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>

      {!hideFooter && <Footer />}
    </>
  );
}

export default App;