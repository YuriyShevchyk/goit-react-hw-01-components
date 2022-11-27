import PropTypes from 'prop-types';
import {Item, FriendName, FriendAvatar, FriendStatus} from 'components/FriendList/FriendList.styled'


export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <FriendStatus>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};

FriendListItem.proptype = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};