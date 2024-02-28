import { Group } from "@mantine/core";
import { IconPhoneCall } from "@tabler/icons-react";
import { User } from "../users.interface";
import UserCardInfoAnchor from "./user__card-info-anchor";

const UserCardInfoPhoneCall = ({
  phone,
  gap,
  mt,
  color,
}: {
  phone: User["phone"];
  gap: string;
  mt: string;
  color: string;
}) => {
  return (
    <Group gap={gap} mt={mt} align="center" justify="flex-start">
      <IconPhoneCall size={16} strokeWidth={1.5} color={color} />
      <UserCardInfoAnchor anchorText={phone} href={`tel:${phone}`} />
    </Group>
  );
};

export default UserCardInfoPhoneCall;
