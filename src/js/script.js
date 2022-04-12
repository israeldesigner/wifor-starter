import $ from 'jquery';

(function($) {

    $(document).ready(function(){

        console.log("jquery");
        let i =2;
        var radius = 200;
        var fields = $(".itemDot");
        var container = $(".dotCircle");
        var width = container.width();
        radius = width / 2.5;

        var height = container.height();
        var angle = 0,
            step = (2 * Math.PI) / fields.length;
        fields.each(function () {
            var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
            var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
            if (window.console) {
                console.log($(this).text(), x, y);
            }

            $(this).css({
                left: x + "px",
                top: y + "px",
            });
            angle += step;
        });

        $(".itemDot").click(function () {
            var dataTab = $(this).data("tab");
            $(".itemDot").removeClass("active");
            $(this).addClass("active");
            $(".CirItem").removeClass("active");
            $(".CirItem" + dataTab).addClass("active");
            i = dataTab;

            $(".dotCircle").css({
                transform: "rotate(" + (360 - (i - 1) * 36) + "deg)",
                transition: "2s",
            });
            $(".itemDot").css({
                transform: "rotate(" + (i - 1) * 36 + "deg)",
                transition: "1s",
            });
        });

        setInterval(function () {
            var dataTab = $(".itemDot.active").data("tab");
            if (dataTab > 6 || i > 6) {
                dataTab = 1;
                i = 1;
            }
            $(".itemDot").removeClass("active");
            $('[data-tab="' + i + '"]').addClass("active");
            $(".CirItem").removeClass("active");
            $(".CirItem" + i).addClass("active");
            i++;

            $(".dotCircle").css({
                transform: "rotate(" + (360 - (i - 2) * 36) + "deg)",
                transition: "2s",
            });
            $(".itemDot").css({
                transform: "rotate(" + (i - 2) * 36 + "deg)",
                transition: "1s",
            });
        }, 5000);

        $(window).scroll( function () {
            if($(window).scrollTop() > 500) {
                $("#contHeader").addClass('sticky');
                $("#logoPrefBranca").hide();
                $("#logoWifor").show();
              } else {
                $("#contHeader").removeClass('sticky');
                $("#logoPrefBranca").show();
                $("#logoWifor").hide();
              }
        });

        let locationTotal = location.href;
        let urlExtense = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
        let base_url = window.location.origin;
        let host = window.location.host;
        let pathArray = window.location.pathname.split( '/' );
        console.log(pathArray);
        console.log(host);
        console.log(base_url);
        console.log(urlExtense);
        console.log(locationTotal);

        const scrollAnchor = (aid) =>{
            let aTag = $("section[id='"+ aid +"']");
            $('html,body').animate({scrollTop: aTag.offset().top -80},'slow');
        }

        const checkPath = (path) =>{
            console.log(path[1]);
            if( path[1] !== ""){

                $('.linkAnchorCom').attr("href", `${base_url}#anchorCom` );
                $('.linkAnchorRen').attr("href", `${base_url}#anchorRen`);
                $('.linkAnchorFor').attr("href", `${base_url}#anchorFor` );
                $('.linkAnchorMis').attr("href", `${base_url}#anchorMis` );

            }else{

                $('.linkAnchorCom').click(function(e){
                    e.preventDefault();
                    scrollAnchor('anchorCom');
                })
                $('.linkAnchorRen').click(function(e){
                    e.preventDefault();
                    scrollAnchor('anchorRen');
                })
                $('.linkAnchorFor').click(function(e){
                    e.preventDefault();
                    scrollAnchor('anchorFor');
                })
                $('.linkAnchorFaq').click(function(e){
                    e.preventDefault();
                    scrollAnchor('anchorFaq');
                })
                $('.linkAnchorPar').click(function(e){
                    e.preventDefault();
                    scrollAnchor('anchorPar');
                })

                $('.linkAnchorCon').click(function(e){
                    e.preventDefault();
                    scrollAnchor('anchorCon');
                })
            }

            console.log(path[0] + "testando path");
            if(path[1] == "cursos") {
                console.log("são cursos a url");
                $('.linkCursos').addClass('text-purple');
            }else{
                $(".linkAnchorAl").removeClass('text-purple');
            }
            window.location.pathname.split( '/' );
        }

        checkPath(pathArray);
    });

})($);

