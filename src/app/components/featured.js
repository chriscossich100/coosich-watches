import styles from "./featured.module.css";
import Link from "next/link";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result ? data.result.rows : data;
};

const renderItems = (items, type) => {
  return items.map((item) => (
    <div className={styles.products_list_product_details} key={item.name || item.watch_name}>
      <Link href={type === "brands" ? item.link : `/watch/${item.watch_name}`}>
        <div className={styles.featured_content}>
          <div className={styles.imageBackground}>
            <div className={styles.imageOpacity}>
              <div
                className={styles.imageDisplay}
                style={{ backgroundImage: `url(${item.brandimagepath || item.imagepath})` }}
              ></div>
            </div>
          </div>
          <div className={styles.product_list_info}>
            <h3 className={styles.product_list_info_caption}>{item.name || item.brand}</h3>
            <p className={styles.product_list_info_watchname}>{item.link || item.watch_name}</p>
            {type === "watches" && <p>${item.price}</p>}
          </div>
        </div>
      </Link>
    </div>
  ));
};

const Featured = async ({ names }) => {
  const url = `http://localhost:3030/${names}`;
  const items = await fetchData(url);
  const title = names === "brands" ? "Featured Brands" : "Shop New Releases";

  return (
    <div className={styles.featured_containers}>
      <div className={styles.title_container_pad}>
        <h1>{title}</h1>
      </div>
      <div className={styles.featured_div}>
        <div className={styles.products_list}>
          <div className={styles.products_list_collection}>
            <div className={styles.products_list_product}>{renderItems(items, names)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
