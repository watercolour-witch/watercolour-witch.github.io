$(document).ready(function(){$(".countdown-timer").countdown("2016/08/14",function(n){var i=$(this).html(n.strftime("<li><span>%D</span></li><li><span> %H</span></li><li><span> %M</span></li><li><span> %S</span></li>"))})});