function Navbar({ products }) {
  return (
    <div className="h-20 flex items-center justify-center bg-teal-700 gap-x-2 mb-6 sticky top-0 rounded-b-3xl shadow-lg text-center">
      <h1 className="text-md font-medium text-amber-300 hover:text-teal-100">
        Inventory App by React and Tailwind
      </h1>
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-teal-800 border-2 border-amber-300 font-medium text-amber-300 text-md">
        {products.length}
      </span>
    </div>
  );
}
export default Navbar;
