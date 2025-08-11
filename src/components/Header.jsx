import moment from "moment";
import logo from "../assets/logo.png";
import Marquee from "react-fast-marquee";
export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-5">
      <div>
        <img src={logo} alt="daragon news logo" />
      </div>
      <h6 className="text-xl text-gray-400">
        Journalism without fear and favour
      </h6>
      <div className="text-lg">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </div>
      <section className="flex gap-2 bg-gray-100 p-3 text-xl mt-5">
        <p className="text-white bg-pink-700 px-3 py-1">Latest</p>
        <Marquee>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, atque sed perspiciatis magnam neque itaque impedit
          dolores quas quam consectetur porro deleniti modi architecto
          doloremque repellat earum fugiat, temporibus dicta.
        </Marquee>
      </section>
    </div>
  );
};
