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
    <>
      <div
        className="w-full bg-fixed bg-center py-16"
        style={{
          backgroundImage: `url(${Fundo04})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[40vh] w-full flex flex-col items-center justify-center gap-20">
          <h1 className="text-[40px] font-bold text-white">READ OUR BLOG</h1>
        </div>
      </div>
      <div className="container mx-auto py-10">
        {selectedPost ? (
          <div>
            <button onClick={() => setSelectedPost(null)}>Back to posts</button>
            <h2>{selectedPost.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Select a post to read</h2>
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
    </>
  );
};

export default Blog;  