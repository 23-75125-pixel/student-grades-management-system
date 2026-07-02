window.onload = function () {

    let table = document.getElementById("gradeTable");

    for(let i=1;i<table.rows.length;i++){

        let math = Number(table.rows[i].cells[1].innerHTML);
        let science = Number(table.rows[i].cells[2].innerHTML);
        let english = Number(table.rows[i].cells[3].innerHTML);

        let average = ((math+science+english)/3).toFixed(2);

        table.rows[i].cells[4].innerHTML = average;

        if(average>=75){

            table.rows[i].cells[5].innerHTML="PASS";
            table.rows[i].cells[5].style.color="green";

        }else{

            table.rows[i].cells[5].innerHTML="FAIL";
            table.rows[i].cells[5].style.color="red";

        }

    }

}

function searchStudent(){

    let input=document.getElementById("search").value.toUpperCase();

    let table=document.getElementById("gradeTable");

    let tr=table.getElementsByTagName("tr");

    for(let i=1;i<tr.length;i++){

        let td=tr[i].getElementsByTagName("td")[0];

        if(td){

            let txt=td.textContent;

            tr[i].style.display=
            txt.toUpperCase().indexOf(input)>-1 ? "" : "none";

        }

    }

}

function resetSearch(){

    document.getElementById("search").value="";
    searchStudent();

}

function sortTable(){

    let table=document.getElementById("gradeTable");

    let rows=Array.from(table.rows).slice(1);

    rows.sort(function(a,b){

        return a.cells[0].innerHTML.localeCompare(b.cells[0].innerHTML);

    });

    rows.forEach(row=>table.appendChild(row));

}