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
            <img src="HFLlogo.jpeg" alt="HFL Logo" height={300} width={300} />
            <p className="max-w-[400px] text-center text-xl text-white sm:max-w-[600px] mx-8 lg:mx-0 mb-8">
              Welcome to the start of a thrilling new season! As we kick off
              this fresh chapter, get ready for a season filled with intense
              matchups, breathtaking plays, and unforgettable moments. Our teams
              are back in action, each with their eyes set on glory. Whether
              you&apos;re a die-hard fan or new to the game, join us in
              celebrating the spirit of competition, camaraderie, and the
              pursuit of excellence. Stay tuned for exciting games, dramatic
              comebacks, and the journey towards crowning our next champions.
              Let the games begin, and may the best team prevail in this season
              of excitement and sportsmanship!
            </p>
          </div>
          <img
            src="https://t3.ftcdn.net/jpg/04/83/81/78/360_F_483817817_dVwUCdYSLnITSsOpsLr42bnUz9Xit92N.jpg"
            alt="Background Image"
            className="absolute left-0 top-0 w-full min-h-[100%] object-cover brightness-50"
          />
        </section>
        <section>
          <div className="flex flex-col sm:flex-row">
            <div className="lg:w-2/5 overflow-x-auto sm:-mx-6 lg:mx-8">
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
                      <tr className="border-b border-blue-500 bg-blue-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Strawhats
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                      </tr>
                      <tr className="border-b border-purple-500 bg-purple-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Dragons
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                      </tr>
                      <tr className="border-b border-green-500 bg-green-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Gremlins
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                      </tr>
                      <tr className="border-b border-red-500 bg-red-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Horny Crabs
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                      </tr>
                      <tr className="border-b border-yellow-500 bg-yellow-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          KillaBeez
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Blackout
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 overflow-x-auto sm:-mx-6 lg:mx-8">
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
                          KillaBeez vs Blackout <br /> Rhinos vs Dragons <br />{" "}
                          Strawhats vs Gremlins
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD <br /> TBD <br /> TBD
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Week 2
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          TBD <br /> TBD <br /> TBD
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          TBD <br /> TBD <br /> TBD
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 3
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          TBD <br /> TBD <br /> TBD
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          TBD <br /> TBD <br /> TBD
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600  text-neutral-800">
                        <td className="whitespace-nowrap  font-medium border-r border-gray-600">
                          Week 4
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          TBD <br /> TBD <br /> TBD
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD <br /> TBD <br /> TBD
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
