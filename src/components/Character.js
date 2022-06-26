export default function Character({ character }) {
  return (
    <div>
      <h3 className="text-center text-xl mb-4">{character.name}</h3>
      <img
        className="mx-auto rounded-full transform duration-300 hover:scale-105"
        src={character.image}
        alt={character.name}
      />
    </div>
  );
}
