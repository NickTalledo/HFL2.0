import Layout from "../components/Layout";
import { qbStats } from "../data/qbStats";
import QBsort from "../tools/QBsort";

function QBtable() {
  return (
    <Layout>
      <h1 className="text-5xl text-center font-bold">Quarterback Stats</h1>
      <p className="text-center text-xl mt-3">
        Click on the titles of the stats to sort them!
      </p>
      <QBsort qbStats={qbStats} />
    </Layout>
  );
}

export default QBtable;
