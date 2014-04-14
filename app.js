$(function(){
  $('.pulls-list-group li.list-group-item').each(function(index,elem) {
    if ($(elem).find('.list-group-item-name').text().match(/\[WIP\]/)) {
      $(elem).css({"background-color":"yellow", "opacity":0.7});
    }
  });
});
