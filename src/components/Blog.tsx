import React from "react";
import rssToJson from "rss-to-json";

const Blog: React.FC<{}> = () => {
  const [posts, setPosts] = React.useState<any[]>([]);

  React.useEffect(() => {
    rssToJson(window.location.origin + "/feed").then((res) => {
      setPosts(res.items.slice(0, 3));
    });
  }, []);

  console.log(window.location.host)

  posts.forEach((post) => {
    const img = post.content.match(/<img[^>]+src="([^">]+)"/);
    if (img) {
      post.image = img[1];
    }
  });

  return (
    <div className="text-white text-center pt-20 mb-12" id="blog">
      <div className="mx-auto max-w-[900px]">
        <h1 className="text-4xl font-semibold mb-10">
          MY{" "}
          <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-green-500 to-lime-400">
            BLOG
          </span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center ml-5 mr-5">
          {posts.map((post) => (
            <div
              key={post.guid}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 rounded-lg hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform bg-white/20 shadow-lg ring-1 ring-black/5"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold hover:text-green-500"
              >
                {post.title}
              </a>
              <img src={post.image} alt="Post Image" className="w-full h-40 object-cover rounded-lg mt-2" />
              <p className="text-gray-300 text-sm mt-2">{post.pubDate}</p>
              <p className="text-gray-300 text-sm mt-2">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
