import React, { useState, useEffect } from "react";
import axios from "axios";
// import Quote from "./Quote";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col bg-[#FCFFEB] h-screen w-screen ">
      <div className="space-y-2 mx-3">
        <div className="text-3xl text-[#474350] font-light ">{quote}</div>
        <div className="font-semibold">{author}</div>
      </div>
      <button
        className="mt-10 bg-[#FCFFEB] hover:bg-[#474350] text-[#474350] hover:text-[#FCFFEB] font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => window.location.reload()}
      >
        Get your new quote
      </button>
      {/* <h1 className="text-3xl font-bold italic underline">Hello world!</h1> */}
    </div>
  );
};

export default QuoteGenerator;
