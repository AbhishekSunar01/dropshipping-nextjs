const Product = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="h-[260px] w-[260px] bg-gray-100"></div>
        <button className="bg-accent py-1 mt-4 text-white rounded-xl shadow-xl">
          Change Main Photo
        </button>
      </div>

      <div className="ml-8 border-l-[1px] border-secondary border-opacity-20 pl-8 w-full">
        <form className="flex flex-col gap-5 h-full mt-5">
          <div>
            <label>Product Name</label>
            <input
              type="text"
              className="w-full border-[1px] p-2 outline-none rounded-xl mt-1"
            />
          </div>

          <div className="flex w-full justify-between">
            <div>
              <label>Collection</label>
              <input
                type="text"
                className="w-full border-[1px] p-2 outline-none rounded-xl mt-1"
              />
            </div>
            <div>
              <label>Product Type</label>
              <input
                type="text"
                className="w-full border-[1px] p-2 outline-none rounded-xl mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label>Product Name</label>
            <input
              type="text"
              className="w-2/4 border-[1px] p-2 outline-none rounded-xl mt-1"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
