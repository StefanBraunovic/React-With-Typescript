import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState{
  people:{
    name:string,
    age:number,
    url:string,
    notes?:string
  }[]
}

function App() {
  const [people, setPeople]= useState<IState["people"]>([
    {
      name:"Lebron",
      url:"https://static01.nyt.com/images/2021/09/28/world/28virus-briefing-jamesvaccine-1/merlin_195498237_dca80794-1249-40ed-b54c-73adc642eab4-mediumSquareAt3X.jpg",
      age:35,
      notes:"asdasdsadsadsa"
    }
  ])
 
people.map(perosn=>{
  perosn.age=46
})
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
