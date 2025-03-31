// "use server";
"use server";

import { revalidatePath } from "next/cache";

export default async function createWatches(directoryName) {
  console.log("the directory name is:", directoryName);

  try {
    const createDirectory = await fetch(
      "http://localhost:3030/createDirectory",
      {
        body: directoryName,
        method: "POST",
        headers: {},
      }
    );

    if (!createDirectory.ok) {
      throw new Error(
        "the response was not okv something went wrong",
        createDirectory.status
      );
    }

    const directoryResponse = await createDirectory.json();
    console.log("coolio dude is here to save the day");

    return directoryResponse;
  } catch (error) {
    console.log("the error is:", error);
    return error;
  }
}

export async function createBrand(brandName) {
  console.log("the brand name is:", brandName);

  try {
    const createBrand = await fetch("http://localhost:3030/brand-upload", {
      body: brandName,
      method: "POST",
      headers: {},
    });

    if (!createBrand.ok) {
      throw new Error(
        "the response was not okv something went wrong",
        createBrand.errorMessage
      );
      // console.log("the response was not okv something went wrong", createBrand);
    }

    const brandResponse = await createBrand.json();
    console.log("coolio dude is here to save the day");

    return brandResponse;
  } catch (error) {
    console.log("the error is:", error);
    return error;
  }
}

export async function getWatchInfo() {
  try {
    const response = await fetch("http://localhost:3030/brands", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch brands");
    }

    const brands = await response.json();

    return brands;
  } catch (error) {
    console.log("Error fetching brands:", error);
    return error;
  }
}

export async function createBlogPost(blogPost) {
  console.log("the blog post is:", blogPost);
  try {
    const response = await fetch("http://localhost:3030/create-blog", {
      method: "POST",
      body: blogPost,
    });

    if (!response.ok) {
      throw new Error("Failed to create blog post");
    }

    const blogResponse = await response.json();

    return blogResponse;
  } catch (error) {
    console.log("error creating blog post:", error);
    return { errorMessage: error.message };
  }
}

export async function getBlogPost(blogPost) { 

  console.log('the blog post is gekkington:', blogPost);
  try {
    const response = await fetch("http://localhost:3030/blog/" + blogPost, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const blogPosts = await response.json();

    return blogPosts;
  } catch (error) {
    console.log("Error fetching blog posts:", error);
    return error;
  }
}

export async function revalidateThePath(queries) {
  revalidatePath(queries);
}
