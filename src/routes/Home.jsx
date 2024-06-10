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
            <img src="HFL-Logo.png" alt="HFL Logo" height={350} width={350} />
            <p className="max-w-[400px] text-center text-xl text-white sm:max-w-[600px] mx-6 lg:mx-0 mb-8">
              The Penjamin Bros continued their dominant streak by thrashing the
              Men in Black 58-26. The game ended prematurely as the Men in Black
              chose to forfeit before the completion of the third quarter,
              unable to get anything going against the Penjamin Bros&apos;
              relentless assault. In an electrifying shootout, the Redskins
              defeated the Seamen 55-48. Trailing by two scores with the Seamen
              starting the second half with the ball, the Redskins mounted an
              impressive comeback. Redskins are proving their doubters wrong,
              showing their resilience and ability to perform under pressure.
              The Bulls secured a victory over the Blue Chews with a final score
              of 56-47. Despite the close end score, the Bulls maintained
              control throughout the game, never allowing the Blue Chews to
              close the gap significantly. Their consistent performance is
              keeping them in strong contention early in the season. Week 2 has
              been full of surprises and standout performances. As we move into
              Week 3, the competition is heating up, and fans can look forward
              to more intense matchups and thrilling moments.
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
                  <table className="min-w-full text-center text-sm font-light shadow-xl">
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
                      <tr className="border-b border-green-500 bg-green-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Penjamin Bros
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          105
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 md:px-4 font-medium">
                          52
                        </td>
                      </tr>
                      <tr className="border-b border-gray-500 bg-gray-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Bulls
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          104
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          74
                        </td>
                      </tr>
                      <tr className="border-b border-red-500 bg-red-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Redskins
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          94
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          68
                        </td>
                      </tr>
                      <tr className="border-b border-blue-500 bg-blue-300 text-neutral-800 dark:border-neutral-600 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Blue Chews
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0-2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          67
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          95
                        </td>
                      </tr>
                      <tr className="border-b border-white bg-white text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Seamen
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0-2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          74
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          102
                        </td>
                      </tr>
                      <tr className="border-b border-black bg-black text-neutral-800">
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          Men in Black
                        </td>
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          0-2
                        </td>
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          53
                        </td>
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          106
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
                          Penjamin Bros vs Seamen <br /> Blue Chews vs Redskins{" "}
                          <br /> Bulls vs Men in Black
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          47-26 <br /> 20-39 <br /> 48-27
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 2
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Penjamin Bros vs Men in Black <br /> Redskins vs
                          Seamen <br /> Bulls vs Blue Chews
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          58 - 26 <br /> 55-48 <br /> 56-47
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 3
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          TBD vs TBD <br /> TBD vs TBD <br /> TBD vs TBD
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD - TBD <br /> TBD - TBD <br /> TBD - TBD
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 4
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          TBD vs TBD <br /> TBD vs TBD <br /> TBD vs TBD
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD - TBD <br /> TBD - TBD <br /> TBD - TBD
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 5
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          TBD vs TBD <br /> TBD vs TBD <br /> TBD vs TBD
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD - TBD <br /> TBD - TBD <br /> TBD - TBD
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
