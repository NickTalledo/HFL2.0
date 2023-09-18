import Layout from "../components/Layout";
import { oStats } from "../data/oStats";
import Osort from "../tools/Osort";

function Otable() {
  return (
    <Layout>
      <h1 className="text-5xl text-center font-bold">Offensive Stats</h1>
      <p className="text-center text-xl mt-3">
        Click on the titles of the stats to sort them!
      </p>
      <Osort oStats={oStats} />
    </Layout>
  );
}

export default Otable;
