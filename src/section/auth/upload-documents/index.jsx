import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/button";
import { DragDropUpload } from "../../../components/UI/fileUpload";
import { Upload, Play, X } from "lucide-react";

const UploadDocumentsSection = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    // Navigate to next step
    navigate("/auth/your-qualifications");
  };

  const handleSkip = () => {
    navigate("/auth/your-qualifications");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-4 font-medium text-center">
        Upload Documents & Images
      </h2>
      <h6 className="mb-8 text-center max-w-[450px]">
        Upload content that demonstrates your experience, skills &
        qualifications.
      </h6>

      <div className="w-full mb-8">
        <DragDropUpload
          multiple={true}
          accept=".pdf,.jpg,.jpeg,.png"
          maxSizeMB={10}
          value={files}
          onChange={setFiles}
          showList={false}
          className="w-full"
          dropzoneClassName="!bg-[#EDEDED] !border-[#DCDCDC] !rounded-[20px] !py-10"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[#555555] font-medium">
              Drag & Drop or Click to Upload
            </span>
            <div className="bg-white p-4 rounded-full shadow-sm">
              <Upload className="text-[#555555] w-8 h-8" strokeWidth={1.5} />
            </div>
          </div>
        </DragDropUpload>
      </div>

      {/* Files List/Preview */}
      {files.length > 0 && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {files.map((file, index) => {
            const isImage = file.type.startsWith("image/");
            return (
              <div
                key={index}
                className="relative flex items-center gap-3 p-2 bg-white border border-[#DCDCDC] rounded-[15px] group"
              >
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center">
                  {isImage ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-[10px] font-bold text-[#555555]">
                      PDF
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black truncate">
                    {file.name}
                  </p>
                  {/* <p className="text-xs text-[#555555]">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p> */}
                </div>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex w-full gap-4 mt-auto">
        <Button
          label="Skip"
          variant="white"
          fullWidth
          className="!rounded-[12px] !border-[#DCDCDC] !text-[#555555] py-3!"
          onClick={handleSkip}
        />
        <Button
          label="Save & Continue"
          variant="primary"
          fullWidth
          className="!rounded-[12px] py-3!"
          onClick={handleContinue}
        />
      </div>
    </div>
  );
};

export default UploadDocumentsSection;
