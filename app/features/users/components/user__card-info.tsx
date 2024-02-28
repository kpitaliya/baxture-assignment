import React from "react";
import { useMantineTheme } from "@mantine/core";
import { User } from "../users.interface";
import UserCardInfoPhoneCall from "./user__card-info-phone-call";
import UserCardInfoEmail from "./user__card-info-email";
import UserCardInfoWebsite from "./user__card-info-website";
import UserCardInfoName from "./user__card-info-name";

const UserInfo = ({ user }: { user: User }) => {
  const theme = useMantineTheme();
  const { name, email, phone, website, isFollow } = user;
  const xss = theme.spacing.xss;
  return (
    <>
      <UserCardInfoName name={name} isFollow={!!isFollow} margin={xss} />
      <UserCardInfoEmail
        gap={xss}
        mt={xss}
        email={email}
        color="var(--mantine-color-dimmed)"
      />
      <UserCardInfoPhoneCall
        gap={xss}
        mt={xss}
        phone={phone}
        color="var(--mantine-color-dimmed)"
      />
      <UserCardInfoWebsite
        gap={xss}
        mt={xss}
        website={website}
        color="var(--mantine-color-dimmed)"
      />
    </>
  );
};

export default UserInfo;
