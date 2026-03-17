import React from "react";
import { MapPin, Info } from "lucide-react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import GlobalInput from "../../../../components/UI/Form/Input";

const AddressCard = ({ formik }) => {
  return (
    <CardOutline
      padding="p-6"
      border="border-[#DCDCDC]"
      shadow="shadow-inner-full"
      className="bg-[#E5E5E533]! h-full"
    >
      <h5 className="font-semibold mb-6">Address</h5>

      <div className="space-y-4">
        {/* Address Input */}
        <div className="">
          <h6 className="mb-2">
            Enter your address<span className="text-red-500">*</span>
          </h6>
          <GlobalInput
            name="address"
            placeholder="Richmond, Surrey"
            value={formik.values.address}
            onChange={(val) => formik.setFieldValue("address", val)}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            rightIcon={<MapPin size={18} className="text-[#555555]" />}
            className="!bg-[#EDEDED] !border-[#DCDCDC] rounded-[12px]!"
          />
        </div>

        {/* Map Placeholder - Using iframe with light grayscale filter */}
        <div className="h-[330px] rounded-[12px] overflow-hidden border border-[#DCDCDC]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.241681!3d51.5287714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1704790000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "grayscale(100%) brightness(1.1) contrast(0.8) opacity(0.9)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>

        {/* Info Box */}
        <div className="flex gap-3 mt-4">
          <div className="shrink-0 mt-0.5 text-gray-500">
            <Info size={16} />
          </div>
          <div className="space-y-1">
            <p className="text-label font-medium">
              For your privacy and safety, your exact address is never displayed
            </p>
            <p className="text-label ">
              Your location is used only to show laundries approximate results
              when they search using the “Nearest Me” option for in-person
              lessons.
            </p>
          </div>
        </div>
      </div>
    </CardOutline>
  );
};

export default AddressCard;
