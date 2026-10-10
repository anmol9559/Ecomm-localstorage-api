import React from "react";

const Filters = ({ setSearch, setCategory }) => {
  return (
    <div className="p-3 w-full flex gap-6 rounded border border-gray-500">
      <div className="flex gap-8 w-full">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 outline-0 border w-full rounded"
          type="text"
          placeholder="Search products..."
        />
        <button className="p-2 bg-white text-black rounded border-0">
          Search
        </button>
      </div>
      <div className=" ">
        <span>Select categories</span>
        <select
          className="p-2 bg-white text-black border-0 outline-0 rounded"
          defaultValue=""
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;