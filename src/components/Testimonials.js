import { Img } from "./Images";

export function Testi(prop) {
  let { propTest } = prop;
  return (
    <>
      <section id="Testi">
        <div className="testi">
          <div className="teamText">
            <div className="teamTitle">
              <h1>Our Testimonials</h1>
            </div>
            <div className="teamSubtitle">
              <p>
                Read some awesome feedback from our students all over the world.
                We are giving the best to our students
              </p>
            </div>
          </div>
          <div className="testiCards">
            {propTest.map((elem, i) => {
              return (
                <div className="testCard" key={i}>
                  <div className="about-test">
                    <p>{elem.about}</p>
                  </div>
                  <div className="profile">
                    <div className="p-photo">
                      <Img img={elem.profile} />
                    </div>
                    <div className="name-prof">
                      <div className="name">
                        <h4>{elem.name}</h4>
                      </div>
                      <div className="prof">
                        <p>{elem.prof}</p>
                      </div>
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
