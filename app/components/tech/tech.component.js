import controller from './tech.controller';

const TechComponent = {
    controller,
    template: `
        <md-card>
            <md-card-title>
                <md-card-title-text>
                    <span class="md-headline">Technology</span>
                </md-card-title-text>
            </md-card-title>
            <md-tabs md-stretch-tabs="always" md-dynamic-height md-border-bottom>
                <md-tab ng-repeat="(key, tech) in $ctrl.tech" label="{{key}}">
                    <md-content class="md-padding">
                        <tech-list tech="tech"></tech-list>
                    </md-content>
                </md-tab>
            </md-tabs>
        </md-card>
        <editor></editor>
`
}

export default TechComponent;