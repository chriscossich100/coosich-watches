import PageBanner from "../components/pageBanners";
import styles from "./brand.module.css";
import Link from "next/link";
import Image from "next/image";
import { getWatchInfo } from "../../../public/js/actions";

export default async function Brands() {
  let brands = await getWatchInfo();

  console.log("the brand is: ", brands);

  return (
    <div className={styles.brandBannerMain}>
      {/* <PageBanner /> */}
      <div className={styles.brandSection}>
        <div className={styles.brandSectionGray}>
          <div className={"brandSectionGraySet " + styles.p_48}>
            <div className={"main_containerPad"}>
              <h1>Authorized Brands</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.brandMainContainer + " main_containerPad"}>
        <div className={styles.brand_alphabet_container}>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
            if (!(letter in brands.brandSummary)) {
              console.log("this letter doesn not exitst", letter);
              return (
                <span
                  key={letter}
                  className={styles.alphabetLetter + " " + styles.caption}
                  style={{ color: "grey" }}
                >
                  {letter}
                </span>
              );
            } else {
              return (
                <Link
                  key={letter}
                  href={`/watches/`}
                  className={styles.alphabetLetter + " " + styles.caption}
                >
                  {letter}
                </Link>
              );
            }
          })}
        </div>
        <div>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
            if (letter in brands.brandSummary) {
              return (
                <div key={letter} className={styles.brandList}>
                  <h2>{letter}</h2>
                  <div className={styles.brandList_brand_items}>
                    {brands.brandSummary[letter]["brands"].map((brand) => {
                      console.log("the branderdude is: ", brand.name);
                      return (
                        <div className={styles.brandList_brand_item}>
                          <div
                            className={styles.brandList_brand_image}
                            style={{
                              backgroundImage: `url(${brand.imagepath})`,
                            }}
                          ></div>
                          <div className={styles.bandList_brand_item_info}>
                            <h3>{brand.name}</h3>
                            <span className={styles.caption}>
                              {" "}
                              {brand.count} Product(s)
                            </span>
                          </div>
                          <Link
                            href={`/watches/?brand=${brand.name}`}
                            className={styles.brandList_brand_item_link}
                          ></Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="websiteInfo">
        <div className="websiteInfo_container">
          <div className="websiteInfo_grid">
            <div className="websiteInfo_item">
              <h2>Authorized Retailer</h2>
              <p>
                Official Authorized Dealer of over 40+ leading luxury brands.
              </p>
            </div>
            <div className="websiteInfo_item">
              <h2>Customer Support</h2>
              <p>
                Dedicated customer service staff ready to resolve any purchase
                or product issues.
              </p>
            </div>
            <div className="websiteInfo_item">
              <h2>Shipping + Returns</h2>
              <p>Swift delivery and flexible return window of seven days.</p>
            </div>
            <div className="websiteInfo_item">
              <h2>Curated Collection</h2>
              <p>
                We work with leading luxury brands to provide the best selection
                for discerning collectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
