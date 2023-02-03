import BlogCard, { Post } from "./BlogCard";

const BlogGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <div className="cards-grid">
        {posts.map((post, index) => (
          <BlogCard key={`key-${index}-post`} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogGrid;
