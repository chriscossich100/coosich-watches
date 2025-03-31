import otherStyles from "../featured.module.css";
import Link from "next/link";
export default function WatchItem({
    watch
}) {

    return (
        <div key={watch.watch_name} className={"productList-item"}>
          <Link href={`/watch/${watch.watch_name}`}>
            <div key={watch.name} className={otherStyles.featured_content}>
              <div className={otherStyles.imageBackground}>
                <div className={otherStyles.imageOpacity}>
                  <div
                    className={otherStyles.imageDisplay}
                    style={{ backgroundImage: `url(${watch.imagepath})` }}
                  ></div>
                </div>
              </div>
              <div className={otherStyles.product_list_info}>
                <h3 className={otherStyles.product_list_info_caption}>
                  {watch.brand}
                </h3>
                <p className={otherStyles.product_list_info_watchname}>
                  {watch.watch_name}
                </p>
                {/* <p>{watch.description}</p> */}
                <p>${watch.price}</p>
                <div>
                  <span
                    className={otherStyles.product_list_caption_price}
                  ></span>
                </div>
              </div>
            </div>
          </Link>
        </div>
    )
}