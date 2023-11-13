const price = 450;
let tickets = 20;
var Reservation = [];
var save = -1;
function app() {
    var Name = document.getElementById("Name").value;
    var Ticket_Count = document.getElementById("TicCount").value;
    var mail = document.getElementById("mail").value;
    var movie = document.getElementById("movie").value;
    var ticketPrice = Ticket_Count * price;
    tickets = tickets - Ticket_Count;

    if (Name == '' || Ticket_Count == '' || mail == '' || movie == '' || ticketPrice == 0) {
        alert('Enter the details');
    }
    else if (tickets >= 0) {
        document.getElementById('p').innerHTML = tickets + " tickets available ";
        if (save == -1) {
            Reservation.push({
                Name: Name,
                Ticket_Count: Ticket_Count,
                mail: mail,
                movie: movie,
                ticketPrice: ticketPrice
            })
            console.log(Reservation);
            display(Reservation[Reservation.length - 1], tickets);
        }
        else {
            Reservation[save] = {
                Name: Name,
                Ticket_Count: Ticket_Count,
                mail: mail,
                movie: movie,
                ticketPrice: ticketPrice
            };
            update(save, tickets);
            save = -1;
        }
    }
    else {
        alert('no tickets available');
    }

}
function display(Reservation, tickets) {
    const table = document.getElementById("ticketData");
    const row = table.insertRow(table.rows.length);
    row.classList.add('tableRow')
    for (let key in Reservation) {
        const cell = row.insertCell();
        cell.classList.add('tablecell');
        cell.textContent = Reservation[key];
    }

    const editCell = row.insertCell();
    editCell.innerHTML = '<button onclick="editRow(this)">Edit</button>';

    const deleteCell = row.insertCell();
    deleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    reset();
}
function deleteRow(button) {
    let row = button.parentNode.parentNode;
    let index = row.rowIndex;
    console.log(tickets);
    console.log("price:" + parseInt(Reservation[index - 1].Ticket_Count));
    tickets += parseInt(Reservation[index - 1].Ticket_Count);
    console.log(tickets);
    document.getElementById("ticketData").deleteRow(index - 1);
    document.getElementById('p').innerHTML = tickets + " tickets available ";
    Reservation.splice(index - 1, 1);

}
function editRow(button) {
    var row = button.parentNode.parentNode;
    var index = row.rowIndex;
    document.getElementById('Name').value = Reservation[index - 1].Name;
    document.getElementById('TicCount').value = Reservation[index - 1].Ticket_Count;
    document.getElementById('mail').value = Reservation[index - 1].mail;
    document.getElementById('movie').value = Reservation[index - 1].movie;
    tickets = tickets + parseInt(Reservation[index - 1].Ticket_Count);
    save = index - 1;
}
function update(save, tickets) {
    const table = document.getElementById("ticketData");
    const row = table.insertRow(save);
    row.classList.add('tableRow');
    for (let key in Reservation[save]) {
        const cell = row.insertCell();
        cell.classList.add('tablecell');
        cell.textContent = Reservation[save][key];
    }
    const editCell = row.insertCell();
    editCell.innerHTML = '<button onclick="editRow(this)">Edit</button>';

    const deleteCell = row.insertCell();
    deleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    document.getElementById('p').innerHTML = tickets + " tickets available ";

    document.getElementById("ticketData").deleteRow(save + 1);

    reset();
}
function reset() {
    document.getElementById('Name').value = '';
    document.getElementById('TicCount').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('movie').value = '';
}
