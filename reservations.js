var reservations = {
	'Billy': { claimed: false },
	'Mike': { claimed: true}
};

$('#res-button').on('click', function (e) {
  e.preventDefault();
  var found = false;
  var name = $('#reserve').val();
  $("input[type='text']").val('');

  for (var key in reservations) {
    if (name == key){
      found = true;
      if (reservations[key].claimed == false){
        alert("Sorry, we already have a reservation with that name. Please use a different name.");
        break;
      }
      else {
        alert("Thanks for making your reservation, " + name +".");
        reservations[name] = {claimed: false};
      break;
      }
    }
  }

  if(found == false) {
    alert("Thanks for making your reservation, " + name +".");
    reservations[name] = {claimed: false};
  }

  printout();
});

$('#claim-button').on('click', function (e) {
	e.preventDefault();
    var found = false;
    var name = $('#claim').val();
    $("input[type='text']").val('');

    for (var key in reservations){
      if (name == key) {
        found = true;
        if (reservations[key].claimed == false) {
          alert("Welcome, " + name + "!");
          reservations[name] = { claimed: true };
          break;
        }
        else {
          alert("Sorry, that reservation has been claimed.");
          break;
        }
      }
    }

    if (found == false) {
      alert("Sorry, we don't have a reservation for that name.");
    }

    printout();
});

var printout = function() {
  $('div').empty();
  $('div').append("<table><tr><th>Name</th><th>Status</th></tr>");
  for (var key in reservations) {
    $('div').append("<tr><td>" + key + "</td><td>" + reservations[key].claimed + "</td></tr>");
  }
  $('div').append("</table>");
};

printout();
