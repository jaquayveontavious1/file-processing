//Creating a function
function processfile(file,callback) {
    let reader = new FileReader;
    reader.onload = function(event) {
        setTimeout(() => {
            //Perform processing task
            let content = event.target.result;
            let wordCount = content.split(/\s+/).filter(word ).length; //separate and filter the whitespace

            //Call the callback function with the result
            callback(null,wordCount); // null is to ascertain that there is no error in the word count
        },3000);
    }//handle errors
    reader.onerror = function () {
        callback(new Error("File is not readable"));

    };
    reader.readAsText(file)

}
document.getElementById("process").addEventListener("click", function() {
    let fileInput = document.getElementById("input")
})
