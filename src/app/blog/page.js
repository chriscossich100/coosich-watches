import BlogList from "../components/blogList";
import Image from "next/image";
import styles from "./blog.module.css";
import Carousel from "../components/UI/Carousel/carousel";
import HeroCarousel from "../components/UI/Hero-carousel/heroCarousel";
export default async function Blog() {

  let blogPosts = await fetch("http://localhost:3030/blog-posts");

  let blogPost = await blogPosts.json();

  console.log("the blog posts are: ", blogPost);

  return (
    <div>
      <HeroCarousel children = {blogPost} />
      <div className="main_blog_container">
        <Carousel children = {blogPost} />
      </div>
      <section className="email_signup_template">
        <div className={styles.email_signup_section_hero}>
          <Image
            className={styles.email_signup_section_hero_img}
            src="/images/banner-images/emailsignuppicture.jpg"
            height={334}
            width={1920}
            alt="Email Signup Banner"
          ></Image>
          <div className={styles.email_signup_section_hero_gradient}></div>
          <div
            className={
              styles.email_signup_section_hero_content + " main_containerPad"
            }
          >
            <div className={styles.email_signup_section_hero_content_text}>
              <h1>Sign up to receive the latest blog posts</h1>
              <span className={styles.email_signup_section_hero_caption}>
                Sign Up Today
              </span>
              <form style={{ marginTop: "12px" }}>
                <div
                  style={{
                    marginBottom: "20px",
                    overflow: "visible",
                    position: "relative",
                  }}
                >
                  <input
                    type="email"
                    id="signup_email"
                    name="signup_email"
                    placeholder="Your email"
                    style={{
                      fontSize: "14px",
                      width: "100%",
                      height: "42px",
                      lineHeight: "42px",
                      background: "transparent",
                      border: 0,
                      outline: 0,
                      borderRadius: 0,
                      borderBottom: "1px solid #a1a1aa",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      position: "absolute",
                      right: "0",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      width: "18px",
                      height: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "18px", height: "18px" }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
