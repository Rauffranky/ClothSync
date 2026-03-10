import React, { useState } from "react";
import { Upload, FileText, Pencil, Download, X } from "lucide-react";
import CardOutline from "../../../../components/UI/card/CardOutline";
import { DragDropUpload } from "../../../../components/UI/fileUpload";
import GlobalInput from "../../../../components/UI/Form/Input";
import Button from "../../../../components/UI/button";

const FileItem = ({ file, editingId, editedName, setEditedName, saveName, startEditing, downloadFile, removeFile }) => {
    const isImage = file.file && file.file.type.startsWith("image/");
    const [previewUrl, setPreviewUrl] = React.useState(null);

    React.useEffect(() => {
        if (isImage && file.file) {
            const url = URL.createObjectURL(file.file);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [isImage, file.file]);

    return (
        <div className="flex items-center justify-between p-4 border border-[#F0F0F0] rounded-[16px] bg-white group hover:border-[#DCDCDC] transition-colors shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-3 flex-1 mr-4">
                <div className="w-10 h-12 bg-[#FEECEC] rounded flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    {isImage && previewUrl ? (
                        <img
                            src={previewUrl}
                            alt="preview"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <>
                            <div className="absolute top-0 left-0 bg-red-600 px-1 py-0.5 text-[8px] font-bold text-white leading-none uppercase">
                                PDF
                            </div>
                            <FileText size={20} className="text-red-500 mt-1" />
                        </>
                    )}
                </div>

                {editingId === file.id ? (
                    <div className="flex-1 flex gap-2">
                        <GlobalInput
                            value={editedName}
                            onChange={setEditedName}
                            className="!p-0 !px-2 !bg-[#EDEDED]"
                            onBlur={() => saveName(file.id)}
                            autoFocus
                        />
                        <Button
                            label="Save"
                            className="px-2 rounded text-xs"
                            onClick={() => saveName(file.id)}
                        />
                    </div>
                ) : (
                    <span className="text-[14px] font-medium text-[#1E1E1E] truncate">{file.name}</span>
                )}
            </div>

            <div className="flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <button
                    className="text-[#555555] hover:text-[#1E1E1E] p-1"
                    onClick={() => startEditing(file)}
                >
                    <Pencil size={18} />
                </button>
                <button
                    className="text-[#555555] hover:text-[#1E1E1E] p-1"
                    onClick={() => downloadFile(file)}
                >
                    <Download size={18} />
                </button>
                <button
                    className="text-[#555555] hover:text-red-500 p-1"
                    onClick={() => removeFile(file.id)}
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

const UploadDocumentsCard = () => {
    const [files, setFiles] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedName, setEditedName] = useState("");

    const handleFilesAdded = (newFiles) => {
        const added = newFiles.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            file: file,
            name: file.name
        }));
        setFiles(prev => [...prev, ...added]);
    };

    const removeFile = (id) => {
        setFiles(files.filter(f => f.id !== id));
    };

    const startEditing = (file) => {
        setEditingId(file.id);
        setEditedName(file.name);
    };

    const saveName = (id) => {
        setFiles(files.map(f => f.id === id ? { ...f, name: editedName } : f));
        setEditingId(null);
    };

    const downloadFile = (fileObj) => {
        const url = URL.createObjectURL(fileObj.file);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileObj.name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <CardOutline padding="p-6" border="border-[#DCDCDC]" shadow="shadow-inner-full" className="bg-[#E5E5E533]! h-full">
            <h5 className="font-semibold mb-2 text-[18px]">Upload Documents/Images</h5>
            <p className="text-[14px] text-[#555555] mb-8 leading-relaxed">
                These will appear in your gallery. Upload docs/ images to demonstrate your experience and skills.
            </p>

            <div className="space-y-6">
                {/* Drag & Drop Area */}
                <DragDropUpload
                    multiple
                    onFilesAdded={handleFilesAdded}
                    showList={false}
                    className="!border-[#DCDCDC] !bg-[#EDEDED] !rounded-[16px] "
                >
                    <div className="flex flex-col items-center gap-2">
                        <Upload size={40} className="text-gray-400" />
                    </div>
                </DragDropUpload>

                {/* File List */}
                <div className="space-y-3">
                    {files.map(file => (
                        <FileItem
                            key={file.id}
                            file={file}
                            editingId={editingId}
                            editedName={editedName}
                            setEditedName={setEditedName}
                            saveName={saveName}
                            startEditing={startEditing}
                            downloadFile={downloadFile}
                            removeFile={removeFile}
                        />
                    ))}
                </div>
            </div>
        </CardOutline>
    );
};

export default UploadDocumentsCard;
