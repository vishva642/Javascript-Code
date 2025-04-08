// // Create Promise

// let myPromise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("Successfully completed!");
//     }
//     else{
//         reject("Rejected");
//     }
// });

// // Promise handle

// myPromise
// .then((data)=>console.log("Successfull : ",data))
// .catch((error)=>console.log("Error : ",error))
// .finally(()=>console.log("Cleanup : Promise handled!"));

// let URL = "https://dummyjson.com/products";
// let response = new Promise(async (resolve, reject)=>{
//     try{
//         let data = await fetch(URL);
//         jsondata = await data.json;
//         resolve(jsondata);
//     }
//     catch(error){
//         reject("Failed");
//     }
// });
// response.then((data)=>console.log(data)).catch((error)=>console.log(error));

async function response() {
    try {
        let data = await fetch(URL);
        console.log(data);
        jsondata = await data.json();
        console.log(jsondata);
    } catch (error) {
        console.log("Failed!");
    }
}