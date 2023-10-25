import Layout from "../components/Layout";

function Home() {
  return (
    <>
      <Layout>
        <section className="relative bg-primary pt-8">
          <div className="relative flex flex-col items-center justify-center z-10">
            <h1 className="text-center text-6xl text-white">
              Welcome to the HFL
            </h1>
            <img src="HFLlogo.jpeg" alt="HFL Logo" height={350} width={350} />
            <p className="max-w-[400px] text-center text-xl text-white sm:max-w-[600px] mx-8 lg:mx-0 mb-8">
              Week 6 brought unexpected twists and intense matches, reshaping
              the league standings and leaving fans in awe of the unpredictable
              nature of the games.
              <br />
              The Gremlins managed to secure a close win against the Strawhats
              with a final score of 69-60. The game was tightly contested, and
              it all came down to the final moments. However, critical mistakes
              by the Strawhats, including a pick-six and giving up a safety in
              back-to-back drives, cost them the game, highlighting the
              significance of maintaining composure under pressure.
              <br />
              The Dragons demonstrated their dominance by blowing out the Horny
              Crabs with a resounding 80-47 victory. The Crabs faced early
              challenges, leading to a change in quarterback. Despite the
              change, they couldn&apos;t recover from the Dragons&apos; strong
              start, showcasing the Dragons&apos; formidable offense and
              defense.
              <br />
              In a stunning upset, the KillaBeez suffered a surprising loss to
              Blackout, ending with a score of 64-72. This defeat, coming
              against one of the bottom-ranked teams, raised doubts about the
              KillaBeez&apos;s consistency and credibility. The unexpected
              results have added an element of uncertainty to the league
              rankings, making every upcoming game a potential game-changer.
              <br />
              With the rankings constantly shifting, Week 7 promises even more
              excitement and intense competition. Fans eagerly anticipate the
              next matchups, wondering which team will emerge victorious and how
              these unexpected outcomes will continue to shape the league&apos;s
              narrative.
            </p>
          </div>
          <img
            src="https://t3.ftcdn.net/jpg/04/83/81/78/360_F_483817817_dVwUCdYSLnITSsOpsLr42bnUz9Xit92N.jpg"
            alt="Background Image"
            className="absolute left-0 top-0 w-full min-h-[100%] object-cover brightness-50"
          />
        </section>
        <section>
          <div className="flex flex-col xl:flex-row">
            <div className="xl:w-full overflow-x-auto md:-mx-6 lg:mx-8">
              <div className="inline-block min-w-full py-2 sm:px-4 lg:px-8 max-w-full">
                <div className="overflow-hidden px-2 ">
                  <table className="min-w-full text-center text-sm font-light shadow-lg">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-2 py-4">
                          Team
                        </th>
                        <th scope="col" className="px-2 py-4">
                          Record
                        </th>
                        <th scope="col" className="px-2 py-4">
                          Points Scored
                        </th>
                        <th scope="col" className="px-2 py-4">
                          Points Allowed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-purple-500 bg-purple-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Dragons
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          5-1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          324
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 md:px-4 font-medium">
                          238
                        </td>
                      </tr>
                      <tr className="border-b border-yellow-500 bg-yellow-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          KillaBeez
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          4-2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          298
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          251
                        </td>
                      </tr>

                      <tr className="border-b border-green-500 bg-green-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Gremlins
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          293
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          270
                        </td>
                      </tr>
                      <tr className="border-b border-red-500 bg-red-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Horny Crabs
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          265
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          295
                        </td>
                      </tr>

                      <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Blackout
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2-4
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          307
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          358
                        </td>
                      </tr>
                      <tr className="border-b border-blue-500 bg-blue-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Strawhats
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1-5
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          267
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          328
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="xl:w-full overflow-x-auto md:-mx-6 lg:mx-8 mt-4 md:mt-0">
              <div className="inline-block min-w-full py-2 sm:px-4 lg:px-8 max-w-full">
                <div className="overflow-hidden px-2 ">
                  <table className="min-w-full text-center text-sm font-light mt-8 lg:mt-0 shadow-lg border-l border-r border-t border-b border-black bg-sky-50">
                    <thead className="border-b border-black font-medium dark:border-neutral-500">
                      <tr>
                        <th
                          scope="col"
                          className="py-1 border-r border-black text-neutral-800"
                        >
                          Week
                        </th>
                        <th
                          scope="col"
                          className="py-1 border-r border-black text-neutral-800"
                        >
                          Teams
                        </th>
                        <th scope="col" className="py-1 text-neutral-800">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 1
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          KillaBeez vs Blackout <br /> Horny Crabs vs Dragons{" "}
                          <br /> Strawhats vs Gremlins
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          59-40 <br /> 26-64 <br /> 18-43
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Week 2
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Horny Crabs vs Strawhats <br /> Dragons vs Blackout{" "}
                          <br /> Killabeez vs Gremlins
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          38-24 <br /> 60-40 <br /> 41-34
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 3
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Dragons vs KillaBeez <br /> Blackout vs Strawhats{" "}
                          <br /> Gremlins vs Horny Crabs
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          8-45 <br /> 70-67 <br /> 57-43
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 4
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Dragons vs Gremlins <br /> Horny Crabs vs Blackout{" "}
                          <br /> KillaBeez vs Strawhats
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          52-39 <br /> 57-43 <br /> 48-57
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 5
                        </td>
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Gremlins vs Blackout <br /> Dragons vs Strawhats{" "}
                          <br /> KillaBeez vs Horny Crabs
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          58-42 <br /> 60-41 <br /> 41-40
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 6
                        </td>
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Gremlins vs Strawhats <br /> Dragons vs Horny Crabs{" "}
                          <br /> KillaBeez vs Blackout
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          69-60 <br /> 80-47 <br /> 64-72
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 7
                        </td>
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          TBD <br /> TBD <br /> TBD
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          TBD <br /> TBD <br /> TBD
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
