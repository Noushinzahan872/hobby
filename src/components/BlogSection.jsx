
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const articles = [
  {
    title: "5 Easy Hobbies to Start Today",
    excerpt: "Looking for a new passion? Here are 5 simple hobbies to explore and enjoy in your free time.",
    link: "#",
  },
  {
    title: "How Painting Can Reduce Stress",
    excerpt: "Creative expression through painting is proven to improve mental well-being. Learn how to get started.",
    link: "#",
  },
  {
    title: "Photography Tips for Beginners",
    excerpt: "Want to capture moments like a pro? These beginner-friendly tips will get you going with your camera.",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Lottie Animation */}
        <div>
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_yr6zz3wv.json"
            style={{ height: "350px", width: "100%" }}
          />
        </div>

        {/* Blog Cards */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Latest <span className="text-blue-800">Articles</span></h2>
          <div className="space-y-6">
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl shadow hover:shadow-lg transition border-l-4 border-blue-800"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {article.title}
                </h3>
                <p className=" mb-3">{article.excerpt}</p>
                <a
                  href={article.link}
                  className="text-blue-800 font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
