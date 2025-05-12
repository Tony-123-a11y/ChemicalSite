import React from "react";
import clsx from "clsx";
import banner from '../assets/banner2.jpg'
const bottomLinks = [
  "Ascorbic Acid (Vitamin C) – Bulk Supply Available",
  "Citric Acid Monohydrate – Industrial & Food Grade",
  "Zinc Oxide – High Purity for Sale",
  "Soda Ash (Sodium Carbonate) – Reliable Supply Chain",
  "Trichloroisocyanuric Acid – Verified Suppliers",
  "Sodium Sulfate – Consistent Global Supply"
];


const pharmaProducts = [
  {
    id: 1,
    name: "N-Acetyl-L-Cysteine 99% White crystalline or powder waylead",
    price: "$11.5-12.5/KG FOB",
    image: "https://img.freepik.com/free-photo/sea-salt-wooden-bowl-black-background_176420-8987.jpg?ga=GA1.1.469913505.1728904910&semt=ais_hybrid"
  },
  {
    id: 2,
    name: "Selenium Sulfide Powder 99.99% SeS2 Sulfide Compound",
    price: "$135/KG FOB",
    image: "https://img.freepik.com/free-photo/high-angle-view-liquid-soaps-sprays-dark-wooden-background-vertical_176474-1716.jpg?ga=GA1.1.469913505.1728904910&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Hydrolysis Amino Acid Fertilizer Organic Fertilizer",
    price: "$2500-2600/MT FOB",
    image: "https://img.freepik.com/premium-photo/pills-white-medical-pills_200074-1908.jpg?ga=GA1.1.469913505.1728904910&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "25-Hydroxy Vitamin D3 1.25% white to yellow powder",
    price: "$20-25/KG FOB",
    image: "https://img.freepik.com/premium-photo/holds-pills-against-background-chemical-laboratory-reagents_350726-2.jpg?ga=GA1.1.469913505.1728904910&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Vitamin C 99% / Vitamin C Coated 98% white powder",
    price: "$2.8-3/G FOB",
    image: "https://img.freepik.com/premium-photo/various-chemical-solutions-lab_85869-9403.jpg?ga=GA1.1.469913505.1728904910&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "1-Adamantanamine Hydrochloride / HCl",
    price: "$20-25/KG FOB",
    image: "https://img.freepik.com/free-photo/world-science-day-arrangement-with-chemistry-tubes_23-2149112626.jpg?ga=GA1.1.469913505.1728904910&semt=ais_hybrid",
  },
];

const paintProducts = [
  {
    id: 1,
    name: "Titanium Dioxide Rutile/Anatase 98% for Paint Industry",
    price: "$2500/MT FOB",
    image: "https://img.freepik.com/free-photo/paintbrush-can-blue-paint_23-2148197859.jpg"
  },
  {
    id: 2,
    name: "Zinc Phosphate White Powder Anti-Corrosive Pigment",
    price: "$1800/MT FOB",
    image: "https://img.freepik.com/premium-photo/paint-powder-bucket-paint-brush_894067-14463.jpg"
  },
  {
    id: 3,
    name: "Acrylic Emulsion Polymer for Exterior Wall Coating",
    price: "$1.5-1.8/KG FOB",
    image: "https://img.freepik.com/premium-photo/paint-splash-bucket-acrylic-color_894067-14399.jpg"
  },
  {
    id: 4,
    name: "Polyurethane Resin for Industrial Paint",
    price: "$2.2-2.5/KG FOB",
    image: "https://img.freepik.com/premium-photo/colorful-buckets-industrial-paint_894067-14159.jpg"
  },
  {
    id: 5,
    name: "Epoxy Resin Clear Liquid for Coating Systems",
    price: "$3.5/KG FOB",
    image: "https://img.freepik.com/free-photo/buckets-various-color-paints_23-2148678793.jpg"
  },
  {
    id: 6,
    name: "Solvent Based Alkyd Resin Paint",
    price: "$2.8/KG FOB",
    image: "https://img.freepik.com/premium-photo/paint-can-splash-colorful-paint_894067-14384.jpg"
  },
];

 const ProductCategory = ({title,brandImage,brandLabel,direction,background}) => {
  return (
    <section className={clsx(' px-4 py-16',background) }>
        <div className="xl:max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-red-700 font-poppins">{title}</h2>

      <div className={clsx('flex items-center justify-center gap-4',direction)}>
        {/* Brand Pavilion Card */}
        <div className="bg-blue-100 p-4 w-1/3 rounded-lg">
          <img
            src={brandImage}
            alt="Brand Pavilion"
            className="mb-4 w-full  object-cover rounded"
          />
          <h3 className="text-lg font-semibold font-poppins">{brandLabel}</h3>
          <button className="mt-4 bg-yellow-500   text-white font-medium cursor-pointer px-8 hover:bg-amber-600 transition py-1.5 font-inter rounded-lg">
            Enter
          </button>
        </div>

        {/* Products List */}
        <div className="md:col-span-2 grid grid-cols-1 w-2/3 sm:grid-cols-2 gap-4">
          {pharmaProducts?.map((product) => (
            <div
              key={product.id}
              className={clsx('shadow-sm p-4 rounded-lg flex items-start gap-4 cursor-pointer transition',background=="bg-white" ? 'bg-gray-50' : 'bg-white')}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="text-sm font-semibold font-poppins">{product.name}</h3>
                <p className="text-red-600 font-bold font-inter">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 flex flex-wrap justify-center text-gray-500 text-sm space-x-4">
        {bottomLinks?.map((link, idx) => (
          <a key={idx} href="#">{link}</a>
        ))}
      </div>
      </div>
    </section>
  );
};

 const ProductSection = () => {
  return (
    <>
      <ProductCategory
        title="Pharmaceutical raw materials"
        direction="flex-row"
        background="bg-gray-50"
        brandImage="https://img.freepik.com/free-photo/collagen-powder-tablets-with-wooden-spoon_185193-162420.jpg"
        brandLabel="Pharmaceutical Brand Pavilion"
        products={pharmaProducts}
        bottomLinks={[
          "Ascorbic Acid for Sale",
          "Citric Acid Monohydrate List",
          "Zinc Oxide for Sale",
          "Soda Ash Supply",
          "Trichloroisocyanuric Acid Suppliers",
          "Sodium Sulfate Supply"
        ]}
      />

      <ProductCategory
        title="Paints and coatings"
        background="bg-white"
        direction="flex-row-reverse"
        brandImage="https://img.freepik.com/free-photo/paintbrush-can-blue-paint_23-2148197859.jpg"
        brandLabel="Paints & Coating Pavilion"
        products={paintProducts}
        bottomLinks={[
          "Titanium Dioxide Supply",
          "Epoxy Resin Price",
          "Zinc Phosphate Suppliers",
          "PU Resin for Sale",
          "Acrylic Emulsions Market",
          "Solvent Based Paints"
        ]}
      />
    </>
  );
};

export default ProductSection;
