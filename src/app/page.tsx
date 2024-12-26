import React from "react";
import DefaultLayout from '@/components/layout/DefaultLayout';
import { User } from '@/types/user';
import SendButton from '@/components/buton/sendButton';

const HomePage = () => {
  const user: User = {
    username: 'John Doe', // Replace with dynamic data
    role: 'Admin',
    address: '',
    phone: '',
    userId: '',
    salary: 0,
    title: '',
    sex: '',
    age: 0,
    totalLeave: 0,
    depId: '',
    experience: '',
    isLocked: false
  };

  return (
    <DefaultLayout user={user}>
      {/* Other content goes here */}
    </DefaultLayout>
  );
};

export default HomePage;
