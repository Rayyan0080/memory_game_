import React from "react";
import { toolsData } from "../data/gameData";

const MemoryBoard = ({ activeCardId, onCardClick, disableInput }) => {
  return (
    <div className="memory-board" role="grid" aria-label="Memory Game Board">
      {toolsData.map((tool) => (
        <button
          key={tool.id}
          className={`memory-card ${activeCardId === tool.id ? "active" : ""}`}
          onClick={() => onCardClick(tool.id)}
          disabled={disableInput}
          aria-label={tool.name}
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};

export default MemoryBoard;
