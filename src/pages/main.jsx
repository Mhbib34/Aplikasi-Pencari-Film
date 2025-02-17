import Card from "../components/Fragments/Card";
import SearchBar from "../components/layout/SearchBar";
import { useState, useEffect } from "react";
export default function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=99aca4ec&s=Transformers`
        );
        if (!response) {
          throw new Error("Filed to get data!");
        }
        const data = await response.json();
        setData(data.Search);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <SearchBar />
      <div className="mt-10 flex flex-wrap justify-between gap-5 lg:px-20 px-5">
        {data.map((item, index) => {
          if (item.Poster !== "N/A") {
            return <Card item={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
}
