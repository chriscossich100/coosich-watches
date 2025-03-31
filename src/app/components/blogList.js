import styles from "./blogList.module.css";
import Link from "next/link";


export default async function BlogList() {
  let blogPosts = await fetch("http://localhost:3030/blog-posts");

  let blogPost = await blogPosts.json();

  console.log("the blog posts are: ", blogPost);

  return (
    <div className={styles.blogList_containers}>
      <h1 className={styles.blogList_title}>Latest Blog Posts</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "0 40px",
          width: "100%",
          maxWidth: "1920px",
          /* background-color: yellow; */
          margin: "0 auto",
        }}
      >
        {blogPost.map((item) => (
          <div key={item.title} style={{ backgroundColor: "white" }}>
            <Link href={`/blog/${item.slug}`}>
            <div>
              <div style={{ paddingBottom: "60%", position: "relative", height: "100%" }}>
                <img
                  src={`http://localhost:3030/${item.bannerimagepath}`}
                  alt={`Blog Post Picture`}
                  style={{ width: "100%", position: "absolute", top: "0", left: "0", objectFit: "cover", objectPosition: "center", height: "100%" }}
                />
              </div>
            </div>
            <div style = {{padding: "40px"}}>
              <h2 style={{ margin: "0 0 10px 0" }}>{item.title}</h2>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
