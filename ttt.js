
$(document).on('ready', function () {

  var turn = 0;

  function checkWinner() {
    if (($('.x').hasClass('1') && $('.x').hasClass("2") && $('.x').hasClass('3'))||
    ($('.x').hasClass('4') && $('.x').hasClass("5") && $('.x').hasClass('6'))||
    ($('.x').hasClass('7') && $('.x').hasClass("8") && $('.x').hasClass('9'))||
    ($('.x').hasClass('1') && $('.x').hasClass("5") && $('.x').hasClass('9'))||
    ($('.x').hasClass('3') && $('.x').hasClass("5") && $('.x').hasClass('7'))||
    ($('.x').hasClass('1') && $('.x').hasClass("4") && $('.x').hasClass('7'))||
    ($('.x').hasClass('2') && $('.x').hasClass("5") && $('.x').hasClass('8'))||
    ($('.x').hasClass('3') && $('.x').hasClass("6") && $('.x').hasClass('9'))){
          alert("We have a winner!");
      }
    }

  }

  $('td').on('click', function () {

    if (turn % 2 === 0) {
      $(this).html("X").addClass("x");
    } else {
      $(this).html("O").addClass("o");
    }

    checkWinner();

    $(this).off('click');
    turn++;

  });

});
