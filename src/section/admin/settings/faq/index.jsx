import React, { useState } from "react";
import { Edit2, Trash2, AlignLeft } from "lucide-react";
import GlobalInput from "../../../../components/UI/Form/Input";
import Button from "../../../../components/UI/button";
import RichTextEditor from "../../../../components/UI/Form/RichTextEditor";
import CardOutline from "../../../../components/UI/card/CardOutline";

const FaqSettings = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: "Lorem ipsum dolor sit amet consectetur. Molestie ac volutpat lacus mi varius ullamcorper.",
            answer: "<p>Lorem ipsum dolor sit amet consectetur. Diam nam senectus non velit sed iaculis sem sit. Massa rhoncus orci sed tincidunt eu velit eu. Vel ultricies a bibendum nibh volutpat quam. Est fringilla cursus ipsum lacus. Sem nisl aenean faucibus tincidunt amet. Sed nibh nec massa pulvinar pharetra elementum neque. A nunc porttitor pretium arcu.</p>"
        }
    ]);

    const [editingId, setEditingId] = useState(null);

    const handleSave = () => {
        if (!question.trim() || !answer.trim()) return;

        if (editingId) {
            setFaqs(faqs.map(f => f.id === editingId ? { ...f, question, answer } : f));
            setEditingId(null);
        } else {
            const newFaq = {
                id: Date.now(),
                question,
                answer
            };
            setFaqs([...faqs, newFaq]);
        }

        setQuestion("");
        setAnswer("");
    };

    const handleDelete = (id) => {
        setFaqs(faqs.filter(f => f.id !== id));
    };

    const handleEdit = (faq) => {
        setEditingId(faq.id);
        setQuestion(faq.question);
        setAnswer(faq.answer);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="space-y-8">
            <h5 className="font-medium text-lg">FAQ's</h5>

            {/* Input Form */}
            <CardOutline border="border-gray-200" shadow="shadow-inner-full" bg="bg-gray-50" className=" space-y-6">
                <div className="space-y-2">
                    <label className="text-sm text-gray-600">Question</label>
                    <GlobalInput
                        value={question}
                        onChange={setQuestion}
                        placeholder="Enter question"
                        className="bg-gray-100/50 border-gray-200"
                    />
                </div>

                <div className="space-y-2">
                    <RichTextEditor
                        value={answer}
                        onChange={setAnswer}
                        placeholder="I am your rich text editor."
                    />
                </div>

                <div className="flex justify-end pt-2">
                    <Button
                        label={editingId ? "Update" : "Save"}
                        onClick={handleSave}
                        className="!bg-[#469A30] !border-none text-white px-8 rounded-lg"
                    />
                </div>
            </CardOutline>

            {/* List */}
            <div className="space-y-4">
                {faqs.map((faq) => (
                    <CardOutline key={faq.id} className="p-6 bg-white rounded-[20px]! border-none shadow-sm relative group">
                        <div className="absolute top-6 right-6 flex items-center gap-3">
                            <button
                                onClick={() => handleEdit(faq)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <Edit2 size={18} />
                            </button>
                            <button
                                onClick={() => handleDelete(faq.id)}
                                className="text-gray-400 hover:text-red-500"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>

                        <div className="pr-20 space-y-2">
                            <h4 className="font-bold text-gray-800 text-base">{faq.question}</h4>
                            <div
                                className="text-gray-500 text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        </div>
                    </CardOutline>
                ))}
            </div>
        </div >
    );
};

export default FaqSettings;
