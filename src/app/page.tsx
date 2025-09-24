import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/backdrop.svg')" }}
    >

      <h1 className="text-white text-4xl p-10">Hello World</h1>
    
    </div>
  );
}
