"use client";

import { useState } from "react";
import { SimpleGrid } from "@mantine/core";
import UserCard from "./containers/user__card";
import { User } from "./users.interface";

const UsersList = ({ users }: { users: User[] }) => {
  const [usersInfo, setUsersInfo] = useState([
    ...users?.map((user) => ({ ...user, isFollow: false })),
  ]);

  // REMOVE USER'S FROM LIST
  const handleDeleteUser = (id: number) => {
    setUsersInfo(usersInfo?.filter((user) => user?.id !== id));
  };

  // FOLLOW/UNFOLLOW USER
  const handleFollowUser = (id: number) => {
    const usersDetails = [...usersInfo];
    const userIndex = usersDetails?.findIndex((user: User) => user?.id === id);
    const userInfo = usersDetails?.[userIndex];
    if (userIndex >= 0)
      usersDetails?.splice(userIndex, 1, {
        ...userInfo,
        isFollow: !userInfo?.isFollow,
      });
    setUsersInfo([...usersDetails]);
  };

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} p="lg">
      {usersInfo?.map((user) => (
        <UserCard
          user={user}
          key={user?.id}
          handleDeleteUser={handleDeleteUser}
          handleFollowUser={handleFollowUser}
        />
      ))}
    </SimpleGrid>
  );
};

export default UsersList;
