import './head2.css';

const Head2 = () => {
  return (
    <section className="head2">
      <div className="head2-inner">

        {/* LEFT — BIG 4-LINE HEADING */}
        <div className="head2-heading">
          <span>What</span>
          <span>works,</span>
          <span>no more,</span>
          <span>no less.</span>
        </div>

        {/* RIGHT — SMALL TEXT */}
        <div className="head2-text">
          <span className="head2-logo">SOURCE</span>

          <h4>Bureau de design et technologie</h4>

          <p>
            Source rassemble des designers et experts techniques autour
            d’une mission : rendre les entreprises plus performantes grâce
            à des solutions numériques innovantes.
          </p>

          <a href="#">Explorer →</a>
        </div>

      </div>
    </section>
  );
};

export default Head2;
