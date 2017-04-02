import angular from 'angular';
import { HomeController as controller } from './home.controller'; 

const HomeComponent = {
    controller,
    template: `
    <md-card>
        <md-card-title>
          <md-card-title-text>
            <span class="md-headline">About me</span>
            <span class="md-subhead">
              I'm Ronnie, a 28 year old full-stack web developer residing in Norway with a girlfriend, two kids and a cat, currently working as a Frontend Developer at Olavstoppen AS. Some of my projects include:
            </span>
            <md-card-content>
              <md-card ng-repeat="data in $ctrl.sites">
                <md-card-title>
                  <md-card-title-text>
                    <span class="md-headline">{{ data.title }}</span>
                    <span class="md-subhead"><a ng-href="data.url">{{ data.client }}</a></span>
                  </md-card-title-text>
                </md-card-title>
                <md-card-content>
                  <p>
                    {{ data.description }}
                  </p>
                </md-card-content>
              </md-card>
            </md-card-content>
            
          </md-card-title-text>
          <md-card-title-media>
            <div class="md-media-lg card-media">
              <img src="https://www.rlaugen.no/assets/13913570_10157315605515249_5154709884062918109_o.jpg">
            </div>
          </md-card-title-media>
        </md-card-title>
      </md-card>
      <md-card>
        <md-card-title>
          <md-card-title-text>
            <span class="md-headline">Contact</span>
          </md-card-title-text>
        </md-card-title>
        <md-card-content>
          For quick pokes I'm on twitter <a href="https://twitter.com/rlaugenjs">@rlaugenjs</a>, otherwise I can be reached via my contact form!
        </md-card-content>
      </md-card>
    `
}

export default HomeComponent;