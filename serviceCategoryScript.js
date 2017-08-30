<script>
/*

1) Copy the portion under the line at the top and above the line at the bottom
2) Open a new FP ticket and paste this code into the browser console
3) It will automatically generate the list and copy it to your clipboard so you can paste the result directly into the KB as raw HTML.

Tested on Chrome, but probably works on firefox too.
---------------------------------------







var serviceFamArr   = [];
var serviceArr      = [];
var categoryArr     = [];
var subCatArr       = [];

var output = '<ul class="list-serviceFamily">\n';

function serviceFamFormatter(item) { serviceFamArr.push(item.name); }
function categoryFormatter(item) { categoryArr.push(item.name); }

fbConfig.fields.Service__bFamily.choices.forEach(serviceFamFormatter);
fbConfig.fields.Category.choices.forEach(categoryFormatter);


for (var i = 0; i < serviceFamArr.length; i++){
    output += '\t<li class="serviceFamily"><strong>'+ serviceFamArr[i] + '</strong></li>\n';
    
    if(fbConfig.fields.Service__bFamily.dependencies[serviceFamArr[i]] != undefined){
        serviceArr = fbConfig.fields.Service__bFamily.dependencies[serviceFamArr[i]].Service;
    
        output += '\t<ul class="list-service">\n';
        for (var j = 0; j < serviceArr.length; j++){
            output += '\t\t<li class="service">' + serviceArr[j] + '</li>\n';
            
            if((fbConfig.fields.Service.dependencies[serviceArr[j]] != undefined)&&(fbConfig.fields.Service.dependencies[serviceArr[j]].hasOwnProperty('Category'))){
                categoryArr = fbConfig.fields.Service.dependencies[serviceArr[j]].Category;
                
                output += '\t\t<ul class="list-category">\n';
                for (var k = 0; k < categoryArr.length; k++){
                    output += '\t\t\t<li class="category">' + categoryArr[k] + '</li>\n';
                    
                    if((fbConfig.fields.Category.dependencies[categoryArr[k]] != undefined)&&(fbConfig.fields.Category.dependencies[categoryArr[k]].hasOwnProperty('Sub__uCategory'))) {
                        subCatArr = fbConfig.fields.Category.dependencies[categoryArr[k]].Sub__uCategory;

                        output += '\t\t\t<ul class="list-subCategory">\n';
                        for (var m = 0; m < subCatArr.length; m++){
                            output += '\t\t\t\t<li class="subCategory">' + subCatArr[m] + '</li>\n';
                        }
                        output += '\t\t\t</ul>\n';
                    }
                }
                output += '\t\t</ul>\n';
            }
        }
        output += '\t</ul>\n';
    }    
}
output += '</ul>\n';


var str = output;

// RegEx replacements come from https://kb.northwestern.edu/internal/page.php?id=70147
str = str.replace(/__b/g, " ");
str = str.replace(/__a/g, "'");
str = str.replace(/__q/g, '"');
str = str.replace(/__t/g, "`");
str = str.replace(/__m/g, "@");
str = str.replace(/__d/g, ".");
str = str.replace(/__u/g, "-");
str = str.replace(/__s/g, ";");
str = str.replace(/__c/g, ":");
str = str.replace(/__p/g, ")");
str = str.replace(/__P/g, "(");
str = str.replace(/__3/g, "#");
str = str.replace(/__4/g, "$");
str = str.replace(/__5/g, "%");
str = str.replace(/__6/g, "^");
str = str.replace(/__7/g, "&");
str = str.replace(/__8/g, "*");
str = str.replace(/__0/g, "~");
str = str.replace(/__f/g, "/");
str = str.replace(/__F/g, "&#92;"); // Backslash
str = str.replace(/__Q/g, "?");
str = str.replace(/__e/g, "]");
str = str.replace(/__E/g, "[");
str = str.replace(/__g/g, ">");
str = str.replace(/__G/g, "<");
str = str.replace(/__B/g, "!");
str = str.replace(/__W/g, "{");
str = str.replace(/__w/g, "}");
str = str.replace(/__C/g, "=");
str = str.replace(/__A/g, "+");
str = str.replace(/__I/g, "|");
str = str.replace(/__M/g, ",");


// Not listed in the KB article above. Found through trial & error
str = str.replace(/__UJud_/g, "–");
str = str.replace(/__UGJc_/g, ""); // possibly space? looks better as nothing


console.log(str);
copy(str);











-----------------------------------------
Don't copy the parts below this line

*/
</script>