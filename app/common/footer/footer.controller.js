import { footer } from './footer.dialog';

class FooterController {
    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;

        this.template = ``;
    }

    showPrompt(ev) {
    this.$mdDialog.show({
      template: footer.template,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      console.log(answer);
    }, function() {
      console.log("Cancelled");
    });
  };
}

FooterController.$inject = ['$mdDialog'];

export default FooterController;