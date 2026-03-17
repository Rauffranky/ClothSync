import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumberField = ({
    label,
    name = "phoneNumber",
    value,
    onChange,
    error,
    touched,
    placeholder = "Enter phone number",
    className = "",
    helperText,
}) => {
    const hasError = touched && !!error;

    return (
        <div className="w-full space-y-2">
            {/* Label */}
            {label && (
                <label
                    htmlFor={name}
                    className={`block text-[14px] font-medium ${hasError ? "text-red-500" : "text-[#555555]"
                        }`}
                >
                    {label}
                </label>
            )}

            {/* Input Container */}
            <div
                className={`
          flex items-center rounded-[12px] px-3 py-1
          bg-[#EDEDED]
          border
          ${hasError ? "border-red-500" : "border-[#DCDCDC]"}
          focus-within:border-[#4CAF50]
          transition-colors
          ${className}
        `}
            >
                <PhoneInput
                    defaultCountry="gb"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    inputClassName="!bg-translaundry !border-none !outline-none !shadow-none !text-[14px] !text-[#1E1E1E] w-full !h-10"
                    className="w-full"
                    countrySelectorStyleProps={{
                        buttonClassName:
                            "!bg-translaundry !border-none !text-[#1E1E1E] !focus:outline-none !px-2",
                    }}
                />
            </div>

            {/* Error text */}
            {hasError && <p className="mt-1 text-[12px] text-red-500">{error}</p>}
            {!hasError && helperText && <p className="mt-1 text-[12px] text-[#777777]">{helperText}</p>}
        </div>
    );
};

export default PhoneNumberField;
