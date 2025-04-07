// function first(data,Call){
//     console.log(`Step 1 : ${data}`);
//     Call(data+1);
// }
// function second(data,Call){
//     console.log(`Step 2 : ${data}`);
//     Call(data+1);
// }
// function third(data){
//     console.log(`Final data : ${data}`);
// }
// first(1, function(result1){
//     second(result1,function(result2){
//         third(result2);
//     })
// })

// // Callback hell in setTimeout

// setTimeout(function(){
//     console.log("Step : 1");
//     setTimeout(function(){
//         console.log("Step : 2");
//         setTimeout(function(){
//             console.log("Step : 3");
//             setTimeout(function(){
//                 console.log("Step : 4");
//             },2000)
//         },2000)
//     },2000)
// },2000)