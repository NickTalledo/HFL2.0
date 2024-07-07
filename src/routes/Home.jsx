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
              Week 6 brought some decisive victories and intense matchups. The
              Bulls obliterated the Redskins with a 36-0 victory, although
              it&apos;s worth noting the Redskins were missing some key players.
              The Men in Black showcased their dominance by defeating the Seamen
              40-12. In a thrilling nailbiter, the Blue Chews managed to edge
              out the Penjamin Bros 36-29, despite the Penjamin Bros playing
              without their star quarterback and first-round pick. As we move
              into Week 7, the stakes are higher, and the competition is fiercer
              than ever.
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
                          4-2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          252
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 md:px-4 font-medium">
                          152
                        </td>
                      </tr>
                      <tr className="border-b border-gray-500 bg-gray-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Bulls
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          4-2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          267
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          214
                        </td>
                      </tr>
                      <tr className="border-b border-red-500 bg-red-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Redskins
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          157
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          186
                        </td>
                      </tr>
                      <tr className="border-b border-blue-500 bg-blue-300 text-neutral-800 dark:border-neutral-600 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Blue Chews
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          202
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          231
                        </td>
                      </tr>
                      <tr className="border-b border-black bg-black text-neutral-800">
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          Men in Black
                        </td>
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          2-4
                        </td>
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          190
                        </td>
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          231
                        </td>
                      </tr>
                      <tr className="border-b border-white bg-white text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Seamen
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2-4
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          202
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          256
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
                          47 - 26 <br /> 20 - 39 <br /> 48 - 27
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
                          58 - 26 <br /> 55 - 48 <br /> 56 - 47
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 3
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Men in Black vs Seamen <br /> Bulls vs Redskins <br />{" "}
                          Penjamin Bros vs Blue Chews
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          27 - 37 <br /> 40 - 22 <br /> 52 - 17
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 4
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Penjamin Bros vs Bulls <br /> Seamen vs Blue Chews{" "}
                          <br /> Redskins vs Men in Black
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          66 - 47 <br /> 27 - 47 <br /> 41 - 42
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 5
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Blue Chews vs Men in Black <br /> Bulls vs Seamen{" "}
                          <br /> Penjamin Bros vs Redskins
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD - TBD <br /> TBD - TBD <br /> FF - W
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 6
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          Bulls vs Redskins <br /> Seamen vs TBD <br /> Penjamin
                          Bros vs Blue Chews
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          36 - 0 <br /> 40 - 12 <br /> 29 - 36
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 7
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
