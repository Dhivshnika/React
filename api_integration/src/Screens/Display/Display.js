import { useState, useEffect } from "react";
import '../Display/Display.css';
function Display() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("https://6373377b348e9472990608fd.mockapi.io/api/v1/books")
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching item:', error));
    }, [])
    return (
        <div className="main">
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Created</td>
                        <td>Avatar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.avatar}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Display;