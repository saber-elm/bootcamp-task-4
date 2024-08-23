function ProductList({ products, categories, setProducts }) {
  const findCategory = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).title;
  };

  function deleteProductHandler(productId) {
    const filterProducts = products.filter(
      (product) => product.id !== parseInt(productId)
    );
    setProducts(filterProducts);
    // localStorage.clear();
    if (filterProducts.length === 0) {
      localStorage.removeItem("products");
    }
  }

  return (
    <div>
      <h2 className="text-amber-300 font border-b border-b-amber-300 mb-4">
        ProductList
      </h2>
      <div className="overflow-x-auto">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center justify-between mb-2 min-w-[320px]"
            >
              <span className="text-amber-300">{product.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-amber-300">
                  {new Date(product.createdAt).toLocaleDateString("fa-IR")}
                </span>
                <span className="block px-3 py-0.5 text-amber-300 border border-amber-300 text-md rounded-2xl">
                  {findCategory(product.categoryId)}
                </span>
                <span className="flex items-center justify-center rounded-full bg-teal-800 border-2 border-amber-300 text-amber-300 font-medium text-md w-auto px-2 py-0.5">
                  {product.quantity}
                </span>
                <button
                  onClick={() => deleteProductHandler(product.id)}
                  className="border px-2 py-0.5 rounded-2xl border-red-500 text-red-500"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductList;
