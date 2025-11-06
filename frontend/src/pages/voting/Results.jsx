import { useEffect, useState } from "react";
import axios from "axios";

const Results = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/v1/candidates/vote/count");
        const data = res.data.data || [];
        setCandidates(data);
      } catch (err) {
        console.error(err);
        setMessage("Failed to fetch results");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  // calculate total votes
  const totalVotes = candidates.reduce((sum, c) => sum + (c.voteCount || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-400 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Voting Results
        </h2>

        {message && (
          <p className="text-center text-red-600 font-semibold">{message}</p>
        )}

        {loading ? (
          <p className="text-center text-gray-600">Loading results...</p>
        ) : candidates.length === 0 ? (
          <p className="text-center text-gray-600">No candidates found</p>
        ) : (
          <div className="space-y-6">
            {candidates.map((candidate) => {
              const percentage =
                totalVotes > 0
                  ? ((candidate.voteCount / totalVotes) * 100).toFixed(1)
                  : 0;

              return (
                <div key={candidate._id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700">
                      {candidate.name} ({candidate.party})
                    </span>
                    <span className="text-sm text-gray-600">
                      {percentage}% ({candidate.voteCount} votes)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-indigo-600 h-4 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
