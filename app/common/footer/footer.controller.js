import { footer } from './footer.dialog';
import { FooterService } from './footer.service';

class FooterController {
    constructor($mdDialog, FooterService) {
        this.$mdDialog = $mdDialog;
        this.FooterService = FooterService;

        this.details = {};

    }

    send() {
      console.log("Send email!");
      this.FooterService.postForm(this.details)
        .then(console.log)
        .catch(console.error);
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

FooterController.$inject = ['$mdDialog', 'FooterService'];

export default FooterController;