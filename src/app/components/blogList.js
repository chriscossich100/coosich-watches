import styles from "./blogList.module.css";
import Link from "next/link";

export default async function BlogList() {
 

  return (
    <div className={styles.blogList_containers}>
      <h1 style={{ textAlign: "center" }} className={styles.blogList_title}>
        Latest Blog Posts
      </h1>
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
        {blogPost.map((item, index) => {
          
         console.log('the index is: ', index);
          console.log("the date is: ", typeof(item.dateuploaded));
          let date = new Date(item.dateuploaded);
          const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
          console.log("the formatted date is: ", formattedDate);
          return (
            <div key={item.title} style={{ backgroundColor: "white" }}>
              <Link href={`/blog/${item.slug}`}>
                <div>
                  <div
                    style={{
                      paddingBottom: "60%",
                      position: "relative",
                      height: "100%",
                    }}
                  >
                    <img
                      src={`http://localhost:3030/${item.bannerimagepath}`}
                      alt={`Blog Post Picture`}
                      style={{
                        width: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        objectFit: "cover",
                        objectPosition: "center",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
                <div style={{ padding: "40px" }}>
                  <h2 style={{ margin: "0 0 10px 0", textAlign: "center" }}>
                    {item.title}
                  </h2>
                  <span style={{ textAlign: "left" }}>{item.author}</span>
                  <span style={{ display: "block", textAlign: "left", color: "rgb(104, 104, 104)" }}>
                    {formattedDate}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
