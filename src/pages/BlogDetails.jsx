import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
  const params = useParams();

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <p>loading data...</p>;
  if (error) return <p>error...</p>;

  return (
    <div>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
      <Link to="/blog">volver</Link>
    </div>
  );
};

export default BlogDetails;
