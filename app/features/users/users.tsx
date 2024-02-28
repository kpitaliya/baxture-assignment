import UsersList from "./users-list";
import { User } from "./users.interface";
import { fetchUsers } from "./users.services";

const Users = async () => {
  const users: User[] = await fetchUsers();

  return <UsersList users={users} />;
};

export default Users;
