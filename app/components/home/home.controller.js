export class HomeController {
    constructor() {
        this.sites = [
            {
                client: 'Comsat Architects',
                url: 'http://comsat-architects.com/',
                description: `Built a SPA for use in NASA's Scenic Lab on behalf of Comsat Architects. 
            The application is to be used to create equipment lists and perform property calculations based off of components. 
            The application stack consists of NodeJS and SQL Server forming the backend, and Angular2 being used for the frontend. 
            MVP of the application has been delivered to the Client, and there is ongoing development on it.`,
                title: 'NASA Communication Payload Database'
            },
            {
                client: 'Iron Mountain Norway',
                url: 'https://ironmountain.no',
                description: `Dashboard that keeps track of all incoming orders, and performs KPI calculations based off of the clients Order system. 
                The application stack consists of NodeJS in the backend, retrieving data from mysql, Oracle and SQL Server, and Angular2 with Bootstrap keeping the page responsive, fast and user friendly.`,
                title: 'Dashboard'
            }
        ]
    }
}