import Layout from "../components/Layout";

function Potw() {
  const backgroundStyle = {
    backgroundImage: `url(https://pbs.twimg.com/media/E8XooFNXsAE52X_.jpg:large)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const cardWithLogoStyle = {
    position: "relative",
  };

  return (
    <Layout>
      <section style={{ ...backgroundStyle, paddingBottom: "2rem" }}>
        <h1 className="star-wars-heading text-6xl text-center font-bold text-white pt-2 drop-shadow-lg tracking-widest mb-4">
          <p className="mt-4">Week 3</p>
        </h1>

        <div className="flex justify-center items-center">
          <div className="lg:w-2/3 w-4/5 mb-10">
            <div className="card-background" style={cardWithLogoStyle}>
              <div className="text-center shadow-lg p-6 rounded-xl my-6 mt-6 relative card-content">
                <img src="PenjaminBrosLogo.png" alt="Logo" className="logo" />
                <h3 className="text-lg font-medium pt-4 pb-1 text-white mt-4 lg:mt-0">
                  <strong>Player of the Week</strong>
                </h3>
                <p className="py-1 text-lg text-white">Andrew Barra</p>
                <h4 className="py-2 text-white text-md">
                  <strong>Stats</strong>
                </h4>
                <p className="text-white py-1 text-md">22 Completions</p>
                <p className="text-white py-1 text-md">389 Passing Yards</p>
                <p className="text-white py-1 text-md">8 Passing Touchdowns</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-10 justify-center mb-10">
          <div
            className="card-background lg:w-2/5 w-4/5 mx-auto mb-10 relative"
            style={cardWithLogoStyle}
          >
            <div className="text-center shadow-lg p-6 rounded-xl my-6 flex-2 relative card-content">
              <img src="BullsLogo.png" alt="Logo" className="logo" />
              <h3 className="text-lg font-medium pt-4 pb-1 text-white mt-4 lg:mt-0">
                <strong>Offensive Player of the Week</strong>
              </h3>
              <p className="py-1 text-lg text-white">Deni Kurtulla</p>
              <h4 className="py-2 text-white text-md">
                <strong>Stats</strong>
              </h4>
              <p className="text-white py-1 text-md">7 Receptions</p>
              <p className="text-white py-1 text-md">208 Receiving Yards</p>
              <p className="text-white py-1 text-md">3 Touchdowns</p>
            </div>
          </div>
          <div
            className="card-background lg:w-2/5 w-4/5 mx-auto mb-10 relative"
            style={cardWithLogoStyle}
          >
            <div className="text-center shadow-lg p-6 my-6 rounded-xl flex-2 relative card-content">
              <img src="SeamenLogo.png" alt="Logo" className="logo" />
              <h3 className="text-lg font-medium pt-4 pb-1 text-white mt-4 lg:mt-0">
                <strong>Defensive Player of the Week</strong>
              </h3>
              <p className="py-1 text-lg text-white">Josh Soler</p>
              <h4 className="py-2 text-white text-md">
                <strong>Stats</strong>
              </h4>
              <p className="text-white py-1 text-md">2 Sacks</p>

              <p className="text-white py-1 text-md">6 Tackles</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Potw;
