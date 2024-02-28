"use client";

import React from "react";
import { Button, Group } from "@mantine/core";
import { IconUserPlus, IconUserMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { UserActionsProps } from "../users.interface";

const UserActions = ({
  id,
  isFollow,
  handleDeleteUser,
  handleFollowUser,
}: UserActionsProps) => {
  return (
    <Group
      wrap="nowrap"
      mt="calc(0.9375rem * var(--mantine-scale))"
      gap="calc(0.3125rem * var(--mantine-scale))"
    >
      {isFollow ? (
        <Button
          variant="default"
          fullWidth
          leftSection={<IconUserMinus size={16} />}
          onClick={() => handleFollowUser(id)}
        >
          Unfollow
        </Button>
      ) : (
        <Button
          variant="filled"
          fullWidth
          leftSection={<IconUserPlus size={16} />}
          onClick={() => handleFollowUser(id)}
        >
          Follow
        </Button>
      )}

      <Button
        variant="outline"
        fullWidth
        leftSection={<IconTrash size={16} />}
        onClick={() => handleDeleteUser(id)}
      >
        Delete
      </Button>
    </Group>
  );
};

export default UserActions;
