window.onload = function() {
    // onload function need to start from the beginning
    var step_6 = new TimelineLite();
    step_6.to(".scroll_signal_right", .1, {
            display: 'none'
        })
        .to(".right_navigation", .1, {
            display: 'block'
        })
        .to(".right_navigation", .01, {
            className: 'right_navigation right_navigation_active'
        })
        .to("#anchorLink_move", .2, {
            y: 0
        })
        .to(".first-come", 0.2, {
            opacity: 1
        })
        .to(".first-come", 0.2, {
            className: "slideIn"
        })
        .to(".second-come", 0.2, {
            opacity: 1
        })
        .to(".second-come", 0.2, {
            className: "slideIn"
        })
        .to(".third-come", 0.2, {
            opacity: 1
        })
        .to(".third-come", 0.2, {
            className: "slideIn"
        })
        .to(".eranest_title  svg  g  path", 0.2, {
            opacity: 1
        })
        .to(".eranest_title  svg  g  path", 0.2, {
            className: "animated slideIn"
        })
        .to(".reg_symbol", 0.2, {
            opacity: 1
        })
        .to(".title_tagline", 0.2, {
            opacity: 1
        })
        .to(".title_tagline", 0.2, {
            className: "title_tagline slideInUp animated"
        });

    //bottom navigation scenes
    var nav_bottom = new TimelineLite();

    nav_bottom.to(".nav_line_8", 0.2, {
            opacity: 1
        })
        .to(".nav_line_8", 0.2, {
            className: "nav_draw_path"
        })
        .to(".nav_line_7", 0.2, {
            opacity: 1
        })
        .to(".nav_line_7", 0.2, {
            className: "nav_draw_path"
        })
        .to(".nav_line_6", 0.2, {
            opacity: 1
        })
        .to(".nav_line_6", 0.2, {
            className: "nav_draw_path"
        })
        .to(".nav_line_5", 0.2, {
            opacity: 1
        })
        .to(".nav_line_5", 0.2, {
            className: "nav_draw_path"
        })
        .to(".nav_line_4", 0.2, {
            opacity: 1
        })
        .to(".nav_line_4", 0.2, {
            className: "nav_draw_path"
        })
        .to(".nav_line_3", 0.2, {
            opacity: 1
        })
        .to(".nav_line_3", 0.2, {
            className: "nav_draw_path"
        })
        .to(".nav_line_2", 0.2, {
            opacity: 1
        })
        .to(".nav_line_2", 0.2, {
            className: "nav_draw_path"
        })
        .to(".nav_line_1", 0.2, {
            opacity: 1
        })
        .to(".nav_line_1", 0.2, {
            className: "nav_draw_path"
        })
        .to(".first_come_botm, .first_come_botm path", 0.2, {
            opacity: "1"
        })
        .to(".nav_left_logo path, .nav_left_logo circle", 0.2, {
            opacity: "1"
        })
        .to("#nav_right_bottom", 0.2, {
            opacity: ".4"
        })
        .to("#nav_right_bottom", 0.2, {
            opacity: ".8"
        })
        .to("#nav_right_bottom", 0.2, {
            opacity: "1"
        })
        .to("#nav_overlay_bottom", 0, {
            opacity: ".6"
        });
}

$(document).ready(function() {
    //int scroll
    var controller = new ScrollMagic.Controller({
        loglevel: 1
    });

    // Product section scenes
    var step_5 = new TimelineMax(),
        forward = true;
    step_5.to(".scroll_signal_right", .01, {
            display: 'block'
        })
        .to(".right_navigation", .01, {
            className: 'right_navigation right_navigation_active'
        })
        .to(".right_navigation", .01, {
            display: 'block'
        })
        .to("#anchorLink_move", .5, {
            y: 130
        })
        .to(".step_1_text ", .5, {
            display: 'block',
            width: '10px',
            height: '140px'
        }, "end")
        .to(".step_1_text ", .5, {
            display: 'block',
            width: '170px'
        })
        .to(".step_1_text_one", .5, {
            display: 'inline-block'
        })
        .to("span.step_1_text_two", .5, {
            display: 'inline-block'
        })
        .to("span.step_1_text_three", .5, {
            display: 'inline-block'
        })
        .to(".step_1_frame > .step_1_text > p > span", .5, {
            display: 'inline-block'
        }, "4")
        .from(".step_1_frame_img_1", 0.5, {
            display: 'none'
        }, "end")
        .from(".step_1_frame", 1, {
            y: -900
        }, "end")
        .from(".step_1_green_box", 2, {
            display: 'none',
            y: -700
        }, "end")
        .from(".step_1_left_text ", 3, {
            display: 'none',
            x: '150)'
        }, "end")
        .from(".step_1_left_round_shape", 3, {
            display: 'none'
        }, "3")
        .to(".step_1_left_round_shape", 3.1, {
            className: 'step_1_left_round_shape rotatetion_circle'
        }, "end")
        .from(".step_1_gone", 5, {
            y: -200
        }, "end");

    // Product section leave animation
    var step_5_leave = new TimelineMax({
            paused: true
        }),
        forward = true;

    step_5_leave.to(".redline_top", .5, {
            height: '50vh'
        }, "end")
        .to(".step_1_frame_img_1", .5, {
            y: 300
        }, "end")
        .to(".step_1_text", .5, {
            y: 130
        }, "end")
        .to(".step_1_green_box", .5, {
            y: 40
        }, "end")
        .to(".step_1_left_text ", .5, {
            y: 70
        }, "end")
        .to(".step_1_left_round_shape ", .5, {
            opacity: .6
        }, "end")
        .to(".redline_top", .8, {
            height: '100vh'
        }, "end")
        .to(".redline_top", .8, {
            className: 'redline_top redline_top_expand'
        }, "end")
        .to(".step_1_gone", .8, {
            background: '#e4e9e2'
        }, "end")
        .to(".step_1_gone > img", .8, {
            display: 'none'
        }, "end")
        .to(".step_1_frame_img_1", .8, {
            y: 800
        }, "end")
        .to(".step_1_text", .8, {
            y: 400
        }, "end")
        .to(".step_1_green_box", .8, {
            y: 400
        }, "end")
        .to(".step_1_left_text ", .8, {
            y: 700
        }, "end")
        .to(".step_1_left_round_shape ", .8, {
            opacity: 0
        }, "end")
        .to(".redline_top", .9, {
            display: 'none'
        })
        .to(".red_line_come", .5, {
            top: '-130px',
            width: '60px',
            height: '135vh',
            left: '-130px',
            background: '#e4e9e2'
        })
        .to("#step_1", 0, {
            backgroundColor: "#e4e9e2"
        })
        .to("#step_1 > *", 1, {
            opacity: '0'
        })
        .to("#step_1 > *", 2, {
            display: 'none'
        });

    // Clients section
    var controller = new ScrollMagic.Controller({
        loglevel: 2
    });

    // Clients section scenes
    var step_4 = new TimelineMax(),
        forward = true;
    step_4.to(".scroll_signal_right", .5, {
            display: 'block'
        })
        .to(".right_navigation", .1, {
            display: 'block'
        })
        .from("#step_2 > *", 0, {
            display: 'none'
        }, "end")
        .from(".step_two_bottle", 2, {
            y: -500
        }, "end")
        .from(".step_2_middle_shape_left", 1, {
            y: -800
        }, ".5")
        .from(".step_2_left_box_top > img", 1, {
            y: -300
        }, "end")
        .to("#angle_x5F_one", .5, {
            className: "step_fill_all"
        }, "2")
        .to("#angle_x5F_two", .5, {
            className: "step_fill_all"
        })
        .to("#angle_x5F_three", .5, {
            className: "step_fill_all"
        })
        .to("#step_x5F_1", .5, {
            className: "step_fill_all"
        }, "2")
        .to("#step_x5F_2", .5, {
            className: "step_fill_all"
        }, "2")
        .to("#step_x5F_3", .5, {
            className: "step_fill_all"
        }, "2")
        .from(".step_2_middle_round", 2, {
            display: 'none',
            transform: 'scale(.001)'
        }, "end")
        .to(".step_2_middle_round > svg", .5, {
            className: " rotatetion_circle"
        }, "3")
        .from(".step_2_left_round > svg", .2, {
            y: -400
        }, "end")
        .from(".step_2_text_section >p.step_2_text", .05, {
            x: -650
        }, "3")
        .from(".step_2_text_section >p.step_2_text_2", .5, {
            x: -650
        })
        .from(".step_2_text_section>p:last-child", 1, {
            x: -700
        })
        .to(".step_2_text_section > h2 >span:first-child", .5, {
            className: "active animated fadeIn"
        }, "3")
        .to(".step_2_text_section > h2 >span:nth-child(2)", .2, {
            className: "active animated fadeIn"
        })
        .to(".step_2_text_section > h2 >span:nth-child(3)", .2, {
            className: "active animated fadeIn"
        })
        .to(".step_2_text_section > h2 >span", .2, {
            className: "active animated fadeIn"
        })
        .from(".step_2_circle_hover ", .2, {
            transform: 'scale(.001)'
        }, "3")
        .from(".step_2_circle_hover > h3", .2, {
            transform: 'scale(.001)',
            display: 'none'
        }, "3");

    // Clients section leave scenens
    var step_4_leave = new TimelineMax({
            paused: true
        }),
        forward = true;

    step_4_leave.to(".step_2_circle_hover > h3", .1, {
            opacity: '0'
        }, "end")
        .to(".step_2_circle_hover ", .2, {
            padding: '0px',
            height: '5px',
            transform: 'scale(3 , 1)'
        })
        .to(".step_2_circle_hover > h3", .3, {
            display: 'none'
        })
        .to(".step_2_circle_hover > span ", .3, {
            display: 'block'
        })
        .to(".step_2_circle_hover ", .3, {
            transform: 'scale(15 , 1)'
        })
        .to(".step_2_middle_round > svg", .5, {
            opacity: '0'
        })
        .to(".step_2_circle_hover > span", .2, {
            width: '80%',
            margin: '0 auto 0 20%'
        })
        .to(".step_2_circle_hover > span ", .3, {
            display: 'none'
        })
        .to(".step_2_circle_hover  ", .1, {
            background: '#00756c'
        })
        .to(".step_2_circle_hover ", .1, {
            transform: 'scale(30 , 15)'
        })
        .to(".step_2_circle_hover ", .1, {
            transform: 'scale(30 , 80)'
        })
        .to(".step_2_circle_hover > span", .1, {
            width: '100%',
            margin: '0 '
        })
        .to(".step_2_left_box_top > img", .2, {
            y: 500
        }, "end")
        .to(".step_2_left_angle_btm", .2, {
            y: 400
        }, "end")
        .to(".step_2_text_section", .2, {
            y: 200
        }, "end")
        .to(".step_2_left_round > svg", .2, {
            opacity: 0
        }, "end")
        .to(".step_two_bottle", .2, {
            y: 150
        }, "end")
        .to(".step_2_middle_box_angle", .2, {
            y: 250
        }, "end")
        .to(".step_2_left_box_top > img", .3, {
            y: 800
        }, "end")
        .to(".step_2_left_angle_btm", .3, {
            y: 800
        }, "end")
        .to(".step_2_text_section", .3, {
            y: 800
        }, "end")
        .to(".step_two_bottle", .3, {
            y: 850
        }, "end")
        .to(".step_2_middle_box_angle", .3, {
            y: 800
        }, "end")
        .to(".step_2_middle_shape_left", .3, {
            y: 800
        }, "end")
        .to("#step_2", 1, {
            background: "#00756c"
        })
        .to("#step_2 > *", 1, {
            opacity: '0'
        })
        .to("#step_2 > *", 2.5, {
            display: 'none'
        });

    // Partners section scenes
    var controller = new ScrollMagic.Controller({
        loglevel: 3
    });

    var step_3 = new TimelineMax(),
        forward = true;
    step_3.to(".scroll_signal_right", .1, {
            display: 'block'
        })
        .to(".right_navigation", .1, {
            display: 'block'
        })
        .from("#step_3 > *", 0, {
            display: 'none'
        }, "end")
        .from(".step_3_top_section", 1.5, {
            y: -800
        }, "1")
        .from(".step_3_middle_box_2", .3, {
            y: -500
        })
        .from(".step_3_middle_section", 1.5, {
            y: -500
        }, "1")
        .from(".step_3_bottom_section", 1.5, {
            y: -700
        }, "1")
        .to("#step_x5F_3_x5F_r_x5F_1", 1.5, {
            display: "block"
        }, "3")
        .to("#step_x5F_3_x5F_r_x5F_1", .5, {
            className: "step_fill_all"
        })
        .to("#step_x5F_3_x5F_r_x5F_2", 1.5, {
            display: "block"
        }, "4")
        .to("#step_x5F_3_x5F_r_x5F_2", 1.5, {
            className: "step_fill_all"
        }, "4")
        .to("#step_x5F_3_x5F_r_x5F_3", 1.5, {
            display: "block"
        }, "4.5")
        .to("#step_x5F_3_x5F_r_x5F_3", 1.5, {
            className: "step_fill_all"
        }, "4.5")
        .to("#layer_x5F_3_x5F_1", .2, {
            display: "block"
        })
        .to("#layer_x5F_3_x5F_2", .5, {
            display: "block"
        })
        .to("#layer_x5F_3_x5F_2", .2, {
            className: "step_fill_all"
        }, "3")
        .to("#layer_x5F_3_x5F_1", .2, {
            className: "step_fill_all"
        }, "3")
        .to("#left_circle_step_3_circle", 1.5, {
            className: "animated zoomIn"
        }, "3")
        .to("#left_circle_step_3_circle", .2, {
            display: "block"
        })
        .from(".step_3_left_title", .5, {
            width: "0px",
            height: "0"
        }, "3.5")
        .from(".step_3_left_title > p:first-child", .5, {
            opacity: "0"
        }, "5")
        .from(".step_3_left_title > p:nth-child(2),.step_3_left_title > p:nth-child(3)", .5, {
            opacity: "0"
        }, "5.5")
        .from(".step_3_left_title > p:nth-child(4)", .5, {
            opacity: "0"
        }, "6")
        .from(".step_3_left_title > p:nth-child(5),.step_3_left_title > p:nth-child(6)", .5, {
            opacity: "0"
        }, "6")
        .to(".step_3_bottom_text", 1.5, {
            opacity: 1,
            display: "block"
        }, "2")
        .from(".step_3_top_right_small_box", 1.5, {
            right: "0"
        }, "4")
        .from(".step_3_left_section > img", 1.5, {
            y: -500
        }, "3");


    // Partners section leave scenens
    var step_3_leave = new TimelineMax({
            paused: true
        }),
        forward = true;

    step_3_leave.to(".step_3_middile_overlay_right", .5, {
            y: 600
        }, "end")
        .to(".step_3_left_title", .5, {
            y: 100
        }, "end")
        .to(".step_3_left_section > img", .5, {
            y: 700
        }, "end")
        .to(".step_3_image_section", .5, {
            y: 110
        }, "end")
        .to(".step_3_middle_section", .5, {
            y: 50
        }, "end")
        .to(".step_3_image_section", .7, {
            y: 150
        }, "end")
        .to(".step_3_middle_section ", .7, {
            y: 150
        }, "end")
        .to(".step_3_top_section > img", .7, {
            position: 'relative',
            y: 600
        }, "end")
        .to("#step_3_leave_svg ", .7, {
            y: -270
        }, "end")
        .to(".step_3_left_title", .7, {
            y: 320
        }, "end")
        .to(".step_3_middle_box_2", .7, {
            y: 320
        }, "end")
        .to(".step_3_middile_overlay_left ", 0, {
            y: 820
        })
        .to("#left_circle_step_3_circle", .7, {
            opacity: 0
        }, "end")
        .to("#step_3_leave_svg_dote", 1, {
            fill: '#bcbaae',
            stroke: '#E27A2C',
            transform: 'scale(20)'
        }, "end")
        .to(".step_3_bottom_section , .step_3_bottom_section, .step_3_middle_section  > img , .step_3_middle_section > .step_3_middle_box_2 > img , .step_3_left_title, .step_3_middile_overlay_right", 1.5, {
            y: 700
        }, "end")
        .to("#step_3_leave_svg  circle", .1, {
            display: 'none'
        })
        .to("#step_3_leave_svg_dote", .2, {
            display: 'block',
            fill: '#bcbaae',
            stroke: '#E27A2C',
            transform: 'scale(400)'
        })
        .to("#step_3_leave_svg", .2, {
            x: -150,
            y: -843
        }, "2")
        .to("#step_3", 1, {
            background: "#bcbaae"
        })
        .to("#step_3 > *", 1, {
            opacity: '0'
        })
        .to("#step_3 > *", 3, {
            display: 'none'
        });

    //int scroll
    // Careers section scenens
    var controller = new ScrollMagic.Controller({
        loglevel: 4
    });

    // 	Careers section scenes
    var step_2 = new TimelineMax(),
        forward = true;
    step_2.to(".scroll_signal_right", .1, {
            display: 'block'
        })
        .to(".right_navigation", .1, {
            display: 'block'
        })
        .to(".right_navigation", .01, {
            className: 'right_navigation right_navigation_active'
        })
        .from("#step_4 > *", 0, {
            display: 'none'
        }, "end")
        .from(".step_4_right_top_round_top", 1.5, {
            display: 'none',
            transform: 'scale(.001)'
        }, "1")
        .from(".step_4_left_wave_overlay", 1.5, {
            display: 'none',
            y: -750
        }, "1")
        .from(".step_4_left_circle_texture_2", 1.5, {
            y: -50,
            x: -100
        }, "2")
        .from(".step_4_left_circle_texture_1", 1.5, {
            x: -500
        }, "2")
        .from(".step_4_left_circle_4", 1.5, {
            y: -700,
            x: -500
        }, "2")
        .from(".step_4_left_circle_3", 1.5, {
            y: -500,
            x: -500
        }, "2")
        .from(".step_4_left_circle_6", 1.5, {
            y: -300,
            x: -300
        }, "2")
        .from(".step_4_left_circle_5", 1.5, {
            y: -500,
            x: -100
        }, "2")
        .from(".step_4_left_circle_texture_3", 1.5, {
            y: -700
        }, "2")
        .from(".step_4_middle_circle_3", 1.5, {
            y: -600,
            x: -200
        }, "2")
        .from(".step_4_middle_circle_4 > img", 1.5, {
            display: 'none',
            transform: 'scale(.001)'
        }, "2")
        .from(".step_4_left_circle_8", 1.5, {
            y: -850
        }, "2")
        .from(".step_4_left_circle_7", 1.5, {
            display: 'none',
            transform: 'scale(.001)'
        }, "3")
        .from(".step_4_left_circle_7 > img", 1.5, {
            transform: 'scale(.001)'
        }, "3")
        .from(".step_4_middle_circle_1", .5, {
            opacity: 0
        }, "3")
        .from(".step_4_middle_circle_1 > img", 1.5, {
            transform: 'scale(.001)'
        }, "3")
        .from(".step_4_left_circle_2", 1.5, {
            y: -400,
            x: -100
        }, "3")
        .from(".step_4_left_circle_1", 1.5, {
            y: -500,
            x: -200
        }, "3")
        .to(".step_4_middle_box_full_overlay", 1.5, {
            width: "100%"
        }, "3")
        .from(".step_4_middle_circle_2", 1.5, {
            display: 'none',
            transform: 'scale(.001)'
        }, "3")
        .from(".step_4_middle_bottom", 1.5, {
            opacity: '0'
        }, "4")
        .from(".step_4_middle_box_text >p:first-child", 1.5, {
            x: 1000
        }, "5")
        .from(".step_4_middle_box_text >p:nth-child(2)", .5, {
            x: 1000
        })
        .from(".step_4_middle_box_text_last", .5, {
            x: 1000
        })
        .from(".step_4_middle_box_text >p span:first-child", .5, {
            display: 'none',
            x: -80
        })
        .to(".step_4_right_top > svg", 1.5, {
            opacity: "1"
        }, "4")
        .from(".step_4_middle_circle_4", 1.5, {
            opacity: 0
        }, "3")
        .to(".step_4_overlay_main", 1.5, {
            opacity: "1"
        }, "3")
        .to(".step_4_overlay_main", 1.5, {
            className: "step_4_overlay_main step_4_overlay_main_over "
        }, "3");

    // Careers section leave
    var step_2_leave = new TimelineMax({
            paused: true
        }),
        forward = true;

    step_2_leave.to(".step_4_middle_box", .5, {
            y: 200
        })
        .to(".step_4_middle_circle_1 > img", .5, {
            transform: 'scale(.001)'
        }, "end")
        .to(".step_4_middle_box_text > p:nth-child(2)", .5, {
            top: '-30px'
        }, "end")
        .to(".step_4_left_circle_1", .5, {
            y: 200,
            x: -200
        }, "end")
        .to(".step_4_left_circle_2", .5, {
            y: 250,
            x: -200
        }, "end")
        .to(".step_4_left_circle_3", .5, {
            y: 210,
            x: -480
        }, "end")
        .to(".step_4_left_circle_4", .5, {
            y: 240,
            x: -260
        }, "end")
        .to(".step_4_left_circle_5", .5, {
            y: 400,
            x: -380
        }, "end")
        .to(".step_4_left_circle_texture_2", .5, {
            y: 600,
            x: -400
        }, "end")
        .to(".step_4_left_circle_texture_1", .5, {
            y: 900,
            x: -40
        }, "end")
        .to(".step_4_left_wave_overlay", .5, {
            display: 'none'
        }, "end")
        .to(".step_4_left_wave_overlay > img", .7, {
            display: 'none'
        }, "end")
        .to(".step_4_middle_box_full_overlay", 1, {
            width: "100%",
            y: -200,
            bottom: "-0px"
        }, "end")
        .to(".step_4_middle_box_full_overlay", 1, {
            width: "100%",
            y: -200,
            bottom: "-80px",
            transform: 'scale(1.8 , 1)'
        }, "end")
        .to(".step_4_middle_box_full_overlay", 1.2, {
            width: "100%",
            bottom: "-130px",
            y: -700,
            transform: 'scale(3 , 1)'
        }, "end")
        .to(".step_4_right_top_round_top", 1.2, {
            transform: 'scale(.001)'
        }, "end")
        .to(".step_4_middle_circle_2", 1.2, {
            y: 300,
            x: -800
        }, "end")
        .to(".step_4_middle_circle_1 , .step_4_middle_circle_4", 1.2, {
            transform: 'scale(.001)'
        }, "end")
        .to(".step_4_right_top", 1.2, {
            opacity: '0'
        }, "end")
        .to(".step_4_middle_box_text , .step_4_overlay_main ", 1.2, {
            opacity: '0'
        }, "end")
        .to(".step_4_left_circle_6", 1.2, {
            y: 200,
            x: -516
        }, "end")
        .to(".step_4_left_circle_1", 1.2, {
            y: 438,
            x: -250
        }, "end")
        .to(".step_4_left_circle_8 , .step_4_middle_circle_3", 1.2, {
            y: 438,
            x: -250
        }, "end")
        .to(".step_4_left_circle_7 ", 1.2, {
            transform: 'scale(.001)'
        }, "end")
        .to(".step_4_middle_box_full_overlay", 1.3, {
            background: '#f9f5e9'
        }, "end")
        .to(".step_4_left_circle_1 , .step_4_left_circle_texture_3 , .step_4_left_circle_texture_2 , .step_4_middle_circle_2 , .step_4_left_circle_texture_2", 1.3, {
            y: 438,
            x: -650
        }, "end")
        .to("#step_4", .1, {
            background: '#f9f5e9'
        })
        .to("#step_4 > *", 1, {
            opacity: '0'
        })
        .to("#step_4 > *", 2, {
            display: 'none'
        });

    // Contact scenes
    var controller = new ScrollMagic.Controller({
        loglevel: 5
    });

    // Contact sectopn scenes
    var step_1 = new TimelineMax(),
        forward = true;
    step_1.to(".right_navigation ", .1, {
            display: 'none'
        })
        .to("#fp-nav", .1, {
            display: 'none'
        })
        .to(".scroll_signal_right", .1, {
            display: 'none'
        })
        .from("#step_5 > *", 0, {
            display: 'none'
        }, "end")
        .from(".step_5_image_box", 1.5, {
            y: -500
        }, "2")
        .from(".step_5_bottom_left_img", 1.2, {
            y: -800
        }, "2")
        .from("p.step_5_left_1", 1.5, {
            y: -500
        }, "2")
        .from("p.step_5_left_2", 1.5, {
            y: -500
        }, "2")
        .from("p.step_5_left_3", 1, {
            y: -600
        }, "2")
        .from("p.step_5_left_4", .5, {
            y: -700
        }, "2")
        .from(".step_5_top_text > h3", .2, {
            y: -400
        }, "2.5")
        .to("span.step_5_left_1_line", 1.5, {
            width: "40px"
        }, "3")
        .to("span.step_5_left_1_line", 1.5, {
            width: "115px"
        }, "3")
        .from(".step_bottom_circle_over", 1.5, {
            display: 'none',
            transform: 'scale(.001)'
        }, "2")
        .to(".step_5_contact_btn", 1.5, {
            width: '200px'
        }, "4")
        .to("span.step_5_left_4_line", 1.5, {
            width: "160px"
        }, "4")
        .from(".step_5_contact_btn > span", 1.5, {
            visibility: "hidden"
        }, "4.2")
        .from(".step_5_bottom_pattern", 1.5, {
            y: -900
        }, "3");



    // function
    var step_0_leave = new TimelineMax();
    var step_0_nav = new TimelineMax();
    var step_1_leave = new TimelineMax();
    var step_6_leave = new TimelineMax();
    var step_0_leave = new TimelineMax();
    var step_6 = new TimelineMax();
    var step_7 = new TimelineMax();

    // Act navigation based on step
    var step_1_nav = new TimelineMax({
            paused: true
        }),
        forward = true;
    step_1_nav.to("#nav_overlay_bottom > rect", 0.5, {
            fill: '#f9f5e9'
        }, "3")
        .to(".nav_left_logo", 0, {
            fill: 'black'
        })
        .to(".navbar-default .navbar-nav:first-child>li>a", 0, {
            color: 'black'
        })
        .to(".nav-bottom_second-left >li>a", 0, {
            color: '#6d6d6d'
        });

    // Careers
    var step_2_nav = new TimelineMax({
            paused: true
        }),
        forward = true;
    step_2_nav.to("#nav_overlay_bottom > rect", 0.5, {
            fill: 'rgba(0, 0, 0, 0.27)'
        }, "3")
        .to(".nav_left_logo", 0, {
            fill: 'white'
        })
        .to(".navbar-default .navbar-nav:first-child>li>a", 0, {
            color: 'white'
        })
        .to(".nav-bottom_second-left >li>a", 0, {
            color: 'white'
        });

    // Partners
    var step_3_nav = new TimelineMax({
            paused: true
        }),
        forward = true;
    step_3_nav.to("#nav_overlay_bottom > rect", 0.5, {
            fill: 'rgba(0, 0, 0, 0.27)'
        }, "3")
        .to(".nav_left_logo", 0, {
            fill: 'white'
        })
        .to(".navbar-default .navbar-nav:first-child>li>a", 0, {
            color: 'white'
        })
        .to(".nav-bottom_second-left >li>a", 0, {
            color: 'white'
        });

    // Clients
    var step_4_nav = new TimelineMax({
            paused: true
        }),
        forward = true;
    step_4_nav.to("#nav_overlay_bottom > rect", 0.5, {
            fill: '#f9f5e9'
        }, "2.5")
        .to(".nav_left_logo", 0, {
            fill: 'black'
        })
        .to(".navbar-default .navbar-nav:first-child>li>a", 0, {
            color: 'black'
        })
        .to(".nav-bottom_second-left >li>a", 0, {
            color: '#6d6d6d'
        });

    // Products
    var step_5_nav = new TimelineMax({
            paused: true
        }),
        forward = true;
    step_5_nav.to("#nav_overlay_bottom > rect", 0.5, {
            fill: 'white'
        }, "3")
        .to(".nav_left_logo", 0, {
            fill: 'black'
        })
        .to(".navbar-default .navbar-nav:first-child>li>a", 0, {
            color: 'black'
        })
        .to(".nav-bottom_second-left >li>a", 0, {
            color: '#6d6d6d'
        });

    // About
    var step_6_nav = new TimelineMax({
            paused: true
        }),
        forward = true;
    step_6_nav.to("#nav_overlay_bottom > rect", 0.5, {
            fill: 'white'
        }, "3")
        .to(".nav_left_logo", 0, {
            fill: 'black'
        })
        .to(".navbar-default .navbar-nav:first-child>li>a", 0, {
            color: 'black'
        })
        .to(".nav-bottom_second-left >li>a", 0, {
            color: '#6d6d6d'
        });

    // onload section redirection
    var is_fist_time_load = true;
    $(document).ready(function() {
        if (is_fist_time_load) {
            window.location = "#About"
        }

        // right navigation
        $("#fp-nav a").on("click", function(e) {
            is_clicked = true;
        });
    })
    var is_clicked = false;

    // Bottom navigation trigger
    //right navigation move
    $(".about_nav").on("click", function() {
        is_clicked = true;
        step_6_nav.play();
    })
    $(".products_nav").on("click", function() {
        is_clicked = true;
        step_5_nav.play();
    })
    $(".clients_nav").on("click", function() {
        is_clicked = true;
        step_4_nav.play();
    })
    $(".partners_nav").on("click", function() {
        is_clicked = true;
        step_3_nav.play();
    })
    $(".careers_nav").on("click", function() {
        is_clicked = true;
        step_2_nav.play();
    })
    $(".contact_nav").on("click", function() {
        is_clicked = true;
        step_1_nav.play();
    })


    var animationIsFinished = false,
        timeoutId, delay = 2000;
    setInterval(function() {
        animationIsFinished = false;
    }, delay + 2);

    var anchors = ['Contact', 'Careers', 'Partners', 'Clients', 'Products', 'About'];

    function killOtherAnimes(index) {
        for (var i = 1; i <= 6; i++) {
            eval("step_" + (i) + "_leave").progress(0);
            eval("step_" + (i) + "_leave").kill();
            if (i != index) {
                eval("step_" + (i)).kill();
            }
        }
    }
    // fullpagejs start here
    $('#fullpage').fullpage({
        anchors: anchors,
        sectionsColor: ['#f9f5e9', '#bcbaae', '#00756c', '#e5eae3', '#f4f4f4', '#f4f4f4'],
        css3: true,
        onLeave: function(index, nextIndex, direction) {
            is_fist_time_load = false;
            if (is_clicked == false) {
                if (direction == "down") {
                    if (timeoutId) clearTimeout(timeoutId);
                    var curTime = new Date().getTime();
                    $('section').addClass('animate');
                    switch (nextIndex) {
                        case 1:
                            delay = 4000;
                            break;
                        case 2:
                            delay = 2500;
                            break; //contact leave
                        case 3:
                            delay = 3000;
                            break; //careers leave
                        case 4:
                            delay = 3000;
                            break; //Partners leave
                        case 5:
                            delay = 3000;
                            break; //Clients leave
                        case 6:
                            delay = 3000;
                            break; //products leave
                    }
                    if (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6) {
                        eval("step_" + (nextIndex) + "_leave").kill(1);
                        eval("step_" + (nextIndex) + "_leave").progress(1);
                        eval("step_" + (nextIndex) + "_leave").progress(2);
                        eval("step_" + (index)).progress(1);
                        eval("step_" + (index)).reverse().timeScale(2.5);
                    }

                    timeoutId = setTimeout(function() {
                        animationIsFinished = true;
                        $.fn.fullpage.moveTo(nextIndex);
                    }, delay);
                    eval("step_" + (nextIndex) + "_leave").progress(1);
                    eval("step_" + (nextIndex - 1) + "_nav").play();
                    eval("step_" + (nextIndex) + "_leave").reverse().timeScale(1);

                    return animationIsFinished;
                } else if (direction == "up") {
                    if (timeoutId) clearTimeout(timeoutId);
                    var curTime = new Date().getTime();
                    $('section').addClass('animate');
                    switch (nextIndex) {
                        case 1:
                            delay = 2500;
                            break;
                        case 2:
                            delay = 2600;
                            break;
                        case 3:
                            delay = 3500;
                            break;
                        case 4:
                            delay = 4000;
                            break;
                        case 5:
                            delay = 1000;
                            break;
                    }

                    // direction up scenes and delay functions
                    if (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6) {
                        eval("step_" + (index + 1)).kill();
                        eval("step_" + (index + 1)).progress(0);
                        eval("step_" + (index - 1)).kill();
                        eval("step_" + (index - 1)).progress(0);
                        eval("step_" + (index) + "_leave").progress(0);
                        eval("step_" + (index) + "_leave").kill();
                        eval("step_" + (index) + "_leave").timeScale(1).play();
                        eval("step_" + (index) + "_nav").play();
                    }
                    timeoutId = setTimeout(function() {
                        animationIsFinished = true;
                        $.fn.fullpage.moveTo(nextIndex);
                    }, delay);

                    if (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6) {

                        // direction up scenes(after delay)
                        eval("step_" + (index - 1)).kill();
                        eval("step_" + (index - 1)).timeScale(1).play();
                        eval("step_" + (index - 1) + "_nav").play();
                        eval("step_" + (index) + "_leave").progress(0);
                        eval("step_" + (index)).kill();
                    }
                    return animationIsFinished;
                } else return true;
            } else {
                // onclick function and animation scenes
                eval("step_" + (nextIndex) + "_leave").progress(0);
                eval("step_" + (nextIndex) + "_leave").kill();
                eval("step_" + (nextIndex) + "_leave").paused();
                eval("step_" + (nextIndex)).kill();
                eval("step_" + (nextIndex)).progress(0);
                eval("step_" + (nextIndex)).timeScale(2).play();
                eval("step_" + (index - 1) + "_nav").play();

                timeoutId = setTimeout(function() {
                    $.fn.fullpage.moveTo(nextIndex);
                    animationIsFinished = true;
                }, 0);
                return animationIsFinished;
            }
        },
        afterLoad: function(anchorLink, index) {
            animationIsFinished = true;
            is_clicked = false;
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            return true;
        },
        navigation: true,
        css3: true,
        scrollingSpeed: 0,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 0,
        scrollBar: false,
        easing: 'easeInOutCubic',
    });
});
