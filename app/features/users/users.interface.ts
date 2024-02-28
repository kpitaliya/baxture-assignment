export interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  isFollow?: boolean;
}

export type HandleActionUser = (id: User["id"]) => void;

export interface UserCardProps {
  user: User;
  handleDeleteUser: HandleActionUser;
  handleFollowUser: HandleActionUser;
}

export interface UserActionsProps {
  id: User["id"];
  isFollow: User["isFollow"];
  handleDeleteUser: HandleActionUser;
  handleFollowUser: HandleActionUser;
}
