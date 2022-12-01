import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p,idx) => (
        <Post post={p} key={idx}/>
      ))}
    </div>
  );
}