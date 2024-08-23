import { useState } from "react";

function ProductForm({ categories, setProducts }) {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setProductsFormData({ ...productsFormData, [name]: value });
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productsFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setProductsFormData({ title: "", quantity: "", categoryId: "" });
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="">Add new Product</h2>
      <form action="" className="bg-teal-100 p-4 rounded-xl bg-opacity-15">
        <div className="flex flex-col mb-8">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            id="product-title"
            className="p-2 bg-teal-50 rounded-lg shadow-md border-2 border-transparent"
            value={productsFormData.title}
            onChange={changeHandler}
          />
        </div>
        <div htmlFor="product-quantity" className="flex flex-col mb-8">
          <label className="block mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            id="product-quantity"
            className="p-2 bg-teal-50 rounded-lg shadow-md border-2 border-transparent"
            value={productsFormData.quantity}
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="block mb-1">Category</label>
          <select
            name="categoryId"
            id="product-category"
            className="p-2 bg-transparent rounded-lg shadow-md border-2 border-transparent"
            value={productsFormData.categoryId}
            onChange={changeHandler}
          >
            <option className="text-amber-300">Select a Category</option>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex gap-x-8">
          {/* <button className="w-full py-4 border rounded-2xl">Cancel</button> */}
          <button
            id="add-new-product"
            className="w-full py-4 bg-amber-300 text-black rounded-2xl"
            onClick={addNewProduct}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
export default ProductForm;
