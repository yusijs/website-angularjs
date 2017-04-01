const TechListComponent = {
    bindings: {
        tech: '<'
    },
    template: `<md-grid-list
        md-cols-xs="1" md-cols-sm="1" md-cols-md="3" md-cols-gt-md="3"
        md-row-height="250px" 
        md-gutter="12px" md-gutter-gt-sm="8px" >
            <md-grid-tile class="gray"
                md-rowspan="1" md-colspan="1" ng-repeat="item in $ctrl.tech">
                    <tech-card tech="item"></tech-card>
            </md-grid-tile>
    </md-grid-list>`
}

export default TechListComponent;