import Navbar from "../app/components/UI/navbar"
import Landing from "../app/components/UI/landing-page"

export default function Home() {
  return (
    <main className="w-full h-full bg-[#141414] overflow-hidden">
      <Navbar />
      <Landing />
    </main>
  );
}
