import { Img } from "./Images";
import work1 from "../img/wprk1.png";

export function Works() {
  return (
    <>
      <section id="ourWorks">
        <div className="work-title">
          <h1>Discover Our Work</h1>
          <p>
            Web designer is responsible for creating the design and layout of a
            website.
          </p>
        </div>
        <div className="works">
          <div className="work">
            <div className="leftWork">
              <div className="ui-subtitle">
                <p>User Interface</p>
              </div>
              <div className="agency-title">
                <h1>Creative Agency & Portfolio</h1>
              </div>
              <div className="work-text">
                <p>
                  Web designers plan, create and internet sites and web pages,
                  text with sounds
                </p>
              </div>
            </div>
            <div className="rightWork">
              <Img img={work1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
