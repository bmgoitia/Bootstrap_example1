
window.onload = function() {

	var imgs = ["./img/mount1.jpg", "./img/mount2.jpg", "./img/mount3.jpg"];
 
    $('#accordion .card-header').each( function( index, element ){
     $( this ).css('background-image', "url('" + imgs[index] + "')");
   });
 
};


