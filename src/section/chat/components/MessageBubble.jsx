import React, { useEffect, useState } from "react";
import { AttachmentCard } from "./AttachmentCard";
// import { Icon } from "./Icon";
import Button from "../../../components/UI/button";
import CardOutline from "../../../components/UI/card/CardOutline";
// import GlobalInput from "../../../components/UI/Form/Input";
// import Checkbox from "../../../components/UI/check-box";

function cn(...xs) {
  return xs.filter(Boolean).join(" ");
}

import RescheduleModal from "../../tutor-portal/components/RescheduleModal";
import { Calendar } from "lucide-react";
import BookingAcceptedModal from "./BookingAcceptedModal";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 my-4">
      <div className="text-center">
        <h5 className="text-tertiary2 ">{formatNumber(timeLeft.hours)}</h5>
        <div className="text-[8px]! uppercase">Hours</div>
      </div>
      <div className="text-center">
        <h5 className="text-tertiary2 ">{formatNumber(timeLeft.minutes)}</h5>
        <subtitle className="text-[8px]! uppercase">Minutes</subtitle>
      </div>
      <div className="text-center">
        <h5 className="text-tertiary2 ">{formatNumber(timeLeft.seconds)}</h5>
        <subtitle className="text-[8px]! uppercase">Seconds</subtitle>
      </div>
    </div>
  );
};

const LessonCard = ({ details, onChangeClick, onAcceptClick }) => (
  <CardOutline border="border-none" rounded="rounded-[10px]" className="w-full max-w-[380px] my-2">
    <div className="rounded-t-xl mb-8">
      <h6 className="text-tertiary2 ">
        If the booking request is not accepted within 72 hours, the payment will be refunded to the parent
      </h6>
      <CountdownTimer />
    </div>
    <div className="flex justify-between items-start gap-4 mb-4 ">
      <div className="space-y-6 flex-1">
        {[
          [
            { label: "Date", value: details?.date },
            { label: "Time", value: details?.time },
          ],
          [{ label: "Recurring", value: details?.recurring }],
          [
            { label: "Student", value: details?.student },
            { label: "Level", value: details?.level },
          ],
          [{ label: "Subject", value: details?.subject }],
        ].map((row, idx) => (
          <div key={idx} className="flex items-center gap-8">
            {row.map((item, i) => (
              <div key={i} className={`flex items-baseline gap-2 ${i === 0 ? "min-w-[80px]" : ""}`}>
                <h6 className="text-tertiary2 ">{item.label}:</h6>
                <subtitle className="text-tertiary2 text-sm">{item.value}</subtitle>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className="flex gap-3">
      <Button
        variant="white"
        fullWidth
        label="Accept"
        onClick={onAcceptClick}
        leftIcon={
          <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        }
      />
      <Button
        variant="primary"
        fullWidth
        label="Change"
        leftIcon={<Calendar size={20} />}
        onClick={onChangeClick}
      />
    </div>
  </CardOutline>
);

const RescheduleCard = ({ details }) => (
  <CardOutline border="border-none" rounded="rounded-[10px]" className="w-full max-w-[380px] my-2 p-6!">
    <p className="text-[#333] text-sm mb-6">
      Your booking is <span className="font-bold">Rescheduled</span> From Tutor Side.
    </p>

    <div className="space-y-4 text-sm text-[#555]">
      <div className="flex gap-2">
        <span className="font-medium min-w-[60px]">Tutor:</span>
        <span>{details.tutor}</span>
      </div>

      <div className="flex gap-2">
        <span className="font-medium min-w-[60px]">Subjects:</span>
        <span>{details.subject}</span>
      </div>

      <div className="flex gap-2">
        <span className="font-medium min-w-[60px]">Dates:</span>
        <ul className="list-disc pl-4 space-y-1">
          {details.dates?.map((date, idx) => (
            <li key={idx} className="text-[#555]">{date}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 mt-4 pt-2">
        <span className="font-medium min-w-[60px]">Total Cost:</span>
        <span>£ {details.cost}</span>
      </div>
    </div>
  </CardOutline>
);

export function MessageBubble({ msg }) {
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const isAdmin = msg.role === "admin";
  const isSystem = msg.role === "system";

  const formatTime = (ts) => {
    if (!ts) return "";
    return new Date(ts).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const details = msg.lessonDetails || msg.details;

  if (msg.type === "lesson") {
    return (
      <div className="w-full mb-6 flex flex-col">
        <LessonCard
          details={details}
          onChangeClick={() => setIsChangeModalOpen(true)}
          onAcceptClick={() => setIsAcceptModalOpen(true)}
        />
        <RescheduleModal
          isOpen={isChangeModalOpen}
          onClose={() => setIsChangeModalOpen(false)}
          details={details}
        />

        <BookingAcceptedModal
          isOpen={isAcceptModalOpen}
          onClose={() => setIsAcceptModalOpen(false)}
          details={details}
        />
      </div>
    );
  }

  if (msg.type === "reschedule") {
    return (
      <div className="w-full mb-6 flex flex-col items-start bg-transparent">
        <RescheduleCard details={msg.rescheduleDetails} />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full mb-6 flex",
        isAdmin ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] sm:max-w-[75%] md:max-w-[70%] flex flex-col",
          isAdmin ? "items-end" : "items-start"
        )}
      >
        {/* Author name ABOVE the bubble */}
        {!isSystem && (
          <div className="mb-1 text-[11px] text-gray-500 px-1">
            {msg.author || (isAdmin ? "Admin" : "Vendor")}
          </div>
        )}

        {/* Bubble */}
        {(() => {
          const emojiRegex =
            /^(\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]|\ud83e[\udd00-\uddff]|\u2600-\u26ff|\u2700-\u27bf|\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]){1,3}$/;
          const isJumboEmoji = msg.text && emojiRegex.test(msg.text.trim());

          if (isJumboEmoji) {
            return <div className="text-4xl py-1 select-none">{msg.text}</div>;
          }

          return (
            <div
              className={cn(
                "border px-3.5 py-2.5 text-[15px] leading-relaxed relative max-w-full overflow-wrap-break-word",
                isAdmin
                  ? "bg-white text-black border-gray-200/60 rounded-tl-[16px] rounded-tr-[4px] rounded-br-[16px] rounded-bl-[16px] shadow-sm"
                  : "bg-[#66BB6A] text-white border-[#66BB6A] rounded-tl-[4px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] shadow-sm"
              )}
              style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
            >
              {/* Plural Attachments (New Format) */}
              {msg.attachments && msg.attachments.length > 0 && (
                <div className="space-y-2 mb-2">
                  {msg.attachments.map((att, idx) => (
                    <AttachmentCard key={idx} att={att} />
                  ))}
                </div>
              )}

              {/* Singular Attachment (Backward Compatibility) */}
              {msg.attachment && (
                <div>
                  <AttachmentCard att={msg.attachment} />
                </div>
              )}

              {/* Message Text */}
              {msg.text && (
                <div
                  className={cn(
                    "whitespace-pre-wrap",
                    msg.attachments?.length > 0 || msg.attachment
                      ? "mt-3 pt-3 border-t border-gray-100/20"
                      : ""
                  )}
                >
                  {msg.text}
                </div>
              )}
            </div>
          );
        })()}

        {/* Timestamp */}
        <div className="mt-1 text-[10px] text-gray-400 px-1 flex items-center gap-1">
          {formatTime(msg.timestamp || msg.time)}
          {/* {isAdmin && (
            <Icon
              name="check"
              className="h-3 w-3 text-emerald-500 opacity-60"
            />
          )} */}
        </div>
      </div>
    </div>
  );
}

