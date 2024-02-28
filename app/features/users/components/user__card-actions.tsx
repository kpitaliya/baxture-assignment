"use client";

import React from "react";
import { Button, Group, useMantineTheme } from "@mantine/core";
import { IconUserPlus, IconUserMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { UserActionsProps } from "../users.interface";

const UserActions = ({
  id,
  isFollow,
  handleDeleteUser,
  handleFollowUser,
}: UserActionsProps) => {
  const theme = useMantineTheme();
  const xss = theme.spacing.xss;
  const mds = theme.spacing.mds;

  return (
    <Group wrap="nowrap" mt={mds} gap={xss}>
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
