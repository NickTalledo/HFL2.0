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
            <strong>Week 5 10/20/2023:</strong> The Strawhats and Blackout are
            just fighting for last place at this point. Do either of these teams
            wanna make playoffs? I truly don&apos;t see a reason why either of
            them should make it at this point. Hopefully they provide one soon.
          </p>
          <p className="mt-4 text-sm">
            <strong>Week 4 10/8/2023:</strong> The Strawhats beat the undefeated
            KillaBeez. Jared has made 3 trades rebuilding basically his entire
            roster and boy did it work. To be the last ranked team and become
            the only team to beat the number 1 ranked team? Jared may be general
            manager of the year, hats off to him.
          </p>
          <p className="mt-4 text-sm ">
            <strong>TRADE ALERT 10/2/2023:</strong> The Strawhats are now
            trading both Mark Ortega and Nico Becker to the Dragons for Richie
            Viglione and Charlie Pearson. Jared seems to be rebuilding his whole
            squad in hopes to catch their first win. I&apos;d say an overall
            fair trade with the Strawhats benefitting slightly more here.
          </p>
          <p className="mt-4 text-sm">
            <strong>Week 3 10/1/2023:</strong> After dominating their first two
            opponents, the Dragons went into Week 3 as the favorite against the
            KillaBeez only to score the least amount of points in HFL history.
            The KillaBeez held them to only 8 points, shutting them out the
            second half. The KillaBeez have put the league on notice, becoming
            the only team without a loss.
          </p>
          <p className="mt-4 text-sm">
            <strong>Week 2 9/26/2023:</strong> What in the hell is this team
            Dragons? They beat Blackout 60-40 which is by itself, a good margin.
            But the kicker here is, that they lost a player for half their game
            due to an injury. They were forced to play a 4v5, which in no way is
            fair but wow did they pull through. 60-40 with the other team having
            one more player? Give me a break.
          </p>
          <p className="mt-4 text-sm ">
            <strong>TRADE ALERT 9/21/2023:</strong> The Strawhats are trading
            Andrew Rossi to the Dragons for Vincent Nastri. The Dragons then
            traded Andrew Rossi to the Horny Crabs for Klevik Mnela. These
            players did not produce much for their squads Week 1. Rossi with 1
            catch for 8 and Vin with 2 catches for 20 but with more drops than
            catches. I&apos;m unsure which team will benefit more here.
            We&apos;ll have to see Week 3.
          </p>
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
            wow that Andrew Barra kid? Guy could throw.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default News;
