import { useState, useEffect } from 'react'
import { BsMedium } from 'react-icons/bs'
import Fundo04 from "../../assets/images/fundoblog.png";

const Blog = () => {
    return (
        <div
            id='blog'
            className="w-full bg-fixed bg-center py-16"
            style={{
                backgroundImage: `url(${Fundo04})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full p-10 flex flex-col items-center justify-center gap-20 ">
                <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#F3F6FB] -mt-8">READ OUR BLOG</h1>

                <div className="w-full flex justify-center flex-wrap gap-10">
                    <a 
                        href='https://main--marvelous-salamander-585fa8.netlify.app/' 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="
                        bg-white hover:bg-[#FF0A78]
                        duration-500 text-[#101111] hover:text-white
                        text-lg font-bold px-3 py-2 rounded-3xl min-w-1/2
                        text-center
                        "
                        style={{ width: '250px' }}
                    >
                        <span>Blog</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Blog



/*


  import React, { useState, useEffect } from 'react';
  import Fundo04 from "../../assets/images/fundoblog.png";

  const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Kine.Newsletter');
        const data = await response.json();
        setPosts(data.items);
      };

      fetchData();
    }, []);

    const handlePostSelect = post => {
      setSelectedPost(post);
    };
    return (
      <div
        id="blog"
        className="w-full bg-fixed bg-center py-16 flex flex-col items-center"
        style={{
          backgroundImage: `url(${Fundo04})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#F3F6FB] -mt-2">READ OUR BLOG</h1>
        <div className="-mt-6 container mx-auto py-20 flex flex-col items-center justify-center">
          {selectedPost ? (
            <div className="w-full max-w-3xl">
              <button className="text-pink-500 mb-4" onClick={() => setSelectedPost(null)}>Back to posts</button>
              <br className="w-full mb-4"/>
              <h1 className="text-4xl font-bold mb-2 text-center">{selectedPost.title}</h1>
              
              <div className="text-justify leading-relaxed" dangerouslySetInnerHTML=
              {{ __html: `<div style="white-space: pre-line">${selectedPost.content.replace(
                /(http:\/\/kine\.,network)/g,
                '<a href="http://kine.network" style="color:#FF0000">$&</a>'
              )}</div>`, }} />
              </div>
              ) : (
                <div className="w-full max-w-3xl">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 text-center">
                    {posts.map(post => (
                      <li
                      key={post.guid}
                      onClick={() => handlePostSelect(post)}
                      className="cursor-pointer bg-white shadow-md hover:shadow-lg rounded-md p-4"
                      >
                        <div className="h-48 overflow-hidden">
                          <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-pink-500">{post.title}</h3>
                    <p className="text-gray-700 text-sm">{post.pubDate}</p>
                    </li>
                    ))}
                  </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Blog;
  */