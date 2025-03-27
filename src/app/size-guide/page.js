'use client';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto  p-6 bg-white rounded-lg shadow-sm border border-gray-200 my-[150px]">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">SIZE CHART</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'].map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 text-center text-sm font-semibold text-gray-600 border-b-2 border-gray-200"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              ['S', 27, 21, 22, 8.5],
              ['M', 28, 22, 23, 9],
              ['L', 29, 23, 24, 9],
              ['XL', 30, 24, 26, 10],
            ].map(([size, length, chest, shoulder, sleeve]) => (
              <tr key={size} className="border-b border-gray-200">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{size}</td>
                <td className="px-4 py-3 text-sm text-gray-600 text-center">{length}</td>
                <td className="px-4 py-3 text-sm text-gray-600 text-center">{chest}</td>
                <td className="px-4 py-3 text-sm text-gray-600 text-center">{shoulder}</td>
                <td className="px-4 py-3 text-sm text-gray-600 text-center">{sleeve}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-500 italic">
        Please note: All measurements are in inches and may vary slightly.
      </p>
    </div>
  );
};

export default Page;
