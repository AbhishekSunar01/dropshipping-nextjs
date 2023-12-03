const Variants = () => {
  return (
    <table border="1" className="w-full">
      <thead className="border-b-[1px]">
        <tr>
          <th className="pb-4">Product</th>
          <th className="pb-4">SKU</th>
          <th className="pb-4">Color</th>
          <th className="pb-4">Size</th>
          <th className="pb-4">Quantity</th>
          <th className="pb-4">Price</th>
          <th className="pb-4">Compare</th>
          <th className="pb-4">Profit</th>
        </tr>
      </thead>
      <tbody className="text-center text-sm text-secondary">
        <tr>
          <td className="pt-4 flex justify-center">
            <div className="h-16 w-16 bg-gray-200"></div>
          </td>
          <td className="pt-4">Variants/Price Content 1</td>
          <td className="pt-4">Blue</td>
          <td className="pt-4">XXL</td>
          <td className="pt-4">23</td>
          <td className="pt-4">$120</td>
          <td className="pt-4">$120</td>
          <td className="pt-4">$60</td>
        </tr>
        <tr>
          <td className="pt-4 flex justify-center">
            <div className="h-16 w-16 bg-gray-200"></div>
          </td>
          <td className="pt-4">Variants/Price Content 1</td>
          <td className="pt-4">Blue</td>
          <td className="pt-4">XXL</td>
          <td className="pt-4">23</td>
          <td className="pt-4">$120</td>
          <td className="pt-4">$120</td>
          <td className="pt-4">$60</td>
        </tr>
        <tr>
          <td className="pt-4 flex justify-center">
            <div className="h-16 w-16 bg-gray-200"></div>
          </td>
          <td className="pt-4">Variants/Price Content 1</td>
          <td className="pt-4">Blue</td>
          <td className="pt-4">XXL</td>
          <td className="pt-4">23</td>
          <td className="pt-4">$120</td>
          <td className="pt-4">$120</td>
          <td className="pt-4">$60</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Variants;
