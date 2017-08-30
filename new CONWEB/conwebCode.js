// Global Variables
var isMobile = false;

var allTheTips;
var tipCounter;
var numTips;
var oldTip;
var newTip;

var allKudos;
var dotContainer;
var kudosIndex;
var kudosPages;
var autoChangeKudos;


window.onload = function() {
    
    /**************************************************************************************
     Replace the generic "N" favicon with a custom one that looks like the old CONWEB icon.
     Don't do it before the page fully loads or it'll be overwritten.
    **************************************************************************************/
    
    var heady = document.getElementsByTagName('head')[0];
    heady.innerHTML += '<link rel="shortcut icon" href="https://kb.northwestern.edu/images/group293/71903/icons/favicon.ico">';
    

    
    
    /**************************************************************************************
     Display the tip of the day and any warnings/notifications that are active
    **************************************************************************************/
    
    allTheTips = document.getElementsByClassName('tip');
    tipCounter = document.querySelector('.tipnum');
    numTips = allTheTips.length;
    triggerTipbox();
    toggleScrollArrow();
    
    getWeekType();
    
    /* Uncomment the line below this in order to display the red warning notification box */
    disp('notificationDiv','block');
    

    
    /**************************************************************************************
     Check whether the site is in mobile mode.
    **************************************************************************************/
    var seekString = document.querySelector('div#view-toggle a:last-child').href; // Check what URL is hyperlinked to the View Toggle button
    var seekRegEx = /&dm=(\w)/; // Long encoded URL. The important key is dm. If dm=m it sends you to mobile, if dm=d it sends you to desktop 
    
    if (seekString.match(seekRegEx)[1] == 'm'){ // If hitting the toggle would send you to mobile, you must be on desktop
        isMobile = false;
        console.log('Desktop site');
    }
    else if (seekString.match(seekRegEx)[1] == 'd') { // If hitting the toggle would send you to desktop, you must be on mobile
        isMobile = true;
        console.log('Mobile site');
    }
    else {
        console.log('\nWARNING: Unable to detect whether site is in desktop or mobile mode\n');
    }
    
    
    
    /**************************************************************************************
     Replace the header logo / title
    **************************************************************************************/
    if(!isMobile){
        // Replace the KB logo with the conweb logo
        var topLogo = document.getElementById('group-logo');
        topLogo.lastChild.firstChild.src = 'https://kb.northwestern.edu/images/group293/71903/icons/NorthwesternConweb.png';
    }
    else {
        // There's no logo on the mobile site, it's just text
        var topLogo = document.querySelector('div#site-title h1 a');
        topLogo.innerText = 'CONWEB';
    }
    
    
    
    /**************************************************************************************
     Show the first page of good feedback and turn on auto-cycling
    **************************************************************************************/
    
    allKudos = document.getElementsByClassName('kudos-person');
    dotContainer = document.getElementsByClassName("dot-container")[0];
    kudosIndex = 0;
    kudosPages = [];
    
    for (var i = 0; i < allKudos.length; i++) {

        var j = i % 3;
        
        if(kudosPages[kudosIndex]){
        }
        else{
            kudosPages[kudosIndex] = [];
            dotContainer.innerHTML += '\n<span class="dot" onclick="showKudos(' + kudosIndex + ')"></span>\n';
        }

        kudosPages[kudosIndex].push(allKudos[i]);
        if (j == 2){
            kudosIndex++;
        }
        
        allKudos[i].style.display = "none";
    }

    showKudos(0);
    autoChangeKudos = true; 
    
    var kudosInterval = setInterval(function(){
        if(autoChangeKudos){
            changeKudos(1); // Turns the auto-cycling off... not what we want
            autoChangeKudos = true; // Turn the auto-cycling back on
        }
    }, 4000);
    
    
    /**************************************************************************************
     Manually force different elements to display, for testing
    **************************************************************************************/
    
    //toggleTipbox(1);
    //disp('payDayDiv','block');
    //disp('timeSheetDiv','block');
    //disp('notificationDiv','block');
    
}



// Opens all core services as tabs
function openCore() {
    var wiki = window.open("http://wiki.it.northwestern.edu/wiki/index.php/Service_Wiki");
    var kb = window.open("https://kb.northwestern.edu/internal");
    var fp = window.open("https://itsm.northwestern.edu/footprints");
    var nuval = window.open("http://nuvalidate.northwestern.edu/admin");
    var directory = window.open("http://directory.northwestern.edu/?verbose=1");

    if(wiki && kb && fp && nuval && directory){
        // successfully opened all tabs
    }
    else {
        alert('Opening core tools failed. This is probably because you have not allowed popups on CONWEB.');
    }
}

function toggleDropdown(thisLink){

    if(thisLink.nextElementSibling.style.display == ''){
        closeAllDropdowns();
        thisLink.nextElementSibling.style.display = 'block';
    }
    else{
        thisLink.nextElementSibling.style.display = '';
    }
}

function closeAllDropdowns(){
    var allDropdownArr = document.getElementsByClassName('nav-dropdown-content');

    for(var i = 0; i < allDropdownArr.length; i++){
        allDropdownArr[i].style.display = '';
    }
}

// Close all the dropdown menus if the user clicks elsewhere on the page
window.onclick = function(event) {

    if (event.target.matches('#tipbox-wrapper')){
        disp('tipbox-wrapper','none');
    }
    
    
    if (!event.target.matches('.nav-dropdown-content') &&
        !event.target.matches('.nav-dropdown') &&
        !event.target.matches('.dropdown-arrow') &&
        !event.target.matches('.nav-dropdown-title')) {

        closeAllDropdowns();

    }
}

// Shorthand function for hiding and displaying items
function disp(id,type) {
    document.getElementById(id).style.display = type;
}

// Sets a cookie with a specific name, value, and expiration length (in days)
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Retrieves a cookie that matches the given name. If no cookie is found, returns null string.
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function closeBox(closeButton){
    closeButton.parentElement.style.display = "none";

    console.log('Close button clicked on:')
    console.log(closeButton.parentElement.id);
    switch(closeButton.parentElement.id) {
        case 'payDayDiv':
            setCookie('closedPayday','yes',1);
            break;
        case 'timeSheetDiv':
            setCookie('closedTimesheet','yes',1);
            break;
        case 'notificationDiv':
            setCookie('closedWarning','yes',1); // We never actually check this cookie. We could if we wanted to though.
            break;
        case 'tipbox-wrapper':
            break;
        default:
            console.log('Unexpected notification box ID');
            break;
    }
}

function getWeekType() {
    var d = new Date();

    // Clear out the time info, focus on the date only
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

    var fri = (d.getDay() == 5); // Javascript "Day": Sunday = 0, Monday =1, ..., Friday = 5

    if(fri){

        var yearStart = new Date(d.getFullYear(),0,1); // Get first day of year

        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
            // Find # days since beginning of year
            //     Subtract current date (in milliseconds) from Jan 1 (in milliseconds)
            //     Divide by # of milliseconds in a day (86,400,000)
            //     Add 1, since otherwise it would be zero-indexed
            // Divide by 7 to get # of weeks since beginning of year
            // Round up

        if(weekNo % 2){
            if(getCookie('closedPayday') != 'yes'){
                document.getElementById('payDayDiv').style.display = 'block';
                console.log('payday week');                    
            }
        }
        else{
            if(getCookie('closedTimesheet') != 'yes'){
                document.getElementById('timeSheetDiv').style.display = 'block';
                console.log('timecard week');
            }
        }   
    }
    else{
        document.getElementById('timeSheetDiv').style.display = '';
        document.getElementById('payDayDiv').style.display = '';
    }  
}

function getDayOfYear() {
    var d = new Date();

    // Clear out the time info, focus on the date only
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

    var yearStart = new Date(d.getFullYear(),0,1); // Get first day of year

    var dayNo = Math.ceil( ( (d - yearStart) / 86400000) + 1);
        // Find # days since beginning of year
        //     Subtract current date (in milliseconds) from Jan 1 (in milliseconds)
        //     Divide by # of milliseconds in a day (86,400,000)
        //     Add 1, since otherwise it would be zero-indexed
        // Round up
    return dayNo;
}

function toggleScrollArrow() {
    
    var includeDocRef = document.getElementById('include_doc_74663');
    var tipboxRef = includeDocRef.parentElement;
    //var maxTipboxHeight = tipboxRef.offsetHeight;

    if(tipboxRef.offsetHeight < includeDocRef.scrollHeight){
        // element has overflow
        tipboxRef.classList.toggle("overflowing", true)
        // turn the arrow on immediately
        tipboxRef.classList.toggle("overflow-arrow-shown", true)
    }
    else{
        // element doesn't have overflow
        tipboxRef.classList.toggle("overflowing", false)
    }
}

$('#tipbox-body').scroll(function() {
    if ($(this).scrollTop() > 0) {// 0 is the top of the element
        $(this).toggleClass("overflow-arrow-shown", false);
        // hide the element
    }
    else {
        $(this).toggleClass("overflow-arrow-shown", true);
        // show the element again if we're back on top
    }
});

function toggleTipbox(on) {
    
    var tipboxOverlayRef = document.querySelector('#tipbox-wrapper');
    
    if(on != 1) {
    //if(tipboxOverlayRef.style.display == 'block'){
        tipboxOverlayRef.style.display = 'none';
        document.getElementsByTagName('html')[0].style.height = "auto";
    }
    else{
        tipboxOverlayRef.style.display = 'block';
        document.getElementsByTagName('html')[0].style.height = "100%" // Block scrolling for body behind tipbox
    }

}

function changeTip(direction) {

    if(direction){
        newTip = (oldTip + 1) % numTips; // Next tip
    }
    else{
        newTip = (oldTip - 1) % numTips; // Previous tip
    }

    if(newTip < 0){ // Handles the case where you go backwards from position 0
        newTip = numTips + newTip;
    }
    
    allTheTips[oldTip].classList.toggle('active-tip', false);
    allTheTips[newTip].classList.toggle('active-tip', true);
    
    tipCounter.firstChild.innerHTML = newTip + 1; // Add one to account for zero-indexing
    tipCounter.lastChild.innerHTML = numTips; // Leave as-is
    
    oldTip = newTip;
    toggleScrollArrow();
}

function triggerTipbox(){
    var today = new Date();
    var todayDate = today;
    var today = today.toDateString();
    var lastTipShown = getCookie('tipDisp');
    
    var dayOfYear = getDayOfYear();
    var todaysTip = (dayOfYear % numTips);
    
    allTheTips[todaysTip].className += ' active-tip';
    
    tipCounter.firstChild.innerHTML = todaysTip + 1; // account for zero-indexing
    tipCounter.lastChild.innerHTML = numTips;
    
    oldTip = todaysTip;
    
    if(lastTipShown != today){
        setCookie('tipDisp',today,1);
        toggleTipbox(1);
    }
    else{
        toggleTipbox(0);
    }
}

function showKudos(n){

    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < kudosPages.length; i++) {
        if(i == n){
            for (var j = 0; j < kudosPages[i].length; j++) {
                kudosPages[i][j].style.display = ""; 
            }
            dots[i].classList.toggle("active", true);
        }
        else{
           for (var j = 0; j < kudosPages[i].length; j++) {
               kudosPages[i][j].style.display = "none";
            }
            dots[i].classList.toggle("active", false);
        }
    }
    kudosIndex = n;
    autoChangeKudos = false; // Turn off the auto-cycling if someone manually changes slides
}

function changeKudos(direction) {

    if(direction){
        kudosIndex = (kudosIndex + 1) % kudosPages.length; // Next slide
    }
    else{
        kudosIndex = (kudosIndex - 1) % kudosPages.length; // Previous slide
    }

    if(kudosIndex < 0){ // Handles the case where you go backwards from position 0
        kudosIndex = kudosPages.length + kudosIndex;
    }
    showKudos(kudosIndex);
}