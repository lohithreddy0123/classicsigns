import { useState } from "react";
import blogsData from "../pages/data/blogsData";
import BlogPost from "./BlogPost";
import "./styles/Blogs.css";

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  if (selectedBlog) {
    return <BlogPost blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <div className="blogs-page">
      <div className="blogs-container">

        <div className="blogs-header">
          <span className="blogs-eyebrow">Our Journal</span>
          <h1 className="blogs-title">Blogs</h1>
          <p className="blogs-subtitle">
            Insights, projects, and stories from the Classic Porcelain Signs team.
          </p>
        </div>

        <div className="blogs-grid">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className="blog-card"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="blog-card-image-wrap">
                <img src={blog.image} alt={blog.title} className="blog-card-image" />
                <span className="blog-card-category">{blog.category}</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>{blog.date}</span>
                  <span className="meta-dot">·</span>
                  <span>{blog.readTime}</span>
                </div>
                <h2 className="blog-card-title">{blog.title}</h2>
                <p className="blog-card-desc">{blog.description}</p>
                <div className="blog-card-footer">
                  <span className="blog-card-author">— {blog.author}</span>
                  <span className="blog-card-cta">Read more →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}