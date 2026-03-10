
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, FileText, Calendar, Clock, BookOpen, Smartphone, PcCase, Upload, X, Users, GraduationCap } from 'lucide-react';
import Button from '../../../../components/UI/button';
import StatusChipNew from '../../../../components/UI/StatusChipNew'; // Use Global Status Component
import { DragDropUpload } from '../../../../components/UI/fileUpload';
import NotesModal from '../../../tutor-portal/bookings/NotesModal';
import SuspendModal from '../../../landing-page/tutor-detail/modals/SuspendModal';
import ApproveModal from '../../../landing-page/tutor-detail/modals/ApproveModal';
import SocialIcons from '../../../../components/UI/SocialIcons';

const mockData = {
    caseId: "000012",
    amount: "£100",
    parentName: "Mr. Alex Jones",
    tutorName: "Mr. Alex Jones",
    lessons: ["#1122", "#911"],
    pastLessons: [
        { id: "#1122", date: "29/09/2025", time: "15:00", subject: "Math" },
        { id: "#1122", date: "16/09/2025", time: "15:00", subject: "Math" },
        { id: "#1122", date: "10/09/2025", time: "15:00", subject: "Math" },
    ],
    futureLessons: [
        { id: "#1122", date: "29/09/2025", time: "15:00", subject: "Math" },
        { id: "#1122", date: "16/09/2025", time: "15:00", subject: "Math" },
        { id: "#1122", date: "10/09/2025", time: "15:00", subject: "Math" },
    ],
    nature: "Refund",
    description: "Lorem ipsum dolor sit amet consectetur. Phasellus vulputate proin lectus volutpat suspendisse est morbi. Mauris in nunc praesent.",
    uploadedFiles: [
        { type: "pdf", name: "doc.pdf" },
        { type: "image", src: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" }
    ],
    status: "Requested"
};

const DetailRow = ({ label, value, className = "", children }) => (
    <div className={`p-4 bg-tertiary rounded-[10px] flex items-center gap-4 ${className}`}>
        {children ? children : (
            <>
                {label && <span className=" font-medium min-w-[80px]">{label}:</span>}
                <span className="text-gray-800 font-medium">{value}</span>
            </>
        )}
    </div>
);

const LessonItem = ({ lesson }) => (
    <div className="flex items-center gap-4 text-sm text-tertiary2 mb-2">
        <div className="flex items-center gap-1 min-w-[70px]">
            <FileText size={16} className="text-[#419E44]" />
            <span>{lesson.id}</span>
        </div>
        <div className="flex items-center gap-1 min-w-[100px]">
            <Calendar size={16} className="text-[#419E44]" />
            <span>{lesson.date}</span>
        </div>
        <div className="flex items-center gap-1 min-w-[70px]">
            <Clock size={16} className="text-[#419E44]" />
            <span>{lesson.time}</span>
        </div>
        <div className="flex items-center gap-1">
            <BookOpen size={16} className="text-[#419E44]" />
            <span>{lesson.subject}</span>
        </div>
    </div>
);

const DisputeDetail = () => {
    const { state } = useLocation();

    // Merge mockData with passed state, preferring state for overlapping keys but keeping mock structure
    // Ensure we have correct fallbacks for arrays/objects
    const data = { ...mockData, ...state };

    const [files, setFiles] = useState([]);
    const [isNotesOpen, setIsNotesOpen] = useState(false);
    const [isRejectOpen, setIsRejectOpen] = useState(false);
    const [isApproveOpen, setIsApproveOpen] = useState(false);


    const removeFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h4 className="font-bold my-4">Disputes</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <div className="flex justify-end items-center">
                {/* <h3 className="text-xl font-bold">Disputes</h3> */}
                <StatusChipNew status={data.status} />
            </div>

            {/* Row 1: Case & Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                    { icon: <PcCase size={20} className="mr-2" />, label: "Case#", value: data.caseId },
                    { icon: <span className="text-lg mr-2">£</span>, label: "Amount", value: data.amount },
                ].map((item, index) => (
                    <DetailRow key={index} label="" value="">
                        {item.icon}
                        <span className="mr-4">{item.label}:</span>
                        <span className="text-gray-800">{item.value}</span>
                    </DetailRow>
                ))}
            </div>

            {/* Row 2: Parents & Tutor */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                    { icon: <Users size={20} className="mr-2" />, label: "Parents", value: data.parentName, hasAction: true },
                    { icon: <GraduationCap size={20} className="mr-2" />, label: "Tutor", value: data.tutorName, hasAction: true },
                ].map((item, index) => (
                    <DetailRow key={index} className={item.hasAction ? "justify-between" : ""}>
                        {/* Wrapper for left side content to separate from potential action button */}
                        <div className="flex items-center gap-2"> {/* Normalized inner wrapper */}
                            {item.action ? (
                                // Logic for Parents/Tutor structure if strict adherence to nested divs needed
                                // Current parents structure: div(gap-4) > [div(gap-2) > icon, label], value
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        <span>{item.label}:</span>
                                    </div>
                                    <span className="text-gray-800">{item.value}</span>
                                </div>
                            ) : (
                                // Logic for Case/Amount
                                // Previous: icon, label, value siblings.
                                // We can wrap them in the same structure for consistency:
                                <>
                                    {item.icon}
                                    <span className="mr-4">{item.label}:</span>
                                    <span className="text-gray-800">{item.value}</span>
                                </>
                            )}

                            {/* Unified Logic Attempt */}
                            {/* If we strictly follow the Parents structure for all:
                                <div className="flex items-center gap-2">
                                     {item.icon}
                                     <span>{item.label}:</span>
                                </div>
                                <span className="text-gray-800">{item.value}</span>
                                
                                This puts value separately. 
                                For Case, value is next to label.
                             */}
                        </div>

                        {/* Correct implementation based on previous styles */}
                        {item.hasAction ? (
                            <>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        <span>{item.label}:</span>
                                    </div>
                                    <span className="text-gray-800">{item.value}</span>
                                </div>
                                <button className="w-10 h-10 rounded-lg border border-[#419E44] flex items-center justify-center text-[#419E44] hover:bg-green-50">
                                    <Mail size={20} />
                                </button>
                            </>
                        ) : (
                            <>
                                {item.icon}
                                <span className="mr-4">{item.label}:</span>
                                <span className="text-gray-800">{item.value}</span>
                            </>
                        )}
                    </DetailRow>
                ))}
            </div>


            {/* Row 3: Lesson # */}
            <DetailRow>
                <FileText size={20} className=" mr-2" />
                <span className="  mr-4">Lesson #:</span>
                <div className="flex gap-4">
                    {data.lessons.map((id, idx) => (
                        <span key={idx} className=" text-gray-800• flex items-center gap-2">
                            • {id}
                        </span>
                    ))}
                </div>
            </DetailRow>

            {/* Row 4: Past & Future Lessons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex bg-tertiary rounded-[10px] p-6 gap-3 flex-wrap">
                    <h4 className="text-tertiary2  mb-4">Past Lessons:</h4>
                    <div>
                        {data.pastLessons.map((lesson, idx) => <LessonItem key={idx} lesson={lesson} />)}
                    </div>
                </div>
                <div className="flex bg-tertiary rounded-[10px] p-6 gap-3 flex-wrap">
                    <h4 className="text-tertiary2  mb-4">Future Lessons:</h4>
                    <div>
                        {data.futureLessons.map((lesson, idx) => <LessonItem key={idx} lesson={lesson} />)}
                    </div>
                </div>
            </div>

            {/* Row 5: Dispute Nature & Description */}
            <div className="bg-tertiary rounded-[10px] p-6 space-y-4">
                <div className="flex gap-4">
                    <span className="text-tertiary2  min-w-[120px]">Dispute Nature:</span>
                    <span className="text-gray-800">{data.nature}</span>
                </div>
                <div className="flex gap-4">
                    <span className="text-tertiary2 font-medium min-w-[120px]">Description:</span>
                    <span className=" text-sm leading-relaxed">{data.description}</span>
                </div>
            </div>

            {/* Row 6: Uploaded Files */}
            <div>
                <h4 className="text-lg font-bold mb-4">Uploaded Files</h4>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="w-36 h-36">
                        <DragDropUpload
                            className="w-full h-full"
                            dropzoneClassName="!w-full !h-full !p-0 !border-2 !border-dashed !border-gray-300 !rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors"
                            showList={false}
                            multiple={true}
                            value={files}
                            onChange={setFiles}
                        >
                            <Upload className="text-gray-400" size={24} />
                        </DragDropUpload>
                    </div>

                    {/* Image Thumbnails */}
                    {files.map((file, index) => (
                        <div key={index} className="relative w-36 h-36 border border-gray-200 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center group">
                            {file.type.startsWith('image/') ? (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="preview"
                                    className="w-full h-full object-cover"
                                    onLoad={(e) => URL.revokeObjectURL(e.target.src)}
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center text-gray-400">
                                    <FileText size={32} />
                                    <span className="text-xs mt-1 px-2 text-center truncate w-full">{file.name}</span>
                                </div>
                            )}
                            <button
                                onClick={() => removeFile(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-md md:opacity-0 group-hover:opacity-100"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-4 mt-4">
                <Button
                    label="Notes"
                    variant="white"
                    className="border-[#419E44]! text-[#419E44]! min-w-[120px] rounded-[8px]!"
                    onClick={() => setIsNotesOpen(true)}
                />
                <Button
                    label="Reject Dispute"
                    variant="white"
                    className="border-[#419E44]! text-[#419E44]! min-w-[160px] rounded-[8px]!"
                    onClick={() => setIsRejectOpen(true)}
                />
                <Button
                    label="Accept Dispute"
                    className="bg-[#419E44]! hover:bg-green-700 min-w-[160px] rounded-[8px]! shadow-none before:hidden"
                    onClick={() => setIsApproveOpen(true)}
                />
            </div>

            {/* Modals */}
            <NotesModal
                isOpen={isNotesOpen}
                onClose={() => setIsNotesOpen(false)}
            />

            <SuspendModal
                isOpen={isRejectOpen}
                onClose={() => setIsRejectOpen(false)}
                onSuspend={(reason) => console.log("Rejected dispute reason:", reason)}
                action="Reject"
            />

            <ApproveModal
                isOpen={isApproveOpen}
                onClose={() => setIsApproveOpen(false)}
                onApprove={() => console.log("Account (Dispute) Approved")}
                name="Dispute"
            />

        </div>
    );
};

export default DisputeDetail;
