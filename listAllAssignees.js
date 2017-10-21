function printThisShit(){
    var list;

assigneeWidgets[0].teams.forEach(function(element) {
    if(element.name != 'Individual Users'){
        var s = element.name;
        var v1 = s.replace(new RegExp("__u", 'g'), '-');
        var v2 = v1.replace(new RegExp("__b", 'g'), " ");
        list += (v2+'\n');
        element.memberRealNames.forEach(function(elem) { 
            if (!(elem.includes('Assign'))) { list+= ('     >>>' + elem + '\n'); }});
    }
});
 
    console.save(list);
}