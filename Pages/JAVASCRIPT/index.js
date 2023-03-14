$(document).ready(function(){
    // scroll => navbar
    $(window).scroll(function(){
        if ( this.scrollY > 20){
            $(".header").addClass("headerEffect");
            $(".header .menu ul li a").css("color","#f9f8fa");
            $(".logo a h1 span").css("color","#f9f8fa");
        }else{
            $(".header").removeClass("headerEffect");
            $(".header .menu ul li a").css("color","#1A1A1A");
            $(".logo a h1 span").css("color","#E55252");
        }
    });

    // navbar
    $(".header .menu nav ul li .cont").click(function(e){
        e.preventDefault();
        $(".courses-detail").slideToggle(1000);
    });
    $(".header .menu nav ul li .contlog").click(function(e){
        e.preventDefault();
        $(".Pages-detail").slideToggle(1000);
    });
    // mob 
    $(".header .menu-mob nav ul li .cont").click(function(e){
        e.preventDefault();
        $(".courses-detail").slideToggle(1000);
    });
    $(".header .menu-mob nav ul li .contlog").click(function(e){
        e.preventDefault();
        $(".Pages-detail").slideToggle(1000);
    });
    // navbar Mob
    $(".tools .men").click(function(){
        $(".header .menu-mob").slideDown(1000);
        $(".tools .men").css("display","none");
        $(".tools .menexit").css("display","inline-block");
        $(".col").css("display","none");
    });
    $(".tools .menexit").click(function(){
        $(".header .menu-mob").slideUp(1000);
        $(".tools .men").css("display","inline-block");
        $(".tools .menexit").css("display","none");
        $(".col").css("display","inline-block");
        $(".courses-detail").slideUp(1000);
        $(".Pages-detail").slideUp(1000);
    });
    $(".header .menu-mob nav ul li a").first().click(function(){
        $(".header .menu-mob").slideUp(1000);
    });
    $(".header .menu-mob nav ul li a").last().click(function(){
        $(".header .menu-mob").slideUp(1000);
    });
        // home

    //lightmood
    $(".contain-theme .dark-mood .cir-dark-mood1").click(function(){
        $("body").css({
            "backgroundColor":"FCF3F3",
            "transition":"all .4s"
        });
        $("body").removeClass("darkmoood");
        $(".colors").css("opacity","1");
        $(".header .logo a h1").css("color","#1A1A1A");
        $(".header .menu nav ul li a").css("color","#1A1A1A");
        $(".home .text-home h1").css("color","#1A1A1A");
        $(".home .text-home p").css("color","#1A1A1A");
        $(".home .text-home .circles-group .cicle2").css("border","3px solid #1A1A1A");
        $(".home .contain-theme").css({"backgroundColor":"#FCF3F3","transition":"all .4s"});
        $(".home .contain-theme h2").css("color","#1A1A1A");
        $(".home .contain-theme p").css("color","#1A1A1A");
        $(".home .contain-theme hr").css("backgroundColor","#1A1A1A");
        $(".course h1").css("color","#1A1A1A");
        $(".courses .course1 .text-courses p").css("color","#1A1A1A");
        $(".courses .course1 .text2-courses p").css("color","#1A1A1A");
        $(".courses .course1 h1").css("color","#1A1A1A");
        $(".Student h1").css("color","#1A1A1A");
        $("section .student-parent .student1 p").css("color","#1A1A1A");
        $("footer").css("box-shadow","#1A1A1A 0px 0px 6px")
        $("footer .parent-footer .foot h1").css("color","#1A1A1A");
        $("footer .parent-footer .foot p a").css("color","#1A1A1A");
        $("footer h3").css("color","#1A1A1A");
        $(".contain-theme .dark-mood .cir-dark-mood1").css("display","none");
        $(".contain-theme .dark-mood .cir-dark-mood").css("display","flex");
        $(".dark-mood-text p").css("display","flex");
        $(".dark-mood-text .light").css("display","none");
        $(".tools .men").css("backgroundColor","#bdbdbd");
        $(".tools .menexit").css("backgroundColor","#bdbdbd");
        $(".header .menu-mob").css("backgroundColor","#bdbdbd");
        $(".courses-detail").css("backgroundColor","#bdbdbd");
        $(".Pages-detail").css("backgroundColor","#bdbdbd");
        $(window).scroll(function(){
            if ( this.scrollY > 20){
                $(".header").addClass("headerEffect");
                $(".header .menu ul li a").css("color","#1A1A1A");
                $(".logo a h1 span").css("color","#1A1A1A");
            }else{
                $(".header").removeClass("headerEffect");
                $(".header .menu ul li a").css("color","#1A1A1A");
                $(".logo a h1 span").css("color","#E55252");
            }
        });

    });
    
    // Dark mood
    $(".contain-theme .dark-mood .cir-dark-mood").click(function(){
        $("body").addClass("darkmoood");
        $(".colors").css("opacity",".1");
        $(".header .logo a h1").css("color","#f9f8fa");
        $(".header .menu nav ul li a").css("color","#f9f8fa");
        $(".home .text-home h1").css("color","#f9f8fa");
        $(".home .text-home p").css("color","#f9f8fa");
        $(".home .text-home .circles-group .cicle2").css("border","3px solid #f9f8fa");
        $(".home .contain-theme").css({"backgroundColor":"#212529","transition":"all .4s"});
        $(".home .contain-theme h2").css("color","#f9f8fa");
        $(".home .contain-theme p").css("color","#f9f8fa");
        $(".home .contain-theme hr").css("backgroundColor","#f9f8fa");
        $(".course h1").css("color","#f9f8fa");
        $(".courses .course1 .text-courses p").css("color","#f9f8fa");
        $(".courses .course1 .text2-courses p").css("color","#f9f8fa");
        $(".courses .course1 h1").css("color","#f9f8fa");
        $(".Student h1").css("color","#f9f8fa");
        $("section .student-parent .student1 p").css("color","#f9f8fa");
        $("footer").css("box-shadow","#f9f8fa 0px 0px 6px")
        $("footer .parent-footer .foot h1").css("color","#f9f8fa");
        $("footer .parent-footer .foot p a").css("color","#f9f8fa");
        $("footer h3").css("color","#f9f8fa");
        $(".tools .men").css("backgroundColor","#212529");
        $(".tools .menexit").css("backgroundColor","#212529");
        $(".contain-theme .dark-mood .cir-dark-mood").css("display","none");
        $(".contain-theme .dark-mood .cir-dark-mood1").css("display","flex");
        $(".dark-mood-text p").css("display","none");
        $(".dark-mood-text .light").css("display","flex");
        $(".header .menu-mob").css("backgroundColor","#212529");
        $(".courses-detail").css("backgroundColor","#212529");
        $(".Pages-detail").css("backgroundColor","#212529");
        $(".ourcourses h1").css("color","#f9f8fa");
        $(".fa-solid").css("color","#f9f8fa");
        $(".web1 h1").css("color","#f9f8fa");
        $(".web1 p").css("color","#f9f8fa");
        $(window).scroll(function(){
            if ( this.scrollY > 20){
                $(".header").addClass("headerEffect");
                $(".header .menu ul li a").css("color","#f9f8fa");
                $(".logo a h1 span").css("color","#f9f8fa");
            }else{
                $(".header").removeClass("headerEffect");
                $(".header .menu ul li a").css("color","#f9f8fa");
                $(".logo a h1 span").css("color","#E55252");
            }
        });
        
    });    
    // theme color
    $(".theme .setting .col").click(function(){
        $(".home .contain-theme").css({
            "right":"0px",
            "transform":"translateX(0px)",
            "transition":"all .5s",
            "display":"inline-block"
        });
        $(".theme .setting .col").css("display","none");
        $(".theme .setting .exit").css("display","inline-block");
    });
    $(".theme .setting .exit").click(function(){
        $(".home .contain-theme").css({
            "trnsition":"all .5s",
            "display":"none"
        });
        $(".theme .setting .exit").css("display","none");
        $(".theme .setting .col").css("display","inline-block");
    });


    // color1
    $(".color1").click(function(){
        $("body").css("background","linear-gradient(to left ,#f5c5c5,#f79494)");
        $(".contain-theme .colors .color2 .right").css("opacity","0");
        $(".contain-theme .colors .color3 .right").css("opacity","0");
        $(".contain-theme .colors .color4 .right").css("opacity","0");
        $(".contain-theme .colors .color5 .right").css("opacity","0");
        $(".contain-theme .colors .color1 .right").css("opacity","1");
        $(".header .logo a h1 span").css("color","#E55252");
        $(".courses-detail").css("backgroundColor","#E55252");
        $(".Pages-detail").css("backgroundColor","#E55252");
        $(".home .text-home h3").css("color","#E55252");
        $(".home .text-home button").css("backgroundColor","#E55252");
        $(".home .text-home button").hover(function(){
            $(".home .text-home button").css({
                "backgroundColor":"#E55252",
                "width":"40%"
            });
        },function(){
            $(".home .text-home button").css({
                "backgroundColor":"#E55252",
                "width":"30%"
            });
        });
        $(".home .img-home img").css("backgroundColor","#E55252");
        $(".home .theme .setting .col").css("backgroundColor","#E55252");
        $(".home .theme .setting .exit").css("backgroundColor","#E55252");
        $(".course p").css("color","#E55252");
        $(".courses .course1 h4").css("backgroundColor","#E55252");
        $(".btn-view button").css({
            "backgroundColor":"#E55252",
            "box-shadow":"#526ae5 0px 0px 1px"
        });
        $(".btn-view button").hover(function(){
            $(".btn-view button").css({
                "backgroundColor":"#E55252",
                "transition":"all .3s",
                "outline":" 2px solid #A55252"
            });
        },function(){
            $(".btn-view button").css({
                "backgroundColor":"#E55252"
            });
        });
        $(".Student p").css("color","#E55252");
        $("section .student-parent .student1 h3").css("color","#E55252");
        $("section .student-parent .student1 img").css({
            "backgroundColor":"#E55252",
            "outline":"5px solid #E55252"
        });
        $(".points .point").css("border","1px solid #E55252");
        $(".points .active-point").css("backgroundColor","#E55252");
        $("section .student-parent .next-prev .student-next img").css("backgroundColor","#E55252");
        $("section .student-parent .next-prev .student-prev img").css("backgroundColor","#E55252");
        $(".instructor .text-instructor h3").css("color","#E55252");
        $(".instructor .text-instructor button").css("backgroundColor","#E55252");
        $(".instructor .text-instructor button").hover(function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#E55252",
                "width":"40%"
            });
        },function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#E55252",
                "width":"30%"
            });
        });
        $(".instructor .img-instructor div img").css("backgroundColor","#E55252");
        $("footer .parent-footer .foot p a").hover(function(){
            $(this).css({
                "color":"#E55252",
            });
        },function(){
            $(this).css({
                "color":"#1A1A1A",
            });
        });
        $("footer .foot1 h1 span").css("color","#E55252");
        $("footer hr").css("backgroundColor","#E55252");
        $("footer h3 span").css("color","#E55252");
        $(".tools .men").css("backgroundColor","#E55252");
        $(".tools .menexit").css("backgroundColor","#E55252");
        $(".header .menu-mob").css("backgroundColor","#E55252");
        $(".Dark-Mood").css("opacity",".1");

        $(".ourcourses p").css("color","#E55252");
        $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#E55252");
        $(".ourcourses-parent .course-name .active-name").hover(function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#A55252");
        },function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#E55252");
        });
        $(".ourcourses-parent .course-picture .web .web1 .price").css("backgroundColor","#E55252");
        $(".ourcourses-parent .course-picture .health .health1 .price").css("backgroundColor","#E55252");
        $(".ourcourses-parent .course-picture .musics .music1 .price").css("backgroundColor","#E55252");
        $(".active-picture").css("backgroundColor","#E55252");
        $(".active-picture").hover(function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#A55252");
        },function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#E55252");
        });
        $(".fa-angle-left").css("backgroundColor","#E55252");
        $(".fa-angle-right").css("backgroundColor","#E55252");

        $(".forms").css("backgroundColor","#E55252");
        $(".forms form h2").css("color","#f9f8fa");
        $(".forms form .text a").css("color","#f9f8fa");
        $(".forms form .text p").css("color","#f9f8fa");
        $(".forms form button").css({
            "backgroundColor":"#E55252",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });

        $(".formsup").css("backgroundColor","#E55252");
        $(".formsup form h2").css("color","#f9f8fa");
        $(".formsup form .text a").css("color","#f9f8fa");
        $(".formsup form button").css({
            "backgroundColor":"#E55252",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });
        $(".formsup form .text p").css("color","#f9f8fa");
        $(".forms form input").css({
            "caret-color":"#E55252",
            "color":"#E55252"
        });
        $(".formsup form input").css({
            "caret-color":"#E55252",
            "color":"#E55252"
        });
        
        $(window).scroll(function(){
            if ( this.scrollY > 20){
                $(".header").addClass("headerEffect");
                $(".header").removeClass("headerEffect1");
                $(".header").removeClass("headerEffect2");
                $(".header").removeClass("headerEffect3");
                $(".header").removeClass("headerEffect4");
                $(".header .menu ul li a").css("color","#f9f8fa");
                $(".logo a h1 span").css("color","#f9f8fa");
            }else{
                $(".header").removeClass("headerEffect");
                $(".header").removeClass("headerEffect1");
                $(".header").removeClass("headerEffect2");
                $(".header").removeClass("headerEffect3");
                $(".header").removeClass("headerEffect4");
                $(".header .menu ul li a").css("color","#1A1A1A");
                $(".logo a h1 span").css("color","#E55252");
            }
        });

    });

    // color2
    
    $(".color2").click(function(){
        $("body").css("background","linear-gradient(to left , #a0b0ff,#d7ddfc)");
        $(".contain-theme .colors .color1 .right").css("opacity","0");
        $(".contain-theme .colors .color2 .right").css("opacity","1");
        $(".contain-theme .colors .color3 .right").css("opacity","0");
        $(".contain-theme .colors .color4 .right").css("opacity","0");
        $(".contain-theme .colors .color5 .right").css("opacity","0");
        $("html::-webkit-scrollbar-track").css("backgroundColor","#526ae5");
        $(".header .logo a h1 span").css("color","#526ae5");
        $(".courses-detail").css("backgroundColor","#526ae5");
        $(".Pages-detail").css("backgroundColor","#526ae5");
        $(".home .text-home h3").css("color","#526ae5");
        $(".home .text-home button").css("backgroundColor","#526ae5");
        $(".home .text-home button").hover(function(){
            $(".home .text-home button").css({
                "backgroundColor":"#526ae5",
                "width":"40%"
            });
        },function(){
            $(".home .text-home button").css({
                "backgroundColor":"#526ae5",
                "width":"30%"
            });
        });
        $(".home .img-home img").css("backgroundColor","#526ae5");
        $(".home .theme .setting .col").css("backgroundColor","#526ae5");
        $(".home .theme .setting .exit").css("backgroundColor","#526ae5");
        $(".course p").css("color","#526ae5");
        $(".courses .course1 h4").css("backgroundColor","#526ae5");
        $(".btn-view button").css({
            "backgroundColor":"#526ae5",
            "box-shadow":"#526ae5 0px 0px 1px"
        });
        $(".btn-view button").hover(function(){
            $(".btn-view button").css({
                "backgroundColor":"#526ae5",
                "transition":"all .3s",
                "outline":" 2px solid #326ae5"
            });
        },function(){
            $(".btn-view button").css({
                "backgroundColor":"#526ae5"
            });
        });
        $(".Student p").css("color","#526ae5");
        $("section .student-parent .student1 h3").css("color","#526ae5");
        $("section .student-parent .student1 img").css({
            "backgroundColor":"#526ae5",
            "outline":"5px solid #526ae5"
        });
        $(".points .point").css("border","1px solid #526ae5");
        $(".points .active-point").css("backgroundColor","#526ae5");
        $("section .student-parent .next-prev .student-next img").css("backgroundColor","#526ae5");
        $("section .student-parent .next-prev .student-prev img").css("backgroundColor","#526ae5");
        $(".instructor .text-instructor h3").css("color","#526ae5");
        $(".instructor .text-instructor button").css("backgroundColor","#526ae5");
        $(".instructor .text-instructor button").hover(function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#526ae5",
                "width":"40%"
            });
        },function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#526ae5",
                "width":"30%"
            });
        });
        $(".instructor .img-instructor div img").css("backgroundColor","#326ae5");
        $("footer .parent-footer .foot p a").hover(function(){
            $(this).css({
                "color":"#526ae5",
            });
        },function(){
            $(this).css({
                "color":"#1A1A1A",
            });
        });
        $("footer .foot1 h1 span").css("color","#526ae5");
        $("footer hr").css("backgroundColor","#526ae5");
        $("footer h3 span").css("color","#526ae5");
        $(".tools .men").css("backgroundColor","#526ae5");
        $(".tools .menexit").css("backgroundColor","#526ae5");
        $(".header .menu-mob").css("backgroundColor","#526ae5");
        $(".Dark-Mood").css("opacity",".1");

        $(".ourcourses p").css("color","#526ae5");
        $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#526ae5");
        $(".ourcourses-parent .course-name .active-name").hover(function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#526ee5");
        },function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#526ae5");
        });
        $(".ourcourses-parent .course-picture .web .web1 .price").css("backgroundColor","#526ae5");
        $(".ourcourses-parent .course-picture .health .health1 .price").css("backgroundColor","#526ae5");
        $(".ourcourses-parent .course-picture .musics .music1 .price").css("backgroundColor","#526ae5");
        $(".active-picture").css("backgroundColor","#526ae5");
        $(".active-picture").hover(function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#526ee5");
        },function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#526ae5");
        });
        $(".fa-angle-left").css("backgroundColor","#526ae5");
        $(".fa-angle-right").css("backgroundColor","#526ae5");

        $(".forms").css("backgroundColor","#526ae5");
        $(".forms form h2").css("color","#f9f8fa");
        $(".forms form .text a").css("color","#f9f8fa");
        $(".forms form .text p").css("color","#f9f8fa");
        $(".forms form button").css({
            "backgroundColor":"#526ae5",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });

        $(".formsup").css("backgroundColor","#526ae5");
        $(".formsup form h2").css("color","#f9f8fa");
        $(".formsup form .text a").css("color","#f9f8fa");
        $(".formsup form button").css({
            "backgroundColor":"#526ae5",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });
        $(".formsup form .text p").css("color","#f9f8fa");

        $(".forms form input").css({
            "caret-color":"#526ae5",
            "color":"#526ae5"
        });
        $(".formsup form input").css({
            "caret-color":"#526ae5",
            "color":"#526ae5"
        });

        $(window).scroll(function(){
            if ( this.scrollY > 20){
                $(".header").addClass("headerEffect1");
                $(".header").removeClass("headerEffect");
                $(".header").removeClass("headerEffect2");
                $(".header").removeClass("headerEffect3");
                $(".header").removeClass("headerEffect4");
                $(".header .menu ul li a").css("color","#f9f8fa");
                $(".logo a h1 span").css("color","#f9f8fa");
            }else{
                $(".header").removeClass("headerEffect");
                $(".header").removeClass("headerEffect1");
                $(".header").removeClass("headerEffect2");
                $(".header").removeClass("headerEffect3");
                $(".header").removeClass("headerEffect4");
                $(".header .menu ul li a").css("color","#1A1A1A");
                $(".logo a h1 span").css("color","#526ae5");
            }
        });

    });

    // color 3

    $(".color3").click(function(){
        $("body").css("background","linear-gradient(to left , #ffefd7,#face8d)");
        $(".contain-theme .colors .color1 .right").css("opacity","0");
        $(".contain-theme .colors .color2 .right").css("opacity","0");
        $(".contain-theme .colors .color4 .right").css("opacity","0");
        $(".contain-theme .colors .color5 .right").css("opacity","0");
        $(".contain-theme .colors .color3 .right").css("opacity","1");
        $(".header .logo a h1 span").css("color","#e5aa52");
        $(".courses-detail").css("backgroundColor","#e5aa52");
        $(".Pages-detail").css("backgroundColor","#e5aa52");
        $(".home .text-home h3").css("color","#e5aa52");
        $(".home .text-home button").css("backgroundColor","#e5aa52");
        $(".home .text-home button").hover(function(){
            $(".home .text-home button").css({
                "backgroundColor":"#e5aa52",
                "width":"40%"
            });
        },function(){
            $(".home .text-home button").css({
                "backgroundColor":"#e5aa52",
                "width":"30%"
            });
        });
        $(".home .img-home img").css("backgroundColor","#e5aa52");
        $(".home .theme .setting .col").css("backgroundColor","#e5aa52");
        $(".home .theme .setting .exit").css("backgroundColor","#e5aa52");
        $(".course p").css("color","#526ae5");
        $(".courses .course1 h4").css("backgroundColor","#e5aa52");
        $(".btn-view button").css({
            "backgroundColor":"#e5aa52",
            "box-shadow":"#526ae5 0px 0px 1px"
        });
        $(".btn-view button").hover(function(){
            $(".btn-view button").css({
                "backgroundColor":"#e5aa52",
                "transition":"all .3s",
                "outline":" 2px solid #e0aa52"
            });
        },function(){
            $(".btn-view button").css({
                "backgroundColor":"#e5aa52"
            });
        });
        $(".Student p").css("color","#e5aa52");
        $("section .student-parent .student1 h3").css("color","#e5aa52");
        $("section .student-parent .student1 img").css({
            "backgroundColor":"#e5aa52",
            "outline":"5px solid #e5aa52"
        });
        $(".points .point").css("border","1px solid #e5aa52");
        $(".points .active-point").css("backgroundColor","#e5aa52");
        $("section .student-parent .next-prev .student-next img").css("backgroundColor","#e5aa52");
        $("section .student-parent .next-prev .student-prev img").css("backgroundColor","#e5aa52");
        $(".instructor .text-instructor h3").css("color","#e5aa52");
        $(".instructor .text-instructor button").css("backgroundColor","#e5aa52");
        $(".instructor .text-instructor button").hover(function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#e5aa52",
                "width":"40%"
            });
        },function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#e5aa52",
                "width":"30%"
            });
        });
        $(".instructor .img-instructor div img").css("backgroundColor","#e5aa52");
        $("footer .parent-footer .foot p a").hover(function(){
            $(this).css({
                "color":"#e5aa52",
            });
        },function(){
            $(this).css({
                "color":"#1A1A1A",
            });
        });
        $("footer .foot1 h1 span").css("color","#e5aa52");
        $("footer hr").css("backgroundColor","#e5aa52");
        $("footer h3 span").css("color","#e5aa52");
        $(".tools .men").css("backgroundColor","#e5aa52");
        $(".tools .menexit").css("backgroundColor","#e5aa52");
        $(".header .menu-mob").css("backgroundColor","#e5aa52");
        $(".Dark-Mood").css("opacity",".1");

        $(".ourcourses p").css("color","#e5aa52");
        $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#e5aa52");
        $(".ourcourses-parent .course-name .active-name").hover(function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#e5aa52");
        },function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#e5aa52");
        });
        $(".ourcourses-parent .course-picture .web .web1 .price").css("backgroundColor","#e5aa52");
        $(".ourcourses-parent .course-picture .health .health1 .price").css("backgroundColor","#e5aa52");
        $(".ourcourses-parent .course-picture .musics .music1 .price").css("backgroundColor","#e5aa52");
        $(".active-picture").css("backgroundColor","#e5aa52");
        $(".active-picture").hover(function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#e5ae52");
        },function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#e5aa52");
        });
        $(".fa-angle-left").css("backgroundColor","#e5aa52");
        $(".fa-angle-right").css("backgroundColor","#e5aa52");

        $(".forms").css("backgroundColor","#e5aa52");
        $(".forms form h2").css("color","#f9f8fa");
        $(".forms form .text a").css("color","#f9f8fa");
        $(".forms form .text p").css("color","#f9f8fa");
        $(".forms form button").css({
            "backgroundColor":"#e5aa52",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });

        $(".formsup").css("backgroundColor","#e5aa52");
        $(".formsup form h2").css("color","#f9f8fa");
        $(".formsup form .text a").css("color","#f9f8fa");
        $(".formsup form button").css({
            "backgroundColor":"#e5aa52",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });
        $(".formsup form .text p").css("color","#f9f8fa");

        $(".forms form input").css({
            "caret-color":"#e5aa52",
            "color":"#e5aa52"
        });
        $(".formsup form input").css({
            "caret-color":"#e5aa52",
            "color":"#e5aa52"
        });

        $(window).scroll(function(){
            if ( this.scrollY > 20){
                $(".header").addClass("headerEffect2");
                $(".header").removeClass("headerEffect");
                $(".header").removeClass("headerEffect1");
                $(".header").removeClass("headerEffect3");
                $(".header").removeClass("headerEffect4");
                $(".header .menu ul li a").css("color","#f9f8fa");
                $(".logo a h1 span").css("color","#f9f8fa");
            }else{
                $(".header").removeClass("headerEffect");
                $(".header").removeClass("headerEffect1");
                $(".header").removeClass("headerEffect2");
                $(".header").removeClass("headerEffect3");
                $(".header").removeClass("headerEffect4");
                $(".header .menu ul li a").css("color","#1A1A1A");
                $(".logo a h1 span").css("color","#e5aa52");
            }
        });

    });

    // color 4

    $(".color4").click(function(){
        $("body").css("background","linear-gradient(to left , #f1daff,#d899ff)");
        $(".contain-theme .colors .color1 .right").css("opacity","0");
        $(".contain-theme .colors .color2 .right").css("opacity","0");
        $(".contain-theme .colors .color3 .right").css("opacity","0");
        $(".contain-theme .colors .color4 .right").css("opacity","1");
        $(".header .logo a h1 span").css("color","#ad52e5");
        $(".courses-detail").css("backgroundColor","#ad52e5");
        $(".Pages-detail").css("backgroundColor","#ad52e5");
        $(".home .text-home h3").css("color","#ad52e5");
        $(".home .text-home button").css("backgroundColor","#ad52e5");
        $(".home .text-home button").hover(function(){
            $(".home .text-home button").css({
                "backgroundColor":"#ad52e5",
                "width":"40%"
            });
        },function(){
            $(".home .text-home button").css({
                "backgroundColor":"#ad52e5",
                "width":"30%"
            });
        });
        $(".home .img-home img").css("backgroundColor","#ad52e5");
        $(".home .theme .setting .col").css("backgroundColor","#ad52e5");
        $(".home .theme .setting .exit").css("backgroundColor","#ad52e5");
        $(".course p").css("color","#526ae5");
        $(".courses .course1 h4").css("backgroundColor","#ad52e5");
        $(".btn-view button").css({
            "backgroundColor":"#ad52e5",
            "box-shadow":"#526ae5 0px 0px 1px"
        });
        $(".btn-view button").hover(function(){
            $(".btn-view button").css({
                "backgroundColor":"#ad52e5",
                "transition":"all .3s",
                "outline":" 2px solid #ad52e5"
            });
        },function(){
            $(".btn-view button").css({
                "backgroundColor":"#ad52e5"
            });
        });
        $(".Student p").css("color","#ad52e5");
        $("section .student-parent .student1 h3").css("color","#ad52e5");
        $("section .student-parent .student1 img").css({
            "backgroundColor":"#ad52e5",
            "outline":"5px solid #ad52e5"
        });
        $(".points .point").css("border","1px solid #ad52e5");
        $(".points .active-point").css("backgroundColor","#ad52e5");
        $("section .student-parent .next-prev .student-next img").css("backgroundColor","#ad52e5");
        $("section .student-parent .next-prev .student-prev img").css("backgroundColor","#ad52e5");
        $(".instructor .text-instructor h3").css("color","#ad52e5");
        $(".instructor .text-instructor button").css("backgroundColor","#ad52e5");
        $(".instructor .text-instructor button").hover(function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#ad52e5",
                "width":"40%"
            });
        },function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#ad52e5",
                "width":"30%"
            });
        });
        $(".instructor .img-instructor div img").css("backgroundColor","#ad52e5");
        $("footer .parent-footer .foot p a").hover(function(){
            $(this).css({
                "color":"#ad52e5",
            });
        },function(){
            $(this).css({
                "color":"#1A1A1A",
            });
        });
        $("footer .foot1 h1 span").css("color","#ad52e5");
        $("footer hr").css("backgroundColor","#ad52e5");
        $("footer h3 span").css("color","#ad52e5");
        $(".tools .men").css("backgroundColor","#ad52e5");
        $(".tools .menexit").css("backgroundColor","#ad52e5");
        $(".header .menu-mob").css("backgroundColor","#ad52e5");
        $(".Dark-Mood").css("opacity",".1");

        $(".ourcourses p").css("color","#ad52e5");
        $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#ad52e5");
        $(".ourcourses-parent .course-name .active-name").hover(function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#aa52e5");
        },function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#ad52e5");
        });
        $(".ourcourses-parent .course-picture .web .web1 .price").css("backgroundColor","#ad52e5");
        $(".ourcourses-parent .course-picture .health .health1 .price").css("backgroundColor","#ad52e5");
        $(".ourcourses-parent .course-picture .musics .music1 .price").css("backgroundColor","#ad52e5");
        $(".active-picture").css("backgroundColor","#ad52e5");
        $(".active-picture").hover(function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#aa52e5");
        },function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#ad52e5");
        });
        $(".fa-angle-left").css("backgroundColor","#ad52e5");
        $(".fa-angle-right").css("backgroundColor","#ad52e5");

        $(".forms").css("backgroundColor","#ad52e5");
        $(".forms form h2").css("color","#f9f8fa");
        $(".forms form .text a").css("color","#f9f8fa");
        $(".forms form .text p").css("color","#f9f8fa");
        $(".forms form button").css({
            "backgroundColor":"#ad52e5",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });

        $(".formsup").css("backgroundColor","#ad52e5");
        $(".formsup form h2").css("color","#f9f8fa");
        $(".formsup form .text a").css("color","#f9f8fa");
        $(".formsup form button").css({
            "backgroundColor":"#ad52e5",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });
        $(".formsup form .text p").css("color","#f9f8fa");

        $(".forms form input").css({
            "caret-color":"#ad52e5",
            "color":"#ad52e5"
        });
        $(".formsup form input").css({
            "caret-color":"#ad52e5",
            "color":"#ad52e5"
        });

        $(window).scroll(function(){
            if ( this.scrollY > 20){
                $(".header").addClass("headerEffect3");
                $(".header").removeClass("headerEffect");
                $(".header").removeClass("headerEffect1");
                $(".header").removeClass("headerEffect2");
                $(".header").removeClass("headerEffect4");
                $(".header .menu ul li a").css("color","#f9f8fa");
                $(".logo a h1 span").css("color","#f9f8fa");
            }else{
                $(".header").removeClass("headerEffect");
                $(".header").removeClass("headerEffect1");
                $(".header").removeClass("headerEffect2");
                $(".header").removeClass("headerEffect3");
                $(".header").removeClass("headerEffect4");
                $(".header .menu ul li a").css("color","#1A1A1A");
                $(".logo a h1 span").css("color","#ad52e5");
            }
        });

    });

    // color 5

    $(".color5").click(function(){
        $("body").css("background","linear-gradient(to left , #d4fff4,#98fde2)");
        $(".contain-theme .colors .color1 .right").css("opacity","0");
        $(".contain-theme .colors .color2 .right").css("opacity","0");
        $(".contain-theme .colors .color3 .right").css("opacity","0");
        $(".contain-theme .colors .color4 .right").css("opacity","0");
        $(".contain-theme .colors .color5 .right").css("opacity","1");
        $(".header .logo a h1 span").css("color","#52e5be");
        $(".courses-detail").css("backgroundColor","#52e5be");
        $(".Pages-detail").css("backgroundColor","#52e5be");
        $(".home .text-home h3").css("color","#52e5be");
        $(".home .text-home button").css("backgroundColor","#52e5be");
        $(".home .text-home button").hover(function(){
            $(".home .text-home button").css({
                "backgroundColor":"#52e5be",
                "width":"40%"
            });
        },function(){
            $(".home .text-home button").css({
                "backgroundColor":"#52e5be",
                "width":"30%"
            });
        });
        $(".home .img-home img").css("backgroundColor","#52e5be");
        $(".home .theme .setting .col").css("backgroundColor","#52e5be");
        $(".home .theme .setting .exit").css("backgroundColor","#52e5be");
        $(".course p").css("color","#52e5be");
        $(".courses .course1 h4").css("backgroundColor","#52e5be");
        $(".btn-view button").css({
            "backgroundColor":"#52e5be",
            "box-shadow":"#52e5be 0px 0px 1px"
        });
        $(".btn-view button").hover(function(){
            $(".btn-view button").css({
                "backgroundColor":"#52e5be",
                "transition":"all .3s",
                "outline":" 2px solid #52e5be"
            });
        },function(){
            $(".btn-view button").css({
                "backgroundColor":"#52e5be"
            });
        });
        $(".Student p").css("color","#52e5be");
        $("section .student-parent .student1 h3").css("color","#52e5be");
        $("section .student-parent .student1 img").css({
            "backgroundColor":"#52e5be",
            "outline":"5px solid #52e5be"
        });
        $(".points .point").css("border","1px solid #52e5be");
        $(".points .active-point").css("backgroundColor","#52e5be");
        $("section .student-parent .next-prev .student-next img").css("backgroundColor","#52e5be");
        $("section .student-parent .next-prev .student-prev img").css("backgroundColor","#52e5be");
        $(".instructor .text-instructor h3").css("color","#52e5be");
        $(".instructor .text-instructor button").css("backgroundColor","#52e5be");
        $(".instructor .text-instructor button").hover(function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#52e5be",
                "width":"40%"
            });
        },function(){
            $(".home .text-instructor button").css({
                "backgroundColor":"#52e5be",
                "width":"30%"
            });
        });
        $(".instructor .img-instructor div img").css("backgroundColor","#52e5be");
        $("footer .parent-footer .foot p a").hover(function(){
            $(this).css({
                "color":"#52e5be",
            });
        },function(){
            $(this).css({
                "color":"#1A1A1A",
            });
        });
        $("footer .foot1 h1 span").css("color","#52e5be");
        $("footer hr").css("backgroundColor","#52e5be");
        $("footer h3 span").css("color","#52e5be");
        $(".tools .men").css("backgroundColor","#52e5be");
        $(".tools .menexit").css("backgroundColor","#52e5be");
        $(".header .menu-mob").css("backgroundColor","#52e5be");
        $(".Dark-Mood").css("opacity",".1");

        $(".ourcourses p").css("color","#52e5be");
        $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#52e5be");
        $(".ourcourses-parent .course-name .active-name").hover(function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#52a5be");
        },function(){
            $(".ourcourses-parent .course-name .active-name").css("backgroundColor","#52e5be");
        });
        $(".ourcourses-parent .course-picture .web .web1 .price").css("backgroundColor","#52e5be");
        $(".ourcourses-parent .course-picture .health .health1 .price").css("backgroundColor","#52e5be");
        $(".ourcourses-parent .course-picture .musics .music1 .price").css("backgroundColor","#52e5be");
        $(".active-picture").css("backgroundColor","#52e5be");
        $(".active-picture").hover(function(){
            $(".ourcourses-parent .course-name .active-picture").css("backgroundColor","#52a5be");
        },function(){
            $(".ourcourses-parent .course-name .active-picture").css("backgroundColor","#52e5be");
        });
        $(".fa-angle-left").css("backgroundColor","#52e5be");
        $(".fa-angle-right").css("backgroundColor","#52e5be");

        $(".forms").css("backgroundColor","#52e5be");
        $(".forms form h2").css("color","#f9f8fa");
        $(".forms form .text a").css("color","#f9f8fa");
        $(".forms form .text p").css("color","#f9f8fa");
        $(".forms form button").css({
            "backgroundColor":"#52e5be",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });

        $(".formsup").css("backgroundColor","#52e5be");
        $(".formsup form h2").css("color","#f9f8fa");
        $(".formsup form .text a").css("color","#f9f8fa");
        $(".formsup form button").css({
            "backgroundColor":"#52e5be",
            "box-shadow":"rgba(0,0,0,.1) 0px 0px 8px"
        });
        $(".formsup form .text p").css("color","#f9f8fa");

        $(".forms form input").css({
            "caret-color":"#52e5be",
            "color":"#52e5be"
        });
        $(".formsup form input").css({
            "caret-color":"#52e5be",
            "color":"#52e5be"
        });

        $(window).scroll(function(){
            if ( this.scrollY > 20){
                $(".header").removeClass("headerEffect");
                $(".header").removeClass("headerEffect1");
                $(".header").removeClass("headerEffect2");
                $(".header").removeClass("headerEffect3");
                $(".header").addClass("headerEffect4");
                $(".header .menu ul li a").css("color","#f9f8fa");
                $(".logo a h1 span").css("color","#f9f8fa");
            }else{
                $(".header").removeClass("headerEffect");
                $(".header").removeClass("headerEffect1");
                $(".header").removeClass("headerEffect2");
                $(".header").removeClass("headerEffect3");
                $(".header").removeClass("headerEffect4");
                $(".header .menu ul li a").css("color","#1A1A1A");
                $(".logo a h1 span").css("color","#52e5be");
            }
        });

    });

    // Click => Display contain-theme : none
    $(".color").click(function(){
        $(".home .contain-theme").slideToggle(2000);
        $(".home .theme .exit").css("display","none");
        $(".home .theme .setting .col").css("display","inline-block");
    });
    $(".cir-dark-mood").click(function(){
        $(".home .contain-theme").slideToggle(2000);
        $(".home .theme .exit").css("display","none");
        $(".home .theme .setting .col").css("display","inline-block");
    });
    $(".cir-dark-mood1").click(function(){
        $(".home .contain-theme").slideToggle(2000);
        $(".home .theme .exit").css("display","none");
        $(".home .theme .setting .col").css("display","inline-block");
    });

    // Log in & Sign up
    $(".forms .text a").click(function(e){
        e.preventDefault();
        $(".forms").css("display","none");
        $(".formsup").css("display","inline-block");
    });

    $(".formsup .text a").click(function(e){
        e.preventDefault();
        $(".formsup").css("display","none");
        $(".forms").css("display","inline-block");
    });

    $(".Pages-detail h3").last().click(function(e){
        e.preventDefault();
        $(".forms").css("display","none");
        $(".formsup").css("display","inline-block");
    });

});