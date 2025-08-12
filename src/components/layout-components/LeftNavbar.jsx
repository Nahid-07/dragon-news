import { useEffect, useState } from "react";

export const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-semibold">All Categories {categories.length}</h2>
      <div className="flex flex-col gap-2 mt-3">
        {categories.map((category) => (
          <button className="bg-gray-200 p-3" key={category.category_id}>
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};
