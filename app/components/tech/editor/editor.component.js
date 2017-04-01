import controller from './editor.controller';

const EditorComponent = {
    controller,
    template: `
    <md-card>
        <md-card-title>
            <md-card-title-text>
                <span class="md-headline">Editor</span>
            </md-card-title-text>
        </md-card-title>
        <md-card-content>
            <md-list flex>
                <md-subheader class="md-no-sticky">Plugins</md-subheader>
                <md-list-item class="md-2-line" ng-click="$ctrl.openUrl(item.url, $event)" ng-repeat="item in $ctrl.plugins">
                    <img ng-src="{{ item.icon }}" class="md-avatar" alt="{{item.name}}" />
                    <div class="md-list-item-text">
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </md-list-item>
                <md-divider></md-divider>
                <md-subheader class="md-no-sticky">Theming</md-subheader>
                <md-list-item class="md-2-line" ng-click="$ctrl.openUrl(item.url, $event)" ng-repeat="item in $ctrl.theming">
                    <img ng-src="{{ item.icon }}" class="md-avatar" alt="{{item.name}}" />
                    <div class="md-list-item-text">
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </md-list-item>
            </md-list>
        </md-card-content>
    </md-card>
    `
}

export default EditorComponent;