import { Delete, Ellipsis, Eye, Mail, Pencil, Trash2 } from "lucide-react";
import Button from "../../../components/UI/button";
import CardOutline from "../../../components/UI/card/CardOutline";
import DataTable from "../../../components/UI/table";
import ProfileHeader from "../../landing-page/tenant-detail/ProfileHeader";
import { useNavigate } from "react-router-dom";
import DropdownMenuItem from "../../../components/UI/dropdown";
import { useState } from "react";
import Modal from "../../../components/UI/modal";

const ProfilePreview = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const tenant = {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 10,
    location: "New York, USA",
    intro:
      " Lorem ipsum dolor sit amet consectetur. Pharetra fames et id semper. Egestas nibh feugiat erat ipsum nulla imperdiet. Enim mattis morbi arcu consequat netus odio massa quisque lorem. Sit imperdiet elit viverra. ",
    methods: {
      online: true,
      inPerson: false,
    },
  };

  const columns = [
    { key: "level", header: "Level", align: "center" },
    {
      key: "subject",
      header: "Subjects",
      align: "center",
      render: (val) => <span className="font-medium">{val}</span>,
    },
    { key: "board", header: "Exam Board", align: "center" },
    {
      key: "price",
      header: "Price/Lesson",
      align: "center",
      render: (val) => <span className="font-bold">{val}</span>,
    },
    {
      key: "actions",
      header: "Actions",
      align: "center",
      render: () => (
        <>
          <div className="flex justify-center">
            <Ellipsis
              className="cursor-pointer"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            />
          </div>
          <DropdownMenuItem
            anchorEl={anchorEl}
            closeDropdown={() => setAnchorEl(null)}
            title=" "
            className="w-56 bg-white/80! backdrop-blur-md border-white/50!"
            items={[
              {
                id: "view",
                label: "Edit",
                icon: <Pencil size={18} />,
                onClick: ()=> navigate("/auth/edit-profile")
              },
              {
                id: "msg_laundry",
                label: "Delete",
                icon: <Trash2 size={18} />,
                onClick: () => {
                  setIsOpen(true);
                },
              },
            ]}
          />
        </>
      ),
    },
  ];

  const rows = [
    { level: "GCSE", subject: "Physics", board: "OCR", price: "£35.00" },
    { level: "GCSE", subject: "Physics", board: "OCR", price: "£35.00" },
  ];

  const navigate = useNavigate();

  return (
    <div className=" ">
      <h2>Profile Preview</h2>
      <ProfileHeader tenant={tenant} />
      <div className="space-y-6 px-8 ">
        <h5 className="font-semibold text-left ">Rates</h5>
        <CardOutline
          bg="bg-[rgba(229,229,229,0.2)]"
          border="border-none"
          shadow="shadow-inner-full"
          padding="p-6"
          className="rounded-xl"
        >
          <DataTable
            headerBg="bg-tertiary"
            columns={columns}
            rows={rows}
            selectable={false}
          />
        </CardOutline>
        <div className=" flex justify-end space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate("/auth/register/tenant")}
            className=" px-10! "
            label="Edit"
          />
          <Button
            variant="primary"
            onClick={() => navigate("/auth/strip-verification")}
            className=" px-20! "
            label=" Submit "
          />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        hideHeader={true}
        closeOnOverlay={true}
        showCloseIcon={false}
        customWidth={900}
        className="rounded-[18px]"
        contentClassName="p-0"
        footer={
          <div className="w-full px-10 pb-10 flex justify-end gap-4">
            {/* No */}
            <button
              onClick={onClose}
              className="min-w-[140px] rounded-[12px] border border-[#2E7D32] px-8 py-3 text-[16px] font-medium text-[#2E7D32] hover:bg-[#2E7D32]/5"
            >
              No
            </button>

            {/* Yes */}
            <button
              // onClick={onConfirm}
              className="min-w-[140px] rounded-[12px] bg-[#2E7D32] px-8 py-3 text-[16px] font-medium text-white hover:opacity-95"
            >
              Yes
            </button>
          </div>
        }
      >
        <div className="flex items-center gap-6 px-10 py-10">
          {/* Left Icon */}
          <img src=" /tuitor/question.svg " alt="" />

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-[32px] font-semibold text-[#1F1F1F]">
              Are You Sure?
            </h2>
            <p className="mt-2 text-[18px] text-gray-600">
              Are You sure you want to Delete this Subject
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePreview;
