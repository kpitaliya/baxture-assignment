import React from "react";
import { Anchor, Group, Text, useMantineTheme } from "@mantine/core";
import { User } from "../users.interface";
import {
  IconAt,
  IconPhoneCall,
  IconWorld,
  IconStar,
} from "@tabler/icons-react";
import UserCardInfoAnchor from "./user__card-info-anchor";
import UserCardInfoPhoneCall from "./user__card-info-phone-call";
import UserCardInfoEmail from "./user__card-info-email";
import UserCardInfoWebsite from "./user__card-info-website";
import UserCardInfoName from "./user__card-info-name";

const UserInfo = ({ user }: { user: User }) => {
  const theme = useMantineTheme();
  const { name, email, phone, website, isFollow } = user;
  const smx = theme.spacing.smx;
  return (
    <>
      <UserCardInfoName name={name} isFollow={!!isFollow} margin={smx} />
      <UserCardInfoEmail
        gap={smx}
        mt={smx}
        email={email}
        color="var(--mantine-color-dimmed)"
      />
      <UserCardInfoPhoneCall
        gap={smx}
        mt={smx}
        phone={phone}
        color="var(--mantine-color-dimmed)"
      />
      <UserCardInfoWebsite
        gap={smx}
        mt={smx}
        website={website}
        color="var(--mantine-color-dimmed)"
      />
    </>
  );
};

export default UserInfo;
