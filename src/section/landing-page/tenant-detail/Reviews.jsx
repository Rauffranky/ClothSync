import React, { useState } from "react";
import { Star, Reply, LayoutList } from "lucide-react";
import CardOutline from "../../../components/UI/card/CardOutline";
import Button from "../../../components/UI/button";
import { useLocation } from "react-router-dom";
import Pagination from "../../../components/UI/pagination";
import GlobalInput from "../../../components/UI/Form/Input";

const ReviewCard = ({ review }) => {
  const location = useLocation();
  const isReviewPage = location.pathname === "/tenant/review-page";
  const isLaundryReviewsPage = location.pathname === "/laundries/reviews";
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  return (
    <>
      <CardOutline
        padding="p-6"
        rounded="rounded-[24px]"
        shadow="shadow-full"
        border="border-none"
        className="space-y-6 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
      >
        {/* Header: Tenant being reviewed & Laundry Info */}
        {!isReviewPage && (
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={review.tenantImage}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="font-bold text-[#1E1E1E]">
                  {review.tenantName} (Tenant)
                </div>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < review.rating
                        ? "fill-[#FFD700] text-[#FFD700]"
                        : "text-gray-200"
                    }
                  />
                ))}
                <span className="text-[12px] text-[#57606A] ml-2">
                  {review.timeAgo}
                </span>
                <span className="text-[12px] text-[#57606A] ml-2">
                  {review.date}
                </span>
              </div>
            </div>
            {isLaundryReviewsPage && review.reply && (
              <h6 className="text-[#57606A] leading-relaxed">{review.reply}</h6>
            )}
          </div>
        )}

        {/* Reviewer Info */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              {!isReviewPage && (
                <h6 className="text-[#57606A] mb-2 font-medium">Review By</h6>
              )}
              <div className="flex items-center gap-2">
                <img
                  src={review.reviewerImage}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-bold text-[#1E1E1E]">
                  {review.reviewerName}
                  {!isReviewPage && ` (${review.reviewerRole})`}
                </span>
              </div>
            </div>
            {isReviewPage && (
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < review.rating
                        ? "fill-[#FFD700] text-[#FFD700]"
                        : "text-gray-200"
                    }
                  />
                ))}
                <span className="text-[12px] text-[#57606A] ml-2">
                  {review.date}
                </span>
              </div>
            )}
          </div>

          <h6 className="text-[#57606A] leading-relaxed">{review.comment}</h6>
          {/* 
                <button className="flex items-center gap-2 text-primary font-bold text-[14px] hover:underline transition-all">
                    <Reply size={16} className="rotate-180" />
                    See Tenant Reply
                </button> */}


          {!isLaundryReviewsPage && (
            <>
              <Button
                variant=""
                label="See Tenant Reply"
                leftIcon={<Reply size={20} />}
                className="cursor-pointer"
                onClick={() => setShowReplyInput(!showReplyInput)}
              />

              {showReplyInput && (
                <div className=" space-y-3 animate-fadeIn">
                  <GlobalInput
                    placeholder="Write your reply..."
                    value={replyText}
                    onChange={setReplyText}
                    multiline={true}
                    rows={3}
                  />
                  <div className="flex justify-end">
                    <Button
                      variant="primary"
                      label="Send"
                      className="!bg-[#5CB35F] hover:!bg-[#4FA052] !px-8"
                      onClick={() => {
                        // Handle send reply logic here
                        console.log("Reply sent:", replyText);
                        setReplyText("");
                        setShowReplyInput(false);
                      }}
                    />
                  </div>
                </div>
              )}
            </>
          )}


        </div>
      </CardOutline>
    </>
  );
};

const Reviews = () => {
  const location = useLocation(); // Hook usage allowed here as Reviews is a component
  const isReviewPage = location.pathname === "/tenant/review-page";

  const reviews = [
    {
      id: 1,
      tenantName: "Brian",
      tenantImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      timeAgo: "1 week ago",
      date: "2 September 2026",
      reviewerName: "Alexa",
      reviewerRole: "Laundry",
      reviewerImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      comment:
        "Lorem ipsum dolor sit amet consectetur. Tellus cursus id odio eget varius in felis. Et in netus orci rhoncus. Amet ipsum mattis eget egestas. Dictum nunc tempus ullamcorper sodales etiam convallis iaculis cras. Tellus cursus id odio eget varius in felis. Et in netus orci rhoncus. Amet ipsum mattis eget egestas. Dictum nunc tempus ullamcorper sodales etiam convallis iaculis cras.",
      reply:
        "Thank you so much for your kind words! It was a pleasure teaching your child.",
    },
    {
      id: 2,
      tenantName: "Brian",
      tenantImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      timeAgo: "1 week ago",
      date: "2 September 2026",
      reviewerName: "Alexa",
      reviewerRole: "Laundry",
      reviewerImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      comment:
        "Lorem ipsum dolor sit amet consectetur. Tellus cursus id odio eget varius in felis. Et in netus orci rhoncus. Amet ipsum mattis eget egestas. Dictum nunc tempus ullamcorper sodales etiam convallis iaculis cras. Tellus cursus id odio eget varius in felis. Et in netus orci rhoncus. Amet ipsum mattis eget egestas. Dictum nunc tempus ullamcorper sodales etiam convallis iaculis cras.",
    },
  ];

  return (
    <div className="space-y-8 mt-8 ">
      <div
        className={
          isReviewPage
            ? "flex flex-col gap-4"
            : "flex items-center justify-between"
        }
      >
        <h4 className="font-semibold">Your Reviews ({reviews.length})</h4>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">{reviews.length}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className={
                  i < 4 ? "fill-[#FFD700] text-[#FFD700]" : "text-gray-200"
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="flex justify-end">
        <Pagination
          totalItems={100}
          itemsPerPage={10}
          currentPage={1}
          onPageChange={() => { }}
        />
      </div>
    </div>
  );
};

export default Reviews;
