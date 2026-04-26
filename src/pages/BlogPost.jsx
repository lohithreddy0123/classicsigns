import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogsData from "./data/blogsData";
import "./styles/BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="blogpost-page">
        <div className="blogpost-container">
          <p style={{ color: "#f0ece4" }}>Blog post not found.</p>
          <Link to="/blogs" className="back-btn">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content) => {
    const lines = content.split("\n");
    const elements = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="post-heading">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("- ")) {
        const listItems = [];

        while (i < lines.length && lines[i].startsWith("- ")) {
          listItems.push(lines[i].replace("- ", ""));
          i++;
        }

        i--;

        elements.push(
          <ul key={key++} className="post-list">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      } else if (line.trim() !== "") {
        elements.push(
          <p key={key++} className="post-paragraph">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Classic Porcelain Signs</title>
        <meta name="description" content={blog.description} />
        <link
          rel="canonical"
          href={`https://www.classicporcelainsigns.com/blogs/${blog.slug}`}
        />

        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.classicporcelainsigns.com/blogs/${blog.slug}`}
        />
      </Helmet>

      <div className="blogpost-page">
        <div className="blogpost-container">
          <Link to="/blogs" className="back-btn">
            ← Back to Blogs
          </Link>

          <div className="post-hero">
            <span className="post-category">{blog.category}</span>

            <h1 className="post-title">
              {blog.title}
            </h1>

            <div className="post-meta-row">
              <div className="post-author-avatar">
                {blog.author.charAt(0)}
              </div>

              <div>
                <p className="post-author-name">
                  {blog.author}
                </p>

                <p className="post-meta-sub">
                  {blog.date} · {blog.readTime}
                </p>
              </div>
            </div>
          </div>

          <div className="post-cover-wrap">
            <img
              src={blog.image}
              alt={blog.title}
              className="post-cover"
              loading="lazy"
            />
          </div>

          <div className="post-body">
            <p className="post-lead">
              {blog.description}
            </p>

            <div className="post-divider" />

            {renderContent(blog.content)}
          </div>

        </div>
      </div>
    </>
  );
}