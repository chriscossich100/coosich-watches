import Link from "next/link";
import Image from "next/image";
import VideoBanner from "../../components/video";
export default async function Watch({ params }) {
  //starting with Nextjs 15, the params prop is a promise. You must use asyn/await to get teh actual value.
  let actualwatch = (await params).actualwatch;
  console.log("the actualwatch is:", actualwatch);
  // let newName = actualwatch.replace("", " ");
  let newName = actualwatch.replace(/%20/g, " ");
  let watchData = await fetch(`http://localhost:3030/watch/${newName}`);
  let watch = await watchData.json();
  console.log("the watch is:", watch[0]);

  console.log("the the newName is:", newName);
  return (
    <div>
      <section>
        <div className={"watch_container"}>
          <div className={"watch_grid"}>
            <div className={"watch_gallery"}>
              <div className={"gallery_grid"} style={{ display: "grid" }}>
                <p>this is me</p>
                <div
                  className={"watch_image"}
                  style={{ backgroundImage: `url(${watch[0].imagepath})` }}
                >
                  <div>
                    <button style={{ display: "none" }}>
                      {/* to be filled in later!!! */}
                    </button>
                    <div className={"variant_images"}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={"watch_description"}>
              <div>
                <h1 style={{ fontSize: "3rem" }}>{watch[0].brand}</h1>
                <h2 style={{ fontSize: "1.25rem" }}>{newName}</h2>
                <p>Price: ${watch[0].price}</p>
                <button className="addToBagButton">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="someInfoTemplate">
        <div className="why-buy">
          <div className="why-buy-grid">
            <div className="why-buy-grid-container">
              <div className={"py-info"}>
                <h3 className={"why-buy__title"}>Why Buy from Us?</h3>
                <div className={"why-buy__content"}>
                  <div>
                    <p>Factory Warranty</p>
                    <p>
                      All Orders Come With Manufacturer's Full Factory Warranty
                    </p>
                  </div>
                  <div>
                    <p>Customer Service</p>
                    <p>Our Customer Service Team is Ready to Help You</p>
                  </div>
                  <div>
                    <p>Finances</p>
                    <p>Monthly Financing Available</p>
                  </div>
                </div>
              </div>
            </div>
            <VideoBanner watchBlogorVideo = {watch[0].video_review != 'none' ? watch[0].video_review : watch[0].blog_post_link}  />
          </div>
        </div>
      </section>
      <section>
        <div className={"py-info"}>
          <div className={"description-container"}>
            <h1>Product Description</h1>
            <div className={"watch-description-content"}>
              <div>
                <h3 className={"watch-caption"}>Overview</h3>
                <div className={"watch-caption-grid"}>
                  <div>
                    <p>Reference</p>
                    <p>{watch[0].specifications.overview.reference}</p>
                  </div>
                  <div>
                    <p>Case Size</p>
                    <p>{watch[0].specifications.overview["case size"]}mm</p>
                  </div>
                  <div>
                    <p>Case Height</p>
                    <p>{watch[0].specifications.overview["case height"]}</p>
                  </div>
                  <div>
                    <p>Lug to Lug</p>
                    <p>{watch[0].specifications.overview["lug to lug"]}</p>
                  </div>
                  <div>
                    <p>Lug Width</p>
                    <p>{watch[0].specifications.overview["lug width"]}</p>
                  </div>
                  <div>
                    <p>Water Resistance</p>
                    <p>
                      {watch[0].specifications.overview["Water resistance"]}
                    </p>
                  </div>
                  <div>
                    <p>Movement</p>
                    <p>{watch[0].specifications.overview.movement}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className={"watch-caption"}>Case</h3>
                <div className={"watch-caption-grid"}>
                  <div>
                    <p>Case Back</p>
                    <p>{watch[0].specifications.case.caseback}</p>
                  </div>
                  <div>
                    <p>Case Material</p>
                    <p>{watch[0].specifications.case.material}</p>
                  </div>
                  <div>
                    <p>Crown</p>
                    <p>{watch[0].specifications.case.crown}</p>
                  </div>
                  <div>
                    <p>Hands</p>
                    <p>{watch[0].specifications.case.hands}</p>
                  </div>
                  <div>
                    <p>Lume</p>
                    <p>{watch[0].specifications.case.lume}</p>
                  </div>
                  <div>
                    <p>Strap / Bracelet Material</p>
                    <p>{watch[0].specifications.case.strapBraceletMaterial}</p>
                  </div>
                  <div>
                    <p>Weight</p>
                    <p>{watch[0].specifications.case.weight}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className={"watch-caption"}>Movement</h3>
                <div className={"watch-caption-grid"}>
                  <div>
                    <p>Caliber</p>
                    <p>{watch[0].specifications.movement.caliber}</p>
                  </div>
                  <div>
                    <p>Frequency</p>
                    <p>{watch[0].specifications.movement.frequency}</p>
                  </div>
                  <div>
                    <p>Functions</p>
                    <p>{watch[0].specifications.movement.functions}</p>
                  </div>
                  <div>
                    <p>Power Reserve</p>
                    <p>{watch[0].specifications.movement.powerReserve}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={"brand-history-div"}>
        <div className={"brand-history-container"}>
          <div className={"brand-history-content-grid"}>
            <div className={"brand-history-content-desc"}>
              <h2 className={"brand-history-title"}>Brand History</h2>
              <h3 className={"brand-history-brand_name"}>{watch[0].brand}</h3>
              <div className={"brand-history-desc"}>
               {watch[0].brand_description}
              </div>
              <div className={"brand-shop"}>
                <Link href={"/watches"} className={"brand-shop-button"}>
                  Shop {watch[0].brand}
                </Link>
              </div>
            </div>
            <Image
              className={"brand-history-image"}
              src={`http://localhost:3030/static/brands/${watch[0].brand.replace(
                /\s+/g,
                "-"
              )}/brandImage/brand-image.png`}
              alt={`Picture of the brand ${watch[0].brand}`}
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
      <div className="websiteInfo">
        <div className="websiteInfo_item">
          <h3>Authorized Retailer</h3>
          <p>Official Authorized Dealer of over 40+ leading luxury brands.</p>
        </div>
        <div className="websiteInfo_item">
          <h3>Customer Support</h3>
          <p>
            Dedicated customer service staff ready to resolve any purchase or
            product issues.
          </p>
        </div>
        <div className="websiteInfo_item">
          <h3>Shipping + Returns</h3>
          <p>Swift delivery and flexible return window of seven days.</p>
        </div>
        <div className="websiteInfo_item">
          <h3>Curated Collection</h3>
          <p>
            We work with leading luxury brands to provide the best selection for
            discerning collectors.
          </p>
        </div>
      </div>
    </div>
  );
}
