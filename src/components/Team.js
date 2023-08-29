import { Img } from "./Images";

export function Team(prop) {
  let { propTeam } = prop;
  return (
    <>
      <section id="Team">
        <div className="members">
          <div className="teamText">
            <div className="teamTitle">
              <h1>Team Members</h1>
            </div>
            <div className="teamSubtitle">
              <p>
                Combine text with sounds, pictures, graphics and video clips.
              </p>
            </div>
          </div>
          <div className="teamCards">
            {propTeam.map((elem, i) => {
              return (
                <div className="teamCard" key={i}>
                  <div className="member-photo">
                    <Img img={elem.photo} />
                  </div>
                  <div className="member-name">
                    <h3>{elem.name}</h3>
                  </div>
                  <div className="member-prof">
                    <p>{elem.prof}</p>
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
