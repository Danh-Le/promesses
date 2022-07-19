// // 1 - Hello World
// const getSentence =  () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 resolve("Hello World");
//                 reject("");
//     }, 2000);
// });
// };

// const waitForMySentence = async () => {
//     const result = await getSentence()
//     console.log(result);
// };
// waitForMySentence()

// // 2 - Il fait froid
// const getWeather =  () => {
//     return new Promise((resolve, reject) => {
//         const temperature = 2;
//         setTimeout(() => {
//             if (temperature <= 10) {
//                 resolve("Il fait froid");
//             } else {
//                 reject("Il fait chaud");
//             }
//     }, 4000);
// });
// };

// const waitForTheWeather = async () => {
//     const result = await getWeather()
//     console.log(result);
// };
// waitForTheWeather()

// 3 - Ménage
const getWashClothes =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("J'ai fini la lessive");
    }, 3000);
});
};
const getWashDishes =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("J'ai fini la vaisselle");
    }, 1500);
});
};

const waitForMyWashThings = async () => {
    console.log("Je commence la lessive")
    const result = await getWashClothes()
    console.log(result);

    console.log("Je commence la vaisselle")
    const resultat = await getWashDishes()
    console.log(resultat);

    console.log("J'ai fini de faire le ménage!")

};
waitForMyWashThings()