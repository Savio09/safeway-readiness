import { useState } from "react";
import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";
const FamilyComponent = () => {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
  return (
    <div>
      <h1>This is the Family Component of the Safeway app!</h1>
    </div>
  );
};

export default FamilyComponent;
