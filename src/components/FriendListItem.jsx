import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.container}>
      <img className={css.img} src={avatar} alt={name} width="48" />

      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'online' : 'offline'}
      </p>
    </div>
  );
}
