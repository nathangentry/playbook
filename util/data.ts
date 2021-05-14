import { IResource } from "../models/Resource";

const coaches = ["Vera Carr", "Daniel Leonard", "Garrett Ashley", "Victor Wilkinson", "Uma Baxter", "Zeph Stein", "Brennan Willis", "Armand Pruitt", "Kalia Obrien", "Honorato Booker", "Anjolie Bryant", "Alana Ashley", "Sylvester Anderson", "Alec Spencer", "Camille Buckley", "James Burke", "Upton Morris", "Azalia Olsen", "Indigo Aguilar", "Sydney Neal", "Leonard Long", "Kelsie Nichols", "Naida Hart", "Cadman Sullivan", "Gwendolyn Vasquez", "Jin Mcintosh", "Sara Lindsay", "Breanna Powers", "Graiden Gibson", "Derek Casey", "Keith Medina", "Cairo Dennis", "Byron Ratliff", "Debra Kim", "Berk Hurst", "Chancellor Collier", "Ayanna Henderson", "Ainsley Lowe", "Griffin Camacho", "Ruth Cunningham", "Giselle Hodges", "Lev Madden", "Athena Wilkins", "Rogan Valencia", "Nissim Ortiz", "Ifeoma Robles", "William Knowles", "Tara Watson", "Melodie Harper", "Cailin Valencia", "Paloma Hale", "Whoopi Lowery", "Farrah Walters", "Cameron Ayala", "Grace Hendrix", "Quyn Stark", "Herman Sears", "Brenda Copeland", "Sawyer Flowers", "Ralph Carrillo", "Fuller Hickman", "Nash Wise", "Cairo Compton", "Driscoll Johnson", "Sandra Pickett", "Chase Hopkins", "Brittany Pena", "Cade Hamilton", "Ali Holt", "Elaine Ball", "Gabriel Ingram", "Ray Fletcher", "Shea Nichols", "Sade Myers", "Yeo Snyder", "Harding Bradford", "Graiden Lynch", "Honorato Mckinney", "Connor Coffey", "Erich Russell", "Kirestin Emerson", "Castor Downs", "Troy Ellison", "MacKensie Thomas", "Veronica Simpson", "Buckminster Mclaughlin", "Joel Vega", "Kiara Booker", "Kylie Fields", "Jarrod Guzman", "Keane Greer", "Kitra Conway", "Kylee Rios", "Jaden Sanchez", "India Boyd", "Pearl Serrano", "Kylynn Lee", "Tana Cannon", "Shoshana Duncan", "Leroy Burns"];

const generateData = (n: number) => {
    let data: IResource[] = [];

    const meta = (coach: string, index: number) => [
        {
            name: `${coach.split(" ")[0]}'s Plays`,
            group: "plays",
            type: ["offensive", "defensive"][Math.floor(Math.random() * 2)],
            coach: coach,
        },
        {
            name: `${coach.split(" ")[0]}'s Drills`,
            group: "drills",
            type: ["shooting", "passing", "dribbling", "conditioning", "inbounding"][Math.floor(Math.random() * 5)],
            coach: coach,
        },
        {
            name: `${coach.split(" ")[0]}'s Practices`,
            group: "practices",
            type: ["30 minute", "60 minute", "90 minute"][Math.floor(Math.random() * 3)],
            coach: coach,
        }
    ][index];

    for (let i = 0; i < n; i++) {
        data.push({
            id: i,
            ...(meta(coaches[i % coaches.length], Math.floor(Math.random() * 3))),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            totalLength: Math.floor(Math.random() * 100),
            numDownloads: Math.floor(Math.random() * 1000),
            rating: Math.round((Math.random() * 4 + 1) * 100) / 100,
            level: ["elementary", "intermediate", "advanced"][Math.floor(Math.random() * 3)],
            gender: ["boys", "co-ed", "girls"][Math.floor(Math.random() * 3)],
        });
    }

    return data;
};

const data: IResource[] = generateData(1000).sort((a, b) => b.rating - a.rating);

export default data;