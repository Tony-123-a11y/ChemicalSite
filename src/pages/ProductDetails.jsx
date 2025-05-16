import { useState } from "react";
import chemicalImg from '../assets/chemical.jpg'
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("details");
  const location=useLocation(null)
   const obj= location.state
  // const obj={
  //   _id: "1",
  //   category: "6591a1c4babc1f001c7c5a91",
  //   subcategory: "6591a1c4babc1f001c7c5a95",
  //   name: "Dodecenylsuccinic Anhydride",
  //   appearance: "Clear liquid",
  //   state: "Liquid",
  //   casNumber: "19780-11-1",
  //   hsCode: "2917.19.90",
  //   chemicalFormula: "C16H26O3",
  //   molecularWeight: 266.38,
  //   description: "Dodecenylsuccinic anhydride (DDSA) is a mixture of isomers that belongs to the class of long-chained aliphatic anhydrides. It is composed of a dodecenyl (C12) chain attached to a succinic acid backbone and can undergo esterification, amidation, and ring-opening reactions. It is widely used as a cross-linking agent to synthesize hydrogels for drug delivery, coating for medical devices, and as a hardener for curing epoxy resins.",
  //   purity: "98%",
  //   manufacturer: "ChemTech Labs",
  //   packagingOptions: [
  //     { packageSize: "500g", price: 45.99, stock: 20 },
  //     { packageSize: "25kg drum", price: 1500.0, stock: 5 }
  //   ],
  //   specifications: {
  //     epoxyEquivalentWeight: 135,
  //     amineValue: 340,
  //     viscosity: 50,
  //     ohValue: 25,
  //     acidValue: 2,
  //     colour: "Pale yellow",
  //     particleSize: "N/A"
  //   },
  //   additionalProperties: {
  //     boilingPoint: 312,
  //     meltingPoint: -20,
  //     flashPoint: 150,
  //     density: 0.98,
  //     indexOfRefraction: 1.462,
  //     solubility: "Insoluble in water",
  //     toxicity: "Low",
  //     pH: 6.5,
  //     thermalStability: "Stable up to 250°C",
  //     surfaceTension: 29.4
  //   },
  //   reachRegistered: true,
  //   hazardClassifications: {
  //     ghsSymbols: ["GHS07"],
  //     signalWord: "Warning",
  //     hazardStatements: ["H315", "H319"]
  //   },
  //   images: ["/images/ddsa.jpg"]
  // }

  const tabs = [
    { id: "details", label: "Product Details" },
    { id: "specification", label: "Specifications" },
    { id: "additional-properties", label: "Additional Properties" },
    { id: "documents", label: "Documents" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 container py-10 max-sm:py-5 min-h-screen bg-white ">
      <div className="text-center ">
        {/* <h1 className="text-2xl font-bold font-['poppins']">Product Details</h1> */}
      </div>
 <div className="flex-shrink-0 hidden   max-md:block">
              <img
                src={chemicalImg}
                alt="Product"
                className="w-full h-100 object-contain  rounded-md"
              />
            </div>
      {/* Tabs */}
      <div className="flex justify-around  mt-4  border border-gray-300  border-gray-300-gray-300  overflow-hidden mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-6 font-['inter'] flex-grow transition cursor-pointer max-md:border max-md:border-gray-200 max-md:px-2 max-md:text-sm font-medium ${
              activeTab === tab.id
                ? "text-white  bg-red-600"
                : "text-gray-600 hover:bg-red-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "details" && (
        <div className="space-y-6">
          <div className="flex  flex-col md:flex-row gap-6 ">
            <div className="flex-shrink-0 max-md:hidden">
              <img
                src={chemicalImg}
                alt="Product"
                className="max-w-sm  rounded-md shadow-md"
              />
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Details</h2>
              <table className="w-full  font-inter text-sm">
                <tbody>
                  <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">Name</td>
                    <td className="px-4 py-2.5 border border-gray-300">{obj.name}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">State</td>
                    <td className="px-4 py-2.5 border border-gray-300">{obj.state}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">CAS No.</td>
                    <td className="px-4 py-2.5 border border-gray-300">{obj.casNumber}</td>
                  </tr>
                 
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                        Chemical Formula
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.chemicalFormula}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                       Molecular Weight
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.molecularWeight}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                       Manufacturer
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.manufacturer}
                    </td>
                 </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2 mt-12">General Description:</h2>
            <p className="text-gray-700">
             {obj.description}
            </p>

           
          </div>
        </div>
      )}

      {activeTab === "specification" && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Specifications</h2>
          <div className="flex-1">
             
              <table className="w-full  border-gray-300 font-inter border border-gray-300-gray-300 text-sm">
                <tbody>
                  <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">Epoxy Equivalent Weight</td>
                    <td className="px-4 py-2.5 border border-gray-300">{obj.specifications.epoxyEquivalentWeight}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">Amine Value</td>
                    <td className="px-4 py-2.5 border border-gray-300">{obj.specifications.amineValue}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">Viscosity</td>
                    <td className="px-4 py-2.5 border border-gray-300">{obj.specifications.viscosity}</td>
                  </tr>
                 
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                    Oh Value
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.specifications.ohValue}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                      Acid Value
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.specifications.acidValue}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                       Colour
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.specifications.colour}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                       Particle Size
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
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
             
              <table className="w-full border border-gray-300 font-inter border border-gray-300-gray-300 text-sm">
                <tbody>
                  <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">Boiling Point</td>
                    <td className="px-4 py-2.5 border border-gray-300">{obj.additionalProperties.boilingPoint}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">Melting Point</td>
                    <td className="px-4 py-2.5 border border-gray-300">{obj.additionalProperties.meltingPoint}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">Flash Point</td>
                    <td className="px-4 py-2.5 border border-gray-300">{obj.additionalProperties.flashPoint}</td>
                  </tr>
                 
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                    Density
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.additionalProperties.density}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                     Index of Refraction
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.additionalProperties.indexOfRefraction}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                       Solubility
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.additionalProperties.solubility}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                       Toxicity
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.additionalProperties.toxicity}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                      PH
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.additionalProperties.pH}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                      Thermal Stability
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
                     {obj.additionalProperties.thermalStability}
                    </td>
                 </tr>
                 <tr>
                    <td className="px-4 py-2.5 border border-gray-300 font-medium">
                 Surface Tension
                    </td>
                    <td className="px-4 py-2.5 border border-gray-300">
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
      <div className="text-right mt-8 space-x-4">
        <button className="bg-green-500/70 hover:bg-green-600 cursor-pointer text-white px-8 py-2  border-gray-300 border border-gray-300-green-500 rounded">
          Buy
        </button>
        <button className="bg-red-500/70 hover:bg-red-600 cursor-pointer text-white px-8 py-2  border-gray-300 border border-gray-300-green-500 rounded">
          Sell
        </button>
    
        {/* <button className="bg-orange-500/70 border border-gray-300 border border-gray-300-red-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-2 rounded">
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default ProductDetails;
