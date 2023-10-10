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
              Week 4 brought about some surprising results and intense
              competition! The Dragons showcased their prowess by defeating the
              Gremlins with a score of 52-39. Their superior gameplay throughout
              the match allowed them to secure a convincing victory.
              <br />
              The Horny Crabs continued their winning streak by defeating
              Blackout, making it their third consecutive win. Although the
              Crabs had a slow start, Blackout&apos;s messy offense
              couldn&apos;t outscore them, leading to another triumph for the
              Horny Crabs.
              <br />
              In a stunning upset, the lowest-ranked team, the Strawhats,
              managed to beat the previously undefeated KillaBeez. The game
              remained close throughout, and it ended dramatically with the
              KillaBeez throwing a pick 6 in the red zone, resulting in a 57-48
              victory for the Strawhats.
              <br />
              Week 4 proved that anything can happen on the field, and teams are
              constantly evolving. With each match, the excitement and
              anticipation for the next game only grow. Stay tuned for more
              thrilling moments in the upcoming weeks of the season!
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
                      <tr className="border-b border-yellow-500 bg-yellow-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          KillaBeez
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          193
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          139
                        </td>
                      </tr>
                      <tr className="border-b border-purple-500 bg-purple-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Dragons
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          184
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 md:px-4 font-medium">
                          150
                        </td>
                      </tr>

                      <tr className="border-b border-red-500 bg-red-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Horny Crabs
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          178
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          174
                        </td>
                      </tr>
                      <tr className="border-b border-green-500 bg-green-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Gremlins
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1-3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          166
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          168
                        </td>
                      </tr>
                      <tr className="border-b border-blue-500 bg-blue-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Strawhats
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1-3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          166
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          199
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Blackout
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1-3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          193
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          243
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
                          TBD <br /> TBD <br /> TBD
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD <br /> TBD <br /> TBD
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 6
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
