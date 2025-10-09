import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {postId}</h2>
      <p>This page dynamically loads based on the post ID in the URL.</p>
    </div>
  );
}
