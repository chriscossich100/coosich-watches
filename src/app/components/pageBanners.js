import styles from "./pageBanners.module.css";
import Image from "next/image";
function PageBanner() {
  // Your component logic here
  return (
    <div className="PageBannerMain">
      <div className="banner-count">
        <div className={styles.banner_main + ' ' + styles.containerPad}>
          <div className={styles.banner_info}>
            <h1>Shop Watches</h1>
            <div>
              Shop our new curated collection from over 10 watch brands.
            </div>
          </div>
          <div className={styles.banner_media}>
            <Image
              className={styles.banner_image}
              src="/images/banner-images/watchlistbanner.jpg"
              alt="Picture of watches"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className={styles.banner_tagLine_container + ' ' + styles.containerPad}
      >
        <div className={styles.containerPad}>
          <div className={styles.banner_tagLine_content}>
            <span>Authorized retailer serving the modern watch enthusiast</span>
          </div>
        </div>
      </div>
      <div className = {styles.containerPad}>

      </div>
    </div>
  );
}

export default PageBanner;
