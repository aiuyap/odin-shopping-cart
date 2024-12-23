import { Button } from "./ui/button";

export function Home() {
  return (
    <div className="bg-home-bg bg-cover bg-center">
      <div className="px flex min-h-screen flex-col items-center justify-center gap-8 bg-black bg-opacity-60 px-10">
        <h1 className="text-4xl font-bold text-white">Shoppee!</h1>
        <p className="text-lg tracking-wide text-white">
          Discover the Best Deals, Trendy Styles, and Unmatched Quality—All in
          One Place.
        </p>
        <Button>Shop now!</Button>
      </div>
    </div>
  );
}
