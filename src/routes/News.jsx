import Layout from "../components/Layout";

function News() {
  return (
    <Layout>
      <section
        className="min-h-screen overflow-y-auto flex flex-col justify-start items-center z-10"
        style={{
          backgroundImage: `url('https://www.espnfrontrow.com/wp-content/uploads/2014/12/RS265352_20140623_DSC_0664-e1419614049465.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-700 rounded-md max-w-[900px] mx-6 lg:mx-0 mt-6 mb-4">
          <h1 className="text-6xl text-center font-bold">News</h1>
          <p className="mt-4 text-sm">
            <strong>Season Opener:</strong> The highly anticipated season opener
            is finally here, and all eyes are on the field as teams prepare to
            kick off their campaigns. With fresh rosters, offseason trades, and
            revamped strategies, every franchise is eager to set the tone and
            make a statement. Early power rankings might suggest clear
            favorites, but as we&apos;ve seen time and time again, anything can
            happen once the whistle blows. The battle for the championship
            begins today, and the stage is set for underdogs to rise and for
            superstars to shine. Buckle up—this season is shaping up to be one
            for the books!
            <br></br>
            <em>- Troy Aikman</em>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default News;
