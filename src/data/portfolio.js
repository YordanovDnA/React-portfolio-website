import DocsSystem from "../imgs/portfolio/DocsSystem.jpg";
import DocsSystemPatient from "../imgs/portfolio/DocsSystem-patient.jpg";
import DocsSystemLetter from "../imgs/portfolio/DocsSystem-letter.jpg";
import FarmersBusiness from "../imgs/portfolio/FarmersBusiness.jpg";
import FarmersBusinessGameOn from "../imgs/portfolio/FarmersBusinessGameOn.jpg";
import FarmersBusinessMarket from "../imgs/portfolio/FarmersBusinessMarket.jpg";
import MealMenuCreationHome from "../imgs/portfolio/MealMenuCreation-home.jpg";
import MealMenuCreationLogin from "../imgs/portfolio/MealMenuCreation-login.jpg";
import MealMenuCreationList from "../imgs/portfolio/MealMenuCreation-list.jpg";
import SofiMartenFood from "../imgs/portfolio/SofiMartenFood.jpg"
import SofiMartenFoodMealMenu from "../imgs/portfolio/SofiMartenFood-meal-menu.jpg";
import SofiMartenFoodContact from "../imgs/portfolio/SofiMartenFood-contact.jpg";
import JSCalculator from "../imgs/portfolio/JS-Calculator.jpg";
import JSImgSlider from "../imgs/portfolio/JS-Img-Slider.jpg";
import JSHumanGenerator from "../imgs/portfolio/JS-Human-Genarator.jpg";
import QChartDefault from "../imgs/portfolio/q-chart-default.jpg"
import QChartWithProps from "../imgs/portfolio/q-chart-with-props.jpg"

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
            technology: ["HTML", "SASS", "Bootstrap 4", "JavaScript", "React", "Redux", "jQuery", "NodeJS", "Express"],
            url: "https://master.d52g4t92p4xkb.amplifyapp.com/",
            repository: "https://github.com/YordanovDnA/Docs-system",
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
        repository: "https://github.com/YordanovDnA/Game---Farmer-s-business-",
    },
    photos: {
        thumbnail: FarmersBusiness,
        list: [FarmersBusiness, FarmersBusinessGameOn, FarmersBusinessMarket]
    }
    
},
{
    id: 3,
    info: {
        name: "Meal menu creator",
        client: "SofiMarten",
        version: "1.0",
        dateCompleted: "May, 2020",
        description: "This project I created for a company in Sofia, Bulgaria. This company has takeaway food restourant with different meal menu every day. I designedd their website and made this web application so they can create the daily meal menu and upload it to their website. Although I'm doing more front-end developing I did this project all on my own with PHP and MySQL for the back-end.",
        shortDescription: "This project I created for a company in Sofia, Bulgaria. This company has takeaway food restourant...",
        technology: ["HTML", "CSS", "PHP", "MySQL"],
        url: "http://menu.sofimarten.com/",
        repository: "https://github.com/YordanovDnA/Food-menu-creating",
    },
    photos: {
        thumbnail: MealMenuCreationList,
        list: [MealMenuCreationHome,MealMenuCreationLogin, MealMenuCreationList]
    }
    
},
{
    id: 4,
    info: {
        name: "SofiMarten-takeway WP website",
        client: "SofiMarten",
        version: "1.0",
        dateCompleted: "May, 2020",
        description: "This is the takeaway website build on WordPress for SofiMarten. SofiMarten has takeway food restourant and cake factory in Sofia, Bulgaria. They're my customers from 2019 and I'm helping them to grow their business online. I'm helping into the managment of their Facebook page and run all their marketing campaigns",
        shortDescription: "This is the takeaway website build on WordPress for SofiMarten. SofiMarten has takeway food restourant...",
        technology: ["WordPress", "Elementor"],
        url: "http://food.sofimarten.com/",
    },
    photos: {
        thumbnail: SofiMartenFood,
        list: [SofiMartenFood,SofiMartenFoodMealMenu, SofiMartenFoodContact]
    }
    
},
{
    id: 5,
    info: {
        name: "JavaScript practice",
        client: "Personal project",
        version: "1.0",
        dateCompleted: "July, 2020",
        description: "This is a collection of all my practice projects on JavaScript. I have calculator, human generator, img slider and many more. Follow the link and explore all of them. If you like any hit the like button. I will appreciate it. ",
        shortDescription: "This is a collection of all my practice projects on JavaScript. I have calculator, human generator...",
        technology: ["HTML", "CSS", "JavaScript"],
        url: "https://codepen.io/collection/DVVzvo",
    },
    photos: {
        thumbnail: JSCalculator,
        list: [JSCalculator,JSHumanGenerator, JSImgSlider]
    }
    
},
{
    id: 6,
    info: {
        name: "Qchart",
        client: "Personal project",
        version: "1.0",
        dateCompleted: "November, 2020",
        description: "This is a reusable quick chart component, which is well documented, and it's in help for me and any other developers, who want quick chart solution. The chart information can be change via props",
        shortDescription: "This is a reusable quick chart component which is well documented, and it's in help...",
        technology: ["HTML", "CSS", "JavaScript", "React"],
        url: "https://main.d4y95vsyqgs94.amplifyapp.com",
        repository: "https://github.com/YordanovDnA/qchart"
    },
    photos: {
        thumbnail: QChartDefault,
        list: [QChartDefault,QChartWithProps]
    }
    
},
    
]