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
              Week 4 was packed with thrilling action and unexpected outcomes.
              The highly anticipated clash between the undefeated Penjamin Bros
              and Bulls ended with the Penjamin Bros securing a 66-47 victory,
              proving their dominance once again. The Seamen, missing some key
              starters, fell to the Blue Chews 27-47, giving the Blue Chews
              their first win of the season. In a dramatic upset, the Redskins
              narrowly lost to the Men in Black in a nail-biting finish. The
              game could have gone either way until the very last second, but
              the Men in Black emerged victorious with a 42-41 win. As we move
              into Week 5, the league dynamics continue to shift, promising more
              excitement ahead.
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
                          4-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          223
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 md:px-4 font-medium">
                          116
                        </td>
                      </tr>
                      <tr className="border-b border-gray-500 bg-gray-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Bulls
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          3-1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          191
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          162
                        </td>
                      </tr>
                      <tr className="border-b border-red-500 bg-red-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Redskins
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          2-2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          157
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          150
                        </td>
                      </tr>
                      <tr className="border-b border-white bg-white text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Seamen
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1-3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          138
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          176
                        </td>
                      </tr>
                      <tr className="border-b border-blue-500 bg-blue-300 text-neutral-800 dark:border-neutral-600 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Blue Chews
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1-3
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          131
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          174
                        </td>
                      </tr>
                      <tr className="border-b border-black bg-black text-neutral-800">
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          Men in Black
                        </td>
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          1-3
                        </td>
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          122
                        </td>
                        <td className="whitespace-nowrap text-white px-6 py-4 font-medium">
                          184
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
