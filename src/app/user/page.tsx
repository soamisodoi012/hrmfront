'use client';
import SendButton from "@/components/buton/sendButton";

import DefaultLayout from "@/components/layout/DefaultLayout";
export default function UserPage() {
    const handleClick = () => {
      console.log("Send button clicked!");
    };
  
    return (
      <DefaultLayout user={null}>
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">User Page</h1>
          <SendButton onClick={handleClick} />
        </div>
      </DefaultLayout>
    );
  }
