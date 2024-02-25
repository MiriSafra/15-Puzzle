var basemat1 = [["../images/1.jpg", "../images/2.jpg", "../images/3.jpg", "../images/4.jpg"],
    ["../images/5.jpg", "../images/6.jpg", "../images/7.jpg", "../images/8.jpg"],
    ["../images/9.jpg", "../images/10.jpg", "../images/11.jpg", "../images/12.jpg"],
    ["../images/13.jpg", "../images/14.jpg", "../images/15.jpg", ""]];

var mat1 = [["../images/1.jpg", "../images/2.jpg", "../images/3.jpg", "../images/4.jpg"],
    ["../images/5.jpg", "../images/6.jpg", "../images/7.jpg", "../images/8.jpg"],
    ["../images/9.jpg", "../images/10.jpg", "../images/11.jpg", "../images/12.jpg"],
    ["../images/13.jpg", "../images/14.jpg", "../images/15.jpg", ""]];

var basemat2 = [["../images/1 (2).jpg", "../images/2 (2).jpg", "../images/3 (2).jpg", "../images/4 (2).jpg"],
    ["../images/5 (2).jpg", "../images/6 (2).jpg", "../images/7 (2).jpg", "../images/8 (2).jpg"],
    ["../images/9 (2).jpg", "../images/10 (2).jpg", "../images/11 (2).jpg", "../images/12 (2).jpg"],
    ["../images/13 (2).jpg", "../images/14 (2).jpg", "../images/15 (2).jpg", ""]];

var mat2 = [["../images/1 (2).jpg", "../images/2 (2).jpg", "../images/3 (2).jpg", "../images/4 (2).jpg"],
    ["../images/5 (2).jpg", "../images/6 (2).jpg", "../images/7 (2).jpg", "../images/8 (2).jpg"],
    ["../images/9 (2).jpg", "../images/10 (2).jpg", "../images/11 (2).jpg", "../images/12 (2).jpg"],
    ["../images/13 (2).jpg", "../images/14 (2).jpg", "../images/15 (2).jpg", ""]];
var mat;
var basemat;
//הדפסת המטריצה כל פעם
function printboard() {
    document.getElementById("board").innerHTML = " ";
    var table = document.createElement("table");
    for (var i = 0; i < 4; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            var td = document.createElement("td");
            if (mat[i][j] != 0) {
                var img = document.createElement("img");
                img.setAttribute("src", mat[i][j]);
                td.appendChild(img);
            }
            else {
                td.setAttribute("id", "zero");
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
        var center = document.createElement("center");
        center.appendChild(table);
    }
    document.getElementById("board").appendChild(center);
}
//הדפסת המטריצה בצורה מסודרת
function printboard1() {
    document.getElementById("board").innerHTML = " ";
    var table = document.createElement("table");
    for (var i = 0; i < 4; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            var td = document.createElement("td");
            if (basemat[i][j] != 0) {
                var img = document.createElement("img");
                img.setAttribute("src", basemat[i][j]);
                td.appendChild(img);
            }
            else {
                td.setAttribute("id", "zero");
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
        var center = document.createElement("center");
        center.appendChild(table);
    }
    document.getElementById("board").appendChild(center);
}
var key;
//אתחול המפתח מהלחיצות
function moveByKey(event) {
    key = event.keyCode;
    move(key);
    printboard();
    check();
}
//אתחול המפתח באופן רנדומלי
function moveByRandom() {
    document.body.addEventListener("keyup", moveByKey);
    for (var i = 0; i < 200; i++) {
        key = Math.floor(Math.random() * 6) + 36;
        move(key);
    }
    printboard();
}

//הזזה במטריצה
function move() {
    if (key > 36 && key <= 40) {
        for (var i = 0; i < mat.length; i++) {
            var flag = 0;
            for (var j = 0; j < mat.length; j++) {
                if (mat[i][j] == "") {
                    if (key == 37) {
                        if (j != 3) {
                            mat[i][j] = mat[i][j + 1];
                            mat[i][j + 1] = "";
                            flag = 1;
                            break;
                        }

                    }
                    else if (key == 38) {
                        if (i != 3) {
                            mat[i][j] = mat[i + 1][j];
                            mat[i + 1][j] = "";
                            flag = 1;
                            break;
                        }

                    }
                    else if (key == 39) {
                        if (j != 0) {
                            mat[i][j] = mat[i][j - 1];
                            mat[i][j - 1] = "";
                            flag = 1;
                            break;
                        }

                    }
                    else if (key == 40) {
                        if (i != 0) {
                            mat[i][j] = mat[i - 1][j];
                            mat[i - 1][j] = "";
                            flag = 1;
                            break;
                        }

                    }
                }
            }
            if (flag == 1)
                break;
        }

    }
}
//בדיקת ניצחון
function check() {
    var flag = 0;
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat.length; j++) {
            if (mat[i][j] != basemat[i][j]) {
                flag = 1;
                break;
            }
        }
        if (flag == 1)
            break;
    }
    if (flag == 0) {
        if (basemat[0][0] == "../images/1.jpg") {
            var img = document.createElement("img");
            img.setAttribute("src", "../images/16.jpg");
            document.getElementById("zero").appendChild(img);
        }
        document.body.removeEventListener("keyup", moveByKey);
       setTimeout("win()", 1500);
    }
}
//הודעת ניצחון
function win() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
        play();
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
//תחילת המשחק
function play() {
    var b = Math.floor(Math.random() * 2);
    if (b == 0) {
        mat = mat1;
        basemat = basemat1;
    }
    else {
        mat = mat2;
        basemat = basemat2;
    }
    printboard1();
    setTimeout(" moveByRandom()", 1500);
}
play();