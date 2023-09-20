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
            <strong>Week 2 9/19/2023:</strong> Fighting to not be last place,
            Horny Crabs took the win. They finally had a full squad with their
            Quarterback waking up and other receiver being aware of the game.
            How about Adrian Rugova breaking the sack record which he held? 7
            sacks in one game? Are you kidding me? It&apos;s looking bleak right
            now for the Strawhats, starting off 0-2.
          </p>
          <p className="mt-4 text-sm ">
            <strong>Week 1 9/17/2023:</strong> Wow what a week. Every team that
            lost, lost by 3 score. I mean, not to mention the Horny Crabs.
            Losing by almost 40 points? You need to do better than that to make
            it in this league. It didn&apos;t help that their quarterback
            couldn&apos;t even wake up for their game. Abysmal debut by them but
            wow that Andrew Barra (Dragons QB) kid? Guy could throw.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default News;
