import WatchItem from "../../components/watchItemUI/watchItem";

export default async function newReleases() {
  // Your code here

  let watches = await fetch("http://localhost:3030/watches");
  let results = await watches.json();

  let newReleases = results.map((watch) => {
    return <WatchItem key={watch.watch_name} watch={watch} />;
  });
  return (
    <div
      className="new-release-section main_containerPad"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <h3
        style={{ marginBottom: "40px", textAlign: "center", fontSize: "42px" }}
      >
        New Releases
      </h3>
      <div
        className={"product-list-names"}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          scrollbarWidth: "none",
          marginBottom: "40px",
        }}
      >
        <button className="product-list_button" style = {{borderBottom: "1px solid black", whiteSpace: "nowrap", margin: "0 12px", marginLeft: "auto"}}>
            AVAILABLE NOW
        </button>
        <button className="product-list_button" style = {{cursor: "default", whiteSpace: "nowrap", margin: "0 12px", marginRight: "auto", color: "gray"}}>
            COMING SOON
        </button>
      </div>
      <div className="product-list__collections">
        <div
          className={"product-list__products"}
          style={{
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gridGap: "40px 20px",
            display: "grid",
            marginBottom: "40px",
          }}
        >
          {newReleases}
        </div>
      </div>
    </div>
  );
}
