import Link from "next/link";

function Tempo(props) {
  console.log("> Dynamic Frontend < ");
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div>
        <div>{dynamicDateString} (Dinâmico)</div>

        <div>{props.staticDateString} (Estático)</div>
      </div>
    </div>
  );
}

export function getStaticProps() {
  console.log("> Passando pelo getStaticProps() < ");

  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString,
    },
    revalidate: 10,
  };
}

export default Tempo;
