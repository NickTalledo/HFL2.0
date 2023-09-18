import Layout from "../components/Layout";

function CareerStats() {
  const backgroundStyle = {
    backgroundImage: `url(https://joyrideharness.com/cdn/shop/articles/AdobeStock_274099078.jpg?v=1620400547)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <Layout>
      <section style={backgroundStyle} className="h-screen">
        <h1 className="text-6xl text-center font-bold text-white">
          Career Stats
        </h1>
        <p className="text-3xl text-center font-bold text-white">
          In progress...enjoy this dog for now
        </p>
      </section>
    </Layout>
  );
}

export default CareerStats;
