import Image from "next/image";
import Banner from "./components/banner";
import Featured from "./components/featured";
import BlogList from "./components/blogList";
export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Featured names="brands" />
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
                  We work with leading luxury brands to provide the best
                  selection for discerning collectors.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="someInfoTemplate">
          <div className="why-buy">
            <div className="why-buy-grid">
              <div className="oursiteinfo">
                <h2>
                  The perfect place to learn about watches, read our
                  enthusiastic stories, and buy your next watch
                </h2>
                <div className={"oursitestats"}>
                  <div className="oursitestats-block">
                    <span className="block-details">450+</span>
                    <div>
                      <p>Social Media Followers</p>
                    </div>
                  </div>
                  <div className="oursitestats-block">
                    <span className="block-details">10+</span>
                    <div>
                      <p>Authorized Brands</p>
                    </div>
                  </div>
                  <div className="oursitestats-block">
                    <span className="block-details">50,000+</span>
                    <div>
                      <p>Customers Served Globally</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"myPhotoMedia"}>
                <Image
                  className={"myPhoto"}
                  src={"/images/me/two-watches-together2.png"}
                  height={500}
                  width={500}
                  alt={"Picture of the website developer/owner of site"}
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <BlogList />
        <Featured names="watches" />
      </main>
    </div>
  );
}
