import { Header } from "../components/Header";
import { LeftNavbar } from "../components/layout-components/LeftNavbar";
import { RightNavbar } from "../components/layout-components/RightNavbar";
import Navbar from "../components/NavBar";

export const HomeLayOut = () => {
  return (
    <div>
      <header className="flex w-11/12 mx-auto justify-center items-center overflow-hidden">
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 md:grid grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftNavbar/>
        </aside>
        <section className="col-span-6">Middle content</section>
        <aside className="col-span-3">
          <RightNavbar/>
        </aside>
      </main>
    </div>
  );
};
