import controller from './footer.controller';
import { footer } from './footer.dialog';

const FooterComponent = {
    controller,
    template: `
    <md-button class="md-fab contact-fab" ng-click="$ctrl.showPrompt($event)" aria-label="Send Email">
        <md-icon>contact_mail</md-icon>
    </md-button>

    <div style="visibility: hidden">
        <div class="md-dialog-container" id="footer-dialog">
            <md-dialog>
            ${footer.template}
            </md-dialog>
        </div>
    </div>
    `
}

export default FooterComponent;