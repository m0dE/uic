var ajaxRevslider;
var INVETEX_STORAGE = '';

jQuery(document).ready(function() {
    "use strict";
    sliderInit();
});

// Revolution slider initialization
function sliderInit() {
    "use strict";

    if (jQuery('.slider_wrap').length > 0) {
        // CUSTOM AJAX CONTENT LOADING FUNCTION
        ajaxRevslider = function(obj) {
            "use strict";
            // obj.type : Post Type
            // obj.id : ID of Content to Load
            // obj.aspectratio : The Aspect Ratio of the Container / Media
            // obj.selector : The Container Selector where the Content of Ajax will be injected. It is done via the Essential Grid on Return of Content

            var content = "";

            data = {};
            data.action = 'revslider_ajax_call_front';
            data.client_action = 'get_slider_html';
            data.token = 'a18ccc26b7';
            data.type = obj.type;
            data.id = obj.id;
            data.aspectratio = obj.aspectratio;

            // SYNC AJAX REQUEST
            jQuery.ajax({
                type: "post",
                url: "",
                dataType: 'json',
                data: data,
                async: false,
                success: function(ret, textStatus, XMLHttpRequest) {
                    if (ret.success == true)
                        content = ret.data;
                },
                error: function(e) {
                    console.log(e);
                }
            });

            // FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
            return content;
        };

        // CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
        var ajaxRemoveRevslider = function(obj) {
			"use strict";
            return jQuery(obj.selector + " .rev_slider").revkill();
        };

        // EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
        var extendessential = setInterval(function() {
            "use strict";
            if (jQuery.fn.tpessential != undefined) {
                clearInterval(extendessential);
                if (typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
                    jQuery.fn.tpessential.defaults.ajaxTypes.push({
                        type: "revslider",
                        func: ajaxRevslider,
                        killfunc: ajaxRemoveRevslider,
                        openAnimationSpeed: 0.3
                    });
                }
            }
        }, 30);

        "use strict";

        var tpj = jQuery;
        var revapi1;
        tpj(document).ready(function() {
            "use strict";
            if (tpj("#rev_slider_1_1").revolution == undefined) {
                revslider_showDoubleJqueryError("#rev_slider_1_1");
            } else {
                revapi1 = tpj("#rev_slider_1_1").show().revolution({
                    sliderType: "standard",
                    jsFileLocation: "//invetex.themerex.net/wp-content/plugins/revslider/public/assets/js/",
                    sliderLayout: "auto",
                    minHeight: '780',
                    dottedOverlay: "none",
                    delay: 9000000,
                    visibilityLevels: [1240, 1024, 778, 480],
                    lazyType: "none",
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        }); /*ready*/

        var htmlDivCss = ".tp-caption.trx-big,.trx-big{color:rgba(255,255,255,1.00);font-size:70px;line-height:80px;font-weight:500;font-style:normal;font-family:Poppins;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.trx-norm,.trx-norm{color:rgba(255,255,255,1.00);font-size:19px;line-height:34px;font-weight:400;font-style:normal;font-family:Poppins;padding:0px 0px 0px 0px;text-decoration:none;text-align:center;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.trx-no-css,.trx-no-css{color:rgba(255,255,255,1.00);font-size:14px;line-height:22px;font-weight:400;font-style:normal;font-family:Poppins;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.trx-no-css,.trx-no-css{color:rgba(255,255,255,1.00);font-size:14px;line-height:22px;font-weight:400;font-style:normal;font-family:Poppins;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.trx-big-dark,.trx-big-dark{color:rgba(40,38,43,1.00);font-size:58px;line-height:70px;font-weight:400;font-style:normal;font-family:Poppins;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.trx-norm-dark,.trx-norm-dark{color:rgba(56,56,56,1.00);font-size:19px;line-height:34px;font-weight:400;font-style:normal;font-family:Poppins;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}";
        var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
        if (htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        } else {
            var htmlDiv = document.createElement('div');
            htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
            document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
        }
    }
}