"use client"; //use client is needed for swiper to work
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import styles from "./heroCarousel.module.css";
import Link from "next/link";

// import styles from "./carousel.module.css";
// import Link from "next/link";
// import BlogList from "../../blogList";

//This is the hero carousel component for pages that utilize a Hero.
export default function HeroCarousel({ children }) {
  return (
    <div>
      <Swiper
        className="hero_carousel"
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        speed={800}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        style={{
          height: "50vh",
          minHeight: "600px",
          color: "#fff",
          background: "#27272727",
        }}
      >
        <div className="swiper-pagination"></div>
        {children.map((child, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                height: "100%",
                position: "relative",
                display: "grid",
                gridTemplateRows: "1fr auto",
              }}
            >
              <div
                className="hero_carousel_item"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  zIndex: "1",
                }}
              >
                <div
                  className={"hero_carousel_item_img"}
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    overflow: "hidden",
                    zIndex: "1",
                  }}
                >
                  <div
                    className={styles.hero_carousel_image}
                    style={{
                      paddingBottom: "0",
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={`http://localhost:3030/${child.bannerimagepath}`}
                      alt={`Blog Post Picture`}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        width: "100%",
                        height: "100%",
                      }}
                      height={647}
                      width={1920}
                    />
                  </div>
                </div>
                <div
                  className="hero_carousel_info"
                  style={{
                    zIndex: "2",
                    position: "relative",
                    height: "100%",
                    textAlign: "center",
                    cursor: "auto",
                  }}
                >
                  <div
                    className="hero_carousel_info_content"
                    style={{
                      width: "100%",
                      alignContent: "unset",
                      padding: "103px 0 0",
                      height: "100%",
                      display: "grid",
                    }}
                  >
                    <div
                      className="hero_carousel_info_content_grid"
                      style={{
                        textAlign: "left",
                        justifyContent: "flex-start",
                        width: "calc(33.3% + 10px)",
                        alignContent: "center",
                        height: "100%",
                        display: "grid",
                      }}
                    >
                      <div className="container">
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: "10px",
                            lineHeight: "1.4",
                            letterSpacing: "1px",
                            display: "block",
                            margin: "4px",
                          }}
                        >
                          Topics or Tags go here
                        </span>
                        <h2 style={{ fontSize: "40px", lineHeight: "1.5" }}>
                          {child.title}
                        </h2>
                        <div
                          className="carousel_button"
                          style={{ marginTop: "30px" }}
                        >
                          <Link
                            className="button_secondary"
                            style={{
                              border: "1px solid #fff",
                              background: "transparent",
                              color: "#fff",
                              cursor: "pointer",
                              justifyContent: "center",
                              alignItems: "center",
                              boxSizing: "border-box",
                              padding: "1rem 2.2rem",
                              minWidth: "180px",
                              appearance: "none",
                              textTransform: "uppercase",
                              textDecoration: "none",
                              letterSpacing: ".12em",
                              fontSize: "10px",
                              display: "inline-flex",
                              textAlign: "center",
                              height: "42px",
                              whiteSpace: "nowrap",
                            }}
                            href={`/blog/${child.slug}`}
                          >
                            Read Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
