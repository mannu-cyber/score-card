import React, { useEffect, useState } from "react";
import "./ScoreCard.css";


function ScoreCard() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeambScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const playMusic = () => {
    const audio = new Audio("/music.m4a");
    audio.play();
  };

  useEffect(() => {
    if (teamAScore === 10) {
      setWinner("Team A");
    } else if (teamBScore === 10) {
      setWinner("Team B");
    }
  }, [teamAScore, teamBScore]);

  const handleIncrement = (team) => {
    if (team === "A") {
      setTeamAScore(teamAScore + 1);
      if (teamAScore + 1 === 10) {
        playMusic();
      }
    } else if (team === "B") {
      setTeambScore(teamBScore + 1);
      if (teamBScore + 1 === 10) {
        playMusic();
      }
    }
  };

  const handleDecrement = (team) => {
    if (team === "A" && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === "B" && teamBScore > 0) {
      setTeambScore(teamBScore - 1);
    }
  };

  const handleReset = () => {
    setTeamAScore(0);
    setTeambScore(0);
    setWinner(null);
    audio.paush();
  };

  return (
    <>
      <div className="container">
        <h1>Score Card</h1>
        <p className="winner">{winner && <h3>{winner} is the winner!</h3>}</p>

        <div className="team-container">
          <div className="team teamA">
            <h1>Team A</h1>

            <span id="">{teamAScore}</span>
            <div className="button-container">
              <button onClick={() => handleIncrement("A")} type="button">
                {" "}
                ➕
              </button>
              <button onClick={() => handleDecrement("A")} type="button">
                ➖
              </button>
            </div>
          </div>
          <div className="team teamB">
            <h1>Team B</h1>
            <span> {teamBScore}</span>

            <div className="button-container">
              <button onClick={() => handleIncrement("B")} type="button">
                ➕
              </button>
              <button onClick={() => handleDecrement("B")} type="button">
                ➖
              </button>
            </div>
          </div>
        </div>

        <button onClick={handleReset} className="reset">
          Reset🔄️
        </button>
      </div>
    </>
  );
}

export default ScoreCard;
