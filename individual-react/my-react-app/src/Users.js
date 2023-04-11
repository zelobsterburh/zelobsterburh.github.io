import UserItem from './UserItem';
function Users({ user_list }) {
  return (
    <div className="List">
      {user_list.map((user) => (
        <UserItem name={user.name} image={user.image} id={user.id} />
      ))}
    </div>
  )
}
export default Users;