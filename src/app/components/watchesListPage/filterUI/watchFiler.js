"use client";

import { useRef } from "react";
import FilterSection from "./FilterSection";
import pricesFilterList, {caseSizeFilterList, movementFilterList, caseMaterialFilterList} from "../../../lib/options";
import styles from './watchFilter.module.css'

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
  const brandFilterRef = useRef("none");
  const mvmtFilterRef = useRef("none");
  const caseMaterialFilterRef = useRef("none");
  const caseSizeFilterRef = useRef("none");
  console.log("the watchFilters are: ", watchFilters);

  const brandsAvailable = watchFilters.map((watch) => ({
    label: watch.brand,
    value: watch.brand,
    count: watchFilters.filter((w) => w.brand === watch.brand).length,
  }));

  //importing the filter options
  const priceOptions = pricesFilterList(watchFilters);
  const movementOptions = movementFilterList(watchFilters);
  const caseSizeOptions = caseSizeFilterList(watchFilters);
  const caseMaterialOptions = caseMaterialFilterList(watchFilters);

  return (
    <div className={"filterDiv"}
    
    
    >
      <div className={styles.filterDiv_section} style={{ display: "flex", alignItems: "flex-start" }}>
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
                {brandsAvailable.map((brand, index) => (
                  <button
                    key={index}
                    style={{
                      minHeight: "32px",
                      background:
                        filteredBrand === brand.value ? "#d3d3d3d3" : "white",
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
                      onsetBrand(brand.value);
                    }}
                  >
                    <span>{brand.label}</span>
                    <span>{brand.count}</span>
                  </button>
                ))}
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
            <FilterSection
              title="Price"
              name="price"
              options={priceOptions}
              filterRef={brandFilterRef}
              onFilterChange={onFilterChange}
              filteredValue={filteredPrice}
            />
            <FilterSection
              title="Movement"
              name="movement"
              options={movementOptions}
              filterRef={mvmtFilterRef}
              onFilterChange={onFilterChange}
              filteredValue={filteredMovement}
            />
            <FilterSection
              title="Case Size"
              name="caseSize"
              options={caseSizeOptions}
              filterRef={caseSizeFilterRef}
              onFilterChange={onFilterChange}
              filteredValue={filteredCaseSize}
            />
            <FilterSection
              title="Case Material"
              name="caseType"
              options={caseMaterialOptions}
              filterRef={caseMaterialFilterRef}
              onFilterChange={onFilterChange}
              filteredValue={filteredCaseType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
