"use client";

import { useRef } from "react";
export default function WatchFilter({
  onsetBrand,
  watchFilters,
  filteredBrand,
  filteredPrice,
  onFilterChange,
  filteredMovement,
  filteredCaseType,
  filteredCaseSize,
}) {
  console.log(
    "the watchFilters are:",
    watchFilters,
    "and the filtered price should be: ",
    filteredPrice
  );

  const brandFilterRef = useRef("none");
  const mvmtFilterRef = useRef("none");
  const caseMaterialFilterRef = useRef("none");
  const caseSizeFilterRef = useRef("none");

  const brandsAvailable = watchFilters.map((watch) => {
    return (
      <button
        key={watch.brand}
        style={{
          minHeight: "32px",
          background: filteredBrand === watch.brand ? "#d3d3d3d3" : "white",
          padding: "0 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          cursor: "pointer",
          outline: 0,
          margin: 0,
        }}
        onClick={() => {
          onsetBrand(watch.brand);
        }}
      >
        <span>{watch.brand}</span>
        <span>1</span>
      </button>
    );
  });

  return (
    <div className={"filterDiv"}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ width: "296px", position: "relative", top: "0px" }}>
          <div
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
              paddingRight: "16px",
              scrollbarWidth: "none",
            }}
          >
            <div className="brandFilterGroup">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "12px",
                }}
              >
                <button
                  style={{
                    background:
                      filteredBrand === "All Brands" ? "#d3d3d3d3" : "white",
                    minHeight: "32px",
                    padding: "0 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    cursor: "pointer",
                    outline: 0,
                    margin: 0,
                  }}
                  onClick={() => {
                    onsetBrand("All Brands");
                  }}
                >
                  <span>All Brands</span>
                  <span>{watchFilters.length}</span>
                </button>
                {brandsAvailable}
              </div>
              <button
                style={{
                  padding: "0 12px 16px",
                  textDecoration: "underline",
                  fontSize: "16px",
                  lineHeight: 1.9,
                  cursor: "pointer",
                  outline: 0,
                  backgroundColor: "transparent",
                  margin: 0,
                }}
                className="seeMoreButton"
              >
                See More Brands
              </button>
            </div>
            <div>
              <button
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "white",
                  borderTop: "1px solid #d4d4d8",
                  cursor: "pointer",
                  outline: 0,
                  padding: "12px 0",
                }}
                onClick={(e) => {
                  const chevron = e.currentTarget.querySelector(".chevron");
                  chevron.style.transform =
                    chevron.style.transform === "rotate(180deg)"
                      ? "rotate(0deg)"
                      : "rotate(180deg)";

                  if (brandFilterRef.current.style.display === "block") {
                    brandFilterRef.current.style.display = "none";
                    return;
                  } else {
                    brandFilterRef.current.style.display = "block";
                  }
                }}
              >
                <span>Price</span>
                <span
                  className="chevron"
                  style={{
                    transform:
                      filteredPrice != null ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                >
                  ▼
                </span>
              </button>
              <div
                className="priceFilterOptions"
                style={{
                  display: filteredPrice != null ? "block" : "none",
                  padding: "12px 0",
                }}
                ref={brandFilterRef}
              >
                {[
                  "< $250",
                  "$250-$500",
                  "$500-$1000",
                  "$1000-$2000",
                  "$2000-$5000",
                  "> $5000",
                ].map((priceRange, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{ marginRight: "10px" }}
                      value={priceRange}
                      className="priceRange"
                      name="price"
                      onChange={onFilterChange}
                      checked={filteredPrice == priceRange}
                    />
                    <button
                      style={{
                        minHeight: "32px",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        cursor: "pointer",
                        outline: 0,
                        margin: 0,
                      }}
                    >
                      <span>{priceRange}</span>
                      <span>1</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "white",
                  borderTop: "1px solid #d4d4d8",
                  cursor: "pointer",
                  outline: 0,
                  padding: "12px 0",
                }}
                onClick={(e) => {
                  const chevron = e.currentTarget.querySelector(".chevron");
                  chevron.style.transform =
                    chevron.style.transform === "rotate(180deg)"
                      ? "rotate(0deg)"
                      : "rotate(180deg)";

                  if (mvmtFilterRef.current.style.display === "block") {
                    mvmtFilterRef.current.style.display = "none";
                    return;
                  } else {
                    mvmtFilterRef.current.style.display = "block";
                  }
                }}
              >
                <span>Movement</span>
                <span
                  className="chevron"
                  style={{
                    transform:
                      filteredMovement != null ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                >
                  ▼
                </span>
              </button>
              <div
                className="movementFilterOptions"
                style={{
                  display: filteredMovement != null ? "block" : "none",
                  padding: "12px 0",
                }}
                ref={mvmtFilterRef}
              >
                {["Automatic", "Quartz", "Solar"].map((movementType, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{ marginRight: "10px" }}
                      value={movementType}
                      name="movement"
                      onChange={onFilterChange}
                      checked={filteredMovement == movementType}
                    />
                    <button
                      style={{
                        minHeight: "32px",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        cursor: "pointer",
                        outline: 0,
                        margin: 0,
                      }}
                    >
                      <span>{movementType}</span>
                      <span>1</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "white",
                  borderTop: "1px solid #d4d4d8",
                  cursor: "pointer",
                  outline: 0,
                  padding: "12px 0",
                }}
                onClick={(e) => {
                  const chevron = e.currentTarget.querySelector(".chevron");
                  chevron.style.transform =
                    chevron.style.transform === "rotate(180deg)"
                      ? "rotate(0deg)"
                      : "rotate(180deg)";

                  if (caseSizeFilterRef.current.style.display === "block") {
                    caseSizeFilterRef.current.style.display = "none";
                    return;
                  } else {
                    caseSizeFilterRef.current.style.display = "block";
                  }
                }}
              >
                <span>Case Size</span>
                <span
                  className="chevron"
                  style={{
                    transform:
                      filteredCaseSize != null ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                >
                  ▼
                </span>
              </button>
              <div
                className="caseSizeFilterOptions"
                style={{
                  display: filteredCaseSize != null ? "block" : "none",
                  padding: "12px 0",
                }}
                ref={caseSizeFilterRef}
              >
                {["≤ 36mm", "37-40mm", "41-44mm", "≥ 45mm"].map(
                  (caseSize, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{ marginRight: "10px" }}
                        value={caseSize}
                        name="caseSize"
                        onChange={onFilterChange}
                        checked={filteredCaseSize == caseSize}
                      />
                      <button
                        style={{
                          minHeight: "32px",
                          background: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          cursor: "pointer",
                          outline: 0,
                          margin: 0,
                        }}
                      >
                        <span>{caseSize}</span>
                        <span>1</span>
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <button
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "white",
                  borderTop: "1px solid #d4d4d8",
                  cursor: "pointer",
                  outline: 0,
                  padding: "12px 0",
                }}
                onClick={(e) => {
                  const chevron = e.currentTarget.querySelector(".chevron");
                  chevron.style.transform =
                    chevron.style.transform === "rotate(180deg)"
                      ? "rotate(0deg)"
                      : "rotate(180deg)";

                  if (caseMaterialFilterRef.current.style.display === "block") {
                    caseMaterialFilterRef.current.style.display = "none";
                    return;
                  } else {
                    caseMaterialFilterRef.current.style.display = "block";
                  }
                }}
              >
                <span>Case Material</span>
                <span
                  className="chevron"
                  style={{
                    transform:
                      filteredCaseType != null ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                >
                  ▼
                </span>
              </button>
              <div
                className="materialFilterOptions"
                style={{
                  display: filteredCaseType != null ? "block" : "none",
                  padding: "12px 0",
                }}
                ref={caseMaterialFilterRef}
              >
                {["Stainless Steel", "Titaium", "Gold", "Resin", "Bronze"].map(
                  (caseType, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{ marginRight: "10px" }}
                        value={caseType}
                        name="caseType"
                        onChange={onFilterChange}
                        checked={filteredCaseType == caseType}
                      />
                      <button
                        style={{
                          minHeight: "32px",
                          background: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          cursor: "pointer",
                          outline: 0,
                          margin: 0,
                        }}
                      >
                        <span>{caseType}</span>
                        <span>1</span>
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
