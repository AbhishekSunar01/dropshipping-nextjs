const SearchBar = () => {
  return (
    <div className="flex">
      <form className="flex gap-4">
        <input
          type="text"
          className="w-[620px] h-[60px] border-secondary border-opacity-20 outline-none border-[1px] p-2 px-4 text-2xl shadow-lg rounded-full"
        />
        <button className="bg-primary text-white text-xl px-4 rounded-full shadow-lg shadow-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
