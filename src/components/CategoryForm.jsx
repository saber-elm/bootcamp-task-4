import { useState } from "react";

function CategoryForm({ setCategories }) {
  const [isShow, setIsShow] = useState(false);
  const [category, setCategory] = useState({ title: "", description: "" });

  const cancelFormHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const addCategoryHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const newCategory = {
      ...category,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setCategories((prevState) => [...prevState, newCategory]);
    setCategory({ title: "", description: "" });
  };

  return (
    <div className="flex flex-col gap-y-4 mb-12">
      <h2
        className={`${isShow ? "" : "text-amber-100 text-opacity-30"}`}
        onClick={() => setIsShow(true)}
      >
        {isShow ? "Add new Category" : "New Category?"}
      </h2>
      <form
        className={`bg-teal-100 p-4 rounded-xl bg-opacity-15 ${
          isShow ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col mb-8">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="p-2 bg-teal-50 rounded-lg shadow-md border-2 border-transparent"
            value={category.title}
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col mb-8">
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            className="p-2 bg-teal-50 rounded-lg shadow-md border-2 border-transparent"
            value={category.description}
            onChange={changeHandler}
          />
        </div>
        <div className="flex gap-x-8">
          <button
            className="w-full py-4 border rounded-2xl"
            onClick={cancelFormHandler}
          >
            Cancel
          </button>
          <button
            className="w-full py-4 bg-amber-300 text-black rounded-2xl"
            onClick={addCategoryHandler}
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
}
export default CategoryForm;
