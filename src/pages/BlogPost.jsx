import "./styles/BlogPost.css";

export default function BlogPost({ blog, onBack }) {
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
    <div className="blogpost-page">
      <div className="blogpost-container">

        <button className="back-btn" onClick={onBack}>
          ← Back to Blogs
        </button>

        <div className="post-hero">
          <span className="post-category">{blog.category}</span>
          <h1 className="post-title">{blog.title}</h1>
          <div className="post-meta-row">
            <div className="post-author-avatar">{blog.author.charAt(0)}</div>
            <div>
              <p className="post-author-name">{blog.author}</p>
              <p className="post-meta-sub">{blog.date} · {blog.readTime}</p>
            </div>
          </div>
        </div>

        <div className="post-cover-wrap">
          <img src={blog.image} alt={blog.title} className="post-cover" />
        </div>

        <div className="post-body">
          <p className="post-lead">{blog.description}</p>
          <div className="post-divider" />
          {renderContent(blog.content)}
        </div>

        <div className="post-footer">
          <button className="back-btn-bottom" onClick={onBack}>
            ← Back to all blogs
          </button>
        </div>

      </div>
    </div>
  );
}