import Todoitem from "./Todoitem"
function Todolist(props) {

    const list = props.list
    const setlist = props.setlist

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {list.length===0?<p>You haven't added any Activity yet</p>:""}

            {
                list.map(function (item, index) {
                    return <Todoitem id={item.id} index={index} activity={item.activity} list={list} setlist={setlist} />
                })
            }

        </div>
    )
}
export default Todolist
