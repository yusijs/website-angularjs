const TechCardComponent = {
    bindings: {
        tech: '<'
    },
    template: `<md-card style="width: 100%; height: 100%">
                    <md-card-title>
                        <md-card-title-text>
                            <a href="{{$ctrl.tech.url}}" class="md-headline">{{ $ctrl.tech.name }}</a>
                            <span class="md-subhead">{{ $ctrl.tech.type }} ({{ $ctrl.tech.released }})</span>
                        </md-card-title-text>
                    </md-card-title>
                    <md-card-content>
                        <p class="tech-content">
                            {{ $ctrl.tech.description }}
                        </p>
                        <p>
                            Proficency: {{ $ctrl.tech.proficency }}
                        </p>
                    </md-card-content>
                </md-card>`
}

export default TechCardComponent;