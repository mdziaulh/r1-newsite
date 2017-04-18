var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


/* =================================================
    NS.Sar
====================================================*/
   jQuery.fn.isOnScreen = function(){
     
    var win = $(window);
     
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
     
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
     
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

/**********************************************
    G Input
***********************************************/

jQuery.fn.cleardefault = function() {
    return this.focus(function() {
        if( this.value == this.defaultValue ) {
            this.value = "";
            jQuery(this).addClass('selected-input');
        }
    }).blur(function() {
        if( !this.value.length ) {
            this.value = this.defaultValue;
            jQuery(this).removeClass('selected-input');
        }
    });
};

jQuery(".ginput_container input, .ginput_container textarea").cleardefault(); 