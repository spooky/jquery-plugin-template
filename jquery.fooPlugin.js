(function ($) {

    $.fn.fooPlugin = function (customOptions) {
        var options = {},
        scopeGlobal = -1;

        function _init(matchedObj) {
            options = $.extend($.fn.cover.defaultOptions, matchedObj.data(), customOptions);
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
