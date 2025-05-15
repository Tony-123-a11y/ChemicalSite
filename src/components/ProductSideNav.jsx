import { useState } from "react";


const categories = [
  {
    name: "Agrochemicals",
    subcategories: [
      "Pesticides",
      "Insecticides",
      "Herbicides",
      "Fungicides",
      {
        name: "Fertilizers",
        children: ["Nitrogenous", "Phosphatic", "Potassic"],
      },
      "Plant Growth Regulators",
      "Soil Conditioners",
      "Adjuvants",
    ],
    images: ["chemi.jpg", "/images/fertilizers.jpg"],
  },
  {
    name: "Pharma-API",
    subcategories: [
      "Antibiotics",
      "Analgesics",
      "Antipyretics",
      "Antimalarials",
      "Antivirals",
      "Anticancer Agents",
      "Cardiovascular Drugs",
      "Central Nervous System Agents",
      "Gastrointestinal Agents",
    ],
  },
  {
    name: "Paper and Pulp Industry",
    subcategories: [
      "Bleaching Agents",
      "Pulping Chemicals",
      "Retention Aids",
      "Sizing Agents",
    ],
  },
  {
    name: "Fragrances and Flavors",
    subcategories: [
      "Aromatics",
      "Essential Oils",
      "Synthetic Aromas",
      "Natural Extracts",
      "Synthetic Flavoring Agents",
    ],
  },
  {
    name: "Cosmetics and Personal Care",
    subcategories: [
      "Emulsifiers",
      "Surfactants",
      "Preservatives",
      "Thickeners",
      "Conditioning Agents",
    ],
  },
  {
    name: "Textile Industry",
    subcategories: [
      {
        name: "Dyes",
        children: ["Reactive Dyes", "Disperse Dyes", "Acid Dyes", "Vat Dyes"],
      },
      "Direct Dyes",
      "Mordant Dyes",
      "Bleaching Agents",
      "Finishing Agents",
      "Auxiliaries",
    ],
  },
  {
    name: "Automotive Industry",
    subcategories: [
      "Lubricants",
      "Coolants",
      "Fuel Additives",
      "Brake Fluids",
    ],
  },
  {
    name: "Food and Beverage Industry",
    subcategories: [
      "Preservatives",
      "Sweeteners",
      "Natural Sweeteners",
      "Artificial Sweeteners",
      "Flavor Enhancers",
      "Coloring Agents",
      "Acidulants",
    ],
  },
  {
    name: "Water Treatment",
    subcategories: [
      "Coagulants",
      "Flocculants",
      "Biocides",
      "pH Adjusters",
      "Corrosion Inhibitor",
    ],
  },
  {
    name: "Plastics and Polymers",
    subcategories: [
      "Polyethylene",
      "Polypropylene",
      "PVC (Polyvinyl Chloride)",
      "Polyurethanes",
      "Epoxies",
    ],
  },
  {
    name: "Industrial Gases",
    subcategories: [],
  },
  {
    name: "Catalysts",
    subcategories: [
      "Zeolites",
      "Metal Catalysts",
      "Platinum",
      "Palladium",
      "Rhodium",
      "Enzymatic Catalysts",
      "Metal Salts",
    ],
  },
  {
    name: "Pigments",
    subcategories: [
      "Organic Pigments",
      "Azo Pigments",
      "Phthalocyanine Pigments",
      "Inorganic Pigments",
      "Specialty Pigments",
      "Metallic Pigments",
      "Fluorescent Pigments",
      "Pearlescent Pigments",
    ],
  },
  {
    name: "Metal-Organic Frameworks",
    subcategories: [],
  },
  {
    name: "Laboratory Chemicals",
    subcategories: [],
  },
  {
    name: "Non-Categorised Chemicals",
    subcategories: [],
  },
];

const ProductSideNav = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const renderSubcategories = (subs) => {
    return subs.map((sub, i) => {
      if (typeof sub === "string") {
        return (
          <li key={i} className="px-4 py-2 hover:bg-gray-100 rounded-md">
            {sub}
          </li>
        );
      } else {
        return (
          <li
            key={i}
            className="relative group"
            onClick={() => setActiveSubcategory(i)}
            onMouseLeave={() => setActiveSubcategory(null)}
          >
            <div className="px-4 py-2 hover:bg-gray-100 rounded-md">{sub.name}</div>
            {activeSubcategory === i && (
              <ul className=" bg-white shadow-lg w-48 p-2 border rounded-md">
                {sub.children.map((child, j) => (
                  <li key={j} className="px-4 py-2 hover:bg-gray-100 rounded-md">
                    {child}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      }
    });
  };

  return (
    <div className=" bg-gray-100 p-4  hidden md:block">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-1">
        {categories.map((category, index) => (
          <li
            key={index}
            className="relative group"
            onClick={() => setActiveCategory(index)}
            onMouseLeave={() => {
              setActiveCategory(null);
              setActiveSubcategory(null);
            }}
          >
            <button className="w-full cursor-pointer text-left px-4 py-2 bg-white hover:bg-red-200 rounded-md">
              {category.name}
            </button>
            {activeCategory === index && category.subcategories.length > 0 && (
              <ul className=" bg-white cursor-pointer w-56 shadow p-2   rounded-md">
                {renderSubcategories(category.subcategories)}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSideNav;
