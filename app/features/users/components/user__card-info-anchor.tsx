import { Anchor, useMantineTheme } from "@mantine/core";
import React from "react";

const UserCardInfoAnchor = ({
  anchorText,
  href,
}: {
  anchorText: string;
  href: string;
}) => {
  return (
    <Anchor
      style={{ color: "var(--mantine-color-dimmed)" }}
      href={href}
      size="md"
      target="_blank"
    >
      {anchorText}
    </Anchor>
  );
};

export default UserCardInfoAnchor;
