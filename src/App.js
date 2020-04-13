import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const hero=['Salman Shah','Riaz','Bapparaj','Manna','Shovo','Ferdous']
  const products =[
    {name:'Photoshop',price:'$99.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:"PDF Reader", price:'$6.99'}
  ]

  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            hero.map(hero=><li>{hero}</li>)
          }
          {
            products.map(products=><li>{products.name}</li>)
          }
        </ul>
        {
          products.map(prod=><Product product={prod}></Product>)
        }

      



        
      </header>
    </div>
  );
}


function Counter(){
  const[count, setCount]= useState(10);
  
  const handleIncrease =()=>setCount(count+1);
   
  
  return(
    <div>
      <h1>Count:{count}</h1>
     
      <button onMouseMove={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      
    </div>
  )
}

function Users (){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(data=> setUsers(data));
  },[])
 
 
 
  return(
    <div>
      <h3>Dynamic Users{users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}




function Product(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price }=props.product;
 console.log(name,props);
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <p></p>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  return(
    <div style={{border:'3px solid green', width:'400px',margin:'10px'}}>
      <h3>My Name:{props.name}</h3>
      <p>My profession:{props.prof}</p>
    </div>
  )
}


export default App;
