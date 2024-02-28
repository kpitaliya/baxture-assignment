import { Text } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { User } from "../users.interface";

const UserCardInfoName = ({
  name,
  isFollow,
  margin,
}: {
  name: User["name"];
  isFollow: boolean;
  margin: string;
}) => {
  return (
    <Text
      component="p"
      style={(theme) => ({
        marginTop: theme.spacing["md"],
        fontSize: theme.fontSizes["lg"],
        fontWeight: 500,
        textAlign: "center",
      })}
    >
      {name}
      {isFollow && (
        <IconStar size={16} strokeWidth={2} style={{ marginLeft: margin }} />
      )}
    </Text>
  );
};

export default UserCardInfoName;
