// import Assets from '../src/Assets/loading-4.gif'
import Assets from './Assets/loading-4.gif'
import FbPost from './Components/FbPost'
import './App.css';

import { useEffect, useState} from 'react';

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    // getData()
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
      let prodcts = res.products
      console.log(prodcts)
      setItems(prodcts)
      // .catch(error) {
      //   console.log(error);
      // }
    })
  }, [])

  // const getData = () => {
  //   fetch('https://dummyjson.com/products')
  //   .then(res => res.json())
  //   .then(res => {console.log(res)})
  // } 

  if(!items.length) {
    return <div>
      <img src={Assets} alt="" />
    </div>
  }

  return (
    <div className="App">
       
       {items.map((elements, index) => {
        return <div key={index}>
          {/* <h3>{elements.category}</h3>
          <h4>{elements.brand}</h4>
          <img src={elements.thumbnail} alt="" />
          <h3>{elements.price}</h3> */}

          <FbPost prodcts={elements}/>
        </div>
       })}

    </div>
  );
}

export default App;

// pkg.json me bootstrap bh install ha