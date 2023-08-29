import bitmap from "../img/Bitmap.png";
import { Button } from "./Buttons";

export function About() {
  return (
    <>
      <section id="about">
        <div className="about">
          <div className="leftAbout">
            <img src={bitmap} alt="" />
            <div className="percent">
              <div className="percentage">
                <p>68%</p>
                <Button
                  btnClass="arrowUp"
                  btnText={<i className="fa-solid fa-arrow-up"></i>}
                />
              </div>
              <div className="extra">
                <p>Extra growth for your company.</p>
              </div>
            </div>
          </div>
          <div className="rightAbout">
            <div className="about-label">
              <p>About</p>
            </div>
            <div className="about-title">
              <h1>Creating, Communicating & Delivering</h1>
            </div>
            <div className="about-text">
              <p>
                Web designers plan, create and code internet sites and web
                pages, many of which combine text with sounds, pictures,
                graphics and video clips.
              </p>
            </div>
            <div className="learnMore-about">
              <a href="a">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
