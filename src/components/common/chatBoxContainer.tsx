import { useState } from 'react';
import Chats from '../../assets/icons/chats';
import ChatBox from '../../assets/icons/chatBox';

const ChatBoxContainer = () => {
  const [showChatWindow, setShowChatWindow] = useState(false);
  return (
    <>
      {showChatWindow && <Chats />}
      <div
        className='fixed bottom-7 right-7 bg-[#D71E0E] h-[60px] w-[60px] rounded-full flex justify-center items-center cursor-pointer'
        onClick={() => setShowChatWindow(!showChatWindow)}
      >
        <ChatBox />
      </div>
    </>
  );
};

export default ChatBoxContainer;
