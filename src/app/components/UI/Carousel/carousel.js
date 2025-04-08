"use client"; //use client is needed for swiper to work
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./carousel.module.css";
import Link from "next/link";
import BlogList from "../../blogList";

export default function Carousel({ children }) {
  console.log("the children are: ", children);
  return (
    <div style={{ padding: "60px 0", backgroundColor: "#f3f3f3" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          lineHeight: "1.15",
          marginBottom: "20px",
        }}
      >
        Latest Blog Posts
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Left arrow */}
        <div
          className={"swiper-button-prev " + styles.swiper_button_prev_icon}
          style={{
            zIndex: 10,
            cursor: "pointer",
            position: "absolute",
            color: "black",
            left: 10, // adjust based on spacing you want
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          speed={600}
          slidesPerView={3}
          slidesPerGroup={2}
          
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={() => console.log("slide change")}
          style={{ width: "100%", padding: "0 50px" }} // optional max width
        >
          {children.map((child, index) => {
            const date = new Date(child.dateuploaded);

            // Define options for formatting the date
            const options = { year: "numeric", month: "long", day: "numeric" };

            // Get the formatted date string
            const formattedDate = date.toLocaleDateString("en-US", options);
            return (
              <SwiperSlide
                key={index}
                style={{ width: "100%", height: "auto", display: "flex" }}
              >
                <div
                  key={child.title}
                  style={{
                    backgroundColor: "white",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link href={`/blog/${child.slug}`}>
                    <div>
                      <div
                        style={{
                          paddingBottom: "60%",
                          position: "relative",
                          flexGrow: 1,
                        }}
                      >
                        <img
                          src={`http://localhost:3030/${child.bannerimagepath}`}
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
                    <div style={{ padding: "40px", flexShrink: 0 }}>
                      <h2 style={{ margin: "0 0 10px 0", textAlign: "center" }}>
                        {child.title}
                      </h2>
                      <span style={{ textAlign: "left", display: "block" }}>
                        {child.author}
                      </span>
                      <span
                        style={{
                          display: "block",
                          textAlign: "left",
                          color: "rgb(104, 104, 104)",
                        }}
                      >
                        {formattedDate}
                      </span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
          {children.map((child, index) => {
            const date = new Date(child.dateuploaded);

            // Define options for formatting the date
            const options = { year: "numeric", month: "long", day: "numeric" };

            // Get the formatted date string
            const formattedDate = date.toLocaleDateString("en-US", options);
            return (
              <SwiperSlide
                key={index}
                slot='wrapper-end'
                style={{ width: "100%", height: "auto", display: "flex" }}
              >
                <div
                  key={child.title}
                  style={{
                    backgroundColor: "white",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link href={`/blog/${child.slug}`}>
                    <div>
                      <div
                        style={{
                          paddingBottom: "60%",
                          position: "relative",
                          flexGrow: 1,
                        }}
                      >
                        <img
                          src={`http://localhost:3030/${child.bannerimagepath}`}
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
                    <div style={{ padding: "40px", flexShrink: 0 }}>
                      <h2 style={{ margin: "0 0 10px 0", textAlign: "center" }}>
                        {child.title}
                      </h2>
                      <span style={{ textAlign: "left", display: "block" }}>
                        {child.author}
                      </span>
                      <span
                        style={{
                          display: "block",
                          textAlign: "left",
                          color: "rgb(104, 104, 104)",
                        }}
                      >
                        {formattedDate}
                      </span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperSlide
            style={{ width: "100%", height: "auto", display: "flex" }}
          >
            <div
              style={{
                backgroundColor: "white",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link href={``}>
                <div style={{ padding: "40px", flexShrink: 0 }}>
                  <h2 style={{ margin: "0 0 10px 0", textAlign: "center" }}>
                    View all Blog Posts
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Right arrow */}
        <div
          className={"swiper-button-next " + styles.swiper_button_next_icon}
          style={{
            zIndex: 10,
            cursor: "pointer",
            position: "absolute",
            right: "10px", // adjust based on spacing you want
            top: "50%",
            color: "black",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
    // <Swiper
    // modules={[Navigation, Pagination]}
    // navigation
    // pagination={{ clickable: true }}
    // spaceBetween={50}
    // speed ={600}
    // slidesPerGroup={3}
    // slidesPerView={3}
    // autoplay ={{
    //   delay: 2500
    // }}
    // loop={true}
    // >

    // {children.map((child, index) => (
    //     <SwiperSlide key={index} style={{ width: '100%', height: '100%' }}>
    //     {child}
    //     </SwiperSlide>
    // ))}
    // </Swiper>
    // <BlogList />
    // <p>this is the children we love dude</p>
  );
}
