var basemat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
var mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
//הדפסת המטריצה כל פעם
function printboard() {
    document.getElementById("board").innerHTML = " ";
    var table = document.createElement("table");
    for (var i = 0; i < 4; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            var td = document.createElement("td");
            if (mat[i][j] != 0) {

                var text = document.createTextNode(mat[i][j]);
                td.appendChild(text);

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
    for (var i = 0; i <200; i++) {
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
                if (mat[i][j] == 0) {
                    if (key == 37) {
                        if (j != 3) {
                            mat[i][j] = mat[i][j + 1];
                            mat[i][j + 1] = 0;
                            flag = 1;
                            break;
                        }

                    }
                    else if (key == 38) {
                        if (i != 3) {
                            mat[i][j] = mat[i + 1][j];
                            mat[i + 1][j] = 0;
                            flag = 1;
                            break;
                        }

                    }
                    else if (key == 39) {
                        if (j != 0) {
                            mat[i][j] = mat[i][j - 1];
                            mat[i][j - 1] = 0;
                            flag = 1;
                            break;
                        }

                    }
                    else if (key == 40) {
                        if (i != 0) {
                            mat[i][j] = mat[i - 1][j];
                            mat[i - 1][j] = 0;
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
    if (flag == 0)
        win();
}
//הודעת ניצחון
function win() {
    document.body.removeEventListener("keyup", moveByKey);
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
        window.open("../html/level2.html");
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
//תחילת המשחק
function play() {
    document.body.addEventListener("keyup", moveByKey);
    moveByRandom();

}
play();


