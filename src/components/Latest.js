export function Latest({ propLatest }) {
  return (
    <>
      <section id="Latest">
        <div className="latest-title">
          <h1>Latest From Blog</h1>
        </div>
        <div className="latest-cards">
          {propLatest.map((elem, i) => {
            return (
              <div className="latest-card" key={i}>
                <div className="blog-img">
                  <img src={elem.img} alt="" />
                </div>
                <div className="latest-text">
                  <div className="subtitle">
                    <h3>{elem.subtitle}</h3>
                  </div>
                  <div className="descrip">
                    <p>{elem.desc}</p>
                  </div>
                  <div className="read">
                    <a href="a">{elem.read}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
