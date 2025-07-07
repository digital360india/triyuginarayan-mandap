import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Wedding Rituals by Local Purohit",
  "Marriage Registration Support",
  "Stay for Guests",
  "Guidance for Food/Meals",
  "Help with Wedding Arrangements",
  "Mandap Decoration",
  "Support for Haldi/Mehndi Rituals",
  "Optional Add-ons",
  "",
];

const plans = [
  {
    name: "Basic",
    color: "#4E4E4E",
    bg: "",
    features: [
      <FaCheckCircle className="text-green-500 w-6 h-6" />,
      <FaCheckCircle className="text-green-500 w-6 h-6" />,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        Bride, Groom + 3 Guests, 1 Night
      </>,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        Guidance for Food/Meals
      </>,
      <FaCheckCircle className="text-green-500 w-6 h-6" />,
      <FaCheckCircle className="text-gray-400 w-6 h-6" />,
      <FaCheckCircle className="text-gray-400 w-6 h-6" />,
      <>
        Garlands & basic décor <br /> Photographer <br /> Tea/snack
      </>,
    ],
  },
  {
    name: "Standard",
    color: "#C95D2F",
    bg: "bg-gradient-to-b from-[#FF4C0026] to-[#ffb99b80]",
    features: [
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" /> (with assistant)
      </>,
      <FaCheckCircle className="text-green-500 w-6 h-6" />,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        Up to 10 Guests, 1 Night
      </>,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        Wedding bhoj – satvik meals
      </>,
      <FaCheckCircle className="text-green-500 w-6 h-6" />,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        Flowers & cloth
      </>,
      <FaCheckCircle className="text-green-500 w-6 h-6" />,
      <>
        Dhol/music <br /> Rangoli/diya <br /> Local gifts
      </>,
    ],
  },
  {
    name: "Premium",
    color: "#A42D2B",
    bg: "bg-gradient-to-b from-[#ff040019] to-[#FF706E80]",
    features: [
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" /> (Customise)
      </>,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        (Full Legal Support)
      </>,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        Up to 12 Guests, 1 Night
      </>,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        Traditional meals
      </>,
      <FaCheckCircle className="text-green-500 w-6 h-6" />,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        Full floral & mandap décor
      </>,
      <>
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        <br />
        (Haldi, mangal geet, aarti, dhol)
      </>,
      <>
        Floral bride entry <br /> Reels/photoshoot <br /> Traditional attire
        shoot
      </>,
    ],
  },
];

export default function Plans() {
    return (
        <div className="max-w-6xl mx-auto p-6 relative">
        <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] gap-4 mb-6 items-center sticky top-[100px] bg-[#F6EBC1]">
          <p className="text-3xl font-bold text-gray-800">Plans</p>
          {plans.map((plan, i) => (
            <button
              key={i}
              className="text-white py-3 rounded-lg w-[232px] mx-auto"
              style={{ backgroundColor: plan.color }}
            >
              {plan.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] gap-5">
          <div className="grid grid-rows-9 gap-4 text-sm font-medium text-gray-900">
            {features.map((feature, i) => (
              <p key={i} className="flex items-center">
                {feature}
              </p>
            ))}
          </div>

          {/* Plan Cards */}
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`grid grid-rows-[repeat(6,minmax(0,1fr))] gap-4 p-4 text-sm text-gray-800  ${i === 0 ? "" :"rounded-2xl shadow-md" } ${plan.bg}`}
            >
              {plan.features.map((content, j) => (
                <div key={j}>{content}</div>
              ))}
              <button
                className="w-full text-white py-2 rounded-lg self-end mt-2"
                style={{ backgroundColor: plan.color }}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    );
}
