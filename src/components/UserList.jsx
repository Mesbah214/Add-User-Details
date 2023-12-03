import Card from "./UI/Card";

const UserList = ({ list }) => {
  return (
    <Card>
      <div className="users">
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.username} ({item.age} years old)
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
