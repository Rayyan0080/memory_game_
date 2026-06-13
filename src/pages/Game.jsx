import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MemoryBoard from "../components/MemoryBoard";
import { toolsData, getSequenceLength } from "../data/gameData";

const Game = ({ settings, setLastScore }) => {
  const navigate = useNavigate();
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [activeCardId, setActiveCardId] = useState(null);
  const [status, setStatus] = useState("Get Ready...");
  const [isShowingSequence, setIsShowingSequence] = useState(true);
  const targetLength = getSequenceLength(settings.level);

  // Generate sequence on mount
  useEffect(() => {
    const newSeq = Array.from({ length: targetLength }, () => {
      return toolsData[Math.floor(Math.random() * toolsData.length)].id;
    });
    setSequence(newSeq);
    playSequence(newSeq);
  }, [settings.level]);

  const playSequence = async (seq) => {
    setIsShowingSequence(true);
    setStatus("Memorize the sequence!");

    // Initial pause
    await new Promise((r) => setTimeout(r, 1000));

    for (let i = 0; i < seq.length; i++) {
      setActiveCardId(seq[i]);
      await new Promise((r) => setTimeout(r, 600)); // Flash duration
      setActiveCardId(null);
      await new Promise((r) => setTimeout(r, 300)); // Gap between flashes
    }

    setIsShowingSequence(false);
    setStatus("Your turn! Repeat the pattern.");
  };

  const handleCardClick = (id) => {
    if (isShowingSequence) return;

    const newPlayerSeq = [...playerSequence, id];
    setPlayerSequence(newPlayerSeq);

    // Quick flash for user click feedback
    setActiveCardId(id);
    setTimeout(() => setActiveCardId(null), 200);

    const currentIndex = newPlayerSeq.length - 1;

    // Loss Detection
    if (newPlayerSeq[currentIndex] !== sequence[currentIndex]) {
      setLastScore(currentIndex); // Score is how many they got right
      setStatus("System Failure! Incorrect Part.");
      setTimeout(() => navigate("/results"), 1500);
      return;
    }

    // Win Detection
    if (newPlayerSeq.length === sequence.length) {
      setLastScore(sequence.length);
      setStatus("Repair Successful! Perfect Memory.");
      setTimeout(() => navigate("/results"), 1500);
    }
  };

  return (
    <div className="game-container">
      <h2>{settings.level} Level</h2>
      <div className="status-text" aria-live="polite">
        {status}
      </div>
      <p>
        Progress: {playerSequence.length} / {targetLength}
      </p>

      <MemoryBoard
        activeCardId={activeCardId}
        onCardClick={handleCardClick}
        disableInput={isShowingSequence}
      />
    </div>
  );
};

export default Game;
