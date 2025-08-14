import Image from "next/image";
import Navigation from "./Navigation";
import UIAssets from "@/lib/ui-assets";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 text-center">
      <div className="header-content">
        <div className="flex flex-row gap-1 justify-center mb-1">
          <Image src={UIAssets.sunLogo} alt="sun" width={35} height={20} />
          <h1 className="font-serif text-2xl font-bold text-white">
            Shine.com
          </h1>
        </div>
        <p className="text-xs italic mb-4 text-blue-100">
          Your Journey to Wellness & Inner Peace
        </p>
        <Navigation />
      </div>
    </header>
  )
}