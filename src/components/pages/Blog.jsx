import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { useParams } from "react-router-dom";

function Blog() {
  const blogsArray = [
    {
      title: "This is Blog 1",
      description: "This is Blog 1 description",
      id: 1,
    },
    {
      title: "This is Blog 2",
      description: "This is Blog 2 description",
      id: 2,
    },
    {
      title: "This is Blog 3",
      description: "This is Blog 3 description",
      id: 3,
    },
    {
      title: "This is Blog 4",
      description: "This is Blog 4 description",
      id: 4,
    },
  ];

  const { title } = useParams();

  const [currentBlog, setCurrentBlog] = useState(false);

  const getBlogByTitle = () => {
    setCurrentBlog(() => {
      return blogsArray.filter((blog) => {
        return title === blog.title;
      });
    });
  };

  useEffect(() => {
    if (title) {
      getBlogByTitle();
    } else {
      alert("Not set yet");
    } // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <h2 className="text-center">Current Blog: {title}</h2>
      {currentBlog ? (
        <div className="container">
          <h3>Title: {currentBlog[0].title}</h3>
          <h3>Description: {currentBlog[0].description}</h3>
          <h3>Id: {currentBlog[0].id}</h3>
        </div>
      ) : null}
      <Footer />
    </>
  );
}

export default Blog;
