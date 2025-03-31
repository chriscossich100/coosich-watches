'use client';

import styles from "./watchlist.module.css";
import otherStyles from "../featured.module.css";
import Link from "next/link";
import WatchItem from "../watchItemUI/watchItem";
const Watchlist = ({ filteredBrand, watchList }) => {

  let filtered_brand = filteredBrand || "All Brands";

  console.log(
    "in the watchlist component which is a client component btw the brand is: ",
    filtered_brand
  );

  let watchlist = watchList.map((watch) => {
    if (filtered_brand == "All Brands" || watch.brand == filtered_brand) {
      return (
        <WatchItem key = {watch.watch_name} watch = {watch} />
      );
    }
  });

  return (
    <div>
      <div className={styles.productListContainer}>{watchlist}</div>
    </div>
  );
};

export default Watchlist;
