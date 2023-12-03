import SearchBar from "@/app/components/SearchBar";

const Orders = () => {
  return (
    <div>
      <SearchBar />

      <table className="w-full mt-10">
        <thead>
          <tr className="text-sm">
            <th className="p-2">Product</th>
            <th className="p-2">Date</th>
            <th className="p-2">Item ID</th>
            <th className="p-2">Supplier</th>
            <th className="p-2">QTY</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Address</th>
            <th className="p-2">Price</th>
            <th className="p-2">Status</th>
            <th className="p-2">More</th>
          </tr>
        </thead>
        <tbody className="text-sm text-center text-secondary border-t-[1px] ">
          <tr>
            <td className="p-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-gray-200"></div>
                <div>Product Name</div>
              </div>
            </td>
            <td className="p-2">05.11.21</td>
            <td className="p-2">008100471641</td>
            <td className="p-2">Mini Object</td>
            <td className="p-2">4</td>
            <td className="p-2">John Mayer</td>
            <td className="p-2">USA, New York</td>
            <td className="p-2">35 USD</td>
            <td className="p-2">Processing</td>
            <td className="p-2">...</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-gray-200"></div>
                <div>Product Name</div>
              </div>
            </td>
            <td className="p-2">05.11.21</td>
            <td className="p-2">008100471641</td>
            <td className="p-2">Mini Object</td>
            <td className="p-2">4</td>
            <td className="p-2">John Mayer</td>
            <td className="p-2">USA, New York</td>
            <td className="p-2">35 USD</td>
            <td className="p-2">Processing</td>
            <td className="p-2">...</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-gray-200"></div>
                <div>Product Name</div>
              </div>
            </td>
            <td className="p-2">05.11.21</td>
            <td className="p-2">008100471641</td>
            <td className="p-2">Mini Object</td>
            <td className="p-2">4</td>
            <td className="p-2">John Mayer</td>
            <td className="p-2">USA, New York</td>
            <td className="p-2">35 USD</td>
            <td className="p-2">Processing</td>
            <td className="p-2">...</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-gray-200"></div>
                <div>Product Name</div>
              </div>
            </td>
            <td className="p-2">05.11.21</td>
            <td className="p-2">008100471641</td>
            <td className="p-2">Mini Object</td>
            <td className="p-2">4</td>
            <td className="p-2">John Mayer</td>
            <td className="p-2">USA, New York</td>
            <td className="p-2">35 USD</td>
            <td className="p-2">Processing</td>
            <td className="p-2">...</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-gray-200"></div>
                <div>Product Name</div>
              </div>
            </td>
            <td className="p-2">05.11.21</td>
            <td className="p-2">008100471641</td>
            <td className="p-2">Mini Object</td>
            <td className="p-2">4</td>
            <td className="p-2">John Mayer</td>
            <td className="p-2">USA, New York</td>
            <td className="p-2">35 USD</td>
            <td className="p-2">Processing</td>
            <td className="p-2">...</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-gray-200"></div>
                <div>Product Name</div>
              </div>
            </td>
            <td className="p-2">05.11.21</td>
            <td className="p-2">008100471641</td>
            <td className="p-2">Mini Object</td>
            <td className="p-2">4</td>
            <td className="p-2">John Mayer</td>
            <td className="p-2">USA, New York</td>
            <td className="p-2">35 USD</td>
            <td className="p-2">Processing</td>
            <td className="p-2">...</td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-gray-200"></div>
                <div>Product Name</div>
              </div>
            </td>
            <td className="p-2">05.11.21</td>
            <td className="p-2">008100471641</td>
            <td className="p-2">Mini Object</td>
            <td className="p-2">4</td>
            <td className="p-2">John Mayer</td>
            <td className="p-2">USA, New York</td>
            <td className="p-2">35 USD</td>
            <td className="p-2">Processing</td>
            <td className="p-2">...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
