import React, { useState } from "react";

// Blog component
const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Path to Inner Peace",
      content: "In our fast-paced world, finding peace is a spiritual journey...",
      author: "Swami Vivekananda",
      date: "2025-01-19",
    },
    {
      id: 2,
      title: "The Power of Meditation",
      content: "Meditation is a doorway to your spiritual awakening...",
      author: "Buddha",
      date: "2025-01-15",
    },
    {
      id: 3,
      title: "Finding God in Every Moment",
      content: "God is everywhere, even in the most mundane tasks...",
      author: "Paramahansa Yogananda",
      date: "2025-01-10",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Spiritual Content Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                <span>{post.author}</span> | <span>{post.date}</span>
              </p>
              <p className="text-gray-700 text-base">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
