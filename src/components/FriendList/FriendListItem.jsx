import css from './FriendListItem.module.css'
import PropTypes from 'prop-types'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return <li className={css.friendListItem}>
        {isOnline ? <span className={css.friendListOnline}>*</span> : <span className={css.friendListOffline}>*</span>}
  <img className={css.friendListAvatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.friendListName}>{name}</p>
</li>
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired
}