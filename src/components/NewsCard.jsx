import { CiBookmark, CiShare2 } from "react-icons/ci";
import { GoStarFill } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router";
export const NewsCard = ({ singleNews }) => {
  return (
    <div>
      {/* author information */}
      <div className="bg-gray-50 flex justify-between items-center p-3">
        <div className="flex items-center">
          <img
            className="w-10 h-10 mr-2"
            src={singleNews.author.img}
            alt={singleNews.author.name}
          />
          <div>
            <p>{singleNews.author.name}</p>
            <p className="text-sm text-gray-400">
              {singleNews.author.published_date}
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      {/* news details */}
      <div className="my-5">
        <p className="text-xl font-semibold">{singleNews.title}</p>
        <div className="my-3">
          <img src={singleNews.image_url} alt="" />
        </div>
        <p>
          {singleNews.details.slice(1, 250)}
          <Link to={`/news/details/${singleNews._id}`} className="text-orange-500 ml-2 font-semibold">
            Read more
          </Link>
        </p>
        <hr className="my-3 text-gray-400" />
        <div className="flex justify-between ">
          <div className="flex items-center gap-2">
            <GoStarFill className="text-yellow-500" />
            <GoStarFill className="text-yellow-500" />
            <GoStarFill className="text-yellow-500" />
            <GoStarFill className="text-yellow-500" />
            <span>{singleNews.rating.number}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegEye />
            {singleNews.total_view}
          </div>
        </div>
      </div>
    </div>
  );
};
