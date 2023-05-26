import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>loading data...</p>;
  if (error) return <p>error...</p>;

  const handleChange = (e) => {
    let filter = e.target.value;
    setSearchParams({ filter: filter });
  };

  return (
    <div>
      <h1>blogs</h1>
      <input
        type="text"
        onChange={handleChange}
        value={searchParams.get("filter") || ""}
        className="form-control my-3"
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="list-group-item"
            >
              {item.id} - {item.title}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Blog;
