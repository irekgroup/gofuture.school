import { useSignal } from "@preact/signals";

import Hero from "../components/Hero.tsx";

import Footer from "../components/Footer.tsx"

export default function Home() {

  return (
    <div>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

