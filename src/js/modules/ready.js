/**
 * Run event after DOM is ready
 * @param {Function} fn Callback function
 */
 var ready = function(fn) {
    // Sanity check
    if (typeof fn !== 'function') return;
    // If document is already loaded, run method
    if (document.readyState === 'interactive' || document.readyState === 'complete') return fn();
    // Otherwise, wait until document is loaded
    document.addEventListener('DOMContentLoaded', fn, false);
};

ready(function() {
    // Do stuff...
    //contraste acessbilidade
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function() {
        Contrast.toogle();
    };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }
    //constraste

    // font
    window.toggleFont = function(param) {
        atualizarFonte(param);
    };

    function atualizarFonte(op) {
        var fontSize = $("body").css("font-size");
        fontSize = fontSize.replace('px', '');

        switch (op) {
            case "=":
                fontSize = '16px';
                break;
            case "-":
                fontSize = `${(parseInt(fontSize) - 1)}px`;
                break;
            case "+":
                fontSize = `${(parseInt(fontSize) + 1)}px`;
                break;
        }

        $("body").css("font-size", fontSize);
    }
});
