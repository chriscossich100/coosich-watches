"use client";
import { useState } from "react";
import { createBlogPost } from "../../../../public/js/actions";
import styles from "../create-blog/create-blog.module.css";

export default function BlogInfo({ children }) {
  const [inputs, setInputs] = useState({
    blogTitle: "",
    subTitle: "",
    quickSummary: "",
    bannerPhoto: null,
  });

  console.log("the banner photo is: ", inputs.bannerPhoto);

  const [inputStyles, setInputStyles] = useState({
    title: {},
    content: {},
    image: {},
  });

  const [errorMessage, setErrorMessage] = useState({
    messageError: "",
    imageError: "",
    successSubmissionMessage: "",
  });

  const blogSumbit = async (e) => {
    e.preventDefault();

    let isValid = true;
    const newInputStyles = {};

    Object.keys(inputs).forEach((key) => {
      console.log("the keys are: ", key);
      if (key !== "bannerPhoto" && !inputs[key].trim()) {
        isValid = false;
        newInputStyles[key] = {
          border: "1px solid red",
          backgroundColor: "rgba(255, 80, 80, 0.62)",
        };
        setErrorMessage((prev) => ({
          ...prev,
          messageError: "Please fill in all fields",
        }));
      } else {
        newInputStyles[key] = {};
      }
    });

    if (!inputs.bannerPhoto) {

      console.log('this means that the users image has not been uploaded')

      isValid = false;
      newInputStyles.image = {
        border: "1px solid red",
        backgroundColor: "rgba(255, 80, 80, 0.62)",
      };
      setErrorMessage((prev) => ({
        ...prev,
        imageError: "Please upload an image",
      }));
    } 
    
    else if (inputs.bannerPhoto.size > 2 * 1024 * 1024) {
      console.log(
        "the size of the image is: ",
        inputs.bannerPhoto.size,
        "and its bigger than 2MB"
      );


      isValid = false;
      setErrorMessage((prev) => ({
        ...prev,
        imageError: "Please upload an image smaller than 2MB",
      }));
    } 
    else {
      console.log("the image is valid");
      newInputStyles.image = {};
    }

    setInputStyles(newInputStyles);

    if (isValid) {
      console.log("form submitted successfully", inputs);

      //gets the value of the content from the local storage
      const storedContent = JSON.parse(localStorage.getItem("content"));
      console.log("the stored content is: ", storedContent);
      if (!storedContent || storedContent.length === 0) {
        return setErrorMessage((prev) => ({
          ...prev,
          messageError: "Blog contenter is empty",
        }));
      }

      const hasValidContent = storedContent.some((paragraph) => {
        console.log(
          "in the hasvalidcontent here are some info:",
          paragraph.type
        );
        return (
          paragraph.type === "paragraph" &&
          paragraph.children.some((child) => {
            console.log("the child is: ", child.text && child.text.trim());
            return child.text && child.text.trim() != "";
          })
        );
      });

      console.log("has valid content is: ", hasValidContent);

      if (!hasValidContent) {
        return setErrorMessage((prev) => ({
          ...prev,
          messageError: "Blog content is empty",
        }));
      }

      console.log(
        "we are seeing this console log because the content is not empty"
      );

      //now that we have a valid content, and the form is valid, we can submit the form to the server
      const form = e.target;
      const formData = new FormData(form);
      console.log("the inputs.bannerPhoto is: ", inputs.bannerPhoto);
      formData.append("banner_photo", inputs.bannerPhoto.files);
      formData.append("content", localStorage.getItem("content"));

      try {
        let blogResponse = await createBlogPost(formData);

        if (blogResponse.errorMessage !== "") {
          console.log("the blog response was not ok: ", blogResponse);
          setErrorMessage({
            messageError: blogResponse.errorMessage,
            imageError: "",
            successSubmissionMessage: "",
          });
        } else {
          console.log("the blog response is: ", blogResponse);
          setErrorMessage({
            messageError: "",
            imageError: "",
            successSubmissionMessage: blogResponse.message,
          });
        }
      } catch (error) {
        console.error("an uxpected error occured: ", error);
        setErrorMessage({
          messageError: `Failed to create blog post: ${error}`,
          imageError: "",
          successSubmissionMessage: "",
        });
      }

      // setErrorMessage({ messageError: "", imageError: "", successSubmissionMessage: blogResponse.message });
    } 
    
    else {
      console.log("form not submitted successfully", inputs);
    }

    // const form = e.target;

    // console.log("the e is: ", e.target.banner_photo);

    // const imageington = e.target.banner_photo.files;
    // const formData = new FormData(form);
    // const content = localStorage.getItem("content");
    // console.log("the content is: ", content);
    // formData.append("banner_photo", imageington);
    // formData.append("content", content);

    // for (const entry of formData.entries()) {
    //   console.log(entry[0] + ": " + entry[1]);
    // }

    // let blogResponse = await createBlogPost(formData);

    // console.log("the blog response is: ", blogResponse);
  };

  return (
    <div className={styles.border_3d}>
      <form onSubmit={blogSumbit}>
        <h1 style={{ textAlign: "center", marginBottom: "15px", color: "red" }}>
          {errorMessage.messageError}
        </h1>
        <h1
          style={{ textAlign: "center", marginBottom: "15px", color: "green" }}
        >
          {errorMessage.successSubmissionMessage}
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          <div style={{ flex: "1 1 calc(50% - 15px)" }}>
            <label
              style={{ display: "block", marginBottom: "5px", color: "#555" }}
              htmlFor="blogTitle"
            >
              Title
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",

                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                ...inputStyles.blogTitle,
              }}
              onChange={(e) =>
                setInputs({ ...inputs, blogTitle: e.target.value })
              }
              name="blogTitle"
            />
          </div>
          <div style={{ flex: "1 1 calc(50% - 15px)" }}>
            <label
              style={{ display: "block", marginBottom: "5px", color: "#555" }}
              htmlFor="subTitle"
            >
              Sub-title
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                ...inputStyles.subTitle,
              }}
              onChange={(e) =>
                setInputs({ ...inputs, subTitle: e.target.value })
              }
              name="subTitle"
            />
          </div>
          <div style={{ flex: "1 1 calc(50% - 15px)" }}>
            <label
              htmlFor="quickSummary"
              style={{ display: "block", marginBottom: "5px", color: "#555" }}
            >
              Quick Summary
            </label>
            <textarea
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                resize: "vertical",
                ...inputStyles.quickSummary,
              }}
              onChange={(e) =>
                setInputs({ ...inputs, quickSummary: e.target.value })
              }
              rows="4"
              name="quickSummary"
            ></textarea>
          </div>
          <div style={{ flex: "1 1 calc(50% - 15px)" }}>
            <label
              htmlFor="banner_photo"
              style={{ display: "block", marginBottom: "5px", color: "#555" }}
            >
              Banner Photo
            </label>
            <span style={{ fontSize: "10px" }}>
              Please choose a photo 1920x1080 smaller than 2MB
            </span>
            <input
              type="file"
              style={{
                display: "block",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                ...inputStyles.bannerPhoto,
              }}
              onChange={(e) => {
                console.log("the files are: ", e.target.files);
                setInputs({ ...inputs, bannerPhoto: e.target.files[0] });
              }}
              name="banner_photo"
            />
            <span style={{ fontSize: "10px", color: "red" }}>
              {errorMessage.imageError}{" "}
            </span>
          </div>
        </div>
        <button
          onSubmit={() => {
            e.preventDefault();
            console.log("submitting form");
          }}
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            marginTop: "15px",
          }}
        >
          Submit
        </button>
      </form>
      {children}
    </div>
  );
}
