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
            <strong>Week 2 8/22/2024:</strong> The Bulls might have stumbled out
            of the gate, but boy, did they make up for it in the second half.
            After a rough first half where quarterback Nick Belli threw 3
            interceptions and the Bulls looked like they might crumble, they
            absolutely dominated the White Socks in the second half to win
            45-26. Belli turned things around in a big way, becoming surgical in
            his passing and leading the charge. But the real standout? Anthony
            Perlongo. This guy was unstoppable, racking up 176 receiving yards
            and 3 touchdowns. The connection between Belli and Perlongo was
            lethal, and once they found their groove, the White Socks just
            didn&apos;t stand a chance. If the Bulls can keep this kind of
            second-half momentum going, they&apos;re going to be a nightmare for
            every team in the league.
            <br></br>
            <em>- Troy Aikman</em>
          </p>

          <p className="mt-4 text-sm">
            <strong>Week 1 8/15/2024:</strong> What an absolute heartbreaker for
            the White Socks! They were in control for almost the entire game,
            and yet, in the final three minutes, the Grey Gooses managed to pull
            off an unreal comeback to win 33-32. Adrian Rugova was a beast for
            the White Socks, putting up 149 receiving yards, 3 sacks, 8
            receptions, and 2 touchdowns. Richie Viglione was right there with
            him, hauling in 10 receptions for 148 yards and 3 touchdowns of his
            own. With stats like these, there&apos;s no way they should have
            lost. But let&apos;s talk about Danny Ross for the Grey Gooses. 9
            receptions, 176 receiving yards, and 4 touchdowns. That man is a
            problem! Ross not only led the league in receiving yards and
            touchdowns for Week 1, but he also single-handedly willed the Grey
            Gooses to victory. This was an instant classic, and it&apos;ll be
            talked about all season long.
            <br></br>
            <em>- Cris Collinsworth</em>
          </p>

          <p className="mt-4 text-sm">
            <strong>Week 1 8/15/2024:</strong> The Bulls are exactly who we
            thought they were absolute powerhouses. After their 44-15 demolition
            of the Mambas, it&apos;s clear this team is in a league of its own
            right now. Their dominance on both sides of the ball was just too
            much for the Mambas to handle. Let&apos;s be honest, if any team
            thinks they can stand toe-to-toe with the Bulls this season,
            they&apos;re in for a rude awakening. Their offense looks
            unstoppable, and that defense? Absolutely suffocating. The Bulls
            aren&apos;t just good, they&apos;re great. Get used to seeing them
            on top.
            <br></br>
            <em>- Michael Irvin</em>
          </p>
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
