import { footer } from './footer.dialog';

class FooterController {
    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;

        this.test = 'This is test from ctrl';

    }

    send() {
      console.log("Send email!");
      this.$mdDialog.hide('Mail sent!');
    }

    showPrompt(ev) {
    this.$mdDialog.show({
      contentElement: '#footer-dialog',
      parent: angular.element(document.body),
      clickOutsideToClose:true
    })
    .then(details => {
      console.log(details);
    }, () => {
      console.log("Cancelled");
    });
  };
}

FooterController.$inject = ['$mdDialog'];

export default FooterController;