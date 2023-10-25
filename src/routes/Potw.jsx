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

  const logoStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "60px",
    height: "60px",
  };

  return (
    <Layout>
      <section style={{ ...backgroundStyle, paddingBottom: "2rem" }}>
        <h1 className="text-6xl text-center font-bold text-white pt-2">
          Week 5
        </h1>
        <div className="flex justify-center items-center ">
          <div className="lg:w-2/3 w-4/5">
            <div
              className="text-center shadow-lg p-10 rounded-xl lg:my-10 mt-10 bg-green-500 transition-transform transform hover:scale-105 relative"
              style={cardWithLogoStyle}
            >
              <img src="GremlinsLogo.png" alt="Logo" style={logoStyle} />
              <h3 className="text-xl font-medium pt-8 pb-2">
                Player of the Week
              </h3>
              <p className="py-2 text-xl">Garrett Hughes</p>
              <h4 className="py-4 text-orange-600 text-lg">Stats</h4>
              <p className="text-gray-800 py-1 text-lg">PASSING YARDS: 270</p>
              <p className="text-gray-800 py-1 text-lg">RUSHING YARDS: 81</p>
              <p className="text-gray-800 py-1 text-lg">TOUCHDOWNS: 9</p>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-10 justify-center">
          <div
            className="text-center shadow-lg p-10 rounded-xl my-10 bg-purple-500 flex-2 transition-transform transform hover:scale-105 lg:w-2/5 w-4/5 mx-auto relative"
            style={cardWithLogoStyle}
          >
            <img src="DragonsLogo.png" alt="Logo" style={logoStyle} />
            <h3 className="text-xl font-medium pt-8 pb-2">
              Offensive Player of the Week
            </h3>
            <p className="py-2 text-xl">Anthony Perlongo</p>
            <h4 className="py-4 text-yellow-600 text-lg">Stats</h4>
            <p className="text-gray-800 py-1 text-lg">RECEIVING YARDS: 150</p>
            <p className="text-gray-800 py-1 text-lg">TOUCHDOWNS: 2</p>
          </div>

          <div
            className="text-center shadow-lg p-10 lg:my-10 rounded-xl  bg-yellow-500 flex-2 transition-transform transform hover:scale-105 lg:w-2/5 w-4/5 mx-auto relative"
            style={cardWithLogoStyle}
          >
            <img src="KillaBeezLogo.png" alt="Logo" style={logoStyle} />
            <h3 className="text-xl font-medium pt-8 pb-2">
              Defensive Player of the Week
            </h3>
            <p className="py-2 text-xl">Nick Belli</p>
            <h4 className="py-4 text-blue-600 text-lg">Stats</h4>
            <p className="text-gray-800 py-1 text-lg">PICKS: 3</p>
            <p className="text-gray-800 py-1 text-lg">DEFLECTIONS: 3</p>
            <p className="text-gray-800 py-1 text-lg">TACKLES: 4</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Potw;
