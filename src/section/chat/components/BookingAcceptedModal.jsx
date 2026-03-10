import React from "react";
import { Calendar, Clock, Repeat } from "lucide-react";
import Modal from "../../../components/UI/modal";
import Button from "../../../components/UI/button";

const BookingAcceptedModal = ({ isOpen, onClose, details }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={<span className="text-primary text-xl font-bold">Booking Accepted</span>}
      showCloseIcon={false}
      footer={
        <Button
          label="Ok"
          variant="primary"
          className="px-8! md:w-[130px]"
          onClick={onClose}
        />
      }
    >
      <div className="space-y-3 pt-4 p-4 border rounded-2xl border-[#DCDCDC] bg-gray-50">
        <h6 className="font-medium text-tertiary2">
          <span className="text-red-500">*</span> Appointment has been added to your calendar
        </h6>

        <div className="bg-[#E9F7E9] rounded-xl p-3 space-y-4">
          {/* Date & Time Row */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-600" />
              <h6 className="text-tertiary2 ">Date: {details?.date}</h6>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-600" />
              <h6 className="text-tertiary2 ">Time: {details?.time}</h6>
            </div>
          </div>
        </div>

        {/* Recurring & Details */}
        <div className="bg-[#E9F7E9] rounded-xl p-4 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-2 ">
              <Repeat size={18} className="text-gray-600 mt-1 shrink-0" />
              <h6 className="text-tertiary2 ">
                Recurring: <subtitle className="text-tertiary2">{details?.recurring}</subtitle>
              </h6>
            </div>

            <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-2">
              <div className="flex gap-2">
                <h6 className="text-tertiary2 ">Student:</h6>
                <subtitle className="text-tertiary2">{details?.student}</subtitle>
              </div>
              <div className="flex gap-2">
                <h6 className="text-tertiary2 ">Level:</h6>
                <subtitle className="text-tertiary2">{details?.level}</subtitle>
              </div>
              <div className="flex gap-2 col-span-2">
                <h6 className="text-tertiary2 ">Subject:</h6>
                <subtitle className="text-tertiary2">{details?.subject}</subtitle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BookingAcceptedModal;

