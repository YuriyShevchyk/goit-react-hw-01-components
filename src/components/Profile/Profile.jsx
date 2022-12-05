import PropTypes from 'prop-types';
import { ProfileContainer, ProfileDescription, Avatar, UserInfo, UserName, Stats, Label, Quantity} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => (
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
    <Quantity>{stats.followers}</Quantity>
  </li>
  <li>
    <Label>Views</Label>
    <Quantity>{stats.views}</Quantity>
  </li>
  <li>
    <Label>Likes</Label>
    <Quantity>{stats.likes}</Quantity>
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

