// Variables
var auth = firebase.auth();
var dbRef = firebase.database().ref();

var allDataArr = [];
var HTMLarr = [];

var type1Arr = [];
var type2Arr = [];


var tableArr = [];

var table_fake;
/*
var table_LC;
var table_SrCon;
var table_Con;
var table_Assoc;
*/

dbRef.orderByKey().on("value", function(snapshot) {
    allDataArr = snapshot.val();
    setHTML();
});                
                
//HTMLarr = document.getElementsByClassName('conInfoCell');
tableArr = document.getElementsByClassName('supportTable');
            
// Finding the tables.
table_fake = tableArr[0]

//table_LC = tableArr[1];
//table_SrCon = tableArr[2];
//table_Con = tableArr[3];
//table_Assoc = tableArr[4];


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

<div class="supportTable" align="center">
    <div class="headerWrapper">
        <div align="center">Group Name</div>
    </div>
    <div class="fullContactWrapper" style="padding:10px;">
        <div class="groupWapper">
            <b>TSS Support Services</b>
        </div>
        <hr>
        <div class="locWrapper">
            Location:<a href="">1800 Sherman Ave</a>
        </div>
        <div class="roomWrapper">
            Suite 1-300 EV
        </div>
        <div class="supportWrapper">
            <div class="primaryWrapper">
                Primary Support: DSS Contact
            </div>
            <div class="secondaryWrapper">
                Secondary Support: Another DSS Contact
            </div>
        </div>
        <div class="contactWrapper">
            <div class="unitWrapper">
                Unit Contact: Other Contact
            </div>
            <div class="phoneWrapper">
                847-491-4357
            </div>
        </div>
        <div class="moreWrapper">
            <a href="/Dept/TSS/DSS/Pages/linktofullpage">
                <b>More Information</b>
            </a>
        </div>
    </div>
</div>


*/


var HTML_preHeader = '' +
    '<div class="headerWrapper">' +
        '<div align="center">';

var HTML_preDept = '' +
        '</div>' +
    '</div>' +
    '<div class="fullContactWrapper" style="padding:10px;">' +
        '<div class="groupWapper">' +
            '<b>';

var HTML_preLocLink = '' +
            '</b>' +
        '</div>' +
        '<hr>' +
        '<div class="locWrapper">' +
            'Location:<a href="';

var HTML_preLocName = '' +
            '">';

var HTML_preRoom = '' +
            '</a>' +
        '</div>' +
        '<div class="roomWrapper">';

var HTML_prePrimary = '' +
        '</div>' +
        '<div class="supportWrapper">' +
            '<div class="primaryWrapper">';
    
var HTML_preSecondary = '' +
            '</div>' +
        '<div class="secondaryWrapper">';
    
var HTML_preUnit = '' +
        '</div>' +
    '</div>' +
    '<div class="contactWrapper">' +
        '<div class="unitWrapper">' +
            'Unit Contact: ';

var HTML_prePhone = '' +
        '</div>' +
        '<div class="phoneWrapper">';
    
var HTML_preMoreLink = '' +
        '</div>' +
    '</div>' +
    '<div class="moreWrapper">' +
        '<a href="';

var HTML_preMoreName = '' +
        '">' +
        '<b>';

var HTML_postAll = '' +
        '</b>'
        '</a>'
    '</div>'
'</div>'
'</div>';




function setHTML() {
    
    /*
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
    */
    
    var fakeArr = [];
    var fakeObj = {
        group: 'fakeGroup', 
        dept: 'fakeDept',
        locLink: 'fakeLink',
        locName: 'fakeLoc',
        room: 'fakeRoom',
        primary: 'fakePrimary',
        secondary: 'fakeSecondary',
        unit: 'fakeUnit',
        phone: 'fakePhone',
        moreLink: 'fakeLink2',
        moreName: 'fakeMore',
    };
    
    for (var k = 0; k < 5; k++){
        fakeArr.push(fakeObj);
    }
    
    makeTable(fakeArr, table_fake);
    
    
    //makeTable(lcArr, table_LC);
    //makeTable(srArr, table_SrCon);
    //makeTable(conArr, table_Con);
    //makeTable(assocArr, table_Assoc);
    
}


function makeTable(tableArr, tableRef) {
    var tableHTML = '';
    
    for (var i = 0; i < tableArr.length; i++){
/*
            if(i){
                tableHTML += '\n\n</div>\n\n\n\n<div class="fullPersonWapper">'; 
            }
        
        getPic(tableArr[i].NetID + '.jpg');
*/
        
        tableHTML += '\n\n' +
            HTML_preHeader + tableArr[i].group +
            HTML_preDept + tableArr[i].dept +
            HTML_preLocLink + tableArr[i].locLink +
            HTML_preLocName + tableArr[i].locName +
            HTML_preRoom + tableArr[i].room +
            HTML_prePrimary + tableArr[i].primary +
            HTML_preSecondary + tableArr[i].secondary +
            HTML_preUnit + tableArr[i].unit +
            HTML_prePhone + tableArr[i].phone +
            HTML_preMoreLink + tableArr[i].moreLink +
            HTML_preMoreName + tableArr[i].moreName +
            HTML_postAll;
        
        console.log('item created');
        console.log(i);

    }
    
    tableRef.innerHTML = tableHTML;  
}

// Initialization function fires as soon as page loads
function init() {
    console.log('Init function called');
}
