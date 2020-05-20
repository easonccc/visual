/**
 * @author z
 * @date 2020/3/11 0011 0:02
 * 使用js动态改变html的字体大小+rem的特性，来保证最初的设计图中每个元素的尺寸比例不变，以适用于不同尺寸的设备能够正常显示。
 */
(function (doc, win, pwidth, prem) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = clientWidth / pwidth * prem + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window, 7680, 100);
