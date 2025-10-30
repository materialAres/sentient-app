import UIAssets from "@/lib/ui-assets";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-4 md:p-16">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <div className="flex flex-col md:flex-row gap-1 mb-4 md:mb-0 items-center md:items-start">
        <p className="text-xl mb-6">This feeling doesn't seem to exist, try to come back later.</p>
        <Image src={UIAssets.emoji} alt="emoji" width={37} height={37} style={{ width: '37px', height: '37px' }} />
      </div>
      <Link href="/" className="vintage-link text-base mx-1">
        Go Home
      </Link>
    </main>
  );
}
