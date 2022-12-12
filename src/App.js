import Cards from "./components/Cards";
import bright from './components/bright.jpg';
import tombraider from './components/tombraider.jpg';
// import tombraiderbackgroundimg from './components/tombraiderbackgroundimg.jpg';


function App() {
  const data = [
    {Image: bright, backimage: 'URL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSui1-PxVs5NvZZQI1HRQDmgOZmUSeFC9UbDzSkZ4K2VKnVne7ppGbpyQEcLYj7GH8fib0&usqp=CAU")', title: "Bright", subtitle: "2017, David Ayer", description: "Set in a world where fantacy live side by side with humans."},
    {Image: tombraider, backimage: 'url("https://i.pinimg.com/236x/85/57/83/855783b3b23daa337502980683700a23.jpg")', title: "Tomb Raider", subtitle: "2018, Roar Uthaug", description: "Lara Croft, the firecely independent daughter of a missing adventurer."}
  ];
  return (
    <div >
      
      {data.map((items, idx) => {
        return(
          
          <Cards image= {items.Image} backimage={items.backimage} title= {items.title} subtitle ={items.subtitle} description={items.description} key={idx}/>
          
          
        )
      })}
    </div>
  );
}

export default App;
