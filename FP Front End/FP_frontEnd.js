function goToCreate(project, extraCGI) {
                var url = '/MRcgi/MRTicketPage.pl?MAJOR_MODE=CREATE&LASTID=44232&USER=ccb551&MRP=1e91af9009772e15efd00c07acc508631';
                url += '&PROJECTID=' + project;
                if (extraCGI)
                   url += "&" + extraCGI;

                var usePopup = true;

                if (usePopup) {
                   url += "&RUNNING_IN_POPUP=1";
                   var randomize = Math.ceil(Math.random() * 1000);
                   var winName = 'Create' + randomize;
                   window.open(url, winName, 'top=50,left=75,scrollbars=yes,toolbar=yes,status=yes,navigation=no,height=' + (screen.availHeight * 0.75) + ',width=' + (screen.availWidth * 0.85) + ',resizable=yes');
               }
               else
                   self.location = url;     
            }


/*










*/

https://itsm-fp.northwestern.edu/MRcgi/MRTicketPage.pl
?MAJOR_MODE=CREATE
&LASTID=44232
&USER=ccb551
&MRP=1e91af9009772e15efd00c07acc508631
&PROJECTID=1
&RUNNING_IN_POPUP=1



<form name="regform" id="regform_id" method="POST" action="/MRcgi/MRregister_command.pl" onsubmit="return false" target="_self" _lpchecked="1">

<input type="HIDDEN" name="SUBTASKORDER" value="">
<input type="hidden" name="SOLUTION_ID" value="" id="solution_id">
<input name="USER" type="hidden" value="ccb551">
<input name="PROJECTID" type="hidden" value="1">
<input name="MRP" type="hidden" value="1e91af9009772e15efd00c07acc508631">
<input type="hidden" name="SESS_ID" value="fba98073b5e6529e4fd02a3dd8a8a907">
<input type="hidden" name="AUTO_CLOSE_STATUS" id="AUTO_CLOSE_STATUS">
<input type="hidden" name="RUNNING_IN_POPUP" value="1">
<input type="hidden" name="MAJOR_MODE" value="CREATE">
        
        <script type="text/javascript">

var ajaxCallHappening = false;
var ajaxWaitingList = new Array();

var populateCallback = {
    success: function(o) {
            ajaxCallHappening = false;
            if (YAHOO.AjaxHelpers && YAHOO.AjaxHelpers.wait)
                YAHOO.AjaxHelpers.wait.hide();
            var targetEl = document.getElementById(o.argument);
            if (targetEl)
            {
                targetEl.innerHTML = o.responseText;
                for (var i = 0; i < targetEl.childNodes.length; i++) {
                    var thisChild = targetEl.childNodes[i];
                    if (thisChild.nodeType == 1 && thisChild.tagName == "SCRIPT")
                        eval(thisChild.innerHTML);
                }
            }
            nextAjaxCall();
    },
    failure: function(o) {
            ajaxCallHappening = false;
            if (YAHOO.AjaxHelpers && YAHOO.AjaxHelpers.wait) {
                YAHOO.AjaxHelpers.wait.hide();
                YAHOO.AjaxHelpers.displayError(o.responseText);
            };
            nextAjaxCall();
    }
};
function nextAjaxCall() {
    if (ajaxWaitingList.length > 0) {
        var nextCall = ajaxWaitingList.shift();
        eval(nextCall.functionName + "(" + nextCall.params + ")");
    }
}

<script type="text/javascript">

    assigneeWidgets[assigneeWidgets.length] = new AssigneeWidget(document.regform.fieldArea0,
                                                                 document.regform.ASSIGNTO, 
                                                                 new Array(new jsFP__Team("AAA_IT__bSUPPORT__bCENTER", "AAA_IT__bSUPPORT__bCENTER:dsa949:aea592:sia208:cza577:jdb287:ccb551:tac311:kyc477:cnc794:jfc5020:zcl1827:tco393:sac047:jdo284:jdf731:myf618:jrg798:dch9592:kbi462:lynne:ljd753:gmj521:swk6525:tkz5779:smk1728:vkp260:ask063:akg866:bfl4982:kli0488:ksl763:jlo708:jem854:csm290:rsm408:cmo3665:ckm407:rco2443:woy2360:kpp6539:uap5200:cwp435:mrr958:rls065:jsb429:jls240:ssf386:adt953:pmt657:mry007:ryy380:zzb757", "Assign Team:Daniel Abia:Amanuel Alemu:Sabreen Ali:Charles Auta:Jack Bryant:Caleb Burton:Tushar Chandra:Kelvin Chang:Courtney Chatterton:Justin Chen:Zian Chen:TSS Lead Consultants:Sammy Cuautle:Jennifer Delgado:Joshua Fields:Michelle Foster:John Girotto:David Hofferber:Kimani Isaac:Lynne Jeffers:Leo Ji:Gilbert Juarez:Salome Kariuki:Float Keerasuntonpong:Suzannah Kingsbury:Vikram Kohli:Anna Kubacsek:Aneesh Kumar:Brendan Labadie:Kevin J Lee:Kevin S Lee:Junhao Li:Jo Machesky:Cameron McDonald:Ryan Miller:Christian Montes:Cornelius Muhamba:Rachel Orenstein:Will Ouyang:K Parekh:Upasana Pathak:Chris Porter:Matt Ryczek:Rachael Sarette:Ava Serra:Julia Shenkman:Sammy Su:Adrick Tench:Phillip Trautlein:Mo Yeh:Richard Yu:Shana Zhao")

    
    function convertTitle(v, record)
    {
        var tmp = '' + v;
        tmp = tmp.replace(/>/g, "&#62;").replace(/</g, "&#60;").replace(/"/g, "&#34;").replace(/'/g, "&#39;");
        return(tmp);
    }
    var recordXML = Ext.data.Record.create([
        {name: 'CI_ID', mapping: 'CI_ID'},
        {name: 'CI_TYPE_ID', mapping: 'CI_TYPE_ID'},
        {name: 'CI_CUSTOM_ID', mapping: 'CI_CUSTOM_ID', convert:convertTitle},
        {name: 'RECORDID'},
        {name: 'CI_PROPOSED'},
        {name: 'CHANGE_ID'}
    ]);
    var recordArray = Ext.data.Record.create([
        {name: 'CI_TYPE_ID'},
        {name: 'CI_ID'},
        {name: 'CI_CUSTOM_ID', convert:convertTitle },
        {name: 'CI_PROPOSED'},
        {name: 'CHANGE_ID'}
    ]);

    // create the Data Store
    if ('' != '')
    {
        ds_issue = new Ext.data.Store({
            proxy: new Ext.data.HttpProxy({
                url: '/MRcgi/CMDBAjax_getRelations.pl?',
                method: "POST"
            }),

            // create reader that reads the records
            reader: new Ext.data.XmlReader({
                record: 'RECORD',
                totalProperty: 'TOTALRECORDS',
                id: 'RECORDID'
            }, 
            recordXML),

            // turn on remote sorting
            remoteSort: true,

            baseParams: {
              CMDB_ID: 1,
              MRID: null,
              USER: 'ccb551',
              PROJECTID: 1,
              RELATIONTYPE: 'ISSUE_FROM_ISSUE',
              MRP: '1e91af9009772e15efd00c07acc508631'
            }

        });
    }
    else
    {
           ds_issue = new Ext.data.Store({
                   proxy: new Ext.data.MemoryProxy([]),
                   reader: new Ext.data.ArrayReader({id: 2}, recordArray),

                   // turn on remote sorting
                   remoteSort: false,
                   sortInfo: { field: 'CI_CUSTOM_ID', direction: 'ASC'},
                   baseParams: {
                     CMDB_ID: 1,
                     MRID: null,
                     USER: 'ccb551',
                     PROJECTID: 1,
                     RELATIONTYPE: 'ISSUE_FROM_ISSUE',
                     MRP: '1e91af9009772e15efd00c07acc508631'
                   }

            });
            
            // CIS may exist from a template or auto-link CIS from Select Contact
            if (document.regform.ALL_CIS_SERIALIZED.value) 
                ds_issue.proxy.data = Ext.util.JSON.decode(document.regform.ALL_CIS_SERIALIZED.value);
       }
   
<script type="text/javascript">

            var dialogs = YAHOO.util.Dom.getElementsByClassName("dialogMainContent", "td");
       dialogLoop:
            for (var i = 0; i < dialogs.length; i++) {
                var dialog = dialogs[i];

                //                  TD       TR       TBODY      TABLE
                var parentTable = dialog.parentNode.parentNode.parentNode;
                if (parentTable.style.display != "none") {
                    var inputs = YAHOO.util.Dom.getElementsBy(checkEl, '', dialog);
                    for ( var n = 0; n < inputs.length; n++ ) {
                        // subtask templates (for QuickIssue, etc.) may have a 
                        //   disabled checkbox at the start of the first 
                        //   section. Do not consider such boxes.
                        // further any name starting with sfiBoxInherited 
                        //   is to be ignored.
                        if ( inputs[n].disabled == false &&
                             inputs[n].name != ".accept.all.names." ) {
                            inputs[n].focus();
                            break dialogLoop;
                        }
                    }
                }
            }
            function checkEl(el) {
                if (el.nodeName.toLowerCase() == "input" && el.type.toLowerCase() != "hidden" || el.nodeName.toLowerCase() == "select")
                    if (el.style.display != "none")
                        return true;
                return false;
            }
        
</script>

<input type="hidden" value="1" id="EMPTY_UNWRITEABLE_CHECKBOX_Copy__bOn__bNotifications__Q" name="EMPTY_UNWRITEABLE_CHECKBOX_Copy__bOn__bNotifications__Q"></form>