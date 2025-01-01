import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1 className="text-center text-xl font-bold">404 Page Not Found :(</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Click here to go to home page
        </Link>
      </div>
    </div>
  );
}
