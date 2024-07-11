import { useState } from "react"

function Todoitem(props) {

    const list = props.list
    const setlist = props.setlist

    const click = (id) =>{

        var tarr = list.filter(function(item){
            if(item.id === id){
                return false
            }
            else{
                return true
            }
        })
        setlist(tarr)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-500" onClick={()=>{click(props.id)}}>Del</button>
        </div>

    )
}

export default Todoitem