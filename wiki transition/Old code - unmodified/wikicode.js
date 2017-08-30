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

$('.infobox').scroll(function() {
    if ($(this).scrollTop() > 0) {// 0 refers to the top space you allow
        $(this).find('.arrow-down').hide();// hide the element
    }
    else {
        $(this).find('.arrow-down').show();// show the element if we're back on top
    }
});


if (document.getElementById('hello')) {
  document.getElementById('hello').innerHTML = 'Hello World - this was inserted using JavaScript';
}




var allInfoboxRefs = document.querySelectorAll('.infobox');

window.onload  = function(){
    for(var i = 0; i < allInfoboxRefs.length; i++){

        var element = allInfoboxRefs[i];
        var maxInfoboxHeight = element.parentElement.offsetHeight;

        if(maxInfoboxHeight < element.scrollHeight){
            // element has overflow
            element.innerHTML += '<span class="arrow-down"></span>';
        }
        else{
            // element don't have overflow
        }
    }
}




document.getElementById("defaultOpen").click(); 