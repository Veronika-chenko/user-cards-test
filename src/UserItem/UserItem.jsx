import PropTypes from "prop-types";

import {
  Avatar,
  AvatarWrap,
  FollowButton,
  StatItem,
  StatList,
  UserCard,
} from "./UserItem.styled";

export const UserItem = ({ tweetData, isFollowing, toggleFollowState }) => {
  if (!tweetData) return;

  const { id, user, tweets, followers, avatar } = tweetData;

  const getFollowersValue = (num) => {
    if (isFollowing) {
      num += 1;
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <UserCard>
      <AvatarWrap>
        <Avatar src={avatar} alt={user}></Avatar>
      </AvatarWrap>
      <StatList>
        <StatItem>{tweets} Tweets</StatItem>
        <StatItem>{getFollowersValue(followers)} Followers</StatItem>
      </StatList>
      <FollowButton
        onClick={() => toggleFollowState(id)}
        style={{ backgroundColor: isFollowing ? "#5CD3A8" : "#EBD8FF" }}
      >
        {isFollowing ? "Following" : "Follow"}
      </FollowButton>
    </UserCard>
  );
};

UserItem.propTypes = {
  tweetData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  isFollowing: PropTypes.bool.isRequired,
  toggleFollowState: PropTypes.func.isRequired,
};
