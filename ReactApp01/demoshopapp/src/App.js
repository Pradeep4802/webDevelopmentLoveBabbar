import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item.js";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";

function App() {
  const itemTwoName = "SurfExcel";
  const response = [
    {
      itemName: "Nirma1",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "1998",
    },
    {
      itemName: "SurfExcel",
      itemDate: "21",
      itemMonth: "September",
      itemYear: "2002",
    },
    {
      itemName: "Rin",
      itemDate: "22",
      itemMonth: "December",
      itemYear: "2005",
    },
  ];
  return (
    <div>
      <Card>
        <Item name={response[0].itemName}>
          <h1 className="Dialog-title">Welcome</h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </Item>
        <ItemDate
          day={response[0].itemDate}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        ></ItemDate>
        <Item name={response[1].itemName}></Item>
        <ItemDate
          day={response[1].itemDate}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        ></ItemDate>
        <Item name={response[2].itemName}></Item>
        <ItemDate
          day={response[2].itemDate}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        ></ItemDate>
        <div className="App">Hello jee</div>
      </Card>
    </div>
  );
}

export default App;
