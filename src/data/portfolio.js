import DocsSystem from "../imgs/portfolio/DocsSystem.jpg";
import DocsSystemPatient from "../imgs/portfolio/DocsSystem-patient.jpg";
import DocsSystemLetter from "../imgs/portfolio/DocsSystem-letter.jpg";
import FarmersBusiness from "../imgs/portfolio/FarmersBusiness.jpg";
import FarmersBusinessGameOn from "../imgs/portfolio/FarmersBusinessGameOn.jpg";
import FarmersBusinessMarket from "../imgs/portfolio/FarmersBusinessMarket.jpg";


export const portfolio = [
    {
        id: 1,
        info: {
            name: "Docs hospital system ",
            client: "Personal project",
            version: "1.0",
            dateCompleted: "September, 2020",
            description: "Docs is a hospital document system. It allows the nurses to create discharging letters for patients, and after the head nurse and surgeon approved the document to be download, and the patient can be discharged.",
            shortDescription : "Docs is a hospital document system. It allows the nurses to create discharging letters for patients...",
            technology: ["HTML", "CSS", "Bootstrap 4", "JavaScript", "React", "Redux", "jQuery", "NodeJS", "Express"],
            url: "https://master.d52g4t92p4xkb.amplifyapp.com/",
        },
        photos: {
            thumbnail: DocsSystem,
            list: [DocsSystem, DocsSystemPatient, DocsSystemLetter]
        }
        
    },
    {
        id: 2,
        info: {
            name: "Farmers Business",
            client: "Personal project",
            version: "1.0",
            dateCompleted: "July, 2020",
            description: "This is a game developed with JavaScript timers and fency vector imgs. I done it as a personal project to show skills using JavaScript",
            shortDescription: "This is a game developed with JavaScript timers and fency vector imgs. I done it as a personal...",
            technology: ["HTML", "CSS", "JavaScript"],
            url: "http://farmersbusiness.iliyanyordanov.com/",
        },
        photos: {
            thumbnail: FarmersBusiness,
            list: [FarmersBusiness, FarmersBusinessGameOn, FarmersBusinessMarket]
        }
        
    },
    
]