export const chemicalCategories = [
  {
    _id: "6591a1c4babc1f001c7c5a91",
    name: "Organic Compounds",
    subcategories: [
      {
        _id: "6591a1c4babc1f001c7c5a92",
        name: "Hydrocarbons",
        // subcategories: [
        //   { _id: "6591a1c4babc1f001c7c5a93", name: "Alkanes" },
        //   { _id: "6591a1c4babc1f001c7c5a94", name: "Alkenes" },
        //   { _id: "6591a1c4babc1f001c7c5a95", name: "Alkynes" },
        // ],
      },
      {
        _id: "6591a1c4babc1f001c7c5a96",
        name: "Aromatic Compounds",
      },
    ],
  },
  {
    _id: "6591a1c4babc1f001c7c5a97",
    name: "Inorganic Compounds",
    subcategories: [
      {
        _id: "6591a1c4babc1f001c7c5a98",
        name: "Oxides",
      },
      {
        _id: "6591a1c4babc1f001c7c5a99",
        name: "Salts",
        // subcategories: [
        //   { _id: "6591a1c4babc1f001c7c5a9a", name: "Nitrates" },
        //   { _id: "6591a1c4babc1f001c7c5a9b", name: "Sulfates" },
        // ],
      },
    ],
  },
];

export const products = [
  {
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
    description: "Dodecenylsuccinic anhydride (DDSA) is a mixture of isomers that belongs to the class of long-chained aliphatic anhydrides. It is composed of a dodecenyl (C12) chain attached to a succinic acid backbone and can undergo esterification, amidation, and ring-opening reactions. It is widely used as a cross-linking agent to synthesize hydrogels for drug delivery, coating for medical devices, and as a hardener for curing epoxy resins.",
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
  },
  {
    _id: "2",
    category: "6591a1c4babc1f001c7c5a91",
    subcategory: "6591a1c4babc1f001c7c5a96",
    name: "Toluene Diisocyanate",
    appearance: "Colorless liquid",
    state: "Liquid",
    casNumber: "26471-62-5",
    hsCode: "29291010",
    chemicalFormula: "C9H6N2O2",
    molecularWeight: 174.16,
    description: "Used in polyurethane foams and coatings.",
    purity: "99%",
    manufacturer: "Global Chem Corp",
    packagingOptions: [
      { packageSize: "1L", price: 65.0, stock: 12 },
      { packageSize: "200L drum", price: 1100.0, stock: 3 }
    ],
    specifications: {
      epoxyEquivalentWeight: null,
      amineValue: null,
      viscosity: 1.8,
      ohValue: null,
      acidValue: null,
      colour: "Clear",
      particleSize: "N/A"
    },
    additionalProperties: {
      boilingPoint: 251,
      meltingPoint: 20,
      flashPoint: 127,
      density: 1.21,
      indexOfRefraction: 1.495,
      solubility: "Slightly soluble in water",
      toxicity: "Toxic",
      pH: null,
      thermalStability: "Decomposes above 300°C",
      surfaceTension: 32
    },
    reachRegistered: true,
    hazardClassifications: {
      ghsSymbols: ["GHS06", "GHS08"],
      signalWord: "Danger",
      hazardStatements: ["H330", "H334"]
    },
    images: ["/images/tdi.jpg"]
  },
  {
    _id: "3",
    category: "cat001",
    subcategory: "subcat001",
    name: "Epoxy Resin E-51",
    appearance: "Transparent viscous liquid",
    state: "Liquid",
    casNumber: "25068-38-6",
    hsCode: "39073000",
    chemicalFormula: "C21H25ClO5",
    molecularWeight: 384.87,
    description: "Standard bisphenol-A epoxy resin for coatings and adhesives.",
    purity: "99%",
    manufacturer: "ResinPro",
    packagingOptions: [
      { packageSize: "5kg", price: 110.0, stock: 10 },
      { packageSize: "25kg", price: 470.0, stock: 4 }
    ],
    specifications: {
      epoxyEquivalentWeight: 190,
      amineValue: 0,
      viscosity: 8000,
      ohValue: 0,
      acidValue: 0.1,
      colour: "Light yellow",
      particleSize: "N/A"
    },
    additionalProperties: {
      boilingPoint: 330,
      meltingPoint: -10,
      flashPoint: 252,
      density: 1.16,
      indexOfRefraction: 1.57,
      solubility: "Soluble in acetone",
      toxicity: "Low",
      pH: 7,
      thermalStability: "Good up to 200°C",
      surfaceTension: 38.5
    },
    reachRegistered: true,
    hazardClassifications: {
      ghsSymbols: ["GHS07", "GHS09"],
      signalWord: "Warning",
      hazardStatements: ["H315", "H411"]
    },
    images: ["/images/epoxy-e51.jpg"]
  },
  {
    _id: "4",
    category: "cat002",
    subcategory: "subcat002",
    name: "Polyethylene Glycol (PEG 400)",
    appearance: "Clear, colorless liquid",
    state: "Liquid",
    casNumber: "25322-68-3",
    hsCode: "29053990",
    chemicalFormula: "HO(C2H4O)nH",
    molecularWeight: 400,
    description: "Used in cosmetics, pharmaceuticals, and lubricants.",
    purity: "99.5%",
    manufacturer: "PharmaSol",
    packagingOptions: [
      { packageSize: "1L", price: 25.0, stock: 50 }
    ],
    specifications: {
      epoxyEquivalentWeight: null,
      amineValue: null,
      viscosity: 90,
      ohValue: 112,
      acidValue: 0.03,
      colour: "Colorless",
      particleSize: "N/A"
    },
    additionalProperties: {
      boilingPoint: 250,
      meltingPoint: -10,
      flashPoint: 225,
      density: 1.13,
      indexOfRefraction: 1.47,
      solubility: "Completely miscible with water",
      toxicity: "Very low",
      pH: 7,
      thermalStability: "Stable up to 230°C",
      surfaceTension: 43.2
    },
    reachRegistered: false,
    hazardClassifications: {
      ghsSymbols: [],
      signalWord: "",
      hazardStatements: []
    },
    images: ["/images/peg400.jpg"]
  },

{
  _id: "5",
  category: "cat003",
  subcategory: "subcat003",
  name: "Citric Acid Monohydrate",
  appearance: "White crystalline powder",
  state: "Solid",
  casNumber: "5949-29-1",
  hsCode: "29181400",
  chemicalFormula: "C6H8O7·H2O",
  molecularWeight: 210.14,
  description: "Used in food, pharmaceuticals, and industrial applications as a pH adjuster and preservative.",
  purity: "99.9%",
  manufacturer: "BioFine Chemicals",
  packagingOptions: [
    { packageSize: "1kg", price: 8.5, stock: 100 },
    { packageSize: "25kg bag", price: 180.0, stock: 20 }
  ],
  specifications: {
    epoxyEquivalentWeight: null,
    amineValue: null,
    viscosity: null,
    ohValue: 450,
    acidValue: 500,
    colour: "White",
    particleSize: "0.5mm"
  },
  additionalProperties: {
    boilingPoint: 310,
    meltingPoint: 153,
    flashPoint: null,
    density: 1.665,
    indexOfRefraction: 1.49,
    solubility: "Highly soluble in water",
    toxicity: "Non-toxic",
    pH: 2.2,
    thermalStability: "Stable below 175°C",
    surfaceTension: null
  },
  reachRegistered: true,
  hazardClassifications: {
    ghsSymbols: [],
    signalWord: "",
    hazardStatements: []
  },
  images: ["/images/citric-acid.jpg"]
},

{
  _id: "6",
  category: "cat004",
  subcategory: "subcat004",
  name: "Sodium Lauryl Sulfate",
  appearance: "White to off-white powder",
  state: "Solid",
  casNumber: "151-21-3",
  hsCode: "34021190",
  chemicalFormula: "C12H25NaO4S",
  molecularWeight: 288.38,
  description: "An anionic surfactant commonly used in detergents and personal care products.",
  purity: "95%",
  manufacturer: "CareChem Pvt Ltd",
  packagingOptions: [
    { packageSize: "500g", price: 12.0, stock: 60 },
    { packageSize: "20kg bag", price: 220.0, stock: 10 }
  ],
  specifications: {
    epoxyEquivalentWeight: null,
    amineValue: null,
    viscosity: null,
    ohValue: null,
    acidValue: 1.5,
    colour: "Off-white",
    particleSize: "0.3mm"
  },
  additionalProperties: {
    boilingPoint: null,
    meltingPoint: 204,
    flashPoint: null,
    density: 0.9,
    indexOfRefraction: null,
    solubility: "Soluble in water",
    toxicity: "Moderate",
    pH: 7.2,
    thermalStability: "Stable up to 180°C",
    surfaceTension: 38
  },
  reachRegistered: true,
  hazardClassifications: {
    ghsSymbols: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: ["H315", "H319"]
  },
  images: ["/images/sls.jpg"]
},

{
  _id: "7",
  category: "cat005",
  subcategory: "subcat005",
  name: "Benzyl Alcohol",
  appearance: "Colorless liquid",
  state: "Liquid",
  casNumber: "100-51-6",
  hsCode: "29062000",
  chemicalFormula: "C7H8O",
  molecularWeight: 108.14,
  description: "Used as a solvent and preservative in pharmaceuticals and cosmetics.",
  purity: "99.5%",
  manufacturer: "SolvoTech Industries",
  packagingOptions: [
    { packageSize: "1L", price: 35.0, stock: 40 },
    { packageSize: "200L drum", price: 6000.0, stock: 2 }
  ],
  specifications: {
    epoxyEquivalentWeight: null,
    amineValue: null,
    viscosity: 5.9,
    ohValue: 1045,
    acidValue: 0.05,
    colour: "Colorless",
    particleSize: "N/A"
  },
  additionalProperties: {
    boilingPoint: 205,
    meltingPoint: -15,
    flashPoint: 93,
    density: 1.04,
    indexOfRefraction: 1.538,
    solubility: "Miscible with ethanol and water",
    toxicity: "Low",
    pH: 7,
    thermalStability: "Stable up to 200°C",
    surfaceTension: 39.8
  },
  reachRegistered: true,
  hazardClassifications: {
    ghsSymbols: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: ["H302", "H332"]
  },
  images: ["/images/benzyl-alcohol.jpg"]
},

// {
//   _id: "8",
//   category: "cat006",
//   subcategory: "subcat006",
//   name: "Potassium Permanganate",
//   appearance: "Dark purple crystals",
//   state: "Solid",
//   casNumber: "7722-64-7",
//   hsCode: "28416000",
//   chemicalFormula: "KMnO4",
//   molecularWeight: 158.03,
//   description: "Strong oxidizing agent used in water treatment and organic synthesis.",
//   purity: "98%",
//   manufacturer: "Oxidate Chemicals",
//   packagingOptions: [
//     { packageSize: "250g", price: 10.0, stock: 25 },
//     { packageSize: "5kg", price: 140.0, stock: 8 }
//   ],
//   specifications: {
//     epoxyEquivalentWeight: null,
//     amineValue: null,
//     viscosity: null,
//     ohValue: null,
//     acidValue: null,
//     colour: "Purple",
//     particleSize: "1mm"
//   },
//   additionalProperties: {
//     boilingPoint: 'Decomposes',
//     meltingPoint: 240,
//     flashPoint: null,
//     density: 2.7,
//     indexOfRefraction: null,
//     solubility: "Soluble in water",
//     toxicity: "Oxidizer, harmful if swallowed",
//     pH: "7.2 (1% 'solution')",
//     thermalStability: "Decomposes above 250°C",
//     surfaceTension: null
//   },
//   reachRegistered: true,
//   hazardClassifications: {
//     ghsSymbols: ["GHS03", "GHS07"],
//     signalWord: "Danger",
//     hazardStatements: ["H272", "H302", "H319"]
//   },
//   images: ["/images/permanganate.jpg"]
// }

];
