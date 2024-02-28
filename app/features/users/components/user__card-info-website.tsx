import { Group } from "@mantine/core";
import { IconWorld } from "@tabler/icons-react";
import UserCardInfoAnchor from "./user__card-info-anchor";
import { User } from "../users.interface";

const UserCardInfoWebsite = ({
  website,
  gap,
  mt,
  color,
}: {
  website: User["website"];
  gap: string;
  mt: string;
  color: string;
}) => {
  return (
    <Group gap={gap} mt={mt} align="center" justify="flex-start">
      <IconWorld size={16} strokeWidth={1.5} color={color} />
      <UserCardInfoAnchor anchorText={website} href={`https://${website}`} />
    </Group>
  );
};

export default UserCardInfoWebsite;
