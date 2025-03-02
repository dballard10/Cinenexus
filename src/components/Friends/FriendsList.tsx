import Friend from "./Friend";
import defaultImage from "../../assets/default-profile-pic.webp";

const FriendsList = () => {
  const friends = [
    { name: "John Doe", image: defaultImage },
    { name: "Jane Doe", image: defaultImage },
    { name: "John Smith", image: defaultImage },
    { name: "Jane Smith", image: defaultImage },
  ];

  return (
    <div className="flex flex-col gap-2">
      {friends.map((friend) => (
        <Friend key={friend.name} name={friend.name} image={friend.image} />
      ))}
    </div>
  );
};

export default FriendsList;
