import { useLoaderData } from "react-router";
import { NewsCard } from "../components/NewsCard";

export const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
        <h2 className="text-lg font-bold">Dragon news home</h2>
        <p className="text-gray-400">News found {news.length}</p>
        <div className="flex flex-col gap-2">
            {
                news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
            }
        </div>
    </div>
  )
};
  
