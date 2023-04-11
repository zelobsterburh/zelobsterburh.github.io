import Users from './Users';
const USERS = [
  {
    id: "1",
    name: "Brown Cow",
    image: "brown_cow.jfif"
  },
  {
    id: "2",
    name: "Black Cow",
    image: "black_cow.jfif"
  },
  {
    id: "3",
    name: "Endion the Destroyer, Being Beyond Time, Celestial Omnipotence (Single)",
    image: "thrid.jfif"
  },
  {
    id: "4",
    name: "Gerard, the cow",
    image: "smiley.jfif"
  },
  {
    id: "5",
    name: "The Chosen One",
    image: "smart.jfif"
  },
  {
    id: "6",
    name: "Trampli Devoticon, Bringer of the Appocolapse",
    image: "giant.jfif"
  },
];
function App() {
  return (
    <div className="App">
      <Users user_list={USERS} />
    </div>
  );
}

export default App;