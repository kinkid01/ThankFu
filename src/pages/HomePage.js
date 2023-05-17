import { useEffect, useRef, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard, SkeletonCard } from "../components";

export const HomePage = () => {
  useTitle("Home");
  const [posts, setPosts] = useState(new Array(2).fill(false));
  const postRef = useRef(collection(db, "posts"));
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getPosts();
  }, [postRef, toggle]);
  return (
    <section>
      {posts.map((post, index) =>
        post ? (
          <PostCard
            key={post.id}
            post={post}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};
