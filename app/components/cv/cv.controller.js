export class CvController {
    constructor() {
        this.jobs = [
            {
                company: 'Olavstoppen AS',
                title: 'Frontend Developer',
                from: 'Apr 2017',
                to: this.formatDate(new Date().toDateString()),
                description: 'At Olavstoppen I will work as a frontend developer on various client tasks, starting with an assignment for Statoil ASA',
                tasks: []
            },
            {
                company: 'Iron Mountain Norway',
                title: 'Data Analyst & Programmer',
                from: 2011,
                to: 'Mar 2017',
                description: `I've been working at Iron Mountain Norway since 2011, where my initial position was IT Consultant, and my main job was 
                    maintaining and continously develop on older projects. In 2013 my job began transitioning to more new development, 
                    where my focus would shift to progressive tech (NodeJS, AngularJS) and I would begin building better, more maintainable apps. 
                    In early 2016 my position was officially changed to Data Analyst &amp; Programmer, as this better describes the tasks I actually do. 
                    I do a lot of work now with our enterprise RDBMS (Oracle, SQL Server), MySQL, MongoDB etc. 
                    My job now is in a big part to continously improve our codebase, while adding new features and creating new apps where needed.`,
                tasks: [
                    {
                        title: 'Database Work',
                        description: `I do a lot of work revolving around our Oracle RDBMS powering our eSearch application. 
                             as eSearch is the backbone of our energy targeting business in Norway, it requires a steady hand and a solid workflow. 
                            `
                    },
                    {
                        title: 'Development',
                        description: `I build a lot of various apps at work, some targetting mobile (hybrid apps), but most being meant for the web.
                            Most of the apps I build, are being built using Angular2, NodeJS and ExpressJS. The target audience is only internal, 
                            so the line from business approval to me is short, and makes for a fast development process.`
                    },
                    {
                        title: 'Support',
                        description: `While the primary bulk of my work revolves around Development and Database work, I also have to support the 
                            apps that I build, in addition to supporting our customers in their usage of eSearch. This involves both training and general support.`
                    }
                ]
            },
            {
                company: 'ICA Norge',
                title: 'Assistant & General Store Manager',
                from: 2007,
                to: 2011,
                description: `I worked in ICA Norge A/S in two stores in a manageriale role. My first 3 years was spent as the assistant manager, 
                    however the general manager was on sickleave during this entire period, where I functioned as the general manager. 
                    My tasks in this period was to ensure everyone got their paychecks in due time, that all bills were paid on time, 
                    and to keep track of inventory and keeping the store stocked for goods. The same tasks followed me the year after, 
                    when I started working in my own shop, where in addition I would also take on all personell responsibilities.`,
                tasks: [
                    {
                        title: 'Personell',
                        description: `I was required to hire new staff, follow up people on sick leave, and handle resignations (willing and not). 
                            In addition to this, I needed to ensure the work environment was good, and everyone had a good time at work.
                            Delegating responsibilites was also a big chunk of my responsibilities here.`
                    },
                    {
                        title: 'Managerial',
                        description: `I needed to ensure all bills were paid in time, and that everyone got their paychecks on time, with the correct amount.
                            I was also required to keep track of all suppliers, and make appointments for sales pitches etc.`
                    },
                    {
                        title: 'Store',
                        description: `Keep the entire store well stocked, and make sure the store would always look at it's best. 
                                Was also responsible for bi-annual stocktakings of the entire store.`
                    }
                ]
            }
        ];

        this.education = [
            {
                school: `University of Stavanger`,
                from: 2008,
                to: 2009,
                title: `English Grammar and Literature`,
                description: `1 Year course on English Grammar and Literature, with a big focus on British language/literature history.
                    I had to drop out of this course due to work requiring to much effort, and I was unable to give enough focus to my studies.`
            },
            {
                school: `University of Stavanger`,
                from: 2007,
                to: 2008,
                title: `Nordic Grammar and Literature`,
                description: `1 Year course on Nordic Grammar and Literature, with a focus on literature history. 
                    I had to drop out of this course due to work requiring to much effort, and I was unable to give enough focus to my studies.`
            },
            {
                school: `Gand Videregående Skole`,
                from: 2006,
                to: 2007,
                title: `Higher Education Entrance Qualification`,
                description: `Picked up this class to get qualified to apply to University. Prior to this, 
                    I studied construction work with a main focus on formwork.`
            }
        ];
    }

    formatDate(dateString) {
        let date = dateString.split(' ')
        let month = date[1];
        let year = date[3];
        return `${month} ${year}`
    }
}