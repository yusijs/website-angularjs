import { footer } from './footer.dialog';

class FooterController {
    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;

        this.details = {};

    }

    send() {
      console.log("Send email!");
      this.$mdDialog.hide('Mail sent!');
    }

    cancel() {
      this.$mdDialog.hide();
    }

    showPrompt(ev) {
    this.$mdDialog.show({
      contentElement: '#footer-dialog',
      parent: angular.element(document.body),
      clickOutsideToClose:true
    })
    .then(details => {
      console.log(details);
    });
  };
}

FooterController.$inject = ['$mdDialog'];

export default FooterController;