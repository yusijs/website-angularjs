import controller from './header.controller';

const   template = `
<md-toolbar style="width:100vw" class="md-hue-2">
    <div class="md-toolbar-tools">

        <md-button ng-click="$ctrl.toggleNav()" class="md-icon-button" aria-label="Menu">
            <md-icon>menu</md-icon>
        </md-button>

        <h2 flex>Ronnie Laugen</h2>

        <md-button class="md-icon-button" aria-label="Favorite">
            <md-icon style="color: greenyellow;"><favorite/md-icon>
        </md-button>

        <md-button class="md-icon-button" aria-label="More">
            <md-icon>more_vert</md-icon>
        </md-button>
    </div>
</md-toolbar>
  `;


const HeaderComponent = {
  bindings: {
    toggle: '&'
  },
  controller,
  template
};

export default HeaderComponent;