// 1.word count
// import react from "react"
// function App() {
//         let text = "To be lonely is an easy thing, being alone is another  matter entirely. To understand this, first one must understand the difference  between loneliness and being alone. To be alone means that your are not in the  company of anyone else. You are one. But loneliness can happen anytime, anywhere. You can be lonely in a crowd, lonely with friends, lonely with family.  You can even be lonely while with loved ones. For feeling lonely, is in essence  a feeling of being alone. As thought you were one and you feel as though you  will always be that way. Loneliness can be one of the most destructive feelings  humans are capable of feeling. For loneliness can lead to depression, suicide,  and even to raging out and hurting friends and/or…show more content Generally almost all loneliness can be traced back to low  or below average self-esteem. Chronically lonely people will usually have low  opinions of themselves. They may think of themselves as unintelligent,  unattractive, broken, unwanted, not worthy of good things, no good, unable to do  anything right, and/or socially isolated. Unlike many other emotionally hurting  people, the chronically lonely usually know what is wrong, but like many others  they don't believe they can do anything to fix it, or, circling back to the low  self-esteem, they may also believe they are not worth of happiness. ";
//         text=text.replace(/[,.]/g,"");
//         text=text.toLocaleLowerCase();
//         const wordArray = text.split(" ");
//         console.log(wordArray.length)
//         const wordCount = {};
//          wordArray.forEach((item) => {
//          if (wordCount[item] == null) wordCount[item] = 1;
//           else {
//             wordCount[item] += 1;

//     }
    
//   });
//   console.log(wordCount);
// }
// export default App();


// 2.Todo list

// import { useState } from "react";

// export default function App() {
//   const [todos, setTodos] = useState([]);

//   const [value, setValues] = useState("");

//   function addItem(e) {
//     e.preventDefault();

//     if (!value) return;

//     const newtodos = [...todos, { text: value, isCompleted: false }];

//     setTodos(newtodos);

//     setValues("");
//   }

//   function removeItem(e) {
//     var index = Number(e.target.id);

//     let temp = [...todos];

//     temp.splice(index, 1);

//     setTodos(temp);
//   }

//   return (
//     <>
//     <h1>Todo List</h1>
//       <form onSubmit={addItem}>
//         <input
//           type="text"
//           className="input"
//           placeholder="Add item here"
//           value={value}
//           onChange={(e) => setValues(e.target.value)}
//         />
//         <button type="submit">submit</button>
//       </form>
//       {todos.map((item, i) => (
//         <div className="todo" key={i} id={i}>
//           {item.text}

//           <button onClick={removeItem} key={i} id={i}>
//             X
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }


// formik loginform

// import React from "react";
// import { useFormik } from "formik";

// const App = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: ""
//     },
//     onSubmit: () => alert("Successsfuly login"),
//     validate: (values) => {
//       let errors = {};
//       if (!values.email) errors.email = "Field Required";
//       else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//       ) {
//         errors.email = "Invalid email address";
//       }
//       if (!values.password) errors.password = "Field Required";

//       return errors;
//     }
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label for="email"> Name: </label>
//       <br />
//       <input
//         type="email"
//         name="email"
//         id="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       {formik.errors.email ? (
//         <p style={{ color: "red" }}>{formik.errors.email} </p>
//       ) : null}
//       <br />
//       <label>Password: </label>
//       <br />
//       <input
//         type="passowrd"
//         name="password"
//         id="password"
//         onChange={formik.handleChange}
//         value={formik.values.password}
//       />
//       {formik.errors.password ? (
//         <p style={{ color: "red" }}>{formik.errors.password} </p>
//       ) : null}
//       <br />
//       <button type="submit"> Submit</button>
//     </form>
//   );
// };

// export default App;




// var area = document.getElementById("most-recent-order");
// function handleSubmit() {
//   return (
    
//     <form id="form">
//       <label htmlFor="Name">Name :</label> <input type="text" id="name" />{" "}
//       <br />
//       <label htmlFor="Size">Size :</label>
//       <select id="size">
//         <option value="">Small</option>
//         <option value="">Medium</option>
//         <option value="">Large</option>
//       </select>{" "}
//       <br />
//       <label htmlFor="Pepperoni">Pepperoni</label>{" "}
//       <input type="checkbox" id="Pepper" value="Pepperoni" />
//       <br />
//       <label htmlFor="Gluten-Free">Gluten Free</label>{" "}
//       <input type="checkbox" id="Gluten" value="Gluten-Free" />
//       <br />
//       <label htmlFor="Quantity">Quantity :</label>{" "}
//       <input type="number" id="quanti" />
//       <br />
//       <label htmlFor="instructions">Aditional Instructions</label>
//       <br />
//       <textarea id="adiStr" cols="50" rows="10"></textarea>
//       <br />
//       <button type="submit" onClick={handle}>
//         Submit
//       </button>
//     </form>
//   );
// }
// function handle(event) {
//   let size = document.getElementById("size").value;
//   let Name = document.getElementById("name").value;
//   let quantity = document.getElementById("quanti").value;
//   let Pepperoni = document.getElementById("Pepper").checked;
//   let GlutenFree = document.getElementById("Gluten").checked;
//   if (Pepperoni === true) {
//     area.innerHTML = `<p>Order for ${quantity} ${size} pizza(s) that are not Gluten-Free and have Pepperoni for ${Name}</p><br />
//         <p>Instructions : None</p>`;
//   } else if (GlutenFree === true) {
//     area.innerHTML = `<p>Order for ${quantity} ${size} pizza(s) that have Gluten-Free and don't have Pepperoni for ${Name}</p><br />
//         <p>Instructions : None</p>`;
//   } else {
//     area.innerHTML = `<p>Order for ${quantity} ${size} pizza(s) that are not Gluten-Free and don't have Pepperoni for ${Name}</p><br />
//         <p>Instructions : None</p>`;
//   }
//   event.preventDefault();
// }
// export default handleSubmit;


// 5.clothing center

// import { Button } from "react-bootstrap";
// import { useState } from "react";
// import Particles, { ISourceOptions, Main } from "react-tsparticles";
// import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
// // import { Carousel } from "react-responsive-carousel";
// import "./styles.css";
// export default function App() {
//   const [costItem, setCostItem] = useState(0);
//   // const [Price, setPrice] = useState();
//   const [stock, setStock] = useState([
//     { name: "Jackets", inStock: 5, price: 100 },
//     { name: "Pants", inStock: 4, price: 50 },
//     { name: "Scarf", inStock: 2, price: 200 },
//     { name: "Pajamas", inStock: 5, price: 100 },
//     { name: "Shirt", inStock: 6, price: 100 }
//   ]);
//   const [shopping, setShopping] = useState([
//     { name: "Jackets", inStock: 0, price: 100 },
//     { name: "Pants", inStock: 0, price: 50 },
//     { name: "Scarf", inStock: 0, price: 200 },
//     { name: "Pajamas", inStock: 0, price: 100 },
//     { name: "Shirt", inStock: 0, price: 100 }
//   ]);
//   const moveToCart = (e) => {
//     let isStock = true;
//     let [name, number] = e.target.innerHTML.split(":");
//     const newList = stock.map((item, index) => {
//       if (item.name === name) {
//         if (item.inStock > 0) item.inStock--;
//         else {
//           isStock = false;
//           alert("Oops! the item is out of stock");
//         }
//       }
//       return item;
//     });
//     const newCart = shopping.map((item, index) => {
//       if (item.name === name && isStock) {
//         item.inStock++;
//         setCostItem(costItem + item.price);
//       }
//       return item;
//     });
//     const cost = [];
//     const total = newCart.map((item, index) => {
//       const Price = newCart[index].price;

//       if (item.name === name) item.inStock * Price;
//       cost.push(item.inStock * Price);
//       console.log(cost);

//       const a = cost[0];
//       const b = cost[1];
//       const c = cost[2];
//       const d = cost[3];
//       const res = a + b + c + d;
//       return res;
//     });

//     setStock(newList);
//     setShopping([...shopping]);
//   };
//   const minusCart = (e) => {
//     let isStock = true;
//     let [name, number] = e.target.innerHTML.split(":");
//     const newCart = shopping.map((item, index) => {
//       if (item.name === name && item.inStock > 0) {
//         item.inStock--;
//         setCostItem(costItem - item.price);
//       }
//       return item;
//     });
//     const newList = stock.map((item, index) => {
//       if (item.name === name) {
//         item.inStock++;
//       }
//       return item;
//     });
//   };

//   const updatedlist = stock.map((item, index) => (
//     <Button key={index} onClick={moveToCart}>
//       {item.name}:{item.inStock}
//     </Button>
//   ));
//   const updatedCart = shopping.map((item, index) => (
//     <Button key={index} onClick={minusCart}>
//       {item.name}:{item.inStock}
//     </Button>
//   ));
//   return (
//     <>
//       {/* <Particles options={options} init={initialize} /> */}
//       <h1>Jaga shopping</h1>
//       <h2>Clothing List</h2>
//       <ul>{updatedlist}</ul>
//       <h2>Shopping Cart</h2>
//       <ul>{updatedCart}</ul>
//       <h3>
//         Bill amount is <button>${costItem}</button>
//       </h3>
//     </>
//   );
// }


//6.fetch data
// 

// 7.atm

// import "./App.css";
// import { useState } from "react";
// export default function App() {
//   const [state, setState] = useState([]);
//   const [load, setLoad] = useState(true);
//   let transactionState = 0; // state of this transaction
//   let [totalState, setTotalstate] = useState(0); // Account total at Bank
//   // let status = "Account Balance $zero";
//   function handleload(e) {
//     if (e.target.value === "") setLoad(true);
//     if (e.target.value === "Deposit") {
//       setLoad(false);
//       setState(true);
//     }
//     if (e.target.value === "Cashback") {
//       setLoad(false);
//       setState(false);
//     }
//   }
//   const handleChange = (event) => {
//     transactionState = Number(event.target.value);
//   };
//   const handleSubmit = (event) => {
//     setTotalstate(totalState + transactionState);
//     event.preventDefault();
//   };
//   const handleSubmitcash = (event) => {
//     if (transactionState < totalState) {
//       setTotalstate(totalState - transactionState);
//     }
//     if (transactionState >= totalState) {
//       alert("Oops! your balance is not sufficient to withdraw. ");
//     }
//     event.preventDefault();
//   };
//   console.log(load);
//   return (
//     <div className="App">
//       <h1 id="total">Account balance is ${totalState}</h1>
//       {load ? (
//         <select onClick={handleload}>
//           <option> </option>
//           <option>Deposit</option>
//           <option>Cashback</option>
//         </select>
//       ) : state ? (
//         <form onSubmit={handleSubmit}>
//           <select onClick={handleload}>
//             <option> </option>
//             <option>Deposit</option>
//             <option>Cashback</option>
//           </select>
//           <br></br>
//           <br></br>
//           <label>
//             {" "}
//             Deposit <input type="number" onChange={handleChange} />
//             <input type="submit" />
//           </label>
//         </form>
//       ) : (
//         <form onSubmit={handleSubmitcash}>
//           <select onClick={handleload}>
//             <option> </option>
//             <option>Deposit</option>
//             <option>Cashback</option>
//           </select>
//           <br></br>
//           <br></br>
//           <label>
//             {" "}
//             Cashback <input type="number" onChange={handleChange} />
//             <input type="submit" />
//           </label>
//         </form>
//       )}
//     </div>
//   );
// }

// 8.tic tok

// import "./App.css";
// import { useState } from "react";
// function Square({ id, newstate }) {
//   const [status, setStatus] = useState(null);
//   const [btn, setBtn] = useState("+");
//   const xo = ["O", "X"];
//   return (
//     <button
//       className="color"
//       data={xo[status]}
//       onClick={(e) => {
//         setBtn(xo[status]);
//         let nextPlayer = newstate(id);
//         setStatus(nextPlayer);
//       }}
//     >
//       {btn}
//       {xo[status]}
//     </button>
//   );
// }
// export default function App() {
//   const [player, setPlayer] = useState(0);
//   const [state, setState] = useState(Array(9).fill(null));
//   let status = `Next Player is ${player}`;
//   let winn = winner(state);
//   let achiever = winn === 0 ? "O" : "X";
//   if (winn !== null) status = `Yahoo! winner is ${achiever} `;
//   function rendersquare(id) {
//     return <Square id={id} newstate={newstate}></Square>;
//   }
//   function newstate(id) {
//     let thePlayer = player;
//     state[id] = thePlayer;
//     setState(state);
//     let nextPlayer = (player + 1) % 2;
//     setPlayer(nextPlayer);
//     return thePlayer;
//   }
//   console.log("hi", winn);
//   function winner(state) {
//     const line = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];
//     for (let i = 0; i < line.length; i++) {
//       const [a, b, c] = line[i];
//       if (state[a] === state[b] && state[a] === state[c]) {
//         // console.log("Hek", state[a]);
//         return state[a];
//       }
//     }
//     return null;
//   }
//   console.log("hi", state);
//   return (
//     <>
//       <div className="game-board">
//         <div className="grid-row">
//           {rendersquare(0)}
//           {rendersquare(1)}
//           {rendersquare(2)}
//         </div>
//         <div className="grid-row">
//           {rendersquare(3)}
//           {rendersquare(4)}
//           {rendersquare(5)}
//         </div>
//         <div className="grid-row">
//           {rendersquare(6)}
//           {rendersquare(7)}
//           {rendersquare(8)}
//         </div>
//         <div>
//           <h1>{status}</h1>
//         </div>
//       </div>
//     </>
//   );
// }

// 9.single page movie

// import "./App.css";
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to Hollywood classic films</h1>
//       <a href="#about"> About </a>
//       <br></br>
//       <a href="#products"> Products </a>
//       <br></br>
//       <a href="#checkout"> CheckOut </a>
//       <br></br>
//       <div id="about">
//         <h2>About</h2>
//         <h3>
//           We are the internet's premier destination for the classic film buff
//         </h3>
//         <h1>Featured Film</h1>
//         <h3>
//           Each week, we featured a classic film and having an accompyning movie
//           screening and blue-Ray special. This week ia "A Streetcar named
//           desire".
//         </h3>
//         <a href="#">But more tickets</a>
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <a href="#">Purchase Blue-Ray</a>
//         <br></br>
//         <br></br>
//         <img src="data:image/jpeg;base64,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"></img>
//       </div>
//       <div id="products">
//         <h2>Products</h2>
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rebel_Without_a_Cause_%281955_poster%29.jpg/1200px-Rebel_Without_a_Cause_%281955_poster%29.jpg"
//           width="20%"
//           hight="10%"
//         />
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <img
//           src="https://upload.wikimedia.org/wikipedia/en/8/80/The_Blob_%281958%29_theatrical_poster.jpg"
//           width="20%"
//           hight="10%"
//         />
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <img
//           src="https://m.media-amazon.com/images/M/MV5BNjFlOTI2OGQtMzg0YS00ZGE4LTkwMjEtZDUzYThlOTU5YjQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
//           width="20%"
//           hight="10%"
//         />
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <img
//           src="https://flxt.tmsimg.com/assets/p13700_p_v10_ab.jpg"
//           width="20%"
//           hight="10%"
//         />
//       </div>
//       <div id="checkout">
//         <h2>Checkout</h2>
//         <h5>Your Cart</h5>
//         <h4>Casablance</h4>
//         <p>
//           A hollywood classic starring Humphery Bograt and Ingred Bergman. DVD
//           format
//         </p>
//         <p>$12</p>
//         <h4>Singing in the Rain</h4>
//         <p>A family favourite musical starring. DVD format</p>
//         <p>$8</p>
//         <h4>Ben Hur</h4>
//         <p>The quientisential Sword and sandal films. Blue-Ray format</p>
//         <p>$5</p>
//         <p>Promo code</p>
//         <p>Total (USD)$20</p>
//         <input type="text" placeholder="promo code"></input>
//         <button type="submit">Redeem</button>
//         <p>Billing Address</p>
//         <label>First Name</label>
//         <input type="text"></input>
//         <br />
//         <label>Last Name</label>
//         <input type="text"></input>
//         <p>Username</p>
//         <label>@</label>
//         <input type="text" placeholder="username"></input>
//         <br />
//         <label>Email(Optional)</label>
//         <input type="email" placeholder="you@gmail.com"></input>
//         <br />
//         <label>Address</label>
//         <input type="text" placeholder="1234 main st"></input>
//         <br />
//         <label>Address(Optional)</label>
//         <input type="text" placeholder="Apartment or suite"></input>
//         <br />
//         <label>Country</label>
//         <select type="checkbox">
//           <option>choose</option>
//           <option>movie2</option>
//           <option>movie3</option>
//         </select>
//         <br />
//         <label>State</label>
//         <select type="checkbox">
//           <option>choose</option>
//           <option>Tamilnadu</option>
//           <option>Kerala</option>
//         </select>
//         <br />
//         <label>ZIP</label>
//         <input type="text"></input>
//         <br />
//         <input type="checkbox"></input>
//         <label>Shipping address is the same as my billing address</label>
//         <br />
//         <input type="checkbox"></input>
//         <label>Save this information for next time</label>
//         <br />
//         <h4>payment</h4>
//         <input type="radio"></input>
//         <label>Credit card</label>
//         <br />
//         <input type="radio"></input>
//         <label>Debit card</label>
//         <br />
//         <input type="radio"></input>
//         <label>Pay pal</label>
//         <br />
//         <label>Name on card</label>
//         <input type="text" placeholder=""></input>
//         <br />
//         <label>Name on card is required</label>
//         <br />
//         <label>Credit card number</label>
//         <input type="text" placeholder=""></input>
//         <br />
//         <label>credit card number is required</label>
//         <br />
//         <label>Expiration</label>
//         <input type="text" placeholder=""></input>
//         <br />
//         <label>Expiration date required</label>
//         <br />
//         <label>CVV</label>
//         <input type="text" placeholder=""></input>
//         <br />
//         <label>security code required</label>
//         <br />
//         <button>continue to checkout</button>

//         {/* <input type="radio">debit card</input>
//        <input type="radio">pay pal</input> */}
//       </div>
//     </div>
//   );
// }


