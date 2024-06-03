import Layout from "../components/Layout";

function CareerStats() {
  const backgroundStyle = {
    backgroundImage: `url(/RatDisney.jpg)`,
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
          In progress...enjoy this grown ass man for now
        </p>
      </section>
    </Layout>
  );
}

export default CareerStats;
