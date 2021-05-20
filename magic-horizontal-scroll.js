
// Магия со скролом 
function MagicHorizontalScroll(options) {

    if (options.wrapper !== undefined && options.scroller !== undefined) {
        // Изначальные значения
        let section = document.querySelector('.section')
        if (options.section !== undefined) section = options.section;

        let scrollSpeed = 40;
        if (options.scrollSpeed !== undefined) scrollSpeed = options.scrollSpeed



         // Включение горизонтальный скролл при прокрутке
        function scrollHorizontally(e) {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            document.querySelector(options.wrapper).scrollLeft -= ( delta * scrollSpeed); // Multiplied by 10
            e.preventDefault();

        }
        if (document.querySelector(options.wrapper).addEventListener) {
            // IE9, Chrome, Safari, Opera
            document.querySelector(options.wrapper).addEventListener("mousewheel", scrollHorizontally, false);
            // Firefox
            document.querySelector(options.wrapper).addEventListener("DOMMouseScroll", scrollHorizontally, false);
        } else {
            // IE 6/7/8
            document.querySelector(options.wrapper).attachEvent("onmousewheel", scrollHorizontally);
        }


        // Ширина всех секций
        let sectionsWidth = 0;
        document.querySelectorAll(section).forEach(function (item) {
            sectionsWidth += item.clientWidth;
        });

        document.querySelector(options.scroller).style.width = sectionsWidth + 'px';

    } else {
        console.error('MagicHorizontalScroll - добавьте элементы для wrapper и scroller');
    }

}
