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
          <p className="mt-4">
            <strong>Week 1 9/17/2023:</strong> Week 1 has set the stage for an
            exciting season of action-packed football! In the first matchup, the
            KillaBeez faced off against Team Blackout, and it was a closely
            contested game until the final minutes. The KillaBeez took control,
            securing a three-score lead and shutting down the Blackout offense
            for the remainder of the game. <br />
            <br /> Next up, the Dragons took on the Horny Crabs, and it was
            clear from the start that the Dragons were in charge. Andrew Barra,
            the Dragons&apos;' elite quarterback, showcased his skills by
            dissecting the Horny Crabs&apos;' defense. <br />
            <br />
            In the final game of the week, the Gremlins displayed their
            dominance with a commanding 43-19 victory over the Strawhats. The
            Gremlins&apos;' strong performance left the Strawhats struggling to
            respond on offense. As we move into Week 2, anticipation is building
            for more thrilling matchups and standout plays. Stay tuned for
            another week of football excitement!
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default News;
