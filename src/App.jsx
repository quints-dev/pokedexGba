import Pokedex from "./components/pokedex";
import PokedexShell from "./components/pokedexShell";

export default function App() {
  return (
    <main>
      <PokedexShell>
        <Pokedex />
      </PokedexShell>
    </main>
  );
}
