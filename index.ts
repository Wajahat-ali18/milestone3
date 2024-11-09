// get references to the form and related area
const form = document.getElementById(`dynamic resume builder`) as HTMLFormElement;
const resumedisplayelement = document.getElementById(`resumediplay`) as HTMLDivElement;
//handle form submission
form.addEventListener(`submit`, (event:Event) =>{
    event.preventDefault();//prevent page reload
    //collect input values
    const name = (document.getElementById(`name`) as HTMLInputElement);
    const email = (document.getElementById(`name`) as HTMLInputElement);
    const phone= (document.getElementById(`name`) as HTMLInputElement);
    const education = (document.getElementById(`name`) as HTMLInputElement);
    const skill = (document.getElementById(`name`) as HTMLInputElement);
    const experience = (document.getElementById(`name`) as HTMLInputElement);

    // generate resume content dynamically
    const resumeHTML = `
    <h2><b>resume</b></h2>
    <h3>personal information<h3>
    <p><b>name</b>${name}</p>
      <p><b>email</b>${email}</p>
        <p><b>education</b>${education}</p>
        <p><b>experience</b>${experience}</p>
        <p><b>skills</b>${skill}</p>
        `;

  // display the generated resume
  
  if(resumedisplayelement){
    resumedisplayelement.innerHTML = resumeHTML;
  }  else{
    console.error(`resume display element is missing`)
  };

        
    




})