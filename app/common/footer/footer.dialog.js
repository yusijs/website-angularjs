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
                <form>
                    <md-input-container class="md-block" flex-gt-sm>
                        <label>Name</label>
                        <input ng-model="$ctrl.details.name">
                    </md-input-container>

                    <md-input-container class="md-block" flex-gt-sm>
                        <label>Email</label>
                        <input ng-model="$ctrl.details.email">
                    </md-input-container>

                    <md-input-container class="md-block" flex-gt-sm>
                        <label>Subject</label>
                        <input ng-model="$ctrl.details.subject">
                    </md-input-container>

                    <md-input-container class="md-block">
                        <label>Message details ({{ $ctrl.test }})</label>
                        <textarea ng-model="$ctrl.details.message" md-maxlength="150" rows="5" md-select-on-focus></textarea>
                    </md-input-container>
                </form>
            </md-card-content>
            <md-card-actions layout="row" layout-align="end center">
                <md-button ng-click="$ctrl.send()">Send Mail</md-button>
                <md-button>Action 2</md-button>
            </md-card-actions>
        </md-card>`
}