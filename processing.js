//the button processing
// document.getElementById("process").addEventListener("click", function () {
//     let fileInput = document.getElementById("inputfile");
//     let file = fileInput.files[0];

//     if(!file ) {
//         alert("Please upload a file");
//         return;
//     }

//     processfile(file, )
// })
const print = (word) => {
    console.log(word)
}
const useCallBack = (callback) => {
    callback("i love JS")
    console.log("other things")
}
useCallBack(print)