import Image from "next/image";
import HomePage from "@/components/homePage";
import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function Home() {
  return (
    <div>
      <DefaultLayout>
      <HomePage />
      </DefaultLayout>
    </div>
  );
}
