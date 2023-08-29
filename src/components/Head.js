import { Button } from "./Buttons";
import arrow from "../img/icons/right-arrow.svg";
import signAr from "../img/sign-arrow.png";
import human from "../img/human.png";
import dot from "../img/Dot.png";

export function Head() {
  return (
    <>
      <header id="home">
        <div className="Header-main">
          <img src={dot} alt="" />
          <img className="secDot" src={dot} alt="" />
          <div className="header">
            <div className="leftHead">
              <div className="title">
                <div className="subtitle">
                  <p>Ninad Creative Agency</p>
                </div>
                <h1>
                  Creative <span>Mind</span> With Creative People
                </h1>
                <img src={signAr} alt="" />
              </div>
              <div className="secSubtitle">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when at its layout.
                </p>
              </div>
              <div className="read-more">
                <Button
                  btnClass="read-btn"
                  btnText="Read More"
                  btnPhoto={<img src={arrow} alt="arrow up 45 deg" />}
                />
              </div>
            </div>
            <div className="rightHead">
              <img src={human} alt="human" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
