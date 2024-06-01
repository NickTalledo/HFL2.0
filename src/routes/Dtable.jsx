import Layout from "../components/Layout";
import { oStats } from "../data/oStats";
import Dsort from "../tools/Dsort";

function Dtable() {
  return (
    <Layout>
      <h1 className="text-5xl text-center font-bold">Defensive Stats</h1>
      <p className="text-center text-xl mt-3">
        Click on the titles of the stats to sort them!
      </p>
      <Dsort oStats={oStats} />
    </Layout>
  );
}

export default Dtable;
