import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="w-full flex items-center justify-between mb-5 bg-gray-200 py-3 px-6 rounded-full">
      <p>Page {props.page}</p>
      <button
        type="button"
        onClick={() => props.setPage(props.page + 1)}
        className="flex px-5 py-2.5 font-medium bg-white hover:bg-black hover:text-white text-blue-500 rounded-full text-sm"
      >
        Siguiente
      </button>
    </header>
  );
}

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function get() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    get();
  }, [page]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (characters) {
    return (
      <>
        <NavPage page={page} setPage={setPage} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      </>
    );
  }

  return <div>Bienvenido</div>;
}
