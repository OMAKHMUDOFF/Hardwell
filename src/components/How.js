import { Img } from "./Images";
import { Button } from "./Buttons";
import video from "../img/howworks/Bitmap.png";

export function Hww() {
  return (
    <>
      <section id="HowWeWork">
        <div className="How">
          <div className="topVideo">
            <Img img={video} />
            <div className="play-video">
              <div className="pause">
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="minutes">
                <div className="line"></div>
              </div>
              <div className="settings">
                <i className="fa-solid fa-volume-low"></i>
                <i className="fa-solid fa-gear"></i>
                <i className="fa-solid fa-expand"></i>
              </div>
            </div>
            <div className="play-btn">
              <Button
                btnClass="btnPlay"
                btnText={<i className="fa-solid fa-play"></i>}
              />
            </div>
          </div>
          <div className="howWork-text">
            <div className="h-title">
              <h1>How We Work</h1>
            </div>
            <div className="h-text">
              <p>
                Web designers plan, create and code internet sites and web
                pages, many of which combine text with sounds, pictures,
                graphics and video clips.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
