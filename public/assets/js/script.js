"use strict";
$(document).ready(function() {
    var e = $(window);
    var d = $("body");
    var c = d[0].className;
    $(".main-menu").attr("id", c);
    $(".card-header-right .close-card").on("click", function() {
        var a = $(this);
        a.parents(".card").animate({
            opacity: "0",
            "-webkit-transform": "scale3d(.3, .3, .3)",
            transform: "scale3d(.3, .3, .3)"
        });
        setTimeout(function() {
            a.parents(".card").remove()
        }, 800)
    });
    $(".card-header-right .reload-card").on("click", function() {
        var a = $(this);
        a.parents(".card").addClass("card-load");
        a.parents(".card").append('<div class="card-loader"><i class="icofont icofont-refresh rotate-refresh"></div>');
        setTimeout(function() {
            a.parents(".card").children(".card-loader").remove();
            a.parents(".card").removeClass("card-load")
        }, 3000)
    });
    $(".card-header-right .card-option .icofont-simple-left").on("click", function() {
        var a = $(this);
        if (a.hasClass("icofont-simple-right")) {
            a.parents(".card-option").animate({
                width: "35px",
            })
        } else {
            a.parents(".card-option").animate({
                width: "180px",
            })
        }
        $(this).toggleClass("icofont-simple-right").fadeIn("slow")
    });
    $(".card-header-right .minimize-card").on("click", function() {
        var g = $(this);
        var a = $(g.parents(".card"));
        var f = $(a).children(".card-block").slideToggle();
        $(this).toggleClass("icofont-plus").fadeIn("slow")
    });
    $(".card-header-right .full-card").on("click", function() {
        var f = $(this);
        var a = $(f.parents(".card"));
        a.toggleClass("full-card");
        $(this).toggleClass("icofont-resize")
    });
    $(".card-header-right .icofont-spinner-alt-5").on("mouseenter mouseleave", function() {
        $(this).toggleClass("rotate-refresh").fadeIn("slow")
    });
    $("#more-details").on("click", function() {
        $(".more-details").slideToggle(500)
    });

    var flag=true;

    $(".mobile-options").on("click", function() {
      if(flag){
        $(".navbar-container .nav-right").fadeIn(200);
      }else{
        $(".navbar-container .nav-right").fadeOut(200);
      }
      flag=!flag;
    });
    $(".main-search").on("click", function() {
        $("#morphsearch").addClass("open")
    });
    $(".morphsearch-close").on("click", function() {
        $("#morphsearch").removeClass("open")
    });
    $.mCustomScrollbar.defaults.axis = "yx";
    $("#styleSelector .style-cont").slimScroll({
        setTop: "10px",
        height: "calc(100vh - 515px)",
    });
    $(".main-menu").mCustomScrollbar({
        setTop: "10px",
        setHeight: "calc(100% - 80px)",
    });
    var b = $(window).height() - 80;
    $(".main-friend-list").slimScroll({
        height: b,
        allowPageScroll: false,
        wheelStep: 5,
        color: "#1b8bf9"
    });
    $("#search-friends").on("keyup", function() {
        var a = $(this).val().toLowerCase();
        $(".userlist-box .media-body .chat-header").each(function() {
            var f = $(this).text().toLowerCase();
            $(this).closest(".userlist-box")[f.indexOf(a) !== -1 ? "show" : "hide"]()
        })
    });
    $(".displayChatbox").on("click", function() {
        var a = $(".pcoded").attr("vertical-placement");
        if (a == "right") {
            var f = {
                direction: "left"
            }
        } else {
            var f = {
                direction: "right"
            }
        }
        $(".showChat").toggle("slide", f, 500)
    });
    $(".userlist-box").on("click", function() {
        var a = $(".pcoded").attr("vertical-placement");
        if (a == "right") {
            var f = {
                direction: "left"
            }
        } else {
            var f = {
                direction: "right"
            }
        }
        $(".showChat_inner").toggle("slide", f, 500)
    });
    $(".back_chatBox").on("click", function() {
        var a = $(".pcoded").attr("vertical-placement");
        if (a == "right") {
            var f = {
                direction: "left"
            }
        } else {
            var f = {
                direction: "right"
            }
        }
        $(".showChat_inner").toggle("slide", f, 500);
        $(".showChat").css("display", "block")
    });
    i18next.use(window.i18nextXHRBackend).init({
        debug: !1,
        fallbackLng: !1,
        backend: {
            loadPath: "../files/assets/locales/{{lng}}/{{ns}}.json"
        },
        returnObjects: !0
    }, function(f, a) {
        jqueryI18next.init(i18next, $)
    }), $(".lng-dropdown a").on("click", function() {
        var g = $(this),
            f = g.data("lng");
        i18next.changeLanguage(f, function(i, h) {
            $(".main-menu").localize()
        }), g.parent("li").siblings("li").children("a").removeClass("active"), g.addClass("active"), $(".lng-dropdown a").removeClass("active");
        var a = $('.lng-dropdown a[data-lng="' + f + '"]').addClass("active");
        $(".lng-dropdown #dropdown-active-item").html(a.html())
    })
});
$(document).ready(function() {

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $(".theme-loader").fadeOut("slow", function() {
        $(this).remove()
    })
});

function toggleFullScreen() {
    var b = $(window).height() - 10;
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
        } else {
            if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen()
            } else {
                if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                }
            }
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen()
        } else {
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else {
                if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                }
            }
        }
    }
}
$(document).on("click", '[data-toggle="lightbox"]', function(a) {
    a.preventDefault();
    $(this).ekkoLightbox()
});
$("#styleSelector").append('<div class="selector-toggle"><a href="javascript:void(0)"></a></div><ul><li><p class="selector-title main-title st-main-title"><b>Guru </b>able Customizer</p><span class="text-muted">Live customizer with tons of options</span></li><li><p class="selector-title">Main layouts</p></li><li><div class="theme-color"><a href="#" class="navbar-theme" navbar-theme="themelight1"><span class="head"></span><span class="cont"></span></a><a href="#" class="navbar-theme" navbar-theme="theme1"><span class="head"></span><span class="cont"></span></a><a href="#" class="Layout-type" layout-type="light"><span class="head"></span><span class="cont"></span></a><a href="#" class="Layout-type" layout-type="dark"><span class="head"></span><span class="cont"></span></a><a href="#" class="Layout-type" layout-type="img"><span class="head"></span><span class="cont"></span></a></div></li></ul><div class="style-cont m-t-10"><ul class="nav nav-tabs  tabs" role="tablist"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#sel-layout" role="tab">Layouts</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#sel-sidebar-setting" role="tab">Sidebar Settings</a></li></ul><div class="tab-content tabs"><div class="tab-pane active" id="sel-layout" role="tabpanel"><ul><li class="theme-option"><div class="checkbox-fade fade-in-primary"><label><input type="checkbox" value="false" id="theme-layout" name="vertical-item-border"><span class="cr"><i class="cr-icon icofont icofont-ui-check txt-success"></i></span><span>Box Layout - with patterns</span></label></div></li><li class="theme-option d-none" id="bg-pattern-visiblity"><div class="theme-color"><a href="#" class="themebg-pattern small" themebg-pattern="pattern1">&nbsp;</a><a href="#" class="themebg-pattern small" themebg-pattern="pattern2">&nbsp;</a><a href="#" class="themebg-pattern small" themebg-pattern="pattern3">&nbsp;</a><a href="#" class="themebg-pattern small" themebg-pattern="pattern4">&nbsp;</a><a href="#" class="themebg-pattern small" themebg-pattern="pattern5">&nbsp;</a><a href="#" class="themebg-pattern small" themebg-pattern="pattern6">&nbsp;</a></div></li><li class="theme-option"><div class="checkbox-fade fade-in-primary"><label><input type="checkbox" value="false" id="sidebar-position" name="sidebar-position" checked><span class="cr"><i class="cr-icon icofont icofont-ui-check txt-success"></i></span><span>Fixed Sidebar Position</span></label></div></li><li class="theme-option"><div class="checkbox-fade fade-in-primary"><label><input type="checkbox" value="false" id="header-position" name="header-position" checked><span class="cr"><i class="cr-icon icofont icofont-ui-check txt-success"></i></span><span>Fixed Header Position</span></label></div></li></ul></div><div class="tab-pane" id="sel-sidebar-setting" role="tabpanel"><ul><li class="theme-option"><p class="sub-title drp-title">Menu Type</p><div class="form-radio" id="menu-effect"><div class="radio radiofill radio-primary radio-inline"><label><input type="radio" name="radio" value="st1" onclick="handlemenutype(this.value)"><i class="helper"></i><span class="micon st1"><i class="ti-home"></i><b>D</b></span></label></div><div class="radio radiofill radio-success radio-inline"><label><input type="radio" name="radio" value="st2" onclick="handlemenutype(this.value)" checked="true"><i class="helper"></i><span class="micon st2"><i class="ti-home"></i><b>D</b></span></label></div><div class="radio radiofill radio-warning radio-inline"><label><input type="radio" name="radio" value="st3" onclick="handlemenutype(this.value)"><i class="helper"></i><span class="micon st3"><i class="ti-home"></i><b>D</b></span></label></div><div class="radio radiofill radio-danger radio-inline"><label><input type="radio" name="radio" value="st4" onclick="handlemenutype(this.value)"><i class="helper"></i><span class="micon st4"><i class="ti-home"></i><b>D</b></span></label></div><div class="radio radiofill radio-primary radio-inline"><label><input type="radio" name="radio" value="st5" onclick="handlemenutype(this.value)"><i class="helper"></i><span class="micon st5"><i class="ti-home"></i><b>D</b></span></label></div></div></li><li class="theme-option"><p class="sub-title drp-title">SideBar Effect</p><select id="vertical-menu-effect" class="form-control minimal"><option name="vertical-menu-effect" value="shrink">shrink</option><option name="vertical-menu-effect" value="overlay">overlay</option><option name="vertical-menu-effect" value="push">Push</option></select></li><li class="theme-option"><p class="sub-title drp-title">Hide/Show Border</p><select id="vertical-border-style" class="form-control minimal"><option name="vertical-border-style" value="solid">Style 1</option><option name="vertical-border-style" value="dotted">Style 2</option><option name="vertical-border-style" value="dashed">Style 3</option><option name="vertical-border-style" value="none">No Border</option></select></li><li class="theme-option"><p class="sub-title drp-title">Drop-Down Icon</p><select id="vertical-dropdown-icon" class="form-control minimal"><option name="vertical-dropdown-icon" value="style1">Style 1</option><option name="vertical-dropdown-icon" value="style2">style 2</option><option name="vertical-dropdown-icon" value="style3">style 3</option></select></li><li class="theme-option"><p class="sub-title drp-title">Sub Menu Drop-down Icon</p><select id="vertical-subitem-icon" class="form-control minimal"><option name="vertical-subitem-icon" value="style1">Style 1</option><option name="vertical-subitem-icon" value="style2">style 2</option><option name="vertical-subitem-icon" value="style3">style 3</option><option name="vertical-subitem-icon" value="style4">style 4</option><option name="vertical-subitem-icon" value="style5">style 5</option><option name="vertical-subitem-icon" value="style6">style 6</option></select></li></ul></div><ul><li><p class="selector-title">Header Brand color</p></li><li class="theme-option"><div class="theme-color"><a href="#" class="logo-theme" logo-theme="theme1"><span class="head"></span><span class="cont"></span></a><a href="#" class="logo-theme" logo-theme="theme2"><span class="head"></span><span class="cont"></span></a><a href="#" class="logo-theme" logo-theme="theme3"><span class="head"></span><span class="cont"></span></a><a href="#" class="logo-theme" logo-theme="theme4"><span class="head"></span><span class="cont"></span></a><a href="#" class="logo-theme" logo-theme="theme5"><span class="head"></span><span class="cont"></span></a></div></li><li><p class="selector-title">Header color</p></li><li class="theme-option"><div class="theme-color"><a href="#" class="header-theme" header-theme="theme1"><span class="head"></span><span class="cont"></span></a><a href="#" class="header-theme" header-theme="theme2"><span class="head"></span><span class="cont"></span></a><a href="#" class="header-theme" header-theme="theme3"><span class="head"></span><span class="cont"></span></a><a href="#" class="header-theme" header-theme="theme4"><span class="head"></span><span class="cont"></span></a><a href="#" class="header-theme" header-theme="theme5"><span class="head"></span><span class="cont"></span></a><a href="#" class="header-theme" header-theme="theme6"><span class="head"></span><span class="cont"></span></a></div></li><li><p class="selector-title">Navbar image</p></li><li class="theme-option"><div class="theme-color"><a href="#" class="navbg-pattern image" navbg-pattern="img1">&nbsp;</a><a href="#" class="navbg-pattern image" navbg-pattern="img2">&nbsp;</a><a href="#" class="navbg-pattern image" navbg-pattern="img3">&nbsp;</a><a href="#" class="navbg-pattern image" navbg-pattern="img4">&nbsp;</a><a href="#" class="navbg-pattern image" navbg-pattern="img5">&nbsp;</a></div></li><li><p class="selector-title">Active link color</p></li><li class="theme-option"><div class="theme-color"><a href="#" class="active-item-theme small" active-item-theme="theme1">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme2">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme3">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme4">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme5">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme6">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme7">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme8">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme9">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme10">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme11">&nbsp;</a><a href="#" class="active-item-theme small" active-item-theme="theme12">&nbsp;</a></div></li><li><p class="selector-title">Menu Caption Color</p></li><li class="theme-option"><div class="theme-color"><a href="#" class="leftheader-theme small" lheader-theme="theme1">&nbsp;</a><a href="#" class="leftheader-theme small" lheader-theme="theme2">&nbsp;</a><a href="#" class="leftheader-theme small" lheader-theme="theme3">&nbsp;</a><a href="#" class="leftheader-theme small" lheader-theme="theme4">&nbsp;</a><a href="#" class="leftheader-theme small" lheader-theme="theme5">&nbsp;</a><a href="#" class="leftheader-theme small" lheader-theme="theme6">&nbsp;</a></div></li></ul></div></div><ul><li><a href="https://codedthemes.com/item/guru-able-lite-free-admin-template/" target="_blank" class="btn btn-success btn-block m-r-15 m-t-10 m-b-10">Free ! Download Lite Version</a><a href="http://html.codedthemes.com/guru-able/doc" target="_blank" class="btn btn-primary btn-block m-r-15 m-t-5 m-b-10">Online Documentation</a></li><li class="text-center"><span class="text-center f-18 m-t-15 m-b-15 d-block">Thank you for sharing !</span><a href="https://www.facebook.com/codedthemes" target="_blank" class="btn btn-facebook soc-icon m-b-20"><i class="icofont icofont-social-facebook"></i></a><a href="https://twitter.com/codedthemes" target="_blank" class="btn btn-twitter soc-icon m-l-20 m-b-20"><i class="icofont icofont-social-twitter"></i></a></li></ul>');
