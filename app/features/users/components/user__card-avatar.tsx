import React from "react";
import { Avatar, SimpleGrid, Tooltip } from "@mantine/core";
import { User } from "../users.interface";

const UserAvatar = ({ name }: { name: User["name"] }) => {
  return (
    <SimpleGrid>
      <Tooltip label={name} withArrow position="top">
        <Avatar
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
          component="a"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            cursor: "pointer",
          }}
          target="_blank"
          alt={name}
          radius="7.5rem"
          size="7.5rem"
        />
      </Tooltip>
    </SimpleGrid>
  );
};

export default UserAvatar;
