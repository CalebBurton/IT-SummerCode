function createInfobox(fakeVar) {
    
    var obj = {'ServiceFamily': 'telecom',
               'Service': 'vpn',
               'Category': '-',
               'SubCategory': '-',
               'Assignees': 'TNS-DataNetwork',
               'ReferralOptions': '<ul><li>option1<ul><li>email</li><li>phone</li></ul></li><li>option2</li></ul>',
               'AuthNetID': 'yes',
               'AuthMFA': 'no',
               'AuthVPN': 'no',
               'AuthSSL': 'no',
               'AuthOther': 'yes',
               'AuthOtherTxt': 'Test tooltip text'}

    var out = '';
    
    out += '' +
    '<div class="infowrap-vertical">' +
        '<div class="infobox itsm">' +
            '<div class="topbox">FootPrints</div>' +
            '<div class="botbox">' +
                '<div class="categorization-table">' +
                    '<div class="categorization-row">' +
                        '<div class="categorization-title">Service Family:</div>' +
                        '<div class="categorization-option">' + obj.ServiceFamily + '</div>' +
                    '</div>' +
                    '<div class="categorization-row">' +
                        '<div class="categorization-title">Service:</div>' +
                        '<div class="categorization-option">' + obj.Service + '</div>' +
                    '</div>' +
                    '<div class="categorization-row">' +
                        '<div class="categorization-title">Category:</div>' +
                        '<div class="categorization-option">' + obj.Category + '</div>' +
                    '</div>' +
                    '<div class="categorization-row">' +
                        '<div class="categorization-title">Sub-Category:</div>' +
                        '<div class="categorization-option">' + obj.SubCategory + '</div>' +
                    '</div>' +
                    '<div class="categorization-row">' +
                        '<div class="categorization-title">Assignees:</div>' +
                        '<div class="categorization-option">' + obj.Assignees + '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="infobox refer">' +
            '<div class="topbox">Referral Options</div>' +
            '<div class="botbox">' + obj.ReferralOptions + '</div>' +
        '</div>' +
    '</div>' +

    '<div class="infowrap-horizontal auth">' +
        '<div class="leftbox">Authentication:</div>' +
        '<div class="rightbox">' +
            '<div class="auth-box' + obj.AuthNetID + '">' +
                '<div class="checkboxSpace"><span class="checkbox"></span></div>' +
                '<div class="authOption">NetID</div>' +
            '</div>' +
            '<div class="auth-box' + obj.AuthMFA + '">' +
                '<div class="checkboxSpace"><span class="checkbox"></span></div>' +
                '<div class="authOption">MFA</div>' +
            '</div>' +
            '<div class="auth-box' + obj.AuthVPN + '">' +
                '<div class="checkboxSpace"><span class="checkbox"></span></div>' +
                '<div class="authOption">VPN</div>' +
            '</div>' +
            '<div class="auth-box' + obj.AuthSSL + '">' +
                '<div class="checkboxSpace"><span class="checkbox"></span></div>' +
                '<div class="authOption">SSL VPN</div>' +
            '</div>'
            '<div class="auth-box tooltip auth-other' + obj.AuthOther + '">' +
                '<div class="checkboxSpace"><span class="checkbox"></span></div>' +
                '<div class="authOption">Other (hover for info)</div>' +
                '<span class="tooltiptext">' + obj.AuthOtherTxt + '</span>' +
            '</div>' +
        '</div>' + 
    '</div>';
    
    return out;
}