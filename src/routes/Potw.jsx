import Layout from "../components/Layout";

function Potw() {
  const backgroundStyle = {
    backgroundImage: `url(https://pbs.twimg.com/media/E8XooFNXsAE52X_.jpg:large)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Layout>
      <section style={backgroundStyle}>
        <h1 className="text-6xl text-center font-bold text-white">Week 1</h1>
        <div className="flex justify-center items-center ">
          <div className="lg:w-2/3 w-4/5">
            <div className="text-center shadow-lg p-10 rounded-xl lg:my-10 mt-10 bg-white transition-transform transform hover:scale-105">
              <h3 className="text-xl font-medium pt-8 pb-2">
                Player of the Week
              </h3>
              <p className="py-2 text-lg">Player Name</p>
              <h4 className="py-4 text-cyan-500">Stats</h4>
              <p className="text-gray-800 py-1">---</p>
              <p className="text-gray-800 py-1">---</p>
              <p className="text-gray-800 py-1">---</p>
              <p className="text-gray-800 py-1">---</p>
              <p className="text-gray-800 py-1">---</p>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-10 justify-center">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-2 transition-transform transform hover:scale-105 lg:w-2/5 w-4/5 mx-auto">
            <h3 className="text-xl font-medium pt-8 pb-2">
              Offensive Player of the Week
            </h3>
            <p className="py-2 text-lg">Player Name</p>
            <h4 className="py-4 text-cyan-500">Stats</h4>
            <p className="text-gray-800 py-1">---</p>
            <p className="text-gray-800 py-1">---</p>
            <p className="text-gray-800 py-1">---</p>
          </div>
          <div className="text-center shadow-lg p-10 lg:my-10 rounded-xl  bg-white flex-2 transition-transform transform hover:scale-105 lg:w-2/5 w-4/5 mx-auto">
            <h3 className="text-xl font-medium pt-8 pb-2">
              Defensive Player of the Week
            </h3>
            <p className="py-2 text-lg">Player Name</p>
            <h4 className="py-4 text-cyan-500">Stats</h4>
            <p className="text-gray-800 py-1">---</p>
            <p className="text-gray-800 py-1">---</p>
            <p className="text-gray-800 py-1">---</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Potw;
