import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [intern, setIntern] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/intern')
      .then(res => res.json())
      .then(setIntern);

    fetch('http://localhost:5000/api/leaderboard')
      .then(res => res.json())
      .then(setLeaderboard);
  }, []);

  return (
    <div className="app">
      <h1>Intern Dashboard</h1>
      {intern && (
        <div className="card">
          <p><strong>Name:</strong> {intern.name}</p>
          <p><strong>Referral Code:</strong> {intern.referralCode}</p>
          <p><strong>Donations Raised:</strong> ₹{intern.donationRaised}</p>
        </div>
      )}
      <h2>Rewards</h2>
      <ul>
        <li>🎁 Bronze Badge – ₹1000</li>
        <li>🎁 Silver Badge – ₹3000</li>
        <li>🎁 Gold Badge – ₹5000</li>
      </ul>
      <h2>Leaderboard</h2>
      <table>
        <thead><tr><th>Name</th><th>Donations</th></tr></thead>
        <tbody>
          {leaderboard.map((entry, i) => (
            <tr key={i}><td>{entry.name}</td><td>₹{entry.donationRaised}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
