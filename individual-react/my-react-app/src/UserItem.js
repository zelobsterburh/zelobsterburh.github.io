import Card from './Card';
function UserItem({ name, image, id }) {
  return (
    <Card className="user_class">
      <img src={image} alt={name} className="user-class-img" />
      <h2 className="user-class-name">{name}</h2>
    </Card>
  )
}
export default UserItem;