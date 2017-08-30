window.onload = function () {
    
    var allFlowcharts = document.getElementsByClassName("flowchartWrapper");    
    
    for (var i = 0; i < allFlowcharts.length; i++){
        
        var thisChart = allFlowcharts[i];
        
        var flowchartDiv = document.createElement('div');
        flowchartDiv.className = "mxgraph";
        flowchartDiv.style = "max-width:100%; border:1px solid transparent;";
        flowchartDiv.dataset.mxgraph = allFlowcharts[i].dataset.src1;
        
        var flowchartScript = document.createElement('script');
        flowchartScript.type = 'text/javascript';
        flowchartScript.src = decodeURI(allFlowcharts[i].dataset.src2);
        
        thisChart.appendChild(flowchartDiv);
        thisChart.appendChild(flowchartScript);
    }
}