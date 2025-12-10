import FlashCardList from "./components/FlashCardList";
import flashcards from "./Data.js";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl text-center font-bold mb-6">
        Hoofdsteden Flashcards
      </h1>

      <FlashCardList cards={flashcards} />
    </div>
  );
}

export default App;

