import BlogList from "../components/blogList";
import Image from "next/image";
import styles from "./blog.module.css";
export default function Blog() {
  return (
    <div>
      <div className="main_blog_container">
        <BlogList />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
