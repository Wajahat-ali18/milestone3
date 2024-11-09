// get references to the form and related area
var form = document.getElementById("dynamic resume builder");
var resumedisplayelement = document.getElementById("resumediplay");
//handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name");
    var email = document.getElementById("name");
    var phone = document.getElementById("name");
    var education = document.getElementById("name");
    var skill = document.getElementById("name");
    var experience = document.getElementById("name");
    // generate resume content dynamically
    var resumeHTML = "\n    <h2><b>resume</b></h2>\n    <h3>personal information<h3>\n    <p><b>name</b>".concat(name, "</p>\n      <p><b>email</b>").concat(email, "</p>\n        <p><b>education</b>").concat(education, "</p>\n        <p><b>experience</b>").concat(experience, "</p>\n        <p><b>skills</b>").concat(skill, "</p>\n        ");
    // display the generated resume
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error("resume display element is missing");
    }
    ;
});
