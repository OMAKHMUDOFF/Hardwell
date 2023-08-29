import { Img } from "./Images";
import proj1 from "../img/porjects/proj1.png";
import proj2 from "../img/porjects/proj2.png";

export function Proj(prop) {
  let { propProj } = prop;
  return (
    <>
      <section id="Projects">
        <div className="proj">
          <div className="topProj">
            <Img img={proj1} />
            <Img img={proj2} />
          </div>
          <div className="bottomProj">
            {propProj.map((elem, i) => {
              return (
                <div className="projMap" key={i}>
                  <h1>{elem.num}</h1>
                  <p>{elem.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
