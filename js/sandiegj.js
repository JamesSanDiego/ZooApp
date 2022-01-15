//Below are my personal variables
var fName;
var lName;
var studentNumber;
var userName;
var sheridanProgram;
var homeCountry;

//Classes have to be hoisted!
/*Create a Class for Zoo data */
class Zoo{
  constructor(zooName, zooCity, zipCode, description, photoUrl, zooID){
    this.zooName = zooName;
    this.zooCity = zooCity;
    this.zipCode = zipCode;
    this.description = description;
    this.photoUrl = photoUrl;
    this.zooID = zooID;
  }
} //end of Zoo class

var zooArray = new Array(); //declare new array
var newZoo; //declare newZoo variable

//DOCUMENT.READY FUNCTION BELOW
$(document).ready(function(){
  console.log("In (document).ready");

  $.getJSON("dataFiles/A2-Zoo.json", function(data){ //Start of .getJSON
    console.log("in .getJSON file");
    
    //retrieve personal information from JSON file
    fName = data.myInfo.FirstName;
    lName = data.myInfo.LastName;
    studentNumber = data.myInfo.StudentNumber;
    userName = data.myInfo.UserName;
    sheridanProgram = data.myInfo.SheridanProgram;
    homeCountry = data.myInfo.HomeCountry;

    console.log(fName);
    console.log(lName);
    console.log(studentNumber);
    console.log(userName);
    console.log(sheridanProgram);
    console.log(homeCountry);

    //Save to local storage
    localStorage.setItem("FirstName",fName);
    localStorage.setItem("LastName",lName);
    localStorage.setItem("StudentNumber",studentNumber);
    localStorage.setItem("UserName",userName);
    localStorage.setItem("SheridanProgram",sheridanProgram);
    localStorage.setItem("HomeCountry",homeCountry);

    //Populating the array with the information from the JSON file
    for(let zooArr of data.zooData){ //data is the JSON file, will now enter zooData
      newZoo = new Zoo(
        zooArr.zooName,
        zooArr.zooCity,
        zooArr.zipCode,
        zooArr.description,
        zooArr.photoUrl,
        zooArr.zooID
      );
      zooArray.push(zooArr);
    }
    console.log(zooArray);

    //Saving to local storage using stringfy
    localStorage.setItem("zooArray",JSON.stringify(zooArray));

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


    //Populate the left side of the grid
    $("#leftSide").html("");
    for(let zooList = 0; zooList < 5; zooList++){ //only need to iterate from elements 0-4
      $("#leftSide").append(`
      <ul id='zooList'>
        <li id='${zooList}'>
          <a href='pages/page2.html' class='zooLink'>
            ${zooArray[zooList].zooName} / ${zooArray[zooList].zooCity}
          </a>
        </li>

      </ul>
      
      `);
    }

    //Populate the right side of the grid
    $("#rightSide").html("");
    for(let zooList2 = 5; zooList2 < zooArray.length; zooList2++){ //iterates through elements 5 - length
      $("#rightSide").append(`
      <ul id='zooList'>
        <li id='${zooList2}'>
          <a href='pages/page2.html' class='zooLink'>
            ${zooArray[zooList2].zooName} / ${zooArray[zooList2].zooCity}
          </a>
        </li>

      </ul>
      
      `);
    }



  }); //end of .getJSON file

  //When a zoo is selected, save the zoo ID for that zoo in LS. zooID will range from 0-9
  $(document).on("click","#zooList > li",function(){
    localStorage.setItem("zooID", $(this).closest("li").attr("id"));
  })

});//end of (document).ready