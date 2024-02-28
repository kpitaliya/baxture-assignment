"use client";

import React from "react";
import { Paper } from "@mantine/core";
import UserAvatar from "../components/user__card-avatar";
import UserInfo from "../components/user__card-info";
import UserActions from "../components/user__card-actions";
import { UserCardProps } from "../users.interface";

const UserCard = ({
  user,
  handleDeleteUser,
  handleFollowUser,
}: UserCardProps) => {
  const { name, id, isFollow } = user;

  return (
    <Paper withBorder shadow="md" radius="md" p="lg">
      <UserAvatar name={name} />
      <UserInfo user={user} />
      <UserActions
        id={id}
        isFollow={!!isFollow}
        handleDeleteUser={handleDeleteUser}
        handleFollowUser={handleFollowUser}
      />
    </Paper>
  );
};

export default UserCard;
