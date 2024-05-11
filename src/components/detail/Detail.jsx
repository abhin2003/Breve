import { useState } from "react";
import "./detail.css";

const Detail = () => {
  const [isCurrentUserBlocked, setIsCurrentUserBlocked] = useState(false);
  const [isReceiverBlocked, setIsReceiverBlocked] = useState(false);
  const [user, setUser] = useState(null); // Assuming you set user data elsewhere

  const handleBlock = () => {
    // Update state to simulate blocking/unblocking
    setIsCurrentUserBlocked((prev) => !prev);
    setIsReceiverBlocked((prev) => !prev);
  };

  const handleLogout = () => {
    // Implement logout functionality using your preferred authentication library
    console.log("Logout functionality goes here");
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p3>Breve</p3>
      </div>
      <div className="info">
        {/* Remaining UI elements */}
       
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
