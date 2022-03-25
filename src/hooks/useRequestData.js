import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData =(url) => {
  const [data, setData] = useState(undefined);

  const getTrip = () => {
    axios
    .get(url)
       .then((res) => {
        setData(res.data);
        console.log(res.data)
    })
    .catch((err) => {console.log(err.data);
    })
  };
 
 useEffect(() => {getTrip()}, [url])

  return [data, getTrip]
}

export default useRequestData