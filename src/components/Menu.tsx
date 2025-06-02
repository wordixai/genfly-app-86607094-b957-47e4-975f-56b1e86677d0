const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", description: "Pure and intense coffee experience", price: "$3.50" },
      { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "$4.50" },
      { name: "Latte", description: "Espresso with a lot of steamed milk and little foam", price: "$4.75" },
      { name: "Americano", description: "Espresso diluted with hot water", price: "$3.75" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissant", description: "Buttery, flaky French pastry", price: "$3.25" },
      { name: "Cinnamon Roll", description: "Sweet roll with cinnamon-sugar filling", price: "$4.25" },
      { name: "Blueberry Muffin", description: "Moist muffin packed with blueberries", price: "$3.75" },
      { name: "Chocolate Brownie", description: "Rich, fudgy chocolate brownie", price: "$4.00" }
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We take pride in serving the finest coffee and freshly baked goods. 
            All our ingredients are carefully selected for quality and taste.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {menuItems.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-amber-800 py-4 px-6">
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              <div className="p-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-6 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                      <span className="text-amber-800 font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                    {itemIndex < category.items.length - 1 && (
                      <div className="border-b border-gray-200 my-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            * All prices are subject to change. Please ask our staff for daily specials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;