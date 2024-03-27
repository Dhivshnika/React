import { useState } from "react";
import "../../screens/Todo/todo.css";
import searchImg from "../../assets/search.png";
function Todo() {
    const [work, setWork] = useState();
    const [task, setTask] = useState([]);
    const [searchTask, setSearchTask] = useState([]);
    const [editId, setEditId] = useState(null);
    const handleAdd = () => {
        if (work !== "") {
            setTask((state) => [...state, { id: state.length + 1, text: work }]);
            setWork("");
            setSearchTask([]);
        }
        else {
            alert("Add a task");
        }
    }
    const handleDelete = (id) => {
        const filterTask = task.filter((task) => task.id !== id);
        setTask(filterTask);
        setSearchTask([]);
    }
    const handleEdit = (task) => {
        setWork(task.text);
        setEditId(task.id);
    }
    const handleSave = () => {
        setTask(task.map((task) => task.id === editId ? { id: editId, text: work } : task))
        setWork("");
        setEditId(null);
        setSearchTask([]);
    }
    const handleSearch = (searchString) => {
        const filterTask = task.filter((task) => task.text.toLowerCase().includes(searchString.toLowerCase()));
        setSearchTask(filterTask);
    }
    return (
        <div className="mainContainer">
            <div className="header">
                <div className="inputBoxContainer">
                    <div className="inputBox">
                        <input type="text" value={work} placeholder="Enter the Task...." onChange={(e) => setWork(e.target.value)} />
                    </div>
                    {editId ?
                        (<div onClick={handleSave} className="addButton">Save</div>)
                        :
                        (<div onClick={handleAdd} className="addButton">Add</div>)
                    }
                </div>
                <div className="searchBox">
                    <input placeholder="Search...." onChange={(e) => { handleSearch(e.target.value) }} />
                    <img src={searchImg} alt="search" height="20" width="20" />
                </div>
            </div>
            {task.length !== 0 ?
                searchTask.length !== 0 ?
                    searchTask.map((task) => (
                        <div key={task.id} className="displayBox">
                            <div className="displayText">
                                {task.text}
                            </div>
                            <div className="displayButton">
                                <div className="edit" onClick={() => handleEdit(task)}>Edit</div>
                                <div className="delete" onClick={() => handleDelete(task.id)}>Delete</div>
                            </div>
                        </div>
                    ))
                    :
                    task.map((task) => (
                        <div key={task.id} className="displayBox">
                            <div className="displayText">
                                {task.text}
                            </div>
                            <div className="displayButton">
                                <div className="edit" onClick={() => handleEdit(task)}>Edit</div>
                                <div className="delete" onClick={() => handleDelete(task.id)}>Delete</div>
                            </div>
                        </div>
                    ))
                :
                <img src="https://img.freepik.com/premium-vector/list-task-management-planned-prioritized-time-management-businesswoman-daily-tasks-planning-with-checklist-notepad-paper-agreement-concept-illustration_270158-673.jpg" alt="todo" height="500" width="500" />
            }
        </div>
    )
}
export default Todo