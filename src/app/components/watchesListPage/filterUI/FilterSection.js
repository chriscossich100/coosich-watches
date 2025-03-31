"use client";

const FilterSection = ({ title, name, options, filterRef, onFilterChange, filteredValue }) => {
  return (
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

          filterRef.current.style.display =
            filterRef.current.style.display === "block" ? "none" : "block";
        }}
      >
        <span>{title}</span>
        <span
          className="chevron"
          style={{
            transform: filteredValue != null ? "rotate(180deg)" : "none",
            transition: "transform 0.3s",
          }}
        >
          ▼
        </span>
      </button>
      <div
        className={`${title}FilterOptions`}
        style={{
          display: filteredValue != null ? "block" : "none",
          padding: "12px 0",
        }}
        ref={filterRef}
      >
        {options.map((option, index) => {
          const count = option.count;
          if (count === 0) return null;
          return (
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
                value={option.value}
                name={name}
                onChange={onFilterChange}
                checked={filteredValue === option.value}
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
                <span>{option.label}</span>
                <span>{count}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;