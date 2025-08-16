import { Link, useLoaderData } from "react-router"
import { Header } from "../components/Header"
import { RightNavbar } from "../components/layout-components/RightNavbar"
import Navbar from "../components/NavBar";


export const NewsDetails = () => {
    const data = useLoaderData();
    const Newsdetails = data.data[0]
  return (
    <div>
        <header>
            <Header></Header>
            <Navbar></Navbar>
        </header>
        <main className="w-11/12 mx-auto md:grid grid-cols-12 gap-5 my-10">
            <section className="col-span-9">
                <h2 className="text-lg font-semibold mb-3">Dragon News</h2>
                {/* news details div */}
                <div>
                    <div>
                        <img className="w-full" src={Newsdetails.image_url} alt="" />
                    </div>
                    <h1 className="mt-3 font-bold text-2xl">{Newsdetails.title}</h1>
                    <p className="my-3 text-gray-400 text-lg">{Newsdetails.details}</p>
                    <Link to={`/category/${Newsdetails.category_id}`} className="bg-pink-600 px-5 py-2 text-white">Back to category</Link>
                </div>
            </section>
            <aside className="col-span-3">
                <RightNavbar></RightNavbar>
            </aside>
        </main>
    </div>
  )
}
