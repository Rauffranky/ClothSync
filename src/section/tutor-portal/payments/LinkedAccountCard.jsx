import React from "react";
import CardOutline from "../../../components/UI/card/CardOutline";

const LinkedAccountCard = ({
  cardNumber = "**** **** **** 3507",
  // holderName = "John Carter",
  // expiryDate = "02/30",
//   cardType = "VISA",
}) => {
  return (
    <div className="w-full md:max-w-[440px]">
      <CardOutline border="border-none" padding="p-2">
        <div
          className="relative rounded-[16px] px-5 py-2 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #2E7D32 0%, #4CAF50 50%, #81C784 100%)",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 w-62 h-62 rounded-full bg-white/10"></div>
          <div className="absolute -right-13 top-0 w-42 h-42 rounded-full bg-white/5"></div>

          {/* Card Number */}
          <div className="text-white text-[18px] font-medium tracking-wider">
            {cardNumber}
          </div>

          {/* Card Type Logo */}
          {/* <div className="absolute top-2 right-5">
            <span className="text-white text-xl font-bold italic">
              {cardType}
            </span>
          </div> */}

          {/* Card Details */}
          {/* <div className="flex justify-between items-end mt-10">
                        <div>
                            <div className="text-white/70 text-[10px] uppercase mb-1">Card holder name</div>
                            <div className="text-white text-[14px] font-medium">{holderName}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-white/70 text-[10px] uppercase mb-1">Expiry date</div>
                            <div className="text-white text-[14px] font-medium">{expiryDate}</div>
                        </div>
                    </div> */}
        </div>
      </CardOutline>
    </div>
  );
};

export default LinkedAccountCard;
