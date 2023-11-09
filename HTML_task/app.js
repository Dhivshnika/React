const price = 450;
let tickets = 20;
var Pname = [];
var count = [];
var mailId = [];
var movName = [];
var ticprice = [];
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
        Pname.push(Name);
        count.push(Ticket_Count);
        mailId.push(mail);
        movName.push(movie);
        ticprice.push(ticketPrice);
        console.log(Pname);
        display(Name, Ticket_Count, mail, ticketPrice, movie, tickets);
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
}
