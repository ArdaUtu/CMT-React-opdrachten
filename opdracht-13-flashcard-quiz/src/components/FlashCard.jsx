import { useState } from "react";

function FlashCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-yellow-100 border-2 p-6 rounded-2xl hover:bg-zinc-100 hover:text-gray-950"
      onClick={() => setShowAnswer(!showAnswer)}
    >
      {showAnswer ? answer : question}
    </div>
  );
}

export default FlashCard;
