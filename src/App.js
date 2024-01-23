import { useState } from "react";




function App() {
const [active,setActive] = useState (1)

const handleClick = (id) => () => {
  setActive(id); // Call setActive within a function to avoid direct execution
};
  return (
    <>
    <div>
     <header className="App-header">
          <h1>Welcome to Tabs App</h1>
          <nav>
            
              <button id='home' onClick={handleClick (1)}> Home</button>
              <button id='products' onClick={handleClick (2)}> Products</button>
              <button id='about' onClick={handleClick(3)}> About </button>
              <button id='contact' onClick={handleClick (4)}> Contact</button>
              <button id='all' onClick={handleClick (5)}> ALL</button>
            
          </nav>
        </header>

    </div>
  <div className= {(active === 1 || active === 5 )?"show" : "none"}>
    <h3>Home</h3>
    <p> HOME: lorem Ipsum dolar amet sit</p> 
  </div> 
  <div className={(active === 2|| active === 5)?"show" : "none"}>
    <h3>Products</h3>
    <p>  PRODUCTS: lorem Ipsum dolar amet sit</p> 
  </div>
  <div className= {(active === 3 || active === 5)?"show" : "none"}>
    <h3>About</h3>
    <p>  ABOUT: lorem Ipsum dolar amet sit</p> 
  </div>
    <div className={(active === 4 || active === 5)?"show" : "none"}>
    <h3>Contact</h3>
    <p> CONTACT:  lorem Ipsum dolar amet sit</p> 
  </div>
    
    </>
  );
}

export default App;
