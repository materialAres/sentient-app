import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 text-center">
      <div className="header-content">
        <h1 className="font-serif text-2xl font-bold mb-1 text-white">
          Shine.com
        </h1>
        <p className="text-xs italic mb-4 text-blue-100">
          Your Journey to Wellness & Inner Peace
        </p>
        <Navigation />
      </div>
    </header>
  )
}