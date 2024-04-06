// pages/results.js
import React, { useEffect, useState } from "react";
import ShowCard from "../Components/ShowCard"
import Link from "next/link";

const Data = [
  // Sample data
];

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const fetching = async (choice) => {
  const data = await fetch(
    `${process.env.BASE_URL}/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${choice}&page=1&include_adult=true`
  );
  const res = await data.json();

  return getRandomItem(res.results);
};

export default function Results() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all([fetching("choice1"), fetching("choice2"), fetching("choice3")]).then(
      (values) => {
        setData([...values]);
        console.log(values);
      }
    );
  }, []);

  return (
    <div className=" flex h-full w-full flex-col ">
      <div className=" w-full grid gap-6 grid-cols-fluid justify-items-center py-3 ">
        {data.map((item, index) => {
          return (
            <ShowCard
              key={`${item.vote_average}${item.original_title}`}
              name={item.original_title}
              releaseDate={item.release_date}
              ratings={item.vote_average}
              image={item.poster_path}
              delay={0.1 * index}
            />
          );
        })}
      </div>
      <Link href={"/"} className="w-full flex justify-center">
        <button className="bg-teal-900 text-white h-10 rounded w-2/3 ">Go Back</button>
      </Link>
    </div>
  );
}
