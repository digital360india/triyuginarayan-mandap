import React from "react";

const PaymentStructure = () => {
  return (
    <div>
      <div>
        <section className="py-10 px-4 mt-16 open-sans">
          <div className="md:max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-[36px] font-bold mb-4">
              Our <span className="text-[#C95D2F]">Payment</span> Structure
            </h2>
            <p className="text-[#020202] text-sm md:text-[18px] mb-10 mt-10">
              To ensure a smooth and transparent experience, the payment will be
              divided into the following:
            </p>

            <div className="w-full">
              <table className="w-full table-fixed border border-gray-400 text-center bg-white">
                <thead className="text-[14px] md:text-[18px]">
                  <tr>
                    <th className="border border-gray-300 px-2 py-6 font-bold w-1/3 break-words">
                      Payment Description
                    </th>
                    <th className="border border-gray-300 px-2 py-6 font-bold w-1/3 break-words">
                      Payment Timing
                    </th>
                    <th className="border border-gray-300 px-2 py-6 font-bold w-1/3 break-words">
                      Payment Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[14px] md:text-[18px]">
                  <tr>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      Advance payment
                    </td>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      At the time of booking to confirm wedding dates and
                      initiate planning.
                    </td>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      30% of Total Amount + GST
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      Pre-Event Payment
                    </td>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      1 month prior to the wedding date for execution of
                      bookings and logistics.
                    </td>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      40% of Total Amount + GST
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      Pre Check-In Payment
                    </td>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      1 week before the check-in-date to finalise all
                      arrangements
                    </td>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      20% of Total Amount + GST
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      Final Payment
                    </td>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      On the day of Check-in at the wedding destination
                    </td>
                    <td className="border border-gray-300 px-2 py-6 break-words">
                      10% of Total Amount + GST
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentStructure;
