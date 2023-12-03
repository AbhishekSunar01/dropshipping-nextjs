import SearchBar from "@/app/components/SearchBar";

const SearchProducts = () => {
  return (
    <div>
      <SearchBar />

      <div className="flex mt-5 gap-4">
        <div className="categories">Health</div>
        <div className="categories">Womam</div>
        <div className="categories">Pet</div>
        <div className="categories">Elecronics</div>
        <div className="categories">Man wear</div>
        <div className="categories">Garden</div>
        <div className="categories">Other</div>
      </div>

      <div className="text-3xl font-semibold mt-7 text-[#333]">
        Special Products
      </div>

      <div className="mt-7 justify-between flex">
        <div className="h-[340px] w-[260px] bg-gray-200"></div>
        <div className="h-[340px] w-[260px] bg-gray-200"></div>
        <div className="h-[340px] w-[260px] bg-gray-200"></div>
        <div className="h-[340px] w-[260px] bg-gray-200"></div>
      </div>
    </div>
  );
};

export default SearchProducts;
