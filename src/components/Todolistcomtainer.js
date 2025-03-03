import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todolistcontainer() {

    const [list, setlist] = useState([
        { id: 1, activity: "Wake up at 6am" }
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Addtodoform list={list} setlist={setlist}/>
                <Todolist list={list} setlist={setlist}/>
            </div>
        </div>
    )
}
export default Todolistcontainer