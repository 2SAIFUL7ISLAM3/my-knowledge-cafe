import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);

    useEffect(() =>{
        fetch('../../public/blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[]);

    console.log(blogs);

    return (
        <div className="flex justify-between items-center mx-20 my-3">

            <div className="my-4">
            {
                blogs.map((blog)=>
        <div key={blog.id} >
            <img src={blog.cover} alt="" />
            <div  className="my-4">
                <div className="flex item-center gap-6 my-5">
                    <img className="w-16 h-16 " src={blog.author_img} alt="" />
                <div>
                <h1>{blog.author}</h1>
                <p>{blog.posted_date}</p>
                </div>

                </div>
                <p className="my-2"><span>{blog.reading_time}</span> min read</p>
            </div>
            <h1>How to get your first job as a self-taught programmer</h1>
            </div>
    )
            }
            </div>
            
            
            <div className="w-1/3 ">
                <h2>Bookmarked Blogs : </h2>
            </div>
        </div>

    );
};

export default Blogs;