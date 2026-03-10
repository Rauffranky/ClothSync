import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange, placeholder, className = "" }) => {
    // Custom toolbar options if needed, staying simple for now matching standard snow
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['clean']
        ],
    };

    return (
        <div className={`rich-text-editor-wrapper ${className}`}>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                modules={modules}
                className="bg-gray-100/50 rounded-lg border-gray-200"
            />
            <style>{`
                .rich-text-editor-wrapper .ql-toolbar {
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    border-color: #e5e7eb;
                    background-color: #f9fafb; /* gray-50 */
                }
                .rich-text-editor-wrapper .ql-container {
                    border-bottom-left-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                    border-color: #e5e7eb;
                    background-color: #f3f4f6; /* gray-100/50 approx */
                    min-height: 150px;
                }
                .rich-text-editor-wrapper .ql-editor {
                    min-height: 150px;
                }
            `}</style>
        </div>
    );
};

export default RichTextEditor;
