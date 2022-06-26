import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <div className="mx-auto w-4/5 py-10">
      <h1 className="text-center text-3xl font-semibold mb-7">
        Rick and Morty
      </h1>
      <CharacterList />
    </div>
  );
}
