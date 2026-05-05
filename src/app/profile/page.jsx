'use client'
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
   const userData = authClient.useSession()
  
    const user = userData.data?.user
    // console.log(user);
  return (
    <div>
     <Card  className="max-w-96 mx-auto flex flex-col items-center border mt-8">
          <Avatar>
          
              <Avatar.Image 
              alt="John Doe" 
              src={user?.image}
              referrerPolicy="no-referrer"
               />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
      <h2 className='text-2xl font-bold'>{user?.name}</h2>
      <p className='text-muted text-xl'>{user?.email}</p>
     <UpdateUserModal />
     </Card>
    </div>
  );
};

export default ProfilePage;