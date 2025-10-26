import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  /* let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]; */

  /*  const handleSelectItem = (item) => {
    console.log(item);
  }; */

  return (
    <>
      {/*   <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <Alert>test</Alert>
      <Button
        text="Click me"
        onClick={() => console.log("Clicked!")}
        color="danger"
      />
    </>
  );
}

export default App;
