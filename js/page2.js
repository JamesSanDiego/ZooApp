$(document).ready(function(){
  console.log("Inside doc ready on page 2!");

  //1) retrieve all data saved to LS
  fName = localStorage.getItem("FirstName");
  lName = localStorage.getItem("LastName");
  studentNumber = localStorage.getItem("StudentNumber");
  userName = localStorage.getItem("UserName");
  sheridanProgram = localStorage.getItem("SheridanProgram");
  homeCountry = localStorage.getItem("HomeCountry");
  zooID = localStorage.getItem("zooID");
  zooArray = JSON.parse(localStorage.getItem("zooArray"));

  //Check to see if getting from LS works... it WORKS!
  console.log(zooArray);
  console.log(zooID);
  console.log(fName);
  console.log(lName);
  console.log(studentNumber);
  console.log(userName);
  console.log(sheridanProgram);
  console.log(homeCountry);

  //2) Create header and footer EXACTLY the same as on the main page
  //Header Section
  $("h5:first").html(`Assignment #2 for Winter 2021`);
  $("h5:nth-child(2)").html(`${fName} ${lName} / ${studentNumber} / ${userName}`);
  $("h5:nth-child(3)").html(`<hr>`);
  
  //Footer Section
  $("#footer").html(`
  <h5> <hr> </h5>
  <h5>${sheridanProgram}</h5>
  <h5>${homeCountry}</h5>
  `);

  //Display all data about the zoo chosen
  // ZooName, ZooCity, zipCode, description, photoUrl, zooID
  //I have all this information in my array, so there is no need to use ajax or .getJSON
  //I have a unique ID that will be used to determine which information will be outputted

  $("#zooName").html(`<strong>Zoo Name:</strong><br> ${zooArray[zooID].zooName}`); //Works
  $("#zooCity").html(`<strong>Zoo City:</strong> <br>${zooArray[zooID].zooCity}`); //Works
  $("#zip").html(`<strong>ZIP Code:</strong><br> ${zooArray[zooID].zipCode}`); //Works

  $("#desc").html(`<strong>Description: </strong><br> ${zooArray[zooID].description}`); //Works
  $("#photo").html(`<img src='${zooArray[zooID].photoUrl}' width='150px'>`); //Works
  $("#zooID").html(`<strong>Zoo ID:</strong><br> ${zooArray[zooID].zooID}`); //Works
  
});// End of $(document).ready