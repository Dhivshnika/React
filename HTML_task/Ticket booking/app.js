const price = 450;
let tickets = 20;
var Pname = [];
var count = [];
var mailId = [];
var movName = [];
var ticprice = [];
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
            Pname.push(Name);
            count.push(Ticket_Count);
            mailId.push(mail);
            movName.push(movie);
            ticprice.push(ticketPrice);
            console.log(Pname);
            display(Name, Ticket_Count, mail, ticketPrice, movie, tickets);
        }
        else {
            Pname.splice(save, 0, Name);
            count.splice(save, 0, Ticket_Count);
            mailId.splice(save, 0, mail);
            movName.splice(save, 0, movie);
            ticprice.splice(save, 0, ticketPrice);
            console.log(Pname);
            update(save, Name, Ticket_Count, mail, ticketPrice, movie, tickets);
            save = -1;
        }
    }
    else {
        alert('no tickets available');
    }

}
function display(Name, Ticket_Count, mail, ticketPrice, movie, tickets) {
    const table = document.getElementById("ticketData");
    const row = table.insertRow(table.rows.length);
    row.classList.add('tableRow')
    const nameCell = row.insertCell(0);
    const countCell = row.insertCell(1);
    const mailCell = row.insertCell(2);
    const movieCell = row.insertCell(3);
    const priceCell = row.insertCell(4);
    const editcell = row.insertCell(5);
    const deletecell = row.insertCell(6);

    nameCell.classList.add('tablecell1')
    countCell.classList.add('tablecell2')
    mailCell.classList.add('tablecell3')
    movieCell.classList.add('tablecell4')
    priceCell.classList.add('tablecell5')

    nameCell.textContent = Name;
    countCell.textContent = Ticket_Count;
    movieCell.textContent = movie;
    mailCell.textContent = mail;
    priceCell.textContent = ticketPrice;

    editcell.innerHTML = '<button onclick="editRow(this)">edit</button>';
    deletecell.innerHTML = '<button onclick="deleteRow(this)">delete</button>';
    reset();
}
function deleteRow(button) {
    let row = button.parentNode.parentNode;
    let index = row.rowIndex;
    console.log(tickets);
    console.log("price:" + parseInt(count[index - 1]));
    tickets += parseInt(count[index - 1]);
    console.log(tickets);
    document.getElementById("ticketData").deleteRow(index - 1);
    document.getElementById('p').innerHTML = tickets + " tickets available ";
    Pname.pop(index - 1);
    count.pop(index - 1);
    mailId.pop(index - 1);
    movName.pop(index - 1);
    ticprice.pop(index - 1);
    console.log(index - 1);

}
function editRow(button) {
    var row = button.parentNode.parentNode;
    var index = row.rowIndex;
    document.getElementById('Name').value = Pname[index - 1];
    document.getElementById('TicCount').value = count[index - 1];
    document.getElementById('mail').value = mailId[index - 1];
    document.getElementById('movie').value = movName[index - 1];
    tickets = tickets + parseInt(count[index - 1]);
    save = index;
}
function update(save, Name, Ticket_Count, mail, ticketPrice, movie, tickets) {
    const table = document.getElementById("ticketData");
    const row = table.insertRow(save);
    row.classList.add('tableRow')
    const nameCell = row.insertCell(0);
    const countCell = row.insertCell(1);
    const mailCell = row.insertCell(2);
    const movieCell = row.insertCell(3);
    const priceCell = row.insertCell(4);
    const editcell = row.insertCell(5);
    const deletecell = row.insertCell(6);

    nameCell.classList.add('tablecell1')
    countCell.classList.add('tablecell2')
    mailCell.classList.add('tablecell3')
    movieCell.classList.add('tablecell4')
    priceCell.classList.add('tablecell5')

    nameCell.textContent = Name;
    countCell.textContent = Ticket_Count;
    movieCell.textContent = movie;
    mailCell.textContent = mail;
    priceCell.textContent = ticketPrice;

    editcell.innerHTML = '<button onclick="editRow(this)">edit</button>';
    deletecell.innerHTML = '<button onclick="deleteRow(this)">delete</button>';
    document.getElementById("ticketData").deleteRow(save - 1);
    reset();
}
function reset() {
    document.getElementById('Name').value = '';
    document.getElementById('TicCount').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('movie').value = '';
}
