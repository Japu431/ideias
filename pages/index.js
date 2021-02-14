import Contador from "../components/Contador";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <p>Link 1</p>
      <Link href="/sobre">
        <a>Sobre</a>
      </Link>

      <p>Link 2</p>
      <Link href="/tempo">
        <a>Tempo</a>
      </Link>

      <p>Link 3</p>
      <Link href="/api/tempo">
        <a>Tempo JSON</a>
      </Link>

      <p>Contador</p>
      <Contador />
    </div>
  );
}

export default Home;
