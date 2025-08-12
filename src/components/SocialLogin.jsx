import { FaGoogle, FaGithub } from "react-icons/fa";
export const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-3">Login with</h2>
      <div className="flex flex-col gap-2">
        <button className="flex justify-center items-center px-4 py-1 border border-black text-base rounded-lg hover:border-blue-500 hover:text-blue-500 transition">
          <FaGoogle className="mr-2" /> Login with google
        </button>
        <button className="flex justify-center items-center px-4 py-1 border border-black text-base rounded-lg hover:border-blue-500 hover:text-blue-500 transition">
          <FaGithub className="mr-2" /> Login with github
        </button>
      </div>
    </div>
  );
};
