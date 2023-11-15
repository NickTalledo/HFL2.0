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
              As we head into the playoffs, the league standings have set the
              stage for some exciting postseason action. Here&apos;s a recap of
              the playoff seeds:
              <br /> <br />
              1. Dragons - Dominating the league with a 7-2 record, the Dragons
              enter the playoffs as the top seed. Their consistent performance
              throughout the season makes them a formidable contender.
              <br />
              2. Gremlins - Securing the second seed, the Gremlins have
              demonstrated their strength with an impressive record. Their point
              differential has earned them this high seed, and they&apos;ll be
              looking to make a strong playoff run.
              <br />
              3. Horny Crabs - With the same record as the Gremlins, the Horny
              Crabs claim the third seed. They&apos;ve shown their resilience
              and potential, and they&apos;ll be eager to prove themselves in
              the playoffs.
              <br />
              4. KillaBeez - Despite a challenging stretch of losses, the
              KillaBeez manage to secure the fourth seed. They&apos;ll be
              seeking redemption and aiming to regain their winning form in the
              postseason.
              <br />
              5. Blackout - Barely making the playoffs as the fifth seed,
              Blackout has an opportunity to make a surprise playoff run.
              They&apos;ll be looking to turn things around and make their mark.
              <br /> <br />
              With the playoffs on the horizon, anticipation is high, and fans
              can expect intense matchups and thrilling moments as these teams
              compete for the championship title. Stay tuned for the excitement
              and drama of the postseason!
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
                          7-2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          503
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 md:px-4 font-medium">
                          362
                        </td>
                      </tr>
                      <tr className="border-b border-green-500 bg-green-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Gremlins
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          5-4
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          477
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          422
                        </td>
                      </tr>
                      <tr className="border-b border-red-500 bg-red-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Horny Crabs
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          5-4
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          416
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          432
                        </td>
                      </tr>
                      <tr className="border-b border-yellow-500 bg-yellow-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          KillaBeez
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          4-5
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          441
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          452
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Blackout
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-6
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          453
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          545
                        </td>
                      </tr>
                      <tr className="border-b border-blue-500 bg-blue-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Strawhats
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-6
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          412
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          475
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
                          8-45 <br /> 70-67 <br /> 43-57
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
                          Gremlins vs Horny Crabs <br /> Dragons vs Blackout{" "}
                          <br /> KillaBeez vs Horny Crabs
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          49-34 <br /> 80-35 <br /> 33-54
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 8
                        </td>
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Horny Crabs vs Blackout <br /> KillaBeez vs Strawhats
                          <br /> Dragons vs Gremlins
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          63-55 <br /> 52-55 <br /> 60-43
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 9
                        </td>
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          KillaBeez vs Gremlins
                          <br /> Blackout vs Strawhats <br /> Dragons vs
                          Strawhats
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          58-92 <br /> 56-44 <br /> 39-46
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
