$(document).ready(() => {

    $('.intro-text').on('mouseenter', event => {
        $(event.currentTarget).addClass('big-intro-text');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('big-intro-text');
    })

    
  });