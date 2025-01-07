import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Tokyo", "London", "Shanghai", "Singapore", "Dublin"];

  const [alertVisible, setAlertVisibility] = useState(false);

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  /*      
  <ListGroup
    items={items}
    heading="Cities"
    onSelectItem={(item) => console.log(item)}
  />
  */

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
