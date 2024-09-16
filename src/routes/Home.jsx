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
              Week 1 kicked off with a wild start! The White Socks were in
              complete control for nearly the entire game against the Grey
              Gooses, but in the final three minutes, the Grey Gooses pulled off
              a miraculous comeback, stealing the win in the last seconds,
              33-32. Meanwhile, the Bulls lived up to their preseason hype,
              dominating the Mambas with a commanding 44-15 victory, leaving no
              doubt that they are a force to be reckoned with. Buckle up—this
              season is already delivering high-intensity drama. On to Week 2!
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
                    <thead className="border-blue-600 font-medium dark:border-neutral-500">
                      <tr className="bg-blue-600">
                        <th scope="col" className="px-2 py-4 text-white">
                          Team
                        </th>
                        <th scope="col" className="px-2 py-4 text-white">
                          Record
                        </th>
                        <th scope="col" className="px-2 py-4 text-white">
                          Points Scored
                        </th>
                        <th scope="col" className="px-2 py-4 text-white">
                          Points Allowed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-red-500 bg-red-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Bulls
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          44
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          15
                        </td>
                      </tr>
                      <tr className="border-b border-gray-500 bg-gray-300 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Grey Gooses
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1-0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          33
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          32
                        </td>
                      </tr>
                      <tr className="border-b border-white bg-white text-neutral-800 dark:border-neutral-600 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          White Socks
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0-1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          32
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          33
                        </td>
                      </tr>
                      <tr className="border-b border-black bg-black text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                          Mambas
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                          0-1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                          15
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 md:px-4 font-medium text-white">
                          44
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
                          White Socks vs Grey Gooses <br /> Bulls vs Mambas{" "}
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          32-33 <br /> 44-15
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 2
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          TBD vs TBD <br /> TBD vs TBD
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD <br /> TBD
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 3
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          TBD vs TBD <br /> TBD vs TBD <br />{" "}
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD <br /> TBD
                        </td>
                      </tr>
                      <tr className="border-b border-gray-600 text-neutral-800 ">
                        <td className="whitespace-nowrap font-medium border-r border-gray-600 ">
                          Week 4
                        </td>
                        <td className="whitespace-nowrap font-medium border-r border-gray-600">
                          TBD vs TBD <br /> TBD vs TBD{" "}
                        </td>
                        <td className="whitespace-nowrap  font-medium">
                          TBD <br /> TBD
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
