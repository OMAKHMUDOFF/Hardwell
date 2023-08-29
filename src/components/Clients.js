import { Img } from "./Images";

export function Clients(prop) {
  let { propClient } = prop;
  return (
    <>
      <section id="Clients">
        <div className="clients">
          <div className="clientTitle">
            <h1>Our Famous Clients</h1>
          </div>
          <div className="client-logo">
            {propClient.map((elem, i) => {
              return (
                <div className="logo" key={i}>
                  <Img img={elem.logo} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
