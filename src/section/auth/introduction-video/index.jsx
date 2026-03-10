import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/button";
import { DragDropUpload } from "../../../components/UI/fileUpload";
import { Upload, Play, X } from "lucide-react";

const IntroductionVideoSection = () => {
  const navigate = useNavigate();
  const [videoFiles, setVideoFiles] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFilesAdded = (newFiles) => {
    if (newFiles.length > 0) {
      const file = newFiles[0];
      setVideoFiles([file]);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleRemoveVideo = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setVideoFiles([]);
    setPreviewUrl(null);
  };

  const handleContinue = () => {
    // Navigate to next step: Upload Documents
    navigate("/auth/upload-documents");
  };

  const handleSkip = () => {
    navigate("/auth/upload-documents");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-4 font-medium text-center">Introduction Video</h2>
      <h6 className="mb-8 text-center max-w-[450px]">
        A 30-60 video about your tutoring services will win you more work
      </h6>

      <div className="w-full mb-8">
        <DragDropUpload
          multiple={false}
          accept="video/*"
          maxSizeMB={50}
          value={videoFiles}
          onChange={setVideoFiles}
          onFilesAdded={handleFilesAdded}
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

      {/* Video Preview */}
      {previewUrl && (
        <div className="relative w-full max-w-[300px] mb-8 group">
          <div className="aspect-[3/4] rounded-[20px] overflow-hidden bg-gray-100 border border-[#DCDCDC] relative">
            <video src={previewUrl} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/60 transition-colors">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <Play className="text-white fill-white ml-1" size={24} />
              </div>
            </div>
          </div>
          {/* Delete Icon */}
          <button
            onClick={handleRemoveVideo}
            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 shadow-md hover:bg-red-700 transition-colors z-10"
          >
            <X size={16} strokeWidth={3} />
          </button>
        </div>
      )}

      <div className="flex w-full gap-4 mt-4">
        <Button
          label="Skip"
          variant="white"
          fullWidth
          className="!rounded-[12px] !border-[#DCDCDC] !text-[#555555] py-3!"
          onClick={handleSkip}
        />
        <Button
          label="Continue"
          variant="primary"
          fullWidth
          className="!rounded-[12px] py-3!"
          onClick={handleContinue}
        />
      </div>
    </div>
  );
};

export default IntroductionVideoSection;
