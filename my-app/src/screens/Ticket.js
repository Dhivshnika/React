import React from "react";
import { useState } from "react";
import "../screens/Ticket.css";

let indexId = 0;
function Ticket() {
    const [ticketDetails, setTicketDetails] = useState({
        ticketAvailable: 20,
        tickets: [],
        amount: 450,
        name: "",
        counts: "",
        mailId: "",
        movie: "",
    });
    const [editOn, setEditOn] = useState(false);
    const [indexValue, setIndexValue] = useState("-1");
    const handleSubmit = () => {
        const { name, counts, mailId, movie, amount, tickets, ticketAvailable } = ticketDetails;
        let avail = ticketAvailable - counts;
        if (name !== "" && counts !== "" && mailId !== "" && movie !== "") {
            if (avail >= 0) {
                const price = amount * counts;
                let setTickets = [...tickets];
                if (indexValue !== "-1") {
                    setTickets[indexValue] =
                    {
                        index: indexValue,
                        name: name,
                        count: counts,
                        mail: mailId,
                        movie: movie,
                        amount: price,
                    };
                    setEditOn(false);
                    setIndexValue("-1");
                }
                else {
                    setTickets = [
                        ...tickets,
                        {
                            index: indexId++,
                            name: name,
                            count: counts,
                            mail: mailId,
                            movie: movie,
                            amount: price,
                        }
                    ];
                }
                setTicketDetails({
                    ...ticketDetails,
                    ticketAvailable: avail,
                    tickets: setTickets,
                    name: "",
                    counts: "",
                    mailId: "",
                    movie: "",
                })
            }
            else {
                alert("No tickets Available");
            }
        }
        else {
            alert("Enter all details");
        }
        console.log(name + " " + counts + " " + mailId + " " + movie);
    }
    const handleEdit = (item) => {
        const { ticketAvailable } = ticketDetails;
        setTicketDetails({
            ...ticketDetails,
            ticketAvailable: ticketAvailable + parseInt(item.count),
            name: item.name,
            counts: item.count,
            mailId: item.mail,
            movie: item.movie,
        })
        setEditOn(true);
        setIndexValue(item.index);
    }
    const handleDelete = (item) => {
        const { tickets, ticketAvailable } = ticketDetails;
        let setTickets = [...tickets];
        setTickets = setTickets.filter(list => list.index !== item.index);
        setTicketDetails({
            ...ticketDetails,
            ticketAvailable: ticketAvailable + parseInt(item.count),
            tickets: setTickets,
        })
    }
    return (
        <div>
            <div className="booking">
                <div className="bookingArea">
                    <table className="first">
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" required value={ticketDetails.name} size="30" onChange={e => setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value })} name="name" />
                            </td>
                        </tr>
                        <tr>
                            <td>Ticket Count</td>
                            <td>
                                <input type="text" required value={ticketDetails.counts} size="30" onChange={e => setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value })} name="counts" />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="mail" required value={ticketDetails.mailId} size="30" onChange={e => setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value })} name="mailId" />
                            </td>
                        </tr>
                        <tr>
                            <td>Movie</td>
                            <td>
                                <input type="text" required value={ticketDetails.movie} size="30" onChange={e => setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value })} name="movie" />
                            </td>
                        </tr>
                    </table>
                    <h4>{ticketDetails.ticketAvailable} tickets available</h4>
                    {editOn === true ?
                        (<button onClick={handleSubmit}>Save</button>)
                        :
                        (<button onClick={handleSubmit} >Book Now</button>)
                    }
                </div>
            </div>
            <div className="result">
                {(ticketDetails.tickets.length !== 0) &&
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Ticket Count</th>
                                <th>Email</th>
                                <th>Movie</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ticketDetails.tickets.map((item) => (
                                <tr key={item.index}>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td>{item.mail}</td>
                                    <td>{item.movie}</td>
                                    <td>{item.amount}</td>
                                    <td><button onClick={() => handleEdit(item)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(item)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
}
export default Ticket;