import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";
// Remove Firebase imports
// import { useUserStore } from "../../../lib/userStore";
// import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
// import { db } from "../../../lib/firebase";
// import { useChatStore } from "../../../lib/chatStore";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [input, setInput] = useState("");
  // Remove Firebase custom hooks
  // const { currentUser } = useUserStore();
  // const { chatId, changeChat } = useChatStore();

  useEffect(() => {
    // Simulate fetching chat data from an API or other source
    const fetchData = async () => {
      try {
        // Simulated chat data
        const simulatedChatData = [
          { chatId: 1, user: { username: "User 1" }, lastMessage: "Hello" },
          { chatId: 2, user: { username: "User 2" }, lastMessage: "Hi there" },
          // Add more simulated chat data as needed
        ];
        setChats(simulatedChatData);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelect = (chat) => {
    // Simulate handling chat selection
    console.log("Selected chat:", chat);
  };

  const filteredChats = chats.filter((c) =>
    c.user.username.toLowerCase().includes(input.toLowerCase())
  );

  return (
    
    <div/>
  );
};

export default ChatList;