import { Img } from "./Images";
import check from "../img/analyze/check.png";
import analyzeImg from "../img/analyze/analyze.png";

export function Analyze() {
  return (
    <>
      <section id="Analyze">
        <div className="analyze">
          <div className="leftAnalyze">
            <div className="A-title">
              <h1>Analyze</h1>
              <h1>& Improve</h1>
            </div>
            <div className="A-subtitle">
              <p>
                Web designer is responsible for creating the design and layout
                of a website or web pages. It and can mean working on a brand
                new website.
              </p>
            </div>
            <div className="A-check">
              <div>
                <div className="Ch-icon">
                  <Img img={check} />
                </div>
                <div className="ch-text">
                  <p>Well Planned Architecture</p>
                </div>
              </div>
              <div>
                <div className="Ch-icon">
                  <Img img={check} />
                </div>
                <div className="ch-text">
                  <p>Accessible to All Users</p>
                </div>
              </div>
              <div>
                <div className="Ch-icon">
                  <Img img={check} />
                </div>
                <div className="ch-text">
                  <p>Mobile Compatibility</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightAnalyze">
            <Img img={analyzeImg} />
          </div>
        </div>
      </section>
    </>
  );
}
