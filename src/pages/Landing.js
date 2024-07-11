import { useLocation } from "react-router-dom"
import Card from "../components/Card"
import Header from "../components/Header"
import Todolistcontainer from "../components/Todolistcomtainer"

function Landing() {

    const data = useLocation()
    return (
        <div className="bg-black p-5">
            <div className="bg-[#EFEFEF] p-10 border rounded-md"  >
                <Header name={data.state.user} />
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card color={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card color={"#FD6663"} title={"Date"} subtitle={"10:00"} />
                    <Card color={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                </div>
                <Todolistcontainer />
            </div>
        </div>
    )
}

export default Landing