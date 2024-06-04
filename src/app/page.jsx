import Navbar from "../app/components/UI/navbar";
import Landing from "../app/components/UI/landing-page";
import Card from "./components/UI/card";
import DropdownFilter from "./components/UI/dropdownFilter";
import PaymentPage from "./components/UI/payment-page";
import SignIn from "./components/UI/login";
import Register from "./components/UI/register";
import supabase from "@/lib/supabase";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
};

export default function Home() {
  return (
    <main className="w-full h-full bg-[#141414] overflow-hidden">
      <LandingPage />
      <PaymentPage />
    </main>
  );
}
