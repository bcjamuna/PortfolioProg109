function createRhombus(pHeight, pSymbol, pColorEven, pColorOdd) {
    upperLeft(pHeight, pSymbol, pColorEven, pColorOdd);
    upperRight(pHeight, pSymbol, pColorEven, pColorOdd);
    bottomLeft(pHeight, pSymbol, pColorEven, pColorOdd);
    bottomRight(pHeight, pSymbol, pColorEven, pColorOdd);
}

function upperLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = 0; i < pHeight; i++) {
        rLine += "<p>";
        //create white characters
        for (x = 0; x < pHeight - i; x++) {
            rLine += "<span style='color:#140e0e" + ";'>" + pSymbol + "</span>";
        }

        //Create each line on the Rhombus
        for (j = x; j < pHeight; j++) {
            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            else
                //odd
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
        }
        rLine += "</p>";
        console.log(rLine);
    }

    document.getElementById("upperLeft").innerHTML = rLine;
}

function upperRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = 0; i < pHeight; i++) {
        rLine += "<p>";
        //Create each line on the Rhombus
        for (j = 0; j <= i; j++) {
            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            //odd
        }
        rLine += "</p>";
        console.log(rLine);
    }

    document.getElementById("upperRight").innerHTML = rLine;
}


function bottomRight(pHeight, pColorEven, pColorOdd, pSymbol) {
var rLine = "";
for (i=pHeight-1; i > 0; i--) {
rLine +="<p>";
    //Create each line on the Rhombus
    for (j = 0; j<i; j++) {

        //Is the position even or odd so we change the color
        if (j%2)
            //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
        else
            //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" +pSymbol + "</span>";

        }
        rLine += "</p>";
        // console.log(rLine);

    }

    document.getElementById("bottomRight").innerHTML = rLine;
    }

function bottomLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
var rLine = "";
for (i=pHeight; i > 0; i--) {
    rLine += "<p>";

    //create white characters
        for (x = 0; x < pHeight -i; x++) {
            rLine += "<span style='color:#140e0e" + ";'>" +pSymbol + "</span>";
            }

    //Create each line on the Rhombus
    for (j = 0; j<i; j++) {

        //Is the position even or odd so we change the color
        if (j%2)
            //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
        else
            //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" +pSymbol + "</span>";

        }
        rLine += "</p>";
        // console.log(rLine);

    }

    document.getElementById("bottomLeft").innerHTML = rLine;
    }