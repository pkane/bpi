//#################################################
//Mobile Menu #####################################
//#################################################


var menuLeft = document.getElementById( 'cbp-spmenu' ),
            showLeft = document.getElementById( 'showLeft' ),
            body = document.body;

            showLeft.onclick = function() {
            classie.toggle( this, 'active' );
            classie.toggle( menuLeft, 'cbp-spmenu-open' );
            disableOther( 'showLeft' );
        };

        function disableOther( button ) {
            if( button !== 'showLeft' ) {
                classie.toggle( showLeft, 'disabled' );
            }
        }

//Hiding nav after clicking onto menu element
var menuItem = document.getElementById( 'cbp-spmenu' );
menuItem.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeft' );
};



 $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: false,
            slideshow: false,
            controlsContainer: ".flexslider-container"     
        });         
    });


 $(document).ready(function() {

        // Enable the API on each Vimeo video
        // The following vimeo block is repetitive because
        // of the flawed nature of Froogaloop
        jQuery('iframe.vimeo').each(function(){
            Froogaloop(this).addEvent('ready', ready);
        });
  
        // var iframe = $('.vimeo-player');    
        var iframe1 = document.getElementById('video1');        
        var iframe2 = document.getElementById('video2');        
        var iframe3 = document.getElementById('video3');        
        var iframe4 = document.getElementById('video4');        
        var iframe5 = document.getElementById('video5');        
        var iframe6 = document.getElementById('video6');        
        var iframe7 = document.getElementById('video7');        
        var iframe8 = document.getElementById('video8');        
        var iframe9 = document.getElementById('video9');        

        // $f == Froogaloop
        var player1 = $f(iframe1);
        var player2 = $f(iframe2);
        var player3 = $f(iframe3);
        var player4 = $f(iframe4);
        var player5 = $f(iframe5);    
        var player6 = $f(iframe6);
        var player7 = $f(iframe7);
        var player8 = $f(iframe8);
        var player9 = $f(iframe9);

        var pauseButton1 = document.getElementById("pause_btn1");
        var pauseButton2 = document.getElementById("pause_btn2");
        var pauseButton3 = document.getElementById("pause_btn3");
        var pauseButton4 = document.getElementById("pause_btn4");
        var pauseButton5 = document.getElementById("pause_btn5");
        var pauseButton6 = document.getElementById("pause_btn6");
        var pauseButton7 = document.getElementById("pause_btn7");
        var pauseButton8 = document.getElementById("pause_btn8");
        var pauseButton9 = document.getElementById("pause_btn9");        

        pauseButton1.addEventListener("click", function() {
          player1.api("pause");                
        });  
        pauseButton2.addEventListener("click", function() {
          player2.api("pause");                
        });  
        pauseButton3.addEventListener("click", function() {
          player3.api("pause");                
        });                        
        pauseButton4.addEventListener("click", function() {
          player4.api("pause");                
        });  
        pauseButton5.addEventListener("click", function() {
          player5.api("pause");                
        });  
        pauseButton6.addEventListener("click", function() {
          player6.api("pause");                
        });  
        pauseButton7.addEventListener("click", function() {
          player7.api("pause");                
        });              
        pauseButton8.addEventListener("click", function() {
          player8.api("pause");                
        });  
        pauseButton9.addEventListener("click", function() {
          player9.api("pause");                
        });   
     

     
//#################################################
//Navigation - Scrolling and Active States#########
//#################################################
     
     
        $('#sections, #sections_mobile').onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 1000,
            scrollOffset: 77,
            scrollThreshold: 0.2,
            easing: 'easeInOutExpo',
            
        });
     
        $('#logo a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            }); 
         
         
         $('#btn-arrow').click(function () {
            $.scrollTo('#about',800,{easing:'easeInOutExpo',offset:-77,'axis':'y'});
            
        }); 

        $('#services .tab-heading').find('.heading-item').click(function(event) {
            if ($(event.target).hasClass('active')) {
                return;
            } else {
                $('.tab-heading').find('.heading-item').removeClass('active');
                $(event.target).addClass('active');
                $('.tab-body').removeClass('active');
                var x = $('.tab-body')[$(event.target).index()];
                $(x).addClass('active');
            }
        });
     
//#################################################
//Elements fading in ##############################
//#################################################        

 
        setTimeout(function (){ $('.btn').addClass('anim'); }, 1000); 
         
        $('#about').waypoint(function(direction) {
          $('#about').animate({ opacity: 1 }, 1500);
          setTimeout(function (){ $('#clients').animate({ opacity: 1 }, 1500); }, 500);  
        }, { offset: 150}); 

     
        function sniffer() {
            var windowHeight=$(window).height();
     
            var modal=$(".md-content");
            modal.css("height",windowHeight+"px");

 
        };
        sniffer();

     
//#################################################
//Text animation on home ##########################
//#################################################          
     
        $('.tlt').textillate({
                selector: '.texts',
                loop: true,
                initialDelay: 10,
                'in': {
                    effect: 'fadeInDown',
                    delayScale: 1.3,
                    delay: 40,
                    sync: false,
                    shuffle: true,
                },
                'out': {
                    effect: 'fadeOutDown',
                    delayScale: 1.3,
                    delay: 40,
                    sync: false,
                    shuffle: true,
                }                              
              
        });
        
                   
        $('#home p').textillate({
                loop: false,
                'in': {
                    effect: 'fadeInUp',
                    delayScale: 0.5,
                    delay: 10,
                    sync: false,
                    shuffle: true,
                },
        
        });
     
//#################################################
//ContactForm #####################################
//#################################################       
     
     
        function contactform() {
        //contact form init
        var options = {target: "#alert"}
        $("#contact-form").ajaxForm(options);
        };
	    contactform();    
             
    


//#################################################
//Video for modal box #############################
//#################################################          

         
    $(".md-content").fitVids();

});



//#################################################
//#################################################
//#################################################


    $(document).ready(function(){
        navposition();
        $(window).on('resize', navposition);
    });

/* Isotope (http://isotope.metafizzy.co)
    --------------------------------------------------*/
    
    // $(window).load(function () {
    //     var $container = $('#portfolio-items');
    //     var $filter = $('#filter');
    //     // Initialize isotope 
    //     $container.isotope({
    //         filter: '*',
    //         layoutMode: 'fitRows',
    //         animationOptions: {
    //             duration: 750,
    //             easing: 'linear'
    //         }
    //     });
    //     // Filter items when filter link is clicked
    //     $filter.find('a').click(function () {
    //         var selector = $(this).attr('data-filter');
    //         $filter.find('a').removeClass('current');
    //         $(this).addClass('current');
    //         $container.isotope({
    //             filter: selector,
    //             animationOptions: {
    //                 animationDuration: 750,
    //                 easing: 'linear',
    //                 queue: false,
    //             }
    //         });
    //         return false;
    //     });
    // });    



    function navposition() {
           var sliderHeight=$(".slides").height()/2;
           var sliders=$(".flex-direction-nav li a");
            sliders.css("margin-top", -sliderHeight+19+"px");
        };    
    navposition();

function reload() {
    $( '.md-content iframe' ).attr( 'src', function ( i, val ) { return val; }); };

    
