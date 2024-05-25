import Navbar from "../app/components/UI/navbar"
import Landing from "../app/components/UI/landing-page"
import Card from "./components/UI/card";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#141414] overflow-hidden">
      <Navbar />
<<<<<<< HEAD
      <Landing />
=======

      <section className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800">Home</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card
            image="/src/app/assets/stadium.png"
            title="Card 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            image="/src/app/assets/stadium.png"
            title="Card 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            image="/src/app/assets/stadium.png"
            title="Card 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            image="/src/app/assets/stadium.png"
            title="Card 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </section>
>>>>>>> da596a1748da35f5f723b411fb40db2ffaeb935f
    </main>
  );
}
