var allFlowcharts = document.getElementsByClassName("flowchartWrapper");

//for (var i = 0; i < allFlowcharts.length; i++){ // Back when I thought I could make multiple flowcharts work at once
for (var i = 0; i < 1; i++){
    var thisChart = allFlowcharts[i];
    var fileID = allFlowcharts[i].dataset.src;

    var flowchartDiv = document.createElement('div');
    flowchartDiv.className = "mxgraph";
    flowchartDiv.style = "max-width:100%; border:1px solid transparent;";
    flowchartDiv.dataset.mxgraph = JSON.stringify({ "highlight":"#0000ff",
                                                    "target":"blank",
                                                    "nav":true,
                                                    "resize":false,
                                                    "toolbar":"zoom layers lightbox",
                                                    "edit":"https://drive.google.com/file/d/"+ fileID + "/view?usp=sharing",
                                                    "url":"https://drive.google.com/a/u.northwestern.edu/uc?id=" + fileID + "&export=download"
                                                   });
    

    var flowchartScript = document.createElement('script');
    flowchartScript.type = 'text/javascript';
    flowchartScript.src = 'https://www.draw.io/embed2.js?&fetch=https%3A%2F%2Fdrive.google.com%2Fa%2Fu.northwestern.edu%2Fuc%3Fid%3D' + fileID + '%26export%3Ddownload';

    thisChart.appendChild(flowchartDiv);
    thisChart.appendChild(flowchartScript);
}