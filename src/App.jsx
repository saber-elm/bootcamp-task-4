import { useEffect, useState } from "react";
import "./app.css";
import CategoryForm from "./components/CategoryForm";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [sort, setSort] = useState("latest");
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filterSelectCategory(result);
    result = sortDate(result);
    setFilterProducts(result);
  }, [products, sort, searchParam, selectCategory]);

  const filterSearchTitle = (array) => {
    console.log(array);

    return array.filter((t) => t.title.toLowerCase().includes(searchParam));
  };

  const filterSelectCategory = (array) => {
    if (!selectCategory) return array;
    return array.filter((item) => item.categoryId === selectCategory);
  };

  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "Latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      } else if (sort === "Earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      }
    });
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchParam(e.target.value.trim().toLowerCase());
  };
  const selectCategoryHandler = (e) => {
    setSelectCategory(e.target.value);
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <div className=" bg-teal-800 min-h-screen">
      <Navbar products={products} />
      <div className="container mx-auto py-4 px-8 flex flex-col md:flex-row md:justify-evenly md:gap-x-12 lg:gap-x-24 lg:max-w-screen-xl">
        <section className="w-full mb-12">
          <div className="flex flex-col justify-between items-start text-amber-300">
            <div className="w-full">
              <CategoryForm setCategories={setCategories} />
              <ProductForm categories={categories} setProducts={setProducts} />
            </div>
          </div>
        </section>
        <section className="w-full mb-12">
          <Filter
            searchParam={searchParam}
            onSearch={searchHandler}
            sort={sort}
            onSort={sortHandler}
            categories={categories}
            selectCategory={selectCategory}
            onSelectCategory={selectCategoryHandler}
          />
          <ProductList
            products={filterProducts}
            setProducts={setProducts}
            categories={categories}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
