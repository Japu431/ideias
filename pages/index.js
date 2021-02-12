import Contador from "../components/Contador";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link href="/sobre">
        <a>Sobre</a>
      </Link>
      
      <Contador />
    </div>
  );
}

export default Home;
