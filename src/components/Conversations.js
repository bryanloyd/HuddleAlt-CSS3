import React from "react";
import conversation from "../images/illustration-flowing-conversation.svg";

const Conversations = () => {
  return (
    <div>
      <div className="conversations">
        <div>
          <img src={conversation} alt="" />
        </div>

        <div>
          <h5>Flowing Conversations</h5>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
