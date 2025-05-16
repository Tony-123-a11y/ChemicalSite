import { HiBeaker, HiOutlineClock, HiOutlineUserGroup } from 'react-icons/hi2';



export default function FeaturesSection() {
    const features = [
  {
    icon: <HiBeaker className="text-red-700 w-10 h-10" />,
    title: "High Purity Chemicals",
    description: "We supply certified, high-purity chemicals tailored for industrial and research-grade applications.",
  },
  {
    icon: <HiOutlineClock className="text-red-700 w-10 h-10" />,
    title: "On-Time Delivery",
    description: "We ensure reliable and timely logistics across domestic and international markets.",
  },
  {
    icon: <HiOutlineUserGroup className="text-red-700 w-10 h-10" />,
    title: "Customer Support",
    description: "Our chemical experts are available 24/7 to assist with orders, compliance, and safety guidance.",
  },
];
  return (
    <section className="py-16 bg-white">
      <div className="container xl:max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-red-700 font-poppins">
          Why Choose ChemCo?
        </h2>

        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-md shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
