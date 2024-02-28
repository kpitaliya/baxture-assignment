import React from "react";
import { Group } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { User } from "../users.interface";
import UserCardInfoAnchor from "./user__card-info-anchor";

const UserCardInfoEmail = ({
  email,
  gap,
  mt,
  color,
}: {
  email: User["email"];
  gap: string;
  mt: string;
  color: string;
}) => {
  return (
    <Group gap={gap} mt={mt} align="center" justify="flex-start">
      <IconAt size={16} strokeWidth={1.5} color={color} />
      <UserCardInfoAnchor anchorText={email} href={`mailto:${email}`} />
    </Group>
  );
};

export default UserCardInfoEmail;
