import React from "react";
import users from "../images/illustration-your-users.svg";

const Users = () => {
  return (
    <div>
      <div className="users">
        <div>
          <img src={users} alt="" />
        </div>

        <div>
          <h5>Your Users</h5>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
