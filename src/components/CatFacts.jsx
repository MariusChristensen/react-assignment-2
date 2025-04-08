import React, { useEffect, useState } from "react";

const CatFacts = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://catfact.ninja/facts?limit=5");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFacts(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <div className="section cat-facts-section">
      <div className="component-content">
        <h2>Cat Facts</h2>

        {loading && <p className="loading">Loading cat facts...</p>}
        {error && (
          <div className="error">
            <p>Error: {error}</p>
            <button onClick={fetchFacts}>Try Again</button>
          </div>
        )}

        {!loading && !error && (
          <ul className="facts-list">
            {facts.map((fact, index) => (
              <li key={index} className="fact-item">
                {fact.fact}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CatFacts;
