//**********************************Fetch nodes and connections fron neo4j***********************//

function getData(queryObj) {
    var recievedData;
    $.ajax({
        type: "post",
        async: false,
        accept: "application/json",
        headers: { "Authorization": credentials },
        contentType: "application/json; charset=utf-8",
        url: "http://" + HOST + ":" + PORT + "/db/data/cypher",
        data: JSON.stringify(queryObj),
        success: function (data, textStatus, jqXHR) {
            recievedData = data.data;
        },

        failure: function (msg) {
            console.error("Ajax Error: get data ajax failed");
        }

    });

    return recievedData;
}
//_______________________________________________________________________________________________//

//**********************************Formats Data as Per Charting Requirements********************//

function sanatizeData(recievedNode, recievedLink) {
    var linkLength = recievedLink.length;
    console.info("SanatizeData() called: Data Formatting Started.");
    var returnObj = {
    };
    var nodes = [];
    var links = [];
    for (var x = 0; x < recievedNode.length; x++) {
        nodes.push(recievedNode[x][0]);
    };
    for (var y = 0; y < linkLength; y++) {
        links.push(recievedLink[y][0]);
    }
    returnObj.links = links;
    returnObj.nodes = nodes;

    console.info("SanatizeData(): Data Formatting Finished.")
    return returnObj;
};
//_____________________________________________________________________________________________//