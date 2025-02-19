import Card from "../components/Fragments/Card";
import SearchBar from "../components/layout/SearchBar";
import { useState, useEffect } from "react";

export default function Main() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("Transformers");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=99aca4ec&s=${query}`
        );
        if (!response.ok) {
          throw new Error("Failed to get data!");
        }
        const data = await response.json();
        setData(data.Search || []);
      } catch (error) {
        console.error(error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(inputValue);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} onChange={handleChange} />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-14 lg:px-20 px-5">
        {isLoading ? (
          <div className="w-full flex h-screen justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid border-r-transparent"></div>
          </div>
        ) : data.length > 0 ? (
          data.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <div className="w-full flex h-screen justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid border-r-transparent"></div>
          </div>
        )}
      </div>
    </div>
  );
}
