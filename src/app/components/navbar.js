//simple navbar component

import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div
      className="site_header"
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
        zIndex: 4,
        height: "104px",
        pointerEvents: "auto",
      }}
    >
      <div
        className={"site_navbar main_containerPad"}
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 4,
          borderBottom: "1px solid #e4e4e4",
        }}
      >
        <div
          className="site_navbar_left"
          style={{
            height: "100%",
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="site_navbar_left_info"
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridGap: "12px",
              alignItems: "center",
              fontSize: "10px",
            }}
          >
            <div className={"site_navbar_left_info_text"}>
              <div
                className="info_text_content"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridAutoFlow: "column",
                  display: "grid",
                }}
              >
                <Link
                  href="#"
                  className="site_navbar_left_info_text_link"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "10px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                    paddingRight: "1rem",
                    borderRightWidth: "1px",
                    marginRight: "1rem",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  <span
                    className="site_navbar_span"
                    style={{
                      lineHeight: "1.25rem",
                      borderBottomWidth: "1px",
                      display: "inline-block",
                    }}
                  >
                    Contact Us
                  </span>
                </Link>
                <div
                  className="site_navbar_left_info_text_time"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textTransform: "uppercase",
                    fontSize: "11px",
                    lineHeight: "1.4",
                    letterSpacing: "1px",
                  }}
                >
                  <span>9am - 5pm EST M-F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site_navbar_center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Link
            href="/"
            title="Cossich Watches Home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              cossich watches
            </h3>
          </Link>
        </div>

        {/* this part of the code should be changed when we're ready to impliment a search, cart, and login feature */}
        <div
          className="site_navbar_right"
          style={{
            display: "flex",
            flex: "1",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link
            href="/"
            title="Cossich Watches Home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>COSSICH</span>
          </Link>
        </div>
        {/* end of navbar section right */}
      </div>

      <div className="site_navbar_bottom">
        <nav
          className="site_navbar_bottom_nav"
          style={{
            borderBottom: `1px solid #e4e4e4`,
            height: "32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="site_navbar_bottom_nav_items"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
              fontSize: "12px",
              lineHeight: "1.4",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                padding: 0,
                justifyContent: "center",
              }}
            >
              <li style={{ margin: "0 10px" }}>
                <Link href="/brands">Brands</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link href="/watches">Watches</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link href="/watches/new-releases">New Releases</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link href="/blog">Blog</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link href="/about">About</Link>
              </li>

              <li style={{ margin: "0 10px" }}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
