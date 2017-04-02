// Exported as object for html tags in js string
export const footer = {
    template: `
        <md-card class="dialog">
            <md-card-title>
                <md-card-title-text>
                    <span class="md-headline">Send Mail</span>
                </md-card-title-text>
            </md-card-title>
            <md-card-content>
                <form name="contact">
                    <md-input-container class="md-block" flex-gt-sm>
                        <label>Name</label>
                        <input required minlength="3" ng-model="$ctrl.details.name" ng-model-options="{ updateOn: 'blur' }">
                    </md-input-container>

                    <md-input-container class="md-block" flex-gt-sm>
                        <label>Email</label>
                        <input required type="email" ng-model="$ctrl.details.email" ng-model-options="{ updateOn: 'blur' }">
                    </md-input-container>

                    <md-input-container class="md-block" flex-gt-sm>
                        <label>Subject</label>
                        <input required minlength="10" ng-model="$ctrl.details.subject" ng-model-options="{ updateOn: 'blur' }">
                    </md-input-container>

                    <md-input-container class="md-block">
                        <label>Message details</label>
                        <textarea ng-model="$ctrl.details.message" 
                            ng-model-options="{ updateOn: 'blur' }" 
                            md-maxlength="150" rows="5" 
                            required minlength="10"
                            md-select-on-focus></textarea>
                    </md-input-container>
                </form>
            </md-card-content>
            <md-card-actions layout="row" layout-align="end center">
                <md-button class="md-raised md-primary" ng-disabled="contact.$invalid" ng-click="$ctrl.send()">Send Mail</md-button>
                <md-button class="md-raised md-warn" ng-click="$ctrl.cancel()">Cancel</md-button>
            </md-card-actions>
        </md-card>`
}