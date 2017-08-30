function openTab(evt, TabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
}



function toggleScrollArrow() {
    var allInfoboxRefs = document.querySelectorAll('.infobox');
    
    for(var i = 0; i < allInfoboxRefs.length; i++){

        var element = allInfoboxRefs[i];
        var parent = element.parentElement;

        if(parent.offsetHeight < element.scrollHeight){
            // element has overflow
            element.classList.toggle("overflowing", true);
            // turn the arrow on immediately
            element.classList.toggle("overflow-arrow-shown", true);
        }
        else{
            // element doesn't have overflow
            element.classList.toggle("overflowing", false)
        }
    }
}


$('.infobox').scroll(function() {
    if ($(this).scrollTop() > 0) {// 0 refers to the top space you allow
        $(this).toggleClass("overflow-arrow-shown", false);
        // hide the element
    }
    else {
        $(this).toggleClass("overflow-arrow-shown", true);
        // show the element if we're back on top
    }
});



window.onload  = function(){
    toggleScrollArrow(); //checkInfoboxOverflow(); // Have to check after the window has fully loaded and CSS has all been applied
    
    console.log(navigator.userAgent);
    
    var userAgent = navigator.userAgent;
    var mac = (userAgent.search(/Macintosh;/) != -1); // is the user on a mac?
    console.log(mac);
    
    if(mac){
        var bod = document.querySelector('body');
        bod.classList.toggle("mac-user", true);
    }
}




document.getElementById("defaultOpen").click(); 