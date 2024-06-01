import { useState } from "react";

const Dsort = ({ oStats }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const sortedStats = [...oStats].sort((a, b) => {
    if (sortKey == null) return 0;
    return (a[sortKey] - b[sortKey]) * sortOrder;
  });

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder * -1);
    } else {
      setSortKey(key);
      setSortOrder(1);
    }
  };
  const filteredStats = sortedStats.filter((stat) =>
    stat.player.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2">
      <div className="mb-4 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Player Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 py-1 lg:w-1/2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 text-xs sm:text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-1 py-1 sm:px-2 sm:py-2">Team</th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">Player</th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">
                <button
                  onClick={() => handleSort("sacks")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  Sacks {sortKey === "sacks" && (sortOrder === 1 ? "↓" : "↑")}
                </button>
              </th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">
                <button
                  onClick={() => handleSort("tackles")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  Tackles{" "}
                  {sortKey === "tackles" && (sortOrder === 1 ? "↓" : "↑")}
                </button>
              </th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">
                <button
                  onClick={() => handleSort("deflections")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  Deflects{" "}
                  {sortKey === "deflections" && (sortOrder === 1 ? "↓" : "↑")}
                </button>
              </th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">
                <button
                  onClick={() => handleSort("picks")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  Picks {sortKey === "picks" && (sortOrder === 1 ? "↓" : "↑")}
                </button>
              </th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">
                <button
                  onClick={() => handleSort("dtouchdowns")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  TDs{" "}
                  {sortKey === "touchdowns" && (sortOrder === 1 ? "↓" : "↑")}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStats.map(
              ({
                team,
                player,
                sacks,
                tackles,
                deflections,
                picks,
                dtouchdowns,
              }) => {
                return (
                  <tr key={player} className="hover:bg-gray-50">
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {team}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {player}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {sacks}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {tackles}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {deflections}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {picks}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {dtouchdowns}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dsort;
