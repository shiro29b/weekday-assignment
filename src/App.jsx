import "./App.css";

import { useState, useEffect, useRef } from "react";
import CardComponent from "./components/Card";
import FilterComponent from "./components/Filter";

export default function App(props) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(null);
  const limit = 10;
  const observerTarget = useRef(null);
  const isFetchingRef = useRef(false);

  const fetchData = async () => {
    if (isFetchingRef.current) return;
    setError(null);
    try {
      isFetchingRef.current = true;
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit,
        offset: page * limit,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();

      setTotalCount(data.totalCount);
      setItems((prevItems) => [...prevItems, ...data.jdList]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      isFetchingRef.current = false;
    }
  };

  useEffect(() => {
    if (items.length < totalCount || totalCount === null) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchData();
          }
        },
        { threshold: 0.1 }
      );

      if (observerTarget.current) {
        observer.observe(observerTarget.current);
      }

      return () => {
        if (observerTarget.current) {
          observer.unobserve(observerTarget.current);
        }
      };
    }
  }, [observerTarget, items, totalCount]);

  return (
    <>
      <FilterComponent></FilterComponent>
      <div className="items-container">
        {items.map((item, index) => (
          // <div className="row">
          <CardComponent key={item.jdUid + "-" + index} data={item} />
          // </div>
        ))}
        {isFetchingRef.current && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <div ref={observerTarget}></div>
      </div>
    </>
  );
}
