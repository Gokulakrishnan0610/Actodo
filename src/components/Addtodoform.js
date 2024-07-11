import { useState } from "react"

function Addtodoform(props) {

    const list = props.list
    const setlist = props.setlist


    const [addtodo, setaddtodo] = useState("")

    const changetodo = (event) => {
        setaddtodo(event.target.value)

    }
    const click = () => {
        setlist([...list, { id: list.length + 1, activity: addtodo }])
        setaddtodo("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activity</h1>
            <div>
                <input placeholder="Next Activity?" className="border border-black bg-transparent p-1" value={addtodo} onChange={changetodo} ></input>
                <button onClick={click} className="bg-black text-white border border-black p-1">Add</button>
            </div>
        </div>
    )
}
export default Addtodoform