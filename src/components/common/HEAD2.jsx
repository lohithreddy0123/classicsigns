import './HEAD2.css';

const Head2 = () => {
  return (
    <section className="head2">
      <div className="head2-inner">

        {/* LEFT — BIG 4-LINE HEADING */}
        <div className="head2-heading">
          <span>Know</span>
          <span>Classic,</span>
          <span>what we</span>
          <span>stand for.</span>
        </div>

        {/* RIGHT — SMALL TEXT */}
        <div className="head2-text">
          <span className="head2-logo">CLASSIC PORCELAIN SIGNS</span>

          <h4>Premium Porcelain & Enamel Signage</h4>

          <p>
            At Classic Porcelain Signs, we craft handmade porcelain enamel signs
            that blend vintage charm with lasting durability. From custom buttons
            to oversized 72-inch round signage, each piece is designed to make a
            statement and stand the test of time.
          </p>

          <a href="/contact">Get Your Free Quote →</a>
        </div>

      </div>
    </section>
  );
};

export default Head2;
