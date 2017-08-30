// Variables
var auth = firebase.auth();
var personRef = firebase.database().ref();
var storageRef = firebase.storage().ref();

var peopleArr = [];
var HTMLarr = [];

var lcArr = [];
var srArr = [];
var conArr = [];
var assocArr = [];


var tableArr = [];
var table_LC;
var table_SrCon;
var table_Con;
var table_Assoc;

personRef.orderByKey().on("value", function(snapshot) {
    peopleArr = snapshot.val();
    setCons();
});                
                
HTMLarr = document.getElementsByClassName('conInfoCell');
tableArr = document.getElementsByClassName('conTable');
            
// Finding the tables. Table 0 is the contact info, doesn't need to be dynamic.
table_LC = tableArr[1];
table_SrCon = tableArr[2];
table_Con = tableArr[3];
table_Assoc = tableArr[4];


window.onload = function() {
    auth.onAuthStateChanged(function(user) {
        if (user) {
            console.log('Anonymous user signed-in.');
        }
        else {
            console.log('There was no anonymous session. Creating a new anonymous user.');
            // Sign the user in anonymously since accessing Storage requires the user to be authorized.
            auth.signInAnonymously();
        }
    });
}
        
var HTML_prePic = '' +
    '<td class="conpic">\n' +
        '\t<div class="center">\n' +
            '\t\t<div class="thumb-tnone">\n' +
                '\t\t\t<div>\n' +
                    '\t\t\t\t<img id="'; //src="https://kb.northwestern.edu/images/group293/74042/';
var HTML_inPic = '" src="'

var HTML_postPic = '' +
    '.jpg" src="https://firebasestorage.googleapis.com/v0/b/condb-b5234.appspot.com/o/Krusty.png?alt=media&token=49332abb-3f85-4d26-b24c-39c493002f83" class="conPic" alt="employee photo">\n' +
                '\t\t\t</div>\n' +
            '\t\t</div>\n' + 
        '\t</div>\n' +
    '</td>\n';



var HTML_preName = '' +
    '<td class="conInfoCell">\n' +
        '\t<p class="conInfoPar">\n' +
        '\t\t<strong>';
var HTML_preNetID = '</strong>\n' +
        '\t\t<br>';
var HTML_prePhone = '' +
        '\n\t\t<br>';
var HTML_preEmail = '\n\t\t<br><a href="mailto:';
var HTML_prePosition = '">email</a>\n\t\t<br>';
var HTML_preStatus = '\n\t\t<br>';
var HTML_postAll = '\n\t\t<br>\n\t</p>\n</td>';




function setCons() {
    
    var lcNum = 0;
    var srNum = 0;
    var conNum = 0;
    var assocNum = 0;
    
    for (var i = 1; i < peopleArr.length; i++){
        switch  (peopleArr[i].Position) {
            case 'Lead Consultant':
                lcArr[lcNum] = peopleArr[i];
                lcNum++;
                break;
            case 'Senior Consultant':
                srArr[srNum] = peopleArr[i];
                srNum++;
                break;
            case 'Consultant':
                conArr[conNum] = peopleArr[i];
                conNum++;
                break;
            case 'Associate Consultant':
                assocArr[assocNum] = peopleArr[i];
                assocNum++;
                break;
            case 'Emeritus LC':
                srArr[srNum] = peopleArr[i];
                srNum++;
                break;
        }
    }
    
    makeTable(lcArr, table_LC);
    makeTable(srArr, table_SrCon);
    makeTable(conArr, table_Con);
    makeTable(assocArr, table_Assoc);
    
}


function makeTable(tableArr, tableRef) {
    var tableHTML = '';
    
    for (var i = 0; i < tableArr.length; i++){
        
        if(!(i%3)){
            if(i){
                tableHTML += '\n\n</tr>\n\n\n\n<tr class="conRow">'; 
            }
            else{
                tableHTML += '\n<tr class="conRow">';
            }
        }
        
        getPic(tableArr[i].NetID + '.jpg');
            
        tableHTML += '\n\n' +
            HTML_prePic + tableArr[i].NetID + HTML_postPic +
            HTML_preName + tableArr[i].nickname + " " + tableArr[i].lastName +
            HTML_preNetID + tableArr[i].NetID +
            HTML_prePhone + tableArr[i].Phone +
            HTML_preEmail + tableArr[i].Email +
            HTML_prePosition + tableArr[i].Position +
            HTML_preStatus + tableArr[i].Status +
            HTML_postAll;

    }
    
    if(tableArr.length % 3){
        tableHTML += '\n</tr>';
    } 
    
    tableRef.innerHTML = '<tbody>\n' + tableHTML + '\n</tbody>\n';  
}

function getPic(fileName) {
    storageRef.child(fileName).getDownloadURL().then(function(url) {
        //picURL = url;
        document.getElementById(fileName).src = url;
    });
}



// Initialization function fires as soon as page loads
function init() {
    console.log('Init function called');
}
