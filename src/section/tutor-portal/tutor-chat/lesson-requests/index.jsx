import Chat from "../../../chat";

const LessonRequests = () => {
  return (
    <div className="w-full mt-5 ">
      <h4 className="font-bold">Inbox</h4>
      <Chat filterType="lesson" />
    </div>
  );
};

export default LessonRequests;
