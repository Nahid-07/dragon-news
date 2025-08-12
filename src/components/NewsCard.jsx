import { CiBookmark, CiShare2 } from "react-icons/ci";

export const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
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
            <p className="text-sm text-gray-300">{singleNews.author.published_date}</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      {/* news details */}
      <div>
        <p className="text-xl font-semibold">{singleNews.title}</p>
        <div>
            <img src={singleNews.image_url} alt="" />
        </div>
        <p>
            {singleNews.details}
        </p>
        <div>
            
        </div>
      </div>
    </div>
  );
};
