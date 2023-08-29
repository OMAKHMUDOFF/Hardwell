import { Button } from "./Buttons";
import logo from "../img/logo/Logo.png";

export function Nav() {
  return (
    <>
      <nav>
        <div className="Nav">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#Serv">Services</a>
              </li>
              <li>
                <a href="#Projects">Project</a>
              </li>
              <li>
                <a href="a">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="start-btn">
            <Button btnClass="get-start" btnText="Get started" />
          </div>
        </div>
      </nav>
    </>
  );
}
