var officerListCount = 1;
function addOfficerList() {
  var container = document.getElementById("officerLists");
  var newList = document.createElement("ol");
  newList.id = "officers" + officerListCount;
  newList.innerHTML = "<li><input type='text' required></li>";
  container.appendChild(newList);
  officerListCount++;
}

var suspectListCount = 1;
function addSuspectList() {
  var container = document.getElementById("suspectLists");
  var newList = document.createElement("ol");
  newList.id = "suspects" + suspectListCount;
  newList.innerHTML = "<li><input type='text' required></li>";
  container.appendChild(newList);
  suspectListCount++;
}

var witnessListCount = 1;
function addWitnessList() {
  var container = document.getElementById("witnessLists");
  var newList = document.createElement("ol");
  newList.id = "witnesses" + witnessListCount;
  newList.innerHTML = "<li><input type='text' required></li>";
  container.appendChild(newList);
  witnessListCount++;
}

var howListCount = 1;
function addHowList() {
  var container = document.getElementById("howLists");
  var newList = document.createElement("ol");
  newList.id = "how" + howListCount;
  newList.innerHTML = "<li><input type='text' required></li>";
  container.appendChild(newList);
  howListCount++;
}

function generateText() {
    var what = document.getElementById("what").value;
    var when = document.getElementById("when").value;
    var where = document.getElementById("where").value;
    var how = document.getElementById("how").value;
    var status = document.getElementById("status").value;
    var ioc = document.getElementById("ioc").value;
    var cell = document.getElementById("cell").value;

    var officerLists = document.querySelectorAll("ol[id^='officers'] li");
    var suspectLists = document.querySelectorAll("ol[id^='suspects'] li");
    var witnessLists = document.querySelectorAll("ol[id^='witnesses'] li");
    var howLists = document.querySelectorAll("ol[id^='how'] li");
  
    var officerListText = "";
    var suspectListText = "";
    var witnessListText = "";
    var howListText = "";
    for (var i = 0; i < officerLists.length; i++) {
      var officerList =  (i + 1) + ":\n"
      officerList += officerLists[i].getElementsByTagName("input")[0].value + "\n";
      officerListText += officerList + "\n";
    }
    for(var i = 0; i < suspectLists.length; i++) {
        var suspectList =  (i + 1) + ":\n"
        suspectList += suspectLists[i].getElementsByTagName("input")[0].value + "\n";
        suspectListText += suspectList + "\n";
      }
      for (var i = 0; i < witnessLists.length; i++) {
        var witnessList = (i + 1) + ":\n"
        witnessList += witnessLists[i].getElementsByTagName("input")[0].value + "\n";
        witnessListText += witnessList + "\n";
      }
      for (var i = 0; i < howLists.length; i++) {
        var howList = (i + 1) + ":\n"
        howList += howLists[i].getElementsByTagName("input")[0].value + "\n";
        howListText += howList + "\n";
      }
      var text = 
      "Cagayan de Oro City Police Office 3 - AGORA" 
      + "\n\nSKETCHY REPORT" 
      + "\n\nWHAT: " 
      + what 
      + "\n\nWHEN: " 
      + when 
      + "\n\nWHERE: " 
      + where 
      + "\n\nWHO: " 
      + "\n\nSuspects: " 
      + suspectListText 
      + "\n\nArresting Officers: " 
      + officerListText 
      + "\n\nWitness during inventory: " 
      + witnessListText 
      + "\n\nHow: " 
      + "\n"
      + how
      + "\n"
      + howListText
      + "\nStatus: " 
      + "\n"
      + status
      + "\nIOC: " 
      + ioc
      + "\ncell: " 
      + cell
      + "\n\nSpot Report to follow"
      document.getElementById("output").value = text;
    }

function copyText() {
  var textArea = document.getElementById("output");
  textArea.select();
  document.execCommand("copy");
}


