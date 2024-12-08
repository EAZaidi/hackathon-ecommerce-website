

export default function About() {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 py-16">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Food is an important part of a balanced diet.
              </h1>
              <p className="text-gray-600 mb-6">
                Explore our diverse range of delicious dishes crafted with care
                and passion. Order now for a delightful dining experience!
              </p>
              <button className="bg-[#ff9a00] text-white px-6 py-2 rounded hover:bg-orange-600">
                Order Now
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/dish1.jpg"
                alt="Dish 1"
                className="rounded shadow-lg object-cover"
              />
              <img
                src="/dish2.jpg"
                alt="Dish 2"
                className="rounded shadow-lg object-cover"
              />
              <img
                src="/dish3.jpg"
                alt="Dish 3"
                className="rounded shadow-lg object-cover"
              />
              <img
                src="/dish4.jpg"
                alt="Dish 4"
                className="rounded shadow-lg object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img src="/fresh-icon.png" alt="Fresh Food" className="mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700">Fresh Food</h3>
                <p className="text-gray-600">
                  We serve only the freshest ingredients in every dish.
                </p>
              </div>
              <div>
                <img src="/chef-icon.png" alt="Expert Chefs" className="mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700">Expert Chefs</h3>
                <p className="text-gray-600">
                  Our chefs are highly trained and passionate about cooking.
                </p>
              </div>
              <div>
                <img
                  src="/quality-icon.png"
                  alt="Guaranteed Quality"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">Guaranteed Quality</h3>
                <p className="text-gray-600">
                  We guarantee the best quality in every bite.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Member Section */}
        <section className="bg-orange-500 py-16">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Team Members</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <img
                    src={`/chef${i + 1}.jpg`}
                    alt={`Chef ${i + 1}`}
                    className="rounded-full w-32 h-32 mx-auto object-cover"
                  />
                  <h3 className="text-lg font-medium">Chef {i + 1}</h3>
                  <p className="text-sm">Specialist</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              What Our Client Are Saying
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
              <p className="text-gray-600 italic">
                “The food is amazing! Great taste, fresh ingredients, and quick
                service. Highly recommend.”
              </p>
              <div className="mt-4">
                <img
                  src="/client.jpg"
                  alt="Client"
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h3 className="text-lg font-medium text-gray-700 mt-2">John Doe</h3>
              </div>
            </div>
          </div>
        </section>
  
        {/* Food Menu Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Food Menu
            </h2>
            <table className="w-full border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4">Dish Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">Spaghetti Bolognese</td>
                  <td className="p-4">Italian</td>
                  <td className="p-4">$12.99</td>
                </tr>
                <tr>
                  <td className="p-4">Chicken Curry</td>
                  <td className="p-4">Indian</td>
                  <td className="p-4">$10.99</td>
                </tr>
                <tr>
                  <td className="p-4">Sushi Platter</td>
                  <td className="p-4">Japanese</td>
                  <td className="p-4">$15.99</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
  