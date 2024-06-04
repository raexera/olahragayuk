import Navbar from "../app/components/UI/navbar";
import Landing from "../app/components/UI/landing-page";
import Card from "./components/UI/card";
import DropdownFilter from "./components/UI/dropdownFilter";
import BookingPage from "./components/UI/booking-page";
import UserProfilePage from "./components/UI/user-profile";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
};

export default function Home() {
  const kotaOptions = ["Pilih Kota", "Jakarta", "Bandung", "Surabaya"];
  const sportsOptions = ["Sports", "Sepak Bola", "Basket", "Tenis"];

  return (
    <main className="w-full h-full bg-[#141414] overflow-hidden">
      <LandingPage />
      <BookingPage />
      <UserProfilePage />

      <div className="bg-[#888888] h-full mt-4 rounded-tl-2xl rounded-tr-2xl">
        <section className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-gray-800">Home</h1>
          <div className="flex mb-8">
            <DropdownFilter options={kotaOptions} label="Pilih Kota" />
            <DropdownFilter options={sportsOptions} label="Sports" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
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
      </div>
    </main>
  );
}
