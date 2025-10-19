'use client';
import { useState , useEffect, use } from "react";
import ProductCards from "./productCard/page";
export function Test1() {
  const [count, setCount] = useState(0);
  return (
    <div className="border-1 rounded-lg p-5 flex flex-col gap-2">
      <h2 className="text-xl font-bold mb-4">Test 1</h2>
      <div className="flex flex-col items-center gap-2 ">
        <button
          className="border-1 rounded-lg text-2xl w-80 p-1 text-white bg-gradient-to-r from-blue-400 to-red-500"
          onClick={() => setCount(count + 1)}>Click Me</button>
        <p>Button clicked {count} times</p>
      </div>

    </div>
  );
}
export function Test2() {
  const fruit = ["Apple", "Banana", "Orange"];
  function classFruit() {
const classes = [
  "text-red-500 bg-red-200", "text-yellow-500 bg-yellow-200",
   "text-orange-500 bg-orange-200" , "text-green-500 bg-green-200" ,
    "text-purple-500 bg-purple-200" , "text-pink-500 bg-pink-200" , 
    "text-blue-500 bg-blue-200"];
const randomColor =  Math.floor(Math.random() * classes.length);
return classes[randomColor];
  }
  return (
    <div className="border-1 rounded-lg p-5 flex flex-col gap-2">
      <h2 className="text-xl font-bold mb-4">Test 2</h2>
      <div className="flex flex-col items-center gap-2 ">
        <p>Colorfull fruit</p>
        <ul className="flex flex-col gap-2">
          {fruit.map((item, index) => (
            <li className={classFruit() + " text-lg w-50 text-center font-bold border-1 rounded-lg p-2 "}  key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export function Test3() {
  function toAlert() {
    alert("Button Clicked!");
  }
  return (
    <div className="border-1 rounded-lg p-5 flex flex-col gap-2">
      <h2 className="text-xl font-bold mb-4">Test 3</h2>
      <div className="flex flex-col items-center gap-2 ">
        <button 
        onClick={toAlert}
        className="bg-gradient-to-r from-red-600 to-blue-500 rounded-lg px-3 py-2 border-2">
          Click Me
        </button>
      </div>
    </div>
  );
} 

export function Test4() {
  return (
    <div className="bg-sky-400 text-white p-5 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Test 4</h2>
      <p className="text-center">Hello ONELIFE group holding</p>
    </div>
  );
}

export function Test5() {
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState(null);
  const [result , setResult] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResult(data);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="border-1 rounded-lg p-5 flex flex-col gap-2">
      <h2 className="text-xl font-bold mb-4">Test 5</h2>
      <ul >
        {result.filter(post => post.id <= 5).map(post => (
          <li key={post.id} className=" mb-2 border-1 p-2 rounded-lg">
            <h3 className="font-semibold">id: {post.id}</h3>
            <h3 className="font-semibold">userId: {post.userId}</h3>
            <p>title: {post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Test6() {
  const [name , setName] = useState(() =>{
    return localStorage.getItem('name') || '';
  });
  const [value , setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(value);
    localStorage.setItem('name' , value);
    setValue('');
  };
  return (
    <div className="border-1 rounded-lg p-5 flex flex-col gap-2">
      <h2 className="text-xl font-bold mb-4">Test 6</h2>
      <form onSubmit={handleSubmit} className="flex flex-col border-1 p-3 gap-3 rounded-lg items-center">
        <label>Enter your name:</label>
        <input 
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-1 rounded-lg p-2 ml-2"
        />
        <button 
        type="submit" 
        className="ml-2 p-2 bg-blue-500 text-white rounded-lg">Save</button>
      </form>
      <p className="mt-2">Saved Name: {name}</p>
    </div>
  );
}

export function ProductCardList() {
  const products = [
    { id: 1, title: "Product 1 , น้ำหอมสีดำ", price: 100, image: "/src/image 1.jpg" },
    { id: 2, title: "Product 2 , รองเท้าสีขาว", price: 200, image: "/src/image 2.jpg" },
    { id: 3, title: "Product 3 , กล้องสีดำ", price: 300, image: "/src/image 3.jpg" },
    { id: 4, title: "Product 4 , ครีมทาผิว", price: 400, image: "/src/image 4.jpg" },
    { id: 5, title: "Product 5 , นาฬิกาสีขาว", price: 500, image: "/src/image 5.jpg" },
    { id: 6, title: "Product 6 , ครีมทาหน้า", price: 600, image: "/src/image 6.jpg" },
  ]
  return (
    <div className="flex flex-col p-3 border rounded-lg gap-3">
      <h2 className="text-xl font-bold mb-4">Test 7</h2>
      <h1 className="text-bold text-center">Products</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-2">  
        {products.map((product) => (
        <ProductCards
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        />
      ))}</div>
    
    </div>
  );
}

export default function Home() {
  return (

    <div
      className="p-5 flex flex-col gap-5 ">
      <h1 className="bg-white rounded-lg text-black w-fit p-2 text-2xl">Onelife Test</h1>
      <Test1 />
      <Test2 />
      <Test3 />
      <Test4 />
      <Test5 />
      <Test6 />
      <ProductCardList />
      <h1 className="text-center text-3xl font-bold underline m-10">Thank For testing</h1>
    </div>
  );
}

