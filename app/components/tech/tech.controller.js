class TechController {
    constructor(){
        this.tech = {
            frontend: [
                {
                    name: 'Angular',
                    url: 'https://angular.io',
                    type: 'Frontend Framework',
                    released: 2016,
                    proficency: 'Good',
                    description: 'Angular makes use of multiple modern techniques (Typescript, SSR ++) to create a modern, fast and enterprise-worthy Frontend Framework.'
                },
                {
                    name: 'AngularJS',
                    url: 'https://angularjs.org',
                    type: 'Frontend Framework',
                    released: 2010,
                    proficency: 'Good',
                    description: 'AngularJS was a revolution for the web with their 2-way databinding, fast prototyping and scaleability.'
                },
                {
                    name: 'React',
                    url: 'https://facebook.github.io/react/',
                    type: 'Frontend Library',
                    released: 2013,
                    proficency: 'Decent',
                    description: 'React was a new revolution after AngularJS, utilizing a one-way dataflow with events, Shadow DOM and JSX '
                }
            ],
            backend: [
                {
                    name: 'Node.JS',
                    url: 'https://nodejs.org',
                    type: 'Backend',
                    released: 2009,
                    proficency: 'Good',
                    description: 'V8 Engine based Javascript Backend'
                },
                {
                    name: 'GoLang',
                    url: 'https://golang.org',
                    type: 'Backend',
                    released: 2009,
                    proficency: 'Learning',
                    description: 'Google\'s take on a modern programming language'
                },
                {
                    name: 'Express.JS',
                    url: 'https://expressjs.com/',
                    type: 'NodeJS Framework',
                    released: 2010,
                    proficency: 'Good',
                    description: 'Fast, unopinionated, minimalist web framework for Node.js'
                },
                {
                    name: 'PHP',
                    url: 'https://php.net/',
                    type: 'Backend Language',
                    released: 1995,
                    proficency: 'Good',
                    description: 'PHP has for a long time been a monolith in web development, being beginner friendly and flexible.'
                }
            ],
            database: [
                {
                    name: 'MySQL',
                    url: 'https://mysql.com/',
                    type: 'Relational Database',
                    released: 1995,
                    proficency: 'Good',
                    description: 'MySQL is an open source RDBMS, widely used in web applications.'
                },
                {
                    name: 'Oracle',
                    url: 'https://www.oracle.com/database/',
                    type: 'Enterprise Relational Database',
                    released: '-',
                    proficency: 'Good',
                    description: 'Oracle Database is an object-relational database management system, used primarily for large enterprise applications'
                },
                {
                    name: 'SQL Server',
                    url: 'https://www.microsoft.com/en-cy/sql-server/sql-server-2016',
                    type: 'Enterprise Relational Database',
                    released: '-',
                    proficency: 'Decent',
                    description: 'Microsoft SQL Server is a relational database management system developed by Microsoft.'
                },
                {
                    name: 'MongoDB',
                    url: 'https://www.mongodb.com/',
                    type: 'Document Oriented Database (NoSQL)',
                    released: 2009,
                    proficency: 'Good',
                    description: 'MongoDB is a free and open-source cross-platform document-oriented NoSQL database program '
                }
            ]
        }
    }
}

export default TechController;