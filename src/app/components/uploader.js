"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import createWatches, { createBrand } from "../../../public/js/actions";

export default function Uploader({ brands }) {
  // Function implementation goes here
  const [imagePathName, setImagePathName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [brandName, setOnChangeBrandName] = useState("");
  const [brandFile, setBrandFile] = useState(null);
  const [brandImagePath, setBrandImagePath] = useState("");
  //   const [brand, setBrand] = useState("");
  const [videoOrBlog, setVideoOrBlog] = useState("Video Review");
  const [videoReviewValue, setVideoReviewValue] = useState("");
  const [blogPostValue, setBlogPostValue] = useState("");
  const brand = useRef(brands[0].name);

  console.log("the image file is:", imageFile);

  const onChangeBrand = (e) => {
    console.log("this is me changing the brand", e.target.value);
    brand.current = e.target.value;
  };

  const onChangeReviewType = (e) => {
    console.log("the e.target.value is:", e.target.value);

    setVideoOrBlog(e.target.value);

    if (videoOrBlog === "Video Review") {
      setBlogPostValue("");
      console.log("the videoOrBlog value has been changed after selection.");
    }
    if (videoOrBlog === "Blog Post") {
      setVideoReviewValue("");
      console.log("the videoOrBlog value has been changed after selection.");
    }
  };

  const onChangeVideoOrBlogValue = (e) => {
    console.log("the e.target.value is:", e.target.value);
    if (videoOrBlog === "Video Review") {
      setVideoReviewValue(e.target.value);
    } else {
      setBlogPostValue(e.target.value);
    }
  };

  const onChangeWatchName = (e) => {
    console.log("we are here dude", URL.createObjectURL(e.target.files[0]));
    setImagePathName(
      `http://localhost:3030/static/brands/${brand.current}/watches/${e.target.files[0].name}`
    );
    setImageFile(e.target.files[0]);
    console.log("the image path name is:", imageFile);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("we are here dude and i love you");

    const form = e.target;
    // const imageington = e.target.uploadFile.files[0];
    console.log("the e.target.file.files[0] is:", e.target.file.files[0]);
    const imageington = e.target.file.files;
    const formData = new FormData(form);
    formData.append("file", imageington);

    formData.append("specifications", {});
    console.log("the fimageington is:", formData.get("specifications"));

    const response = await createWatches(formData);
    console.log(response);
    // const cooliodude = {
    //   jjdude: formData,
    // };

    // console.log("the coolio dude is:", cooliodude.jjdude.get("file"));
  };

  const submitBrand = async (e) => {
    e.preventDefault();
    const brandImagePreview = e.target.brandImage.files;
    const brandFormData = new FormData(e.target);
    brandFormData.append("file", brandImagePreview);

    const brandResponse = await createBrand(brandFormData);
    console.log("the brand response is:", brandResponse);
  };

  const onChangeBrandName = (e) => {
    console.log("this is me changing the brand name dude", e.target.value);
    setOnChangeBrandName(e.target.value);
  };

  const onChangeBrandImage = (e) => {
    console.log(
      "this is me changing the brand image dude",
      e.target.files[0].name
    );

    setBrandImagePath(
      `http://localhost:3030/static/brands/${brandName}/brandImage/${e.target.files[0].name}`
    );

    setBrandFile(e.target.files[0]);
  };

  return (
    <>
      <div className="uploader-container">
        <h1 className="uploader-title">Welcome to the Uploader Page</h1>

        <section className="upload-section">
          <h2 className="section-title">Upload a Watch</h2>
          <form onSubmit={onSubmit} className="upload-form">
            <div className="form-group">
              <label htmlFor="watch_name">Watch Name:</label>
              <input
                type="text"
                id="watch_name"
                name="watch_name"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Brand">Brand</label>
              <select
                id="Brand"
                name="brand"
                className="form-control"
                onChange={onChangeBrand}
              >
                {brands.map((brand) => (
                  <option key={brand.name} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="Price">Price:</label>
              <input
                type="number"
                name="price"
                id="Price"
                className="form-control"
                placeholder="Price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Description">Description:</label>
              <textarea
                name="description"
                id="Description"
                className="form-control"
                placeholder="Description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Image">Image:</label>
              <input
                type="file"
                name="file"
                id="Image"
                className="form-control"
                accept="image/*"
                onChange={onChangeWatchName}
              />
            </div>

            {imagePathName && (
              <div className="image-preview">
                <h3>Image Preview:</h3>
                <Image
                  src={URL.createObjectURL(imageFile)}
                  alt="Image Preview"
                  width={500}
                  height={500}
                  className="preview-image"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="ImagePath">Image Path</label>
              <input
                type="text"
                name="imagepath"
                id="ImagePath"
                className="form-control"
                placeholder="Image path"
                defaultValue={imagePathName.replace(/\s+/g, "-")}
              />
            </div>

            <div className="form-group">
              <h3>Details of Watch:</h3>
              <label htmlFor="reference">Reference:</label>
              <input
                type="text"
                id="reference"
                name="reference"
                className="form-control"
                placeholder="Reference"
              />
              <label htmlFor="caseSize">Case Size:</label>
              <input
                type="text"
                id="caseSize"
                name="caseSize"
                className="form-control"
                placeholder="Case Size"
              />
              <label htmlFor="caseHeight">Case Height:</label>
              <input
                type="text"
                id="caseHeight"
                name="caseHeight"
                className="form-control"
                placeholder="Case Height"
              />
              <label htmlFor="lugToLug">Lug to Lug:</label>
              <input
                type="text"
                id="lugToLug"
                name="lugToLug"
                className="form-control"
                placeholder="Lug to Lug"
              />
              <label htmlFor="lugWidth">Lug Width:</label>
              <input
                type="text"
                id="lugWidth"
                name="lugWidth"
                className="form-control"
                placeholder="Lug Width"
              />
              <label htmlFor="waterResistance">Water Resistance:</label>
              <input
                type="text"
                id="waterResistance"
                name="waterResistance"
                className="form-control"
                placeholder="Water Resistance"
              />
              <label htmlFor="movement">Movement:</label>
              <input
                type="text"
                id="movement"
                name="movement"
                className="form-control"
                placeholder="Movement"
              />
            </div>

            <div className="form-group">
              <h3>Case:</h3>
              <label htmlFor="caseBack">Case Back:</label>
              <input
                type="text"
                id="caseBack"
                name="caseBack"
                className="form-control"
                placeholder="Case Back"
              />
              <label htmlFor="caseMaterial">Case Material:</label>
              <input
                type="text"
                id="caseMaterial"
                name="caseMaterial"
                className="form-control"
                placeholder="Case Material"
              />
              <label htmlFor="crown">Crown:</label>
              <input
                type="text"
                id="crown"
                name="crown"
                className="form-control"
                placeholder="Crown"
              />
              <label htmlFor="hands">Hands:</label>
              <input
                type="text"
                id="hands"
                name="hands"
                className="form-control"
                placeholder="Hands"
              />
              <label htmlFor="lume">Lume:</label>
              <input
                type="text"
                id="lume"
                name="lume"
                className="form-control"
                placeholder="Lume"
              />
              <label htmlFor="strapBraceletMaterial">
                Strap/Bracelet Material:
              </label>
              <input
                type="text"
                id="strapBraceletMaterial"
                name="strapBraceletMaterial"
                className="form-control"
                placeholder="Strap/Bracelet Material"
              />
              <label htmlFor="Weight">Weight:</label>
              <input
                type="text"
                id="Weight"
                name="Weight"
                className="form-control"
                placeholder="Weight"
              />
            </div>

            <div className="form-group">
              <h3>Movement</h3>
              <label htmlFor="caliber">Caliber:</label>
              <input
                type="text"
                id="caliber"
                name="caliber"
                className="form-control"
                placeholder="Caliber"
              />
              <label htmlFor="frequency">Frequency:</label>
              <input
                type="text"
                id="frequency"
                name="frequency"
                className="form-control"
                placeholder="Frequency"
              />
              <label htmlFor="functions">Functions:</label>
              <input
                type="text"
                id="functions"
                name="functions"
                className="form-control"
                placeholder="Functions"
              />
              <label htmlFor="powerReserve">Power Reserve:</label>
              <input
                type="text"
                id="powerReserve"
                name="powerReserve"
                className="form-control"
                placeholder="Power Reserve"
              />
            </div>

            <div className="form-group">
              <h3>Review Type</h3>
              <label htmlFor="videoReview">Video Review:</label>
              <input
                type="radio"
                id="videoReview"
                name="videoOrBlog"
                value="Video Review"
                onChange={onChangeReviewType}
                checked={videoOrBlog === "Video Review"}
              />
              <label htmlFor="blogPost">Blog Post:</label>
              <input
                type="radio"
                id="blogPost"
                name="videoOrBlog"
                value="Blog Post"
                onChange={onChangeReviewType}
                checked={videoOrBlog === "Blog Post"}
              />
            </div>

            {videoOrBlog === "Video Review" ? (
              <div className="form-group">
                <input
                  type="text"
                  name="videoReviewValue"
                  placeholder="Video Review"
                  id="videoReviewValue"
                  className="form-control"
                  value={videoReviewValue}
                  onChange={onChangeVideoOrBlogValue}
                />
              </div>
            ) : (
              <div className="form-group">
                <input
                  type="text"
                  name="blogPostValue"
                  placeholder="Blog Post"
                  id="BlogPostValue"
                  className="form-control"
                  value={blogPostValue}
                  onChange={onChangeVideoOrBlogValue}
                />
              </div>
            )}

            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </form>
        </section>

        <section className="upload-section">
          <h2 className="section-title">Upload a Brand</h2>
          <form onSubmit={submitBrand} className="upload-form">
            <div className="form-group">
              <label htmlFor="brandName">Brand Name:</label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                className="form-control"
                placeholder="Brand Name"
                onChange={onChangeBrandName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="brandLink">Brand Link:</label>
              <input
                type="text"
                id="brandLink"
                name="brandLink"
                className="form-control"
                placeholder="Brand Link"
              />
            </div>

            <div className="form-group">
              <label htmlFor="brandImage">Brand Image:</label>
              <input
                type="file"
                id="brandImage"
                name="brandImage"
                className="form-control"
                accept="image/*"
                onChange={onChangeBrandImage}
              />
            </div>

            {brandImagePath && (
              <div className="image-preview">
                <h3>Image Preview:</h3>
                <Image
                  src={URL.createObjectURL(brandFile)}
                  alt="Image Preview"
                  width={500}
                  height={500}
                  className="preview-image"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="brandImagePath">Brand Image Path:</label>
              <input
                type="text"
                id="brandImagePath"
                name="brandImagePath"
                className="form-control"
                placeholder="Brand Image Path"
                defaultValue={brandImagePath.replace(/\s+/g, "-")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="brandDescription">Brand Description:</label>
              <textarea
                id="brandDescription"
                name="brandDescription"
                className="form-control"
                placeholder="Brand Description"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Upload Brand
            </button>
          </form>
        </section>
      </div>
      <style jsx>{`
        .uploader-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .uploader-title {
          text-align: center;
          font-size: 2em;
          margin-bottom: 20px;
          color: #333;
        }

        .upload-section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 1.5em;
          margin-bottom: 20px;
          color: #555;
        }

        .upload-form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #666;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1em;
          color: #333;
        }

        .form-control:focus {
          border-color: #007bff;
          outline: none;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          background-color: #007bff;
          color: #fff;
          font-size: 1em;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}
