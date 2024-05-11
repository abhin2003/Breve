import { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    // Simulated search functionality
    // Replace this with your actual search logic
    const foundUser = { id: "user123", username: username, avatar: null };
    setUser(foundUser);
  };

  const handleAdd = () => {
    // Simulated adding user to chat
    console.log("User added to chat:", user);
    // You can add your own logic here for handling user addition to chat
  };

  return (
    <div>
    </div>
  );
};

export default AddUser;
