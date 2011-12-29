(function ($) {

    $.fn.fooPlugin = function (customOptions) {
        var options = $.extend({}, $.fn.fooPlugin.defaultOptions, customOptions),
        globalVar = -1;

        function _init(matchedObj) {
            // construction logic here
        };

        return this.each(function () {
            var $this = $(this);
            _init($this);
        });
    };

    $.fn.fooPlugin.defaultOptions = {
        sampleOption: 'bar'
    };

})(jQuery);