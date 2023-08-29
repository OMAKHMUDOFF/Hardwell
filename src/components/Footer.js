import logo from "../img/logo/WD.png";

export function Footer() {
  return (
    <>
      <footer>
        <div className="foot">
          <div className="topFooter">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="menu-links">
              <div className="menu-title">
                <h2>Menu</h2>
              </div>
              <ul>
                <li>About</li>
                <li>Portfoio</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="menu-links">
              <div className="menu-title">
                <h2>Service</h2>
              </div>
              <ul>
                <li>User Experience</li>
                <li>User Interface</li>
                <li>Logotype</li>
                <li>See More</li>
              </ul>
            </div>
            <div className="soc-networks">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="bottomFooter">
            <div className="left">
              <p>Copyright © 2020 Laaqiq. All Rights Reserved.</p>
            </div>
            <div className="right">
              <ul>
                <li>Terms of Use</li>
                <li>Privace Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
