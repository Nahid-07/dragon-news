import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const FindUsOn = () => {
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-2xl mb-10">Find Us On</h2>
      <div className="flex flex-col border border-gray-200 rounded-md">
        <button className="bg-gray-100 p-3 flex justify-start items-center gap-3">
          <div className="bg-gray-300 p-3 rounded-full flex items-center justify-center">
            <FaFacebook className="text-blue-600" />
          </div>
          Facebook
        </button>
        <button className="bg-gray-100 p-3 flex justify-start items-center gap-3 border-t border-gray-200 border-b">
          <div className="bg-gray-300 p-3 rounded-full flex items-center justify-center">
            <FaInstagram className="text-orange-400" />
          </div>
          Twitter
        </button>
        <button className="bg-gray-100 p-3 flex justify-start items-center gap-3"><div className="bg-gray-300 p-3 rounded-full flex items-center justify-center">
            <FaTwitter className="text-black" />
          </div>Instagram</button>
      </div>
    </div>
  );
};
