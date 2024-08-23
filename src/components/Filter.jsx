function Filter({
  searchParam,
  onSearch,
  sort,
  onSort,
  categories,
  selectCategory,
  onSelectCategory,
}) {
  return (
    <div className="mb-20">
      <h2 className="text-amber-300 font border-b border-b-amber-300 mb-4">
        Filters
      </h2>
      <div className="flex justify-between items-center mb-6 text-amber-300">
        <label>Search</label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="p-2 bg-teal-50 rounded-lg shadow-md border-2 border-transparent"
          value={searchParam}
          onChange={onSearch}
        />
      </div>
      <div className="flex justify-between items-center mb-6 text-amber-300">
        <label className=" mb-1 text-amber-300">Sort</label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-amber-300 rounded-xl shadow-md p-1"
          value={sort}
          onChange={onSort}
        >
          <option className="text-amber-300">Latest</option>
          <option className="text-amber-300">Earliest</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-6 text-amber-300">
        <label className=" mb-1 text-amber-300">Category</label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-amber-300 rounded-xl shadow-md p-1"
          value={selectCategory}
          onChange={onSelectCategory}
        >
          <option className="text-amber-300" value="">
            All
          </option>
          {categories.map((category) => {
            return (
              <option
                className="bg-slate-500 text-slate-300"
                value={category.id}
                key={category.id}
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default Filter;
