import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  const id = process.env.PROJECT_ID;
  return (
    <div style={{ height: "90vh", width: "auto" }}>
      <PrettyChatWindow
        projectId={id}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
