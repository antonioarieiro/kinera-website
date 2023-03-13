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
      <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#F3F6FB] mt-10">READ OUR BLOG</h1>
      <div className="container mx-auto py-10 flex flex-col items-center">
        {selectedPost ? (
          <div className="w-full">
            <button className="text-pink-500 mb-4" onClick={() => setSelectedPost(null)}>Back to posts</button>
            <br className="w-full mb-4"/>
            <h2>{selectedPost.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </div>
        ) : (
          <div className="w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {posts.map(post => (
                <li
                  key={post.guid}
                  onClick={() => handlePostSelect(post)}
                  className="cursor-pointer bg-white shadow-md hover:shadow-lg rounded-md p-4"
                >
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