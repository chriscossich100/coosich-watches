//filtering options for the watches:
const pricesFilterList = (watchFilters) => {
  const priceOptions = [
    {
      label: "< $250",
      value: "< $250",
      count: watchFilters.filter((watch) => watch.price < 250).length,
    },
    {
      label: "$250-$500",
      value: "$250-$500",
      count: watchFilters.filter(
        (watch) => watch.price >= 250 && watch.price <= 500
      ).length,
    },
    {
      label: "$500-$1000",
      value: "$500-$1000",
      count: watchFilters.filter(
        (watch) => watch.price >= 500 && watch.price <= 1000
      ).length,
    },
    {
      label: "$1000-$2000",
      value: "$1000-$2000",
      count: watchFilters.filter(
        (watch) => watch.price >= 1000 && watch.price <= 2000
      ).length,
    },
    {
      label: "$2000-$5000",
      value: "$2000-$5000",
      count: watchFilters.filter(
        (watch) => watch.price >= 2000 && watch.price <= 5000
      ).length,
    },
    {
      label: "> $5000",
      value: "> $5000",
      count: watchFilters.filter((watch) => watch.price > 5000).length,
    },
  ];

  return priceOptions;
};

export const movementFilterList = (watchFilters) => {
  const movementOptions = [
    {
      label: "Automatic",
      value: "Automatic",
      count: watchFilters.filter(
        (watch) => watch.specifications.overview.movement === "Automatic"
      ).length,
    },
    {
      label: "Quartz",
      value: "Quartz",
      count: watchFilters.filter(
        (watch) => watch.specifications.overview.movement === "Quartz"
      ).length,
    },
    {
      label: "Solar",
      value: "Solar",
      count: watchFilters.filter(
        (watch) => watch.specifications.overview.movement === "Solar"
      ).length,
    },
  ];

  return movementOptions;
};

export const caseSizeFilterList = (watchFilters) => {
  const caseSizeOptions = [
    {
      label: "≤ 36mm",
      value: "≤ 36mm",
      count: watchFilters.filter(
        (watch) => watch.specifications.overview["case size"] <= 36
      ).length,
    },
    {
      label: "37-40mm",
      value: "37-40mm",
      count: watchFilters.filter(
        (watch) =>
          watch.specifications.overview["case size"] >= 37 &&
          watch.specifications.overview["case size"] <= 40
      ).length,
    },
    {
      label: "41-44mm",
      value: "41-44mm",
      count: watchFilters.filter(
        (watch) =>
          watch.specifications.overview["case size"] >= 41 &&
          watch.specifications.overview["case size"] <= 44
      ).length,
    },
    {
      label: "≥ 45mm",
      value: "≥ 45mm",
      count: watchFilters.filter(
        (watch) => watch.specifications.overview["case size"] >= 45
      ).length,
    },
  ];

  return caseSizeOptions;
};

export const caseMaterialFilterList = (watchFilters) => {
  const caseMaterialOptions = [
    {
      label: "Stainless Steel",
      value: "Stainless Steel",
      count: watchFilters.filter(
        (watch) => watch.specifications.case.material === "Stainless Steel"
      ).length,
    },
    {
      label: "Titaium",
      value: "Titaium",
      count: watchFilters.filter(
        (watch) => watch.specifications.case.material === "Titaium"
      ).length,
    },
    {
      label: "Gold",
      value: "Gold",
      count: watchFilters.filter(
        (watch) => watch.specifications.case.material === "Gold"
      ).length,
    },
    {
      label: "Resin",
      value: "Resin",
      count: watchFilters.filter(
        (watch) => watch.specifications.case.material === "Resin"
      ).length,
    },
    {
      label: "Bronze",
      value: "Bronze",
      count: watchFilters.filter(
        (watch) => watch.specifications.case.material === "Bronze"
      ).length,
    },
  ];
  return caseMaterialOptions;
};

export default pricesFilterList;




