import axios from 'axios';

export default async function Page(context: { params: { id: string } }) {
  const { id } = context.params;
  const prod = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const data = prod.data;
  console.log(data);
  return (
    <div className=" p-8">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={data?.image}
              alt="Nike Sneakers"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">{data?.title}</h2>
            <p className="mb-4">{data?.description}</p>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Highlights:</h3>
              <ul className="list-disc pl-4">
                <li>Made with full cotton</li>
                <li>Slim fit for any body</li>
                <li>Quality control by JC</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label
                  htmlFor="color"
                  className="mr-2"
                >
                  Color:
                </label>
                <select
                  id="color"
                  className="bg-white text-gray-800 rounded-md py-1 px-2"
                >
                  <option value="white">White</option>
                </select>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="size"
                  className="mr-2"
                >
                  Size:
                </label>
                <select
                  id="size"
                  className="bg-white text-gray-800 rounded-md py-1 px-2"
                >
                  <option value="40">40</option>
                </select>
              </div>
              <div className="text-2xl font-bold">$49.00</div>
            </div>
            <div className="mt-4">
              <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-md mr-2">
                Add to cart
              </button>
              <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-md">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
