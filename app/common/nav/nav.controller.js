class NavController {
    constructor($mdSidenav, $state) {
        this.$mdSidenav = $mdSidenav;
        this.$state = $state;
    }
    
    navigateTo(route) {
        this.$state.go(route)
            .then(r => {
                this.toggleNav();
            })
            .catch(e => {
                console.error(e);
                this.toggleNav();
            })
    }

    toggleNav() {
        this.$mdSidenav('navbar').toggle();
    }
}

NavController.$inject = ['$mdSidenav', '$state']

export default NavController;