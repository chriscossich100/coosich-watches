"use client";

import WatchFilter from "./filterUI/watchFiler";
import Watchlist from "./watchlist";
import { revalidateThePath } from "../../../../public/js/actions";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function WatchesListPage({ watches, filters }) {
  const [brandFilter, setBrandFilter] = useState(filters.brand || "All Brands");
  const [priceChange, setChangePrice] = useState(filters.price || null);
  const [movementChange, setChangeMovement] = useState(
    filters.movement || null
  );
  const [caseTypeChange, setChangeCaseType] = useState(
    filters.caseType || null
  );
  const [caseSizeChange, setChangeCaseSize] = useState(
    filters.caseSize || null
  );
  const [queriedWatches, setQueriedWatches] = useState(watches);

  const searchParams = useSearchParams();
  //this is the router that we are using to get the query from the url
  const router = useRouter();

  const handleBrandFilter = async (brand) => {
    console.log("this is the brand that we all love and desire", brand);

    if (brand === "All Brands") {
      setBrandFilter("All Brands");
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("brand");

      let newWatches = await fetch(
        `http://localhost:3030/watches/?${newParams.toString()}`
      );
      let responser = await newWatches.json();
      setQueriedWatches(responser);
      router.push("?" + newParams.toString());
      return;
    }

    setBrandFilter(brand);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("brand", brand);

    let newWatches = await fetch(
      `http://localhost:3030/watches/?${newParams.toString()}`
    );
    let responser = await newWatches.json();
    console.log("id like to know more about the mormon church");
    setQueriedWatches(responser);
    router.push("?" + newParams.toString());
  };

  const mainChange = async (e) => {
    const filterMap = {
      price: setChangePrice,
      movement: setChangeMovement,
      caseType: setChangeCaseType,
      caseSize: setChangeCaseSize,
    };

    const filterName = e.target.name;
    const filterValue = e.target.value;

    if (filterMap[filterName]) {
      //this code is to remove the filter from the url if the filter is the same as the one that is already in the url
      //in other words, if the button is already clicked, then we remove the filter from the url
      if (filterValue === filters[filterName]) {
        filterMap[filterName](null);
        const newParams = new URLSearchParams(searchParams);
        newParams.delete(filterName);

        let newWatches = await fetch(
          `http://localhost:3030/watches/?${newParams.toString()}`
        );
        let responser = await newWatches.json();
        setQueriedWatches(responser);
        router.push("?" + newParams.toString());
        return;
      }

      //this code runs if the filter is not the same as the one that is already in the url
      //in other words, when someone selects a filter option (one that is not already selected)
      filterMap[filterName](filterValue);
      const newParams = new URLSearchParams(searchParams);
      newParams.set(filterName, filterValue);

      let newWatches = await fetch(
        `http://localhost:3030/watches/?${newParams.toString()}`
      );
      let responser = await newWatches.json();
      setQueriedWatches(responser);
      router.push("?" + newParams.toString());
    }
  };

  console.log(
    "this is the component: watchedListPage and the brandFilter is: ",
    brandFilter,
    "while watches are: ",
    queriedWatches
  );

  return (
    <div className={"mainWatchList" + " " + "main_containerPad"}>
      <div className={"watchList_collection_grid"}>
        <WatchFilter
          watchFilters={queriedWatches}
          filteredBrand={brandFilter}
          onsetBrand={handleBrandFilter}
          onFilterChange={mainChange}
          filteredPrice={priceChange}
          filteredMovement={movementChange}
          filteredCaseType={caseTypeChange}
          filteredCaseSize={caseSizeChange}
        />
        <Watchlist watchList={queriedWatches} filteredBrand={brandFilter} />
      </div>
    </div>
  );
}
