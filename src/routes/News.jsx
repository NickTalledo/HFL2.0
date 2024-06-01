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
            <strong>Week 1 5/31/2024:</strong> The Redskins, drafted by Stephen
            Aspromonte, they are viewed as the clear underdogs this season. Many
            believe that Aspromonte&apos;s questionable drafting choices have
            left the team with a significant uphill battle, landing them in Tier
            C. Meanwhile, the Bulls are set to battle T in a game that could set
            the tone for both teams. The early power rankings place Penjamin
            Bros, T, and Seamen in Tier A, with the Bulls and Blue Chews
            trailing in Tier B. Aspromonte&apos;s Redskins will need a miracle
            to climb out of the bottom tier and prove their critics wrong.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default News;
