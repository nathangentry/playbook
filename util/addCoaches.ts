import firebase from "./firebase";
import generateId from "./generateId";

const coaches = ["Vera Carr", "Daniel Leonard", "Garrett Ashley", "Victor Wilkinson", "Uma Baxter", "Zeph Stein", "Brennan Willis", "Armand Pruitt", "Kalia Obrien", "Honorato Booker", "Anjolie Bryant", "Alana Ashley", "Sylvester Anderson", "Alec Spencer", "Camille Buckley", "James Burke", "Upton Morris", "Azalia Olsen", "Indigo Aguilar", "Sydney Neal", "Leonard Long", "Kelsie Nichols", "Naida Hart", "Cadman Sullivan", "Gwendolyn Vasquez", "Jin Mcintosh", "Sara Lindsay", "Breanna Powers", "Graiden Gibson", "Derek Casey", "Keith Medina", "Cairo Dennis", "Byron Ratliff", "Debra Kim", "Berk Hurst", "Chancellor Collier", "Ayanna Henderson", "Ainsley Lowe", "Griffin Camacho", "Ruth Cunningham", "Giselle Hodges", "Lev Madden", "Athena Wilkins", "Rogan Valencia", "Nissim Ortiz", "Ifeoma Robles", "William Knowles", "Tara Watson", "Melodie Harper", "Cailin Valencia", "Paloma Hale", "Whoopi Lowery", "Farrah Walters", "Cameron Ayala", "Grace Hendrix", "Quyn Stark", "Herman Sears", "Brenda Copeland", "Sawyer Flowers", "Ralph Carrillo", "Fuller Hickman", "Nash Wise", "Cairo Compton", "Driscoll Johnson", "Sandra Pickett", "Chase Hopkins", "Brittany Pena", "Cade Hamilton", "Ali Holt", "Elaine Ball", "Gabriel Ingram", "Ray Fletcher", "Shea Nichols", "Sade Myers", "Yeo Snyder", "Harding Bradford", "Graiden Lynch", "Honorato Mckinney", "Connor Coffey", "Erich Russell", "Kirestin Emerson", "Castor Downs", "Troy Ellison", "MacKensie Thomas", "Veronica Simpson", "Buckminster Mclaughlin", "Joel Vega", "Kiara Booker", "Kylie Fields", "Jarrod Guzman", "Keane Greer", "Kitra Conway", "Kylee Rios", "Jaden Sanchez", "India Boyd", "Pearl Serrano", "Kylynn Lee", "Tana Cannon", "Shoshana Duncan", "Leroy Burns"];

const addCoaches = () => {
  coaches.forEach(coach => {
    const id = generateId();
    console.log(id);
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .set({
        id: id,
        name: coach,
      })
      .then(() => { console.log("Success") })
      .catch((error) => { console.log(`Error: ${error.message}`) });
  });
}

export default addCoaches;