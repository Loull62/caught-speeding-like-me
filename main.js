// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById('d1-speed').value;
  let d1Limit = +document.getElementById('d1-limit').value;
  let d2Speed = +document.getElementById('d2-speed').value;
  let d2Limit = +document.getElementById('d2-limit').value;
  let d3Speed = +document.getElementById('d3-speed').value;
  let d3Limit = +document.getElementById('d3-limit').value;

  // retrives ticket place and assigns numbers to ticketAssign function
  document.getElementById('d1-ticket').innerHTML = ticketAssign(d1Speed, d1Limit);
  document.getElementById('d2-ticket').innerHTML = ticketAssign(d2Speed, d2Limit);
  document.getElementById('d3-ticket').innerHTML = ticketAssign(d3Speed, d3Limit);
}

// reads numbers and assigns tickets
function ticketAssign (speed, limit) {
  if (speed > limit + 40) {
    return 'Really Big Ticket';
  } else if (speed > limit + 20) {
    return 'Big Ticket';
  } else if (speed > limit) {
    return 'Small Ticket';
  } else {
    return 'No Ticket';
  }
  return ticket;
}