//external....module....inline 
//props...defaultprops...for type
//button...onclick
//hoooks: spl function that allows functional components to use react features without the need of class components
//useState: [name, setName]
//with updater function in useState(), we take pending* state and not the current state
//useEffect(function, [dependancies]) is used for running some code when dom re renders, mounts, unmounts
//used for event listeners, dom manipulation, subscriptions, fetching data from api, clean up when comp unmounts



// import Card from './Card';
// import Button from './Button';
// import Student from './Student';
// import UserGreeting from './UserGreeting';
// import List from './List';
// import Button1 from './Button1';
// import ProfilePic from './ProfilePic';
// import MyComponent from './MyComponent';
// import Counter from './Counter.jsx';
// import MyComponent1 from './MyComponent1.jsx';
// import ColorPicker from './ColorPicker.jsx';
// import MyComponent2  from './MyComponent2.jsx';
// import MyComponent3 from './MyComponent3.jsx';
// import MyComponent4 from './MyComponent4.jsx';
// import ToDoList from './ToDoList.jsx';
//import MyComponent5 from './MyComponent5.jsx';
//import MyComponent6 from './MyComponent6.jsx';
import DigitalClock from "./DigitalClock";

function App() {

  return(
    <>
       <DigitalClock></DigitalClock>
    </>
  )
}

export default App;










// const fruits=[
//   {name:"mango", calories:"uhjk"}, 
//   {name:"kiwi", calories: 98}, 
//   {name: "wm", calories:678},
//   {name:"apple", calories:789}
//   ];

// const vegetables=[
//   {name:"tomato", calories:7}, 
//   {name:"bg", calories: 98}, 
//   {name: "potato", calories:678},
//   {name:"lf", calories:789}
//   ]; 
{/*        
{fruits.length > 0 && <List items={fruits} category="Fruits"></List>}
       {vegetables.length >0 ? <List items={vegetables} category="Vegetables"></List> : null}
       <List> </List> */}