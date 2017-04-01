import controller from './nav.controller';

const NavComponent = {
  controller,
  template: `
      <section layout="row" flex>
      <header toggle="$ctrl.toggleNav()"></header>

        <md-sidenav class="md-sidenav-left" md-component-id="navbar" md-whiteframe="4">

          <md-content layout-margin>
            <md-list flex>
              <md-list-item ng-click="$ctrl.navigateTo('home')" class="md-2-line">
                <md-icon>home</md-icon>
                <div class="md-list-item-text">
                  <h3>About</h3>
                  <p>About me</p>
                </div>
              </md-list-item>
              <md-list-item ng-click="$ctrl.navigateTo('tech')" class="md-2-line">
                <md-icon>usb</md-icon>
                <div class="md-list-item-text">
                  <h3>Tech</h3>
                  <p>My tech preferences</p>
                </div>
              </md-list-item>
              <md-list-item ng-click="$ctrl.navigateTo('cv')" class="md-2-line">
                <md-icon>business_center</md-icon>
                <div class="md-list-item-text">
                  <h3>CV</h3>
                  <p>Work / Study experience</p>
                </div>
              </md-list-item>
            </md-list>
          </md-content>

        </md-sidenav>

      </section>
  `
};

export default NavComponent;
    // <a ui-sref="todos"> Todos </a>
    // <a ui-sref="calendar"> Calendar </a>