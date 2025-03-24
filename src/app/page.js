import Image from "next/image";
import bg from "../../public/background/bg.png";
import Navigation from "@/components/navigation";
import CodeBackground from "@/components/CodeBackground";
import Duck from "@/components/Duck";
import Avatar from "@/components/Avatar";


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between relative z-0">
        <Image
          src={bg}
          alt="BackgroundImage"
          fill
          className=" -z-50 w-full h-full object-cover opacity-25 "
        />
        <div className="w-full h-screen">
          {/* Model component already includes Avatar */}
          <Duck>
            <Avatar/>
          </Duck>
        </div>
        <Navigation />
      </main>
      <CodeBackground />
    </>
  );
}
