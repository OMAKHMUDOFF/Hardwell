export function Serv(prop) {
  let { propServ } = prop;
  return (
    <>
      <section id="Serv">
        <div className="Serv">
          <div className="serv-title">
            <h1>Explore Service</h1>
            <p>
              The sky was cloudless and of a deep dark blue spectacle before us
              was indeed sublime.
            </p>
          </div>
          <div className="servCards">
            {propServ.map((elem, i) => {
              return (
                <div key={i}>
                  <div className="card">
                    <div className="icon">
                      <img src={elem.icon} alt="" />
                    </div>
                    <div className="card-title">
                      <h4>{elem.title}</h4>
                    </div>
                    <div className="about-card">
                      <p>{elem.about}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
