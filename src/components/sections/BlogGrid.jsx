import React from "react";
import { Link } from "react-router-dom";

function BlogGrid() {
  return (
    <div className="container p-3 d-flex justify-content-center">
      <div className="row">
        <div className="col">
          <Link to='/blog/This is Blog 1' className="btn btn-dark">Blog-1</Link>
        </div>
        <div className="col">
          <Link to='/blog/This is Blog 2' className="btn btn-dark">Blog-2</Link>
        </div>
        <div className="col">
          <Link to='/blog/This is Blog 3' className="btn btn-dark">Blog-3</Link>
        </div>
        <div className="col">
          <Link to='/blog/This is Blog 4' className="btn btn-dark">Blog-4</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;
