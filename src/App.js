import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  Collection  from "./components/Collection";
import pizzas from "./components/pizzas.json"


function App() {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetch("https://635699c42712d01e14f80386.mockapi.io/collections")
      .then((res) => {
        return res.json();
      }).then((arr) => {
        setItems(arr)
      })

},[])
  return (
    <div className="wrapper">
      <Header />
      <div className="content"> <h1>Все товары</h1>
        <div className="content">111</div>
        <h2 className="content"> Все товары </h2>
        {items.map((obj, index) => (
          <Collection  key={index} title={obj.title} price={obj.price} imageUrl={obj.imageUrl} description={obj.description} />))}
      

      



      <Footer />
    </div>
    </div>
  );
}

export default App;
