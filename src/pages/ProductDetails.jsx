import { useState } from "react";
import chemicalImg from '../assets/chemical.jpg'

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("details");
  const obj={
    _id: "1",
    category: "6591a1c4babc1f001c7c5a91",
    subcategory: "6591a1c4babc1f001c7c5a95",
    name: "Dodecenylsuccinic Anhydride",
    appearance: "Clear liquid",
    state: "Liquid",
    casNumber: "19780-11-1",
    hsCode: "2917.19.90",
    chemicalFormula: "C16H26O3",
    molecularWeight: 266.38,
    description: "A long-chain aliphatic anhydride used in epoxy curing agents.",
    purity: "98%",
    manufacturer: "ChemTech Labs",
    packagingOptions: [
      { packageSize: "500g", price: 45.99, stock: 20 },
      { packageSize: "25kg drum", price: 1500.0, stock: 5 }
    ],
    specifications: {
      epoxyEquivalentWeight: 135,
      amineValue: 340,
      viscosity: 50,
      ohValue: 25,
      acidValue: 2,
      colour: "Pale yellow",
      particleSize: "N/A"
    },
    additionalProperties: {
      boilingPoint: 312,
      meltingPoint: -20,
      flashPoint: 150,
      density: 0.98,
      indexOfRefraction: 1.462,
      solubility: "Insoluble in water",
      toxicity: "Low",
      pH: 6.5,
      thermalStability: "Stable up to 250°C",
      surfaceTension: 29.4
    },
    reachRegistered: true,
    hazardClassifications: {
      ghsSymbols: ["GHS07"],
      signalWord: "Warning",
      hazardStatements: ["H315", "H319"]
    },
    images: ["/images/ddsa.jpg"]
  }

  const tabs = [
    { id: "details", label: "Product Details" },
    { id: "specification", label: "Specification" },
    { id: "additional-properties", label: "Additional Properties" },
    { id: "documents", label: "Documents" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 container py-10 min-h-screen bg-white ">
      <div className="text-center ">
        <h1 className="text-2xl font-bold font-['poppins']">Product Details</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b border-t mt-4  mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 font-['inter'] font-medium ${
              activeTab === tab.id
                ? "text-white  bg-red-600"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "details" && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 border-b pb-6">
            <div className="flex-shrink-0">
              <img
                src={chemicalImg}
                alt="Product"
                className="max-w-[300px] "
              />
            </div>
            <div className="flex-1">
             specifications.
              <table className="w-full border font-inter border-gray-300 text-sm">
                <tbody>
                  <tr>
                    <td className="p-2 border font-medium">Name</td>
                    <td className="p-2 border">{obj.name}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">State</td>
                    <td className="p-2 border">{obj.state}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">CAS No.</td>
                    <td className="p-2 border">{obj.casNumber}</td>
                  </tr>
                 
                 <tr>
                    <td className="p-2 border font-medium">
                        Chemical Formula
                    </td>
                    <td className="p-2 border">
                     {obj.chemicalFormula}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                       Molecular Weight
                    </td>
                    <td className="p-2 border">
                     {obj.molecularWeight}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                       Manufacturer
                    </td>
                    <td className="p-2 border">
                     {obj.manufacturer}
                    </td>
                 </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">General Description:</h2>
            <p className="text-gray-700">
             {obj.description}
            </p>

           
          </div>
        </div>
      )}

      {activeTab === "specification" && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Specification</h2>
          <div className="flex-1">
             
              <table className="w-full border font-inter border-gray-300 text-sm">
                <tbody>
                  <tr>
                    <td className="p-2 border font-medium">Epoxy Equivalent Weight</td>
                    <td className="p-2 border">{obj.specifications.epoxyEquivalentWeight}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Amine Value</td>
                    <td className="p-2 border">{obj.specifications.amineValue}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Viscosity</td>
                    <td className="p-2 border">{obj.specifications.viscosity}</td>
                  </tr>
                 
                 <tr>
                    <td className="p-2 border font-medium">
                    Oh Value
                    </td>
                    <td className="p-2 border">
                     {obj.specifications.ohValue}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                      Acid Value
                    </td>
                    <td className="p-2 border">
                     {obj.specifications.acidValue}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                       Colour
                    </td>
                    <td className="p-2 border">
                     {obj.specifications.colour}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                       Particle Size
                    </td>
                    <td className="p-2 border">
                     {obj.specifications.particleSize}
                    </td>
                 </tr>
                </tbody>
              </table>
            </div>
        </div>
      )}

      {activeTab === "additional-properties" && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Additional Properties</h2>
          <div className="flex-1">
             
              <table className="w-full border font-inter border-gray-300 text-sm">
                <tbody>
                  <tr>
                    <td className="p-2 border font-medium">Boiling Point</td>
                    <td className="p-2 border">{obj.additionalProperties.boilingPoint}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Melting Point</td>
                    <td className="p-2 border">{obj.additionalProperties.meltingPoint}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Flash Point</td>
                    <td className="p-2 border">{obj.additionalProperties.flashPoint}</td>
                  </tr>
                 
                 <tr>
                    <td className="p-2 border font-medium">
                    Density
                    </td>
                    <td className="p-2 border">
                     {obj.additionalProperties.density}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                     Index of Refraction
                    </td>
                    <td className="p-2 border">
                     {obj.additionalProperties.indexOfRefraction}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                       Solubility
                    </td>
                    <td className="p-2 border">
                     {obj.additionalProperties.solubility}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                       Toxicity
                    </td>
                    <td className="p-2 border">
                     {obj.additionalProperties.toxicity}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                      PH
                    </td>
                    <td className="p-2 border">
                     {obj.additionalProperties.pH}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                      Thermal Stability
                    </td>
                    <td className="p-2 border">
                     {obj.additionalProperties.thermalStability}
                    </td>
                 </tr>
                 <tr>
                    <td className="p-2 border font-medium">
                 Surface Tension
                    </td>
                    <td className="p-2 border">
                     {obj.additionalProperties.surfaceTension}
                    </td>
                 </tr>
                </tbody>
              </table>
            </div>
        </div>
      )}

      {activeTab === "documents" && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Documents</h2>
          <p className="text-gray-700">Documents content goes here.</p>
        </div>
      )}

      {/* Actions */}
      <div className="text-center mt-8 space-x-4">
        <button className="bg-green-500/70 hover:bg-green-600 cursor-pointer text-white px-8 py-2 border border-green-500 rounded">
          Enquire
        </button>
    
        {/* <button className="bg-orange-500/70 border border-red-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-2 rounded">
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default ProductDetails;
