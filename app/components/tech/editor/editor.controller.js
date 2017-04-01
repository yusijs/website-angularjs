class EditorController {
    constructor() {
        this.plugins = [
            {
                name: 'Angular 2 TypeScript Snippets',
                author: 'johnpapa',
                url: 'https://github.com/johnpapa/vscode-angular2-snippets',
                icon: 'https://raw.githubusercontent.com/johnpapa/vscode-angular2-snippets/master/images/angular-shield.png',
                description: 'This extension for Visual Studio Code adds snippets for Angular 2 for TypeScript and HTML.'
            },
            {
                name: 'Angular Material Snippets',
                author: '4tron',
                url: '#',
                icon: 'https://raw.githubusercontent.com/johnpapa/vscode-angular2-snippets/master/images/angular-shield.png',
                description: 'A set of Angular Material Snippets for Visual Studio Code.'
            },
            {
                name: 'Auto Import',
                author: 'steotates',
                url: 'https://github.com/soates/Auto-Import',
                icon: 'https://raw.githubusercontent.com/soates/Auto-Import/master/icon.png',
                description: `Automatically finds, parses and provides code actions and code completion for all available imports.`
            },
            {
                name: 'Go',
                author: 'lukehoban',
                url: 'https://github.com/Microsoft/vscode-go',
                icon: 'https://raw.githubusercontent.com/Microsoft/vscode-go/master/images/goIcon.png',
                description: 'This extension adds rich language support for the Go language to VS Code.'
            },
            {
                name: 'npm Intellisense',
                author: 'Christian Kohler',
                url: 'https://github.com/ChristianKohler/NpmIntellisense',
                icon: 'https://raw.githubusercontent.com/ChristianKohler/NpmIntellisense/master/images/icon.png',
                description: 'Visual Studio Code plugin that autocompletes npm modules in import statements.'
            },
            {
                name: 'TSLint',
                author: 'egamma',
                url: 'https://github.com/Microsoft/vscode-tslint',
                icon: 'https://eg2.gallerycdn.vsassets.io/extensions/eg2/tslint/0.6.7/1480506840981/Microsoft.VisualStudio.Services.Icons.Default',
                description: 'Integrates the tslint linter for the TypeScript language into VS Code.'
            }
        ];

        this.theming = [
            {
                name: 'Material-theme',
                author: 'zhuangtongfa',
                url: 'https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme',
                icon: `https://zhuangtongfa.gallerycdn.vsassets.io/extensions/zhuangtongfa/material-theme/1.0.3/1474455139721/Microsoft.VisualStudio.Services.Icons.Default`,
                description: 'Material Theme for vscode'
            },
            {
                name: 'vscode-icons',
                author: 'Roberto Huertas',
                url: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme',
                icon: `https://pkief.gallerycdn.vsassets.io/extensions/pkief/material-icon-theme/2.0.1/1489853307862/Microsoft.VisualStudio.Services.Icons.Default`,
                description: 'Bring icons to your VS Code.'
            },
            {
                name: 'Operator Mono',
                author: 'Hoefler & Co.',
                url: 'http://www.typography.com/fonts/operator/styles/operatormono',
                icon: `http://www.freeiconspng.com/uploads/font-icon--icon-search-engine--iconfinder-1.png`,
                description: 'A monospace typeface, a monospace-inspired typeface, and a short film about type design. (199$)'
            }
        ];
    }

    openUrl(url, event) {
        console.log(event.button);
        window.open(url);
    }
}

export default EditorController;