import PropTypes from 'prop-types';
import { ProfileContainer, ProfileDescription, Avatar, UserInfo, UserName, Stats, Label, Quantity} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes}}) => (

<ProfileContainer>
<ProfileDescription>
  <Avatar
    src={avatar}
    alt={username}
  />
  <UserName>{username}</UserName>
  <UserInfo>{tag}</UserInfo>
  <UserInfo>{location}</UserInfo>
</ProfileDescription>

<Stats>
  <li>
    <Label>Followers</Label>
    <Quantity>{followers}</Quantity>
  </li>
  <li>
    <Label>Views</Label>
    <Quantity>{views}</Quantity>
  </li>
  <li>
    <Label>Likes</Label>
    <Quantity>{likes}</Quantity>
  </li>
</Stats>
</ProfileContainer> )


Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  };

