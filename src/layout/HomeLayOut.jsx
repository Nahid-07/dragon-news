import { Header } from "../components/Header"
import Navbar from "../components/NavBar"


export const HomeLayOut = () => {
  return (
    <div>
        <header className="flex w-11/12 mx-auto justify-center items-center">
            <Header/>
        </header>
        <nav>
          <Navbar/>
        </nav>
        <main></main>
    </div>
  )
}
