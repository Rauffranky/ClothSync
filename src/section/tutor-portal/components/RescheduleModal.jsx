import React, { useState } from "react";
import Modal from "../../../components/UI/modal";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";
import Checkbox from "../../../components/UI/check-box";
import { Icon } from "../../chat/components/Icon";

const RescheduleModal = ({ isOpen, onClose, details }) => {
  const [date, setDate] = useState(details?.date || "");
  const [time, setTime] = useState(details?.time || "");
  const [rescheduleAll, setRescheduleAll] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <span className="text-[#66BB6A] font-semibold text-xl">
          Reschedule-{details?.student || "Appointment"}
        </span>
      }
      size="md"
      footer={
        <div className="flex gap-3 w-full sm:w-auto">
          <Button
            label="Cancel"
            variant="white"
            className="flex-1 sm:flex-none"
            onClick={onClose}
          />
          <Button
            label="Reschedule"
            variant="primary"
            className="flex-1 sm:flex-none"
            onClick={() => {
              console.log("Rescheduling:", { date, time, rescheduleAll });
              onClose();
            }}
          />
        </div>
      }
    >
      <div className="space-y-6 pt-4 p-4 border rounded-2xl border-[#DCDCDC] bg-gray-50">
        <div className=" ">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="calendar" className="w-5 h-5 text-label1" />
            <h6 className="text-label1 font-medium">
              Upcoming Appointment(s)
            </h6>
          </div>

          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-wrap gap-4 md:gap-0 items-center justify-between bg-[#E8F5E9] border border-emerald-100/50 rounded-xl px-4 py-2.5"
              >
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="calendar" className="w-4 h-4 " />
                  <h6 className="text-tertiary2 ">Date:</h6>
                  <subtitle className="text-tertiary2 text-sm">
                    {details?.date || "29/09/2025"}
                  </subtitle>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="clock" className="w-4 h-4 " />
                  <h6 className="text-tertiary2 ">Time:</h6>
                  <subtitle className="text-tertiary2 text-sm">
                    {details?.time || "11:00"}
                  </subtitle>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#E8F5E9]  rounded-2xl p-5 space-y-5">
          <h6 className="text-label1 font-medium text-left">Reschedule to</h6>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <subtitle className="text-tertiary2 text-sm text-left">
                Date
              </subtitle>
              <GlobalInput
                className="bg-[#EDEDED]!"
                type="date"
                value={date}
                onChange={setDate}
              />
            </div>
            <div className="space-y-1.5">
              <subtitle className="text-tertiary2 text-sm text-left">
                Time
              </subtitle>
              <GlobalInput
                className="bg-[#EDEDED]!"
                type="time"
                value={time}
                onChange={setTime}
              />
            </div>
          </div>

          {/* <div className="flex items-start gap-2 pt-2">
            <Checkbox
              checked={rescheduleAll}
              onChange={setRescheduleAll}
              label={
                <span className="text-sm font-medium text-gray-500">
                  Reschedule all future occurences of this appointment
                </span>
              }
            />
          </div> */}

          <subtitle className="text-tertiary2">
            <span className="text-rose-500">*</span>Make sure you have agreed
            the change with parents first.
          </subtitle>
        </div>
      </div>
    </Modal>
  );
};

export default RescheduleModal;
