import { useRef } from "react";
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
  const followBtnRef = useRef();
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
        ref={followBtnRef}
        onClick={() => {
          toggleFollowState(id);
          followBtnRef.current.blur();
        }}
        isFollowing={isFollowing}
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
