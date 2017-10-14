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

/*

        <div class="fullPersonWapper">
            <div class="thumbWrapper">
                <img src="https://kb.northwestern.edu/images/group293/74042/Krusty.png" class="conPic" alt="employee photo">
            </div>
            <div class="infoWrapper">
                <p>
                    <strong>Hok Yin Kong</strong><br>
                    hke6379<br>
                    224-714-8552<br>
                    <a href="mailto:HokYinKong2020@u.northwestern.edu">email</a><br>
                    Trainee<br>
                    LC: Kyle<br>
                    <br>
                </p>
            </div>
        </div>


*/



var HTML_prePic = '' +
    '<div class="thumbWrapper">\n' +
        '\t<img id="'; //src="https://kb.northwestern.edu/images/group293/74042/';
var HTML_inPic = '" src="'

var HTML_postPic = '' +
        '.jpg" src="https://firebasestorage.googleapis.com/v0/b/condb-b5234.appspot.com/o/Krusty.png?alt=media&token=49332abb-3f85-4d26-b24c-39c493002f83" class="conPic" alt="employee photo">\n' +
    '\t</div>\n';

var HTML_preName = '' +
    '<div class="infoWrapper">\n' +
        '\t<p>\n' +
        '\t\t<strong>';
var HTML_preNetID = '</strong><br>\n\t\t';
var HTML_prePhone = '<br>\n\t\t';
var HTML_preEmail = '<br>\n\t\t<a href="mailto:';
var HTML_prePosition = '">email</a>';
var HTML_preStatus = '<br>\n\t\t';
var HTML_postAll = '<br>\n\n\t</p>\n</div>';




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
    var tableHTML = '\n<div class="fullPersonWapper">';
    
    for (var i = 0; i < tableArr.length; i++){

            if(i){
                tableHTML += '\n\n</div>\n\n\n\n<div class="fullPersonWapper">'; 
            }
        
        getPic(tableArr[i].NetID + '.jpg');
        
        if (tableArr[i].Position == 'Lead Consultant') {
            tableArr[i].LC = '';
        }
        else if (tableArr[i].LC.split(' ')[0] == 'Not') {
            tableArr[i].LC = "<br>LC: Not Assigned";
        }
        else {
            tableArr[i].LC = "<br>LC: " + tableArr[i].LC.split(' ')[0]; // Take LCs first name only
        }
            
        tableHTML += '\n\n' +
            HTML_prePic + tableArr[i].NetID + HTML_postPic +
            HTML_preName + tableArr[i].nickname + " " + tableArr[i].lastName +
            HTML_preNetID + tableArr[i].NetID +
            HTML_prePhone + tableArr[i].Phone +
            HTML_preEmail + tableArr[i].Email +
            HTML_prePosition + tableArr[i].LC +
            HTML_preStatus + tableArr[i].Status +
            HTML_postAll;

    }
    
    tableRef.innerHTML = tableHTML;  
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
