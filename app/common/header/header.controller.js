class HeaderController {
    toggleNav() {
        this.toggle(
            this.EventEmitter({
                toggle: true
            })
        )
    }

    constructor(EventEmitter) {
        this.EventEmitter = EventEmitter;
    }
}

HeaderController.$inject = ['EventEmitter'];

export default HeaderController;