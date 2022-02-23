var dabutton = document.getElementById('dabutton');

function myself() {
    document.getElementById('main').style.display="none";
    document.getElementById('myself').style.display="block";
};
function team() {
    document.getElementById('main').style.display="none";
    document.getElementById('team').style.display="block";
}

function dabutton() {
    document.getElementById('fullnamemyself').innerHTML += document.getElementById('fname').value;
    document.getElementById('phonenumbermyself').innerHTML += document.getElementById('pnumb').value;
    document.getElementById('emailaddressmyself').innerHTML += document.getElementById('eadd').value;
    document.getElementById('reasonmyself').innerHTML += document.getElementById('reason').value;
    document.getElementById('admyself').innerHTML += document.getElementById('date').value;
    document.getElementById('ddmyself').innerHTML += document.getElementById('datee').value;
    document.getElementById('numberofnights').innerHTML += document.getElementById('numbnights').value;
    // 
    document.getElementById('fullnamemyself').style.display="block";
    document.getElementById('phonenumbermyself').style.display="block";
    document.getElementById('emailaddressmyself').style.display="block";
    document.getElementById('reasonmyself').style.display="block";
    document.getElementById('admyself').style.display="block";
    document.getElementById('ddmyself').style.display="block";
    document.getElementById('numberofnightsmyself').style.display="block";
    document.getElementsByClassName('inputs').style.display="none";
    window.print();return false;
};

function addguestname() {
    document.getElementById("guestname").innerHTML += document.getElementById("pnamet").value;
    document.getElementById("pnamet").value = "";
    document.getElementById("guestname").innerHTML += "<br>";
};

function lol() {
    document.getElementById("dabutton").style.display="none";
    document.getElementById("blankformlol").style.display="none";
    document.getElementById("yays2").style.display="block";
    window.print();return false;
};
function blank() {
    document.getElementById("pnamet").setAttribute("placeholder", "If the guest is more than five, Please attach the approved name list");
    document.getElementById("fnamet").setAttribute("placeholder", "");
    document.getElementById("pnumbt").setAttribute("placeholder", "");
    document.getElementById("eaddt").setAttribute("placeholder", "");
    document.getElementById("reasont").setAttribute("placeholder", "");
    document.getElementById("datet").setAttribute("placeholder", "");
    document.getElementById("dateet").setAttribute("placeholder", "");
    document.getElementById("numbnightst").setAttribute("placeholder", "");
    document.getElementById("datet").setAttribute("type", "text");
    document.getElementById("dateet").setAttribute("type", "text");
    document.getElementById("tptservice").style.display="none";
    document.getElementById("tptservicetxt").style.display="block";
    document.getElementById("guestname").innerHTML="__________________________________<br>__________________________________<br>__________________________________<br>__________________________________<br>__________________________________<br>";
    document.getElementById("dazbutton").style.display="none";
    document.getElementById("blanklol").style.display="none";
    document.getElementById("addbutton").style.display="none";
    document.getElementById("yays1").style.display="block";
    window.print();return false;
};
function blanks() {
    document.getElementById("fname").setAttribute("placeholder", "");
    // document.getElementById("fnamet").setAttribute("placeholder", "");
    document.getElementById("pnumb").setAttribute("placeholder", "");
    document.getElementById("eadd").setAttribute("placeholder", "");
    document.getElementById("reason").setAttribute("placeholder", "");
    document.getElementById("date").setAttribute("placeholder", "");
    document.getElementById("datee").setAttribute("placeholder", "");
    document.getElementById("numbnights").setAttribute("placeholder", "");
    document.getElementById("date").setAttribute("type", "text");
    document.getElementById("datee").setAttribute("type", "text");
    document.getElementById("tptservicet").style.display="none";
    document.getElementById("tptservicettxt").style.display="block";
    document.getElementById("dabutton").style.display="none";
    document.getElementById("blankformlol").style.display="none";
    document.getElementById("yays2").style.display="block";
    // document.getElementById("guestname").innerHTML="__________________________________<br>__________________________________<br>__________________________________<br>__________________________________<br>__________________________________<br>";
    window.print();return false;
};

function lolz() {
    document.getElementById("dazbutton").style.display="none";
    document.getElementById("blanklol").style.display="none";
    document.getElementById("addbutton").style.display="none";
    document.getElementById("yays1").style.display="block";
    document.getElementById("pnamet").setAttribute("placeholder", "");
    document.getElementById("pnamet").style.display='none';
    window.print();return false;
};
function team() {
    document.getElementById("main").style.display = "none";
    document.getElementById("guestcont").style.display = "block";
};