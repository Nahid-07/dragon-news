import { Header } from "../components/Header";
import Navbar from "../components/NavBar";

export const HomeLayOut = () => {
  return (
    <div>
      <header className="flex w-11/12 mx-auto justify-center items-center">
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12 gap-3">
        <aside className="col-span-3">left side</aside>
        <section className="col-span-6">Middle content</section>
        <aside className="col-span-3">right side content</aside>
      </main>
    </div>
  );
};
