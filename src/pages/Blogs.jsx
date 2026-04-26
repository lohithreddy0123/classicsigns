import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogsData from "./data/blogsData";
import "./styles/Blogs.css";

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs | Classic Porcelain Signs</title>

        <meta
          name="description"
          content="Read articles about custom porcelain signs, neon signage, die-cut enamel signs, and craftsmanship from Classic Porcelain Signs."
        />

        <link
          rel="canonical"
          href="https://www.classicporcelainsigns.com/blogs"
        />
      </Helmet>

      <div className="blogs-page">
        <div className="blogs-container">

          <div className="blogs-header">
            <span className="blogs-eyebrow">
              Our Journal
            </span>

            <h1 className="blogs-title">
              Blogs
            </h1>

            <p className="blogs-subtitle">
              Insights, projects, and stories from the Classic Porcelain Signs team.
            </p>
          </div>

          <div className="blogs-grid">
            {blogsData.map((blog) => (
              <article
                key={blog.id}
                className="blog-card"
              >
                <Link
                  to={`/blogs/${blog.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block"
                  }}
                >
                  <div className="blog-card-image-wrap">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-card-image"
                      loading="lazy"
                    />

                    <span className="blog-card-category">
                      {blog.category}
                    </span>
                  </div>

                  <div className="blog-card-body">

                    <div className="blog-card-meta">
                      <span>{blog.date}</span>
                      <span className="meta-dot">·</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h2 className="blog-card-title">
                      {blog.title}
                    </h2>

                    <p className="blog-card-desc">
                      {blog.description}
                    </p>

                    <div className="blog-card-footer">
                      <span className="blog-card-author">
                        — {blog.author}
                      </span>

                      <span className="blog-card-cta">
                        Read more →
                      </span>
                    </div>

                  </div>
                </Link>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}