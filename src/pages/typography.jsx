import { Helmet } from "@dr.pogodin/react-helmet";
import Button from "../components/UI/button";
import React, { Activity, useState } from "react";
import Modal from "../components/UI/modal";
import SlideOver from "../components/UI/slideOver";
import { DataTable } from "../components/UI/table";
import Badges from "../components/UI/badges";
import {
  ActivityIcon,
  Box,
  Ellipsis,
  FileText,
  LayoutGrid,
} from "lucide-react";
import DropdownMenuItem from "../components/UI/dropdown";
import { DragDropUpload } from "../components/UI/fileUpload";
import Toggle from "../components/UI/switcher";

export default function TypographyPage() {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const openSideModal = () => setSlideOverOpen(true);
  const [SlideOverOpen, setSlideOverOpen] = useState(false);
  const [dropdownID, setDropdownID] = useState(-1);
  const [files, setFiles] = useState([]);
  const [on, setOn] = useState(true);

  function AvatarCell({ name, email, img }) {
    return {
      __asTh: true,
      __node: (
        <div className="flex items-center">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={img}
            alt={`${name} avatar`}
          />
          <div className="ps-3">
            <div className="text-base font-semibold">{name}</div>
            <div className="font-normal text-gray-500 dark:text-gray-400">
              {email}
            </div>
          </div>
        </div>
      ),
    };
  }

  const columns = [
    {
      key: "name",
      header: "Name",
      render: (_v, row) =>
        AvatarCell({ name: row.name, email: row.email, img: row.img }),
    },
    { key: "position", header: "Position" },
    { key: "status", header: "Status", render: (v) => <Badges label={v} /> },
    { key: "status", header: "Status", render: (v) => <Badges label={v} /> },
  ];

  const rows = [
    {
      id: 1,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      position: "React Developer",
      status: "Online",
    },
    {
      id: 2,
      name: "Bonnie Green",
      email: "bonnie@flowbite.com",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      position: "Designer",
      status: "Online",
    },
    {
      id: 3,
      name: "Jese Leos",
      email: "jese@flowbite.com",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      position: "Vue JS Developer",
      status: "Online",
    },
    {
      id: 4,
      name: "Thomas Lean",
      email: "thomes@flowbite.com",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      position: "UI/UX Engineer",
      status: "Online",
    },
    {
      id: 5,
      name: "Leslie Livingston",
      email: "leslie@flowbite.com",
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      position: "SEO Specialist",
      status: "Offline",
    },
  ];

  const [selection, setSelection] = useState([]);

  return (
    <>
      <Helmet>
        <title>Typography | My App</title>
        <meta name="description" content="This is the typography page." />
      </Helmet>

      <div className="p-10 flex gap-4">
        <Button label="Open Modal" variant="primary" onClick={openModal} />
        <Button
          label="Open Side Modal"
          variant="primary"
          onClick={() => setSlideOverOpen(openSideModal)}
        />
      </div>

      <div>
        <div>
          <DataTable
            columns={columns}
            rows={rows}
            selectable
            selection={selection}
            onSelectionChange={setSelection}
            rowActions={(row) => (
              // { Render the dropdown menu for each row }
              <div className="flex justify-center">
                <Ellipsis
                  className="cursor-pointer"
                  size={28}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropdownID({ id: row.id, anchor: e.currentTarget });
                  }}
                />
                {dropdownID?.id === row.id && (
                  <DropdownMenuItem
                    title=""
                    anchorEl={dropdownID.anchor}
                    items={[
                      {
                        id: 1,
                        label: "English",
                        icon: <ActivityIcon size={16} />,
                      },
                      { id: 2, label: "Indonesia", icon: <Box size={16} /> },
                      { id: 3, label: "English", icon: <FileText size={16} /> },
                      {
                        id: 4,
                        label: "Indonesia",
                        icon: <LayoutGrid size={16} />,
                      },
                    ]}
                    closeDropdown={() => setDropdownID(null)}
                  />
                )}
              </div>
            )}
          />
        </div>
        <div>
          <DragDropUpload
            value={files}
            onChange={setFiles}
            multiple
            accept={["image/*", ".pdf", ".docx"]}
            maxFiles={6}
            maxSizeMB={25}
          />
        </div>
        {/* { Render Toggle } */}
        <div className="pt-4 flex items-center gap-4">
          <Toggle checked={on} onChange={setOn} size="sm" onColor="#FFB400" />
          <span className="text-sm font-medium">
            {on ? "Enabled" : "Disabled"}
          </span>
        </div>
      </div>

      {/* Render modal only when open */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Create New Project"
        size="xs"
        // customWidth={720}
        primaryButton={{
          label: "Create",
          onClick: () => alert("Created!"),
          variant: "primary",
        }}
        secondaryButton={{
          label: "Cancel",
          onClick: () => setOpen(false),
          variant: "secondary",
        }}
        closeOnOverlay={true}
      >
        {/* body is fully dynamic */}
        <div>
          <p>this is the modal body</p>
        </div>
      </Modal>

      {/* { Render SlideOver only when Open } */}
      <SlideOver
        isOpen={SlideOverOpen}
        onClose={() => setSlideOverOpen(false)}
        title="Edit Profile"
        size="md"
        primaryButton={{
          label: "Save",
          onClick: () => alert("Saved!"),
        }}
        secondaryButton={{
          label: "Cancel",
          onClick: () => setSlideOverOpen(false),
        }}
      >
        <p>This modal slides in smoothly from the right side 🚀</p>
      </SlideOver>
    </>
  );
}
