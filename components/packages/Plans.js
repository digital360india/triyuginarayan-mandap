import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const plans = [
    {
        feature: "Wedding Rituals by Local Pandit",
        basic: { included: true },
        standard: { included: true, note: "(with assistance)" },
        premium: { included: true, note: "(Customise)" },
    },
    {
        feature: "Marriage Registration Support",
        basic: { included: true },
        standard: { included: true },
        premium: { included: true, note: "(Full Legal Support)" },
    },
    {
        feature: "Stay for Guests",
        basic: { included: true, note: "(Bride, Groom + 3 Guests, 1 Night)" },
        standard: { included: true, note: "(Up to 10 Guests, 1 Night)" },
        premium: { included: true, note: "(Up to 12 Guests, 1 Night)" },
    },
    {
        feature: "Guidance for Food/Meals",
        basic: { included: true, note: "Guidance for Food/Meals" },
        standard: { included: true, note: "(Wedding bhog + snack meals)" },
        premium: { included: true, note: "(Traditional meals)" },
    },
    {
        feature: "Help with Wedding Arrangements",
        basic: { included: true },
        standard: { included: true },
        premium: { included: true },
    },
    {
        feature: "Mandap Decoration",
        basic: { included: false },
        standard: { included: true, note: "(Flowers & cloth)" },
        premium: { included: true, note: "Full floral & mandap décor" },
    },
    {
        feature: "Support for Haldi/Mehndi Rituals",
        basic: { included: false },
        standard: { included: true },
        premium: { included: true, note: "Phal, mungal ghat, arti, dhol" },
    },
    {
        feature: "Optional Add-ons",
        basic: { included: true, note: "Garlands & basic décor. Photographer: Tea/snacks" },
        standard: { included: true, note: "Dhol/music. Rangoli/ décor. Local gifts" },
        premium: { included: true, note: "Floral birds entry. Professional photographer. Traditional attire shoot" },
    },
];

const cellBase =
    "flex items-center min-h-[48px] py-2 px-2 border-b last:border-b-0";

export default function Plans() {
    return (
        <div className="max-w-5xl mx-auto px-2 py-8">
            {/* Table Header */}
            <div className="flex font-semibold text-lg border-b-1 py-4 gap-2">
                <div className="w-1/4 px-2 font-bold">Features</div>
                <div className="w-1/4 px-2 py-2 text-center bg-[#4E4E4E] rounded-lg">Basic</div>
                <div className="w-1/4 px-2 text-center bg-[#C95D2F] rounded-lg">Standard</div>
                <div className="w-1/4 px-2 text-center bg-[#A42D2B] rounded-lg">Premium</div>
            </div>
            {/* Table Body - Column Wise */}
            <div className="flex gap-4">
                {/* Features Column */}
                <div className="w-1/4 flex flex-col gap-4">
                    {plans.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center h-[100px] py-2 px-2 font-bold"
                        >
                            {item.feature}
                        </div>
                    ))}
                </div>
                {/* Basic Column */}
                <div className="w-1/4 flex flex-col gap-4 ">
                    {plans.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col h-[100px] py-2 px-5"
                        >
                            {item.basic.included ? (
                                <FaCheckCircle className="text-green-600 mr-2" />
                            ) : (
                                <MdCancel className="text-gray-400 mr-2" />
                            )}
                            {item.basic.note && (
                                <span className="text-lg ">{item.basic.note}</span>
                            )}
                        </div>
                    ))}
                </div>
                {/* Standard Column as Card */}
                <div className="w-1/4 flex flex-col gap-4 ">
                    <div className="rounded-2xl shadow-2xl bg-gradient-to-b from-[#FF4C0026] to-[#ffb99b80] flex flex-col">
                        {plans.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col h-[100px] py-2 px-5`}
                            >
                                {item.standard.included ? (
                                    <FaCheckCircle className="text-green-600 mr-2" />
                                ) : (
                                    <MdCancel className="text-gray-400 mr-2" />
                                )}
                                {item.standard.note && (
                                    <span className="text-lg">{item.standard.note}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Premium Column as Card */}
                <div className="w-1/4 flex flex-col gap-4 ">
                    <div className="rounded-2xl shadow-2xl bg-gradient-to-b from-[#ff040019] to-[#FF706E80]  flex flex-col overflow-hidden">
                        {plans.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col h-[100px] py-2 px-5`}
                            >
                                {item.premium.included ? (
                                    <FaCheckCircle className="text-green-600 mr-2 " />
                                ) : (
                                    <MdCancel className="text-gray-400 mr-2" />
                                )}
                                {item.premium.note && (
                                    <span className="text-lg ">{item.premium.note}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Action Buttons */}
            <div className="flex mt-6">
                <div className="w-1/4"></div>
                
                <div className="w-1/4 flex justify-center">
                    <button className="py-2 px-4 rounded-2xl bg-orange-600 text-white hover:bg-orange-700 font-semibold shadow-xl border-2 border-orange-300">
                        Select package
                    </button>
                </div>
                <div className="w-1/4 flex justify-center">
                    <button className="py-2 px-4 rounded-2xl bg-orange-600 text-white hover:bg-orange-700 font-semibold shadow-xl border-2 border-orange-400">
                        Select package
                    </button>
                </div>
            </div>
        </div>
    );
}
