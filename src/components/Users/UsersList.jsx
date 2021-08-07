import Card from "../UI/Card";
import './UsersList.css';

const UsersList = ({users}) => {
  return (
    <Card className='users'>
      <ul>
        {users.map((user) => {
          <li>
            {user.name} ({user.age} years old)
          </li>;
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
