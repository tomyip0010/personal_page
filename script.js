//Monitoring the page position
$('#main-body').on('scroll', function() {
    let scroll = $('#main-body').scrollTop();

    if (scroll !== 0 && $('.navbar-brand img').css('width') !== '70px') {
        $('.navbar-brand img').css('width', '70px');
        $('.navbar').css('border-bottom', '1px solid #dceaf6');
        $('.navbar').css('padding-top', '0px');
        $('.navbar-left').css('top', '0px');
    } else if (scroll === 0) {
        $('.navbar-brand img').css('width', '90px');
        $('.navbar').css('border-bottom', 'none');
        $('.navbar').css('padding-top', '10px');
        $('.navbar-left').css('top', '10px');
    } 

    if (scroll < 2200 - $(window).height()*1.2) { //Profolio animation
        $('.profolioSquare').removeClass('animated fadeInUp')
    } else if (scroll >= 2200 && scroll < 4000) {
        $('.profolioSquare').map((index, element) => {
            setTimeout(() => {
                $(element).addClass('animated fadeInUp')
            }, 600*index)
        })
    } else if (scroll >= 4000) {   //Skill set logo animation
        $('.skill-logo').map((index, element) => {
            setTimeout(() => {
                $(element).addClass('animated fadeInUp')
            }, 300*index)
        });
    } else if (scroll < 4200 - $(window).height()*1.2) {
        $('.skill-logo').removeClass('animated fadeInUp')
    }
});


//For about me section
$('#explore-more').on('click', function() {
    $('.profileCard').addClass('activeMe');
    $('.aboutMe').toggle();
    $('.moreAboutMe').css('opacity', 1);
})

$(document).on('click', function(e) {
    if(!$(e.target).closest('#about-me').length) {
        $('.profileCard').removeClass('activeMe');
        $('.moreAboutMe').css('opacity', 0);
        if ($('.aboutMe').css('display') === 'none') {
            $('.aboutMe').toggle();
        }
    }

    if (!($('.navbar-toggle').hasClass('collapsed')) ) {
        $(".navbar-collapse").collapse('hide');
    } 
})



//smooth scrolling
$(document).ready(function(){
    smoothScroll(); 
});

function smoothScroll() {
    $('a.page-scroll').on('click', function() {
        console.log("OK",this.hash, $(this.hash).position(),  $('#main-body').height());
    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            
            // Prevent default anchor click behavior
            event.preventDefault();
        
            // Store hash
            let hash;
            if (this.hash === "#about-me") {
                hash = {id:"#about-me", top:1250}
            } else if (this.hash === "#profolio") {
                hash = {id:"#profolio", top:2500}
            } else if (this.hash === "#contact-me") {
                hash = {id:"#contact-me", top:5000}
            } else {
                hash = {id:"#top", top:0}
            }
        
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('#main-body').animate({
            scrollTop: hash.top
            }, 900, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash.id;
            });
        } // End if
    });
}