import React, { useState } from 'react'
import {IState as Props} from '../App'

interface IProps{
    people:Props["people"]
    setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
}


const AddToList:React.FC<IProps> = ({people,setPeople}) =>{
    const [input,setInput]= useState({
        name:"",
        age:"",
        notes:"",
        img:"",
      
    });

    const handleCLick =():void=>{
        if(
            !input.name ||
            !input.age ||
            !input.img
        ){
            return
        }
        setPeople([
            ...people,{
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                notes: input.notes
            }]
        )
        setInput({
            name:"",
            age:"",
            notes:"",
            img:"",
        })
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void  =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="AddToList">
            <input type="text" placeholder="name"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"
            />
              <input type="number" placeholder="age"
            className="AddToList-input"
            value={input.age}
            name="age"
            onChange={handleChange}
            />
              <input type="text" placeholder="url"
            className="AddToList-input"
            value={input.img}
            name="img"
            onChange={handleChange}
            />
              <textarea  placeholder="notes"
            className="AddToList-input"
            value={input.notes}
            name="notes"
            
            onChange={handleChange}

            />
            <button
            className="AddToList-btn"
            onClick={handleCLick}
            >
                Add To List
            </button>
        </div>
    )
}

export default AddToList
