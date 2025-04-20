export default function FriendListItem({ avatar, names, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{names}</p>
      <p>{isOnline ? 'online' : 'offline'}</p>
    </div>
  );
}
