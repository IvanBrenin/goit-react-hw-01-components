import { FriendListItem } from "./FriendListItem"
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return <ul className={css.friendsList}>
        {friends.map((friend) => (<FriendListItem key={friend.id} friend={friend} />))}
    </ul>
}