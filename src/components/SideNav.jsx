import React, { useState } from "react";

const chemicalCategories = [
  {
    name: "Organic Compounds",
    subcategories: [
      {
        name: "Hydrocarbons",
        subcategories: [
          { name: "Alkanes" },
          { name: "Alkenes" },
          { name: "Alkynes" },
        ],
      },
      {
        name: "Aromatic Compounds",
      },
    ],
  },
  {
    name: "Inorganic Compounds",
    subcategories: [
      {
        name: "Oxides",
      },
      {
        name: "Salts",
        subcategories: [
          { name: "Nitrates" },
          { name: "Sulfates" },
        ],
      },
    ],
  },
];

const CategoryItem = ({ category, level = 0.5 }) => {
  const [open, setOpen] = useState(false);
  const hasSubcategories = category.subcategories && category.subcategories.length > 0;

  return (
    <div className="mb-1">
      <div
        className={`flex items-center justify-between cursor-pointer px-3 py-2 rounded hover:bg-gray-100 transition`}
        style={{ paddingLeft: `${level * 1.5}rem` }}
        onClick={() => hasSubcategories && setOpen(!open)}
      >
        <span>{category.name}</span>
        {hasSubcategories && (
          <span className="text-xs">{open ? "−" : "+"}</span>
        )}
      </div>
      {hasSubcategories && open && (
        <div>
          {category.subcategories.map((sub, index) => (
            <CategoryItem key={index} category={sub} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function ChemicalSidebar() {
  return (
    <aside className="w-72 h-screen overflow-y-auto border-r border-gray-200 bg-white p-4 max-sm:w-full">
      <h2 className="text-lg font-semibold mb-4">Chemical Categories</h2>
      {chemicalCategories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </aside>
  );
}
