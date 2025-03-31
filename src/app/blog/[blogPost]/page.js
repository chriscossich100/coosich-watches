import { getBlogPost } from "../../../../public/js/actions";
import BlogContent from "../blog-components/blogContent";

export default async function BlogPost({ params }) {
  let postInfo = (await params).blogPost;
  console.log("the blog post is:", postInfo);

  let blogPostResult = await getBlogPost(postInfo);

  console.log('the blog post result is: ', blogPostResult);

  const isoDateString = blogPostResult[0].dateuploaded;

  // Create a new Date object from the ISO string
  const date = new Date(isoDateString);

  // Define options for formatting the date
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Get the formatted date string
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Log the result
  console.log(formattedDate); // Output: "February 5, 2025"

  blogPostResult[0].dateuploaded = formattedDate;

  console.log("the coolio dude is: ", blogPostResult[0]);

  return <BlogContent blogContent={blogPostResult[0]} />;
}
