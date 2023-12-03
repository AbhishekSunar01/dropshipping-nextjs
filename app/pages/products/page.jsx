import SearchBar from "@/app/components/SearchBar";

const Products = () => {
  return (
    <div>
      <SearchBar />

      <div className="flex justify-end mt-10 gap-5">
        <button className="bg-accent text-white p-2 rounded-xl shadow-lg">
          Add Order+
        </button>
        <button className="bg-accent text-white p-2 rounded-xl shadow-lg">
          Export CVS
        </button>
      </div>
    </div>
  );
};

export default Products;
