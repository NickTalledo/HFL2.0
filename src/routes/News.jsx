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
            <strong>Week 4 6/23/2024:</strong> In a game that left everyone on
            the edge of their seats, the Men in Black secured their first win of
            the season in a stunning 42-41 victory against the Redskins. I was
            convinced the Redskins would take this one, especially given their
            recent performances. But the Men in Black, against all odds, managed
            to pull off a nail-biter. The game could have gone either way until
            the very last second, and the Men in Black&apos;s resilience paid
            off. This outcome is shocking, to say the least, and raises serious
            questions about the Redskins&apos; ability to close out tight games.
            <br></br>
            <em>- Adam Schefter</em>
          </p>

          <p className="mt-4 text-sm">
            <strong>Week 4 6/23/2024:</strong> The showdown between the two
            undefeated teams, the Penjamin Bros and the Bulls, was highly
            anticipated, with both teams entering the game with a 3-0 record.
            The Penjamin Bros not only emerged victorious but did so
            convincingly, with a commanding 66-47 win. This decisive victory
            against the second-best team in the league underscores just how
            dominant the Penjamin Bros are this season. Their performance was
            nothing short of spectacular, and they look virtually unstoppable.
            If this game is any indication, the Penjamin Bros are the team to
            beat, and the gap between them and the rest of the league is
            widening.
            <br></br>
            <em>- Louis Riddick</em>
          </p>
          <p className="mt-4 text-sm">
            <strong>Week 4 6/23/2024:</strong> Adrian Rugova has been a
            revelation for the Redskins, performing exceptionally well on both
            sides of the ball. Even though they lost today, you can&apos;t deny
            this guy&apos;s ability. Preseason expectations for Rugova were
            modest at best, but he&apos;s silenced all the critics with his
            standout plays. Whether it&apos;s making crucial tackles on defense
            or explosive plays on offense, Rugova has become the unexpected star
            of the Redskins. His versatility and impact are undeniable, and
            it&apos;s time we start recognizing him as a key player driving the
            Redskins&apos; surprising performances this season.
            <br></br>
            <em>- Dan Orlovsky</em>
          </p>
          <p className="mt-4 text-sm">
            <strong>Week 2 6/9/2024:</strong> Anthony Perlongo of the Penjamin
            Bros delivered an absolute masterclass on the field with 7
            receptions, 231 yards, and 5 touchdowns. It&apos;s clear that
            Perlongo is a game-changer, effortlessly tearing through the Men in
            Black&apos;s defense like it was non-existent. This performance
            isn&apos;t just impressive; it&apos;s a statement. Any doubts about
            his capabilities should be thoroughly dispelled. If the Penjamin
            Bros continue to utilize him like this, they are undoubtedly the
            team to beat this season.
            <br></br>
            <em>- Steve Mariucci</em>
          </p>
          <p className="mt-4 text-sm">
            <strong>Week 1 6/3/2024:</strong> Andrew Barra of the Penjamin Bros
            showcased why he&apos;s one of the top quarterbacks in the league.
            Leading his team to a 47-26 victory over the Seamen, Barra played a
            perfect game with zero interceptions. His precision and
            decision-making on the field were impeccable, leaving defenders
            scrambling and solidifying his status as a top-tier quarterback. The
            Penjamin Bros&apos; success this season is undeniably tied to
            Barra&apos;s exceptional performance.
            <br></br>
            <em>- Michael Irvin</em>
          </p>
          <p className="mt-4 text-sm">
            <strong>Week 1 6/3/2024:</strong> The Redskins, widely dismissed in
            the preseason rankings, have proven they might be a serious
            contender after all. Stephen Aspromonte&apos;s squad stunned the
            Blue Chews with a commanding 39-20 victory, anchored by an ironclad
            defense that amassed 7 interceptions. While many doubted
            Aspromonte&apos;s drafting choices, it&apos;s clear the Redskins
            have the potential to shake up the league. This team isn&apos;t the
            dead last everyone assumed; they&apos;re a force to be reckoned
            with.
            <br></br>
            <em>- Cris Collinsworth</em>
          </p>
          <p className="mt-4 text-sm">
            <strong>Week 1 5/31/2024:</strong> The Redskins, drafted by Stephen
            Aspromonte, they are viewed as the clear underdogs this season. Many
            believe that Aspromonte&apos;s questionable drafting choices have
            left the team with a significant uphill battle, landing them in Tier
            C. Meanwhile, the Bulls are set to battle Men in Black in a game
            that could set the tone for both teams. The early power rankings
            place Penjamin Bros, Men in Black, and Seamen in Tier A, with the
            Bulls and Blue Chews trailing in Tier B. Aspromonte&apos;s Redskins
            will need a miracle to climb out of the bottom tier and prove their
            critics wrong.
            <br></br>
            <em>- Troy Aikman</em>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default News;
