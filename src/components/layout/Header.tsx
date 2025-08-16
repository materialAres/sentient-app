"use client";

import Image from "next/image";
import Navigation from "./Navigation";
import UIAssets from "@/lib/ui-assets";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [logoCounter, setLogoCounter] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogoClick = () => {
    if (logoCounter < 2) {
      setLogoCounter(logoCounter + 1);
    } else {
      router.push("/meet-sarah");
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 text-center">
      <div className="header-content">
        <div className="flex flex-row gap-1 justify-center mb-1">
          {isClient ? (
            <button onClick={handleLogoClick}>
              <Image
                src={UIAssets.sunLogo}
                alt="sun"
                width={35}
                height={20}
                style={{ width: "auto", height: "auto" }}
              />
            </button>
          ) : (
            <div>
              <Image
                src={UIAssets.sunLogo}
                alt="sun"
                width={35}
                height={20}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          )}
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
  );
}
