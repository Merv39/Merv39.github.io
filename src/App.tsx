import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Tokyo", "London", "Shanghai", "Singapore", "Dublin"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
