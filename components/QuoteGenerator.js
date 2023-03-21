import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Quote from './Quote'

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
        <div>
      <div>{quote}</div>
      <div>{author}</div>
        {/* <Quote quote={quote} author={author} /> */}
        <button onClick={() => window.location.reload()}>New Quote</button>


      </div>
    );
  };
  



export default QuoteGenerator;