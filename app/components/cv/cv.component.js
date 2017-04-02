import { CvController } from './cv.controller';

const CvComponent = {
    controller: CvController,
    template: `
        <md-card>
            <md-card-title>
                <md-card-title-text>
                    <span class="md-headline">Work Experience</span>
                </md-card-title-text>
            </md-card-title>
            <md-card-content>
                <md-card ng-repeat="job in $ctrl.jobs">
                    <md-card-title>
                        <md-card-title-text>
                            <span class="md-headline">{{ job.company }}</span>
                            <span class="md-subhead">{{ job.title }} ({{ job.from }} - {{ job.to }})</span>
                        </md-card-title-text>
                    </md-card-title>
                    <md-card-content>
                        <p>
                            {{ job.description }}
                        </p>
                        <md-list flex>
                            <md-list-item ng-click="null" class="md-2-line" ng-repeat="task in job.tasks">
                                <div class="md-list-item-text">
                                    <h3>{{ task.title }}</h3>
                                    <p>{{ task.description }}</p>
                                </div>
                            </md-list-item>
                        </md-list>
                    </md-card-content>
                </md-card>
            </md-card-content>
        </md-card>
        <md-card>
            <md-card-title>
                <md-card-title-text>
                    <span class="md-headline">Education</span>
                </md-card-title-text>
            </md-card-title>
            <md-card-content>
                <md-card ng-repeat="school in $ctrl.education">
                    <md-card-title>
                        <md-card-title-text>
                            <span class="md-headline">{{ school.school }}</span>
                            <span class="md-subhead">{{ school.title }} ({{ school.from }} - {{ school.to }})</span>
                        </md-card-title-text>
                    </md-card-title>
                    <md-card-content>
                        <p>
                            {{ school.description }}
                        </p>
                    </md-card-content>
                </md-card>
            </md-card-content>
        </md-card>
    `
}

export default CvComponent;