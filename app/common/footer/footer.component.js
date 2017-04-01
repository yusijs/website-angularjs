import controller from './footer.controller';

const FooterComponent = {
    controller,
    template: `
    <md-button class="md-fab contact-fab" ng-click="$ctrl.showPrompt($event)" aria-label="Send Email">
        <md-icon>contact_mail</md-icon>
    </md-button>
    `
}

export default FooterComponent;