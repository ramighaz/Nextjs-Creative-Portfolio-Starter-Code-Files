import Image from "next/image";
import bg from "../../public/background/bg.png";
import RModel from "@/components/RModel";
import Avatar from "@/components/Avatar";
import Navigation from "@/components/navigation";
import CodeBackground from "@/components/CodeBackground";


export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between relative z-0">
      <Image src={bg} alt="BackgroundImage" fill className=" -z-50 w-full h-full object-cover opacity-25 "/>
      <div className=" w-full h-screen"> 
        
        <RModel>
          <Avatar />
        </RModel>
      </div>
        <Navigation /> 
    </main>
    <CodeBackground/>
    </>
  );
}