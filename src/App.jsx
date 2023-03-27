import users from "./db/users.json";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { UserItem } from "./UserItem/UserItem";

import { Container, UserList } from "./App.styled";

const FOLLOWING_IDS = "userFollowingIds";

export const App = () => {
  const [userFollowingIds, setUserFollowingIds] = useLocalStorage(
    FOLLOWING_IDS,
    []
  );

  const isFollowingUser = (userId) => {
    return userFollowingIds.indexOf(userId) !== -1 ? true : false;
  };

  const toggleFollowState = (userId) => {
    if (userFollowingIds.includes(userId)) {
      setUserFollowingIds((prev) => prev.filter((id) => id !== userId));
    } else {
      setUserFollowingIds((prev) => [...prev, userId]);
    }
  };

  return (
    <Container>
      <UserList>
        {users.map((user) => (
          <UserItem
            key={user.id}
            tweetData={user}
            isFollowing={isFollowingUser(user.id)}
            toggleFollowState={toggleFollowState}
          />
        ))}
      </UserList>
    </Container>
  );
};
