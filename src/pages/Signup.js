import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup(props) {

    const navigate = useNavigate()
    const user = props.user
    const setuser = props.setuser

    const [newname, setname] = useState()
    const [newpass, setpass] = useState()

    const entername = (event) => {
        setname(event.target.value)
    }

    const enterpass = (event) => {
        setpass(event.target.value)
    }

    function adduser() {
        setuser([...user, { name: newname, password: newpass }])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>You can Signup here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        placeholder="Username"
                        className=" w-52 bg-transparent border rounded-md border-black p-1"
                        onChange={entername} />
                    <input
                        type="text"
                        placeholder="Password"
                        className=" w-52 bg-transparent border rounded-md border-black p-1"
                        onChange={enterpass} />
                    <input
                        type="text"
                        placeholder="Confirm Password"
                        className=" w-52 bg-transparent border rounded-md border-black p-1" />
                    <button className="p-1 w-24 border rounded-md bg-orange-400" onClick={adduser}>Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup 