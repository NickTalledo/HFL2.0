import { useState } from "react";

const QBsort = ({ qbStats }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const sortedStats = [...qbStats].sort((a, b) => {
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
    <div className="p-2 h-screen">
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
                  onClick={() => handleSort("completions")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  Comp{" "}
                  {sortKey === "completions" && (sortOrder === 1 ? "↓" : "↑")}
                </button>
              </th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">
                <button
                  onClick={() => handleSort("Ryards")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  Rush Yards{" "}
                  {sortKey === "Ryards" && (sortOrder === 1 ? "↓" : "↑")}
                </button>
              </th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">
                <button
                  onClick={() => handleSort("Pyards")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  Pass Yards{" "}
                  {sortKey === "Pyards" && (sortOrder === 1 ? "↓" : "↑")}
                </button>
              </th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">
                <button
                  onClick={() => handleSort("Rtouchdowns")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  Rush TDs{" "}
                  {sortKey === "Rtouchdowns" && (sortOrder === 1 ? "↓" : "↑")}
                </button>
              </th>
              <th className="px-1 py-1 sm:px-2 sm:py-2">
                <button
                  onClick={() => handleSort("Ptouchdowns")}
                  className="hover:text-blue-500 focus:outline-none text-xs sm:text-sm"
                >
                  Pass TDs{" "}
                  {sortKey === "Ptouchdowns" && (sortOrder === 1 ? "↓" : "↑")}
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
            </tr>
          </thead>
          <tbody>
            {filteredStats.map(
              ({
                team,
                player,
                completions,
                Ryards,
                Pyards,
                Rtouchdowns,
                Ptouchdowns,
                picks,
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
                      {completions}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {Ryards}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {Pyards}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {Rtouchdowns}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {Ptouchdowns}
                    </td>
                    <td className="px-1 py-1 sm:px-2 sm:py-2 text-center">
                      {picks}
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

export default QBsort;
