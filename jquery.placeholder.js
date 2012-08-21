(function( $ ) {
    $(document).ready(function() {
    
        //http://stackoverflow.com/questions/3937818/jquery-how-to-test-is-the-browser-supports-the-native-placeholder-attribute
        var placeholderSupport = (function(){ var i = document.createElement('input'); return 'placeholder' in i; })();
        
        // if placeholder is supported then nothing happens
        if (!placeholderSupport) {
            
			// collect all elements with a placeholder attribute
            var placeholders = $("[placeholder]");
            
            placeholders.each(function() {
				// see if element has value, if so don't change
				// placeholder and value may not have same text
                if ($(this).val() == "") {
					$(this).val($(this).attr("placeholder")).css("color", "#999");
				}
			}).focus(function() {
                // test if current value matches placeholder text, if it does then blank the value and darken text
				if ($(this).val() === $(this).attr("placeholder")) {
                    $(this).val("").css("color", "#000");
                }
            }).blur(function() {
                // test if value is empty, if it is then restore placeholder with lighter color
				if (!$(this).val()) {
                    $(this).val($(this).attr("placeholder")).css("color", "#999");
                }
            });
            
        }
    
    });
})( jQuery );