import Card from "./UI/Card";

import "./UserList.css";

const UserList = ({ list }) => {
  return (
    <Card className="users">
      <ul>
        {list.length === 0
          ? "No users to show!"
          : list.map((item) => (
              <li key={item.id}>
                {item.username} ({item.age} years old)
              </li>
            ))}
      </ul>
    </Card>
  );
};

export default UserList;
