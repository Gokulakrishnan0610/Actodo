import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(props) {

    const user = props.user
    const navigate = useNavigate()
    const [name, setname] = useState()
    const [pass, setpass] = useState()
    const [reg, setreg] = useState(true)

    const changename = (event) => {
        setname(event.target.value)
    }
    const changepass = (event) => {
        setpass(event.target.value)
    }
    const click = () => {
        var usefound = false
        user.forEach(function (item) {
            if (item.name === name && item.password === pass) {
                console.log("Success")
                usefound = true
                navigate("/landing", { state: { user: name } })
            }
        })
        if (usefound === false) {
            console.log("Failed")
            setreg(false)
            console.log(user)
        }
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {
                    reg ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up Before You Login!</p>
                }
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        placeholder="Username"
                        className=" w-52 bg-transparent border rounded-md border-black p-1"
                        onChange={changename} />
                    <input
                        type="text"
                        placeholder="Password"
                        className=" w-52 bg-transparent border rounded-md border-black p-1"
                        onChange={changepass} />
                    <button className="p-1 w-24 border rounded-md bg-purple-500" onClick={click}>Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login