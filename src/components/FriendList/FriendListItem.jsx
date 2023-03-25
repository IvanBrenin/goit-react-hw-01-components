import css from './FriendListItem.module.css'


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return <li className={css.friendListItem}>
        {isOnline ? <span className={css.friendListOnline}>*</span> : <span className={css.friendListOffline}>*</span>}
  <img className={css.friendListAvatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.friendListName}>{name}</p>
</li>
}