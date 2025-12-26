export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar Pokemon"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button onClick={onSearch}>Buscar</button>
    </div>
  );
}
