import moment from "moment";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-5">
      <div>
        <img className="w-[300px]" src={logo} alt="daragon news logo" />
      </div>
      <h6 className="text-xl text-gray-400">
        Journalism without fear and favour
      </h6>
      <div className="text-lg">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </div>
      
    </div>
  );
};
