var m_i_1 = document.getElementById("monday-inp-1")
var m_i_2 = document.getElementById("monday-inp-2")
var m_i_3 = document.getElementById("monday-inp-3")
var m_i_4 = document.getElementById("monday-inp-4")
var m_i_5 = document.getElementById("monday-inp-5")
var m_i_6 = document.getElementById("monday-inp-6")
var m_i_s1 = document.getElementById("monday-inp-s1")
var m_i_s2 = document.getElementById("monday-inp-s2")
var m_s = document.getElementById("monday-span")


var t_i_1 = document.getElementById("tuesday-inp-1")
var t_i_2 = document.getElementById("tuesday-inp-2")
var t_i_3 = document.getElementById("tuesday-inp-3")
var t_i_4 = document.getElementById("tuesday-inp-4")
var t_i_5 = document.getElementById("tuesday-inp-5")
var t_i_6 = document.getElementById("tuesday-inp-6")
var t_i_s1 = document.getElementById("tuesday-inp-s1")
var t_i_s2 = document.getElementById("tuesday-inp-s2")
var t_s = document.getElementById("tuesday-span")



var w_i_1 = document.getElementById("wednesday-inp-1")
var w_i_2 = document.getElementById("wednesday-inp-2")
var w_i_3 = document.getElementById("wednesday-inp-3")
var w_i_4 = document.getElementById("wednesday-inp-4")
var w_i_5 = document.getElementById("wednesday-inp-5")
var w_i_6 = document.getElementById("wednesday-inp-6")
var w_i_s1 = document.getElementById("wednesday-inp-s1")
var w_i_s2 = document.getElementById("wednesday-inp-s2")
var w_s = document.getElementById("wednesday-span")


var th_i_1 = document.getElementById("thursday-inp-1")
var th_i_2 = document.getElementById("thursday-inp-2")
var th_i_3 = document.getElementById("thursday-inp-3")
var th_i_4 = document.getElementById("thursday-inp-4")
var th_i_5 = document.getElementById("thursday-inp-5")
var th_i_6 = document.getElementById("thursday-inp-6")
var th_i_s1 = document.getElementById("thursday-inp-s1")
var th_i_s2 = document.getElementById("thursday-inp-s2")
var th_s = document.getElementById("thursday-span")


var f_i_1 = document.getElementById("friday-inp-1")
var f_i_2 = document.getElementById("friday-inp-2")
var f_i_3 = document.getElementById("friday-inp-3")
var f_i_4 = document.getElementById("friday-inp-4")
var f_i_5 = document.getElementById("friday-inp-5")
var f_i_6 = document.getElementById("friday-inp-6")
var f_i_s1 = document.getElementById("friday-inp-s1")
var f_i_s2 = document.getElementById("friday-inp-s2")
var f_s = document.getElementById("friday-span")



var s_i_1 = document.getElementById("saturday-inp-1")
var s_i_2 = document.getElementById("saturday-inp-2")
var s_i_3 = document.getElementById("saturday-inp-3")
var s_i_4 = document.getElementById("saturday-inp-4")
var s_i_5 = document.getElementById("saturday-inp-5")
var s_i_6 = document.getElementById("saturday-inp-6")
var s_i_s1 = document.getElementById("saturday-inp-s1")
var s_i_s2 = document.getElementById("saturday-inp-s2")
var s_s = document.getElementById("saturday-span")



function AMPM(hr , option){
    var value = option.value;
    if(value==0 && hr!=12){
        hr = parseInt(hr) + 12;
    }
    else if(value==1 && hr==12){
        hr=0;
    }
    return hr;
}


function checkval(tag){
    if(tag.value>=13){
        alert("Enter Number from 1-12");
        tag.value=0;
    }
}



window.addEventListener('load', (event) => {
    mon();
    tue();
    wed();
    thu();
    fri();
    sat();
    update();
});


var tt_s = document.getElementById("total-hours")



function clearall(){
    location.reload();
}


function update(){
    console.log(parseFloat(t_s.innerHTML));
    tt_s.innerHTML = (parseFloat(m_s.innerHTML)+ parseFloat(t_s.innerHTML) +  parseFloat(w_s.innerHTML) + parseFloat(th_s.innerHTML) + parseFloat(f_s.innerHTML) + parseFloat(s_s.innerHTML)).toFixed(2);
}

function toHM(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return (hours+(minutes/100)).toFixed(2);
  }



  



function MonSet(total){
    var  hrs = parseInt(AMPM(m_i_3.value,m_i_s1)) - parseInt(AMPM(m_i_1.value,m_i_s2));
    var  min = m_i_4.value - m_i_2.value;
    var br = parseInt(m_i_5.value)*60 + parseInt(m_i_6.value);
    total = (hrs)*60 + min - br;
    if(total<0)
        total = 0;
    return total;
}







function TueSet(total){
    var  hrs = parseInt(AMPM(t_i_3.value,t_i_s1)) - parseInt(AMPM(t_i_1.value,t_i_s2));
    var  min = t_i_4.value - t_i_2.value;
    var br = parseInt(t_i_5.value)*60 + parseInt(t_i_6.value);
    total = (hrs)*60 + min - br;
    if(total<0)
        total = 0;
    return total;
}




function WedSet(total){
    var  hrs = parseInt(AMPM(w_i_3.value,w_i_s1)) - parseInt(AMPM(w_i_1.value,w_i_s2));
    var  min = w_i_4.value - w_i_2.value;
    var br = parseInt(w_i_5.value)*60 + parseInt(w_i_6.value);
    total = (hrs)*60 + min - br;
    if(total<0)
        total = 0;
    return total;
}



function ThuSet(total){
    var  hrs = parseInt(AMPM(th_i_3.value,th_i_s1)) - parseInt(AMPM(th_i_1.value,th_i_s2));
    var  min = th_i_4.value - th_i_2.value;
    var br = parseInt(th_i_5.value)*60 + parseInt(th_i_6.value);
    total = (hrs)*60 + min - br;
    if(total<0)
        total = 0;
    return total;
}



function FriSet(total){
    var  hrs = parseInt(AMPM(f_i_3.value,f_i_s1)) - parseInt(AMPM(f_i_1.value,f_i_s2));
    var  min = f_i_4.value - f_i_2.value;
    var br = parseInt(f_i_5.value)*60 + parseInt(f_i_6.value);
    total = (hrs)*60 + min - br;
    if(total<0)
        total = 0;
    return total;
}



function SatSet(total){
    var  hrs = parseInt(AMPM(s_i_3.value,s_i_s1)) - parseInt(AMPM(s_i_1.value,s_i_s2));
    var  min = s_i_4.value - s_i_2.value;
    var br = parseInt(s_i_5.value)*60 + parseInt(s_i_6.value);
    total = (hrs)*60 + min - br;
    if(total<0)
        total = 0;
    return total;
}







function mon(){
    checkval(m_i_1);
    checkval(m_i_3);
    var total = 1;
    total = MonSet(total);
    var hr = toHM(total);
    m_s.innerHTML = hr;
}

function tue(){
    checkval(t_i_1);
    checkval(t_i_3);
    var total = 1;
    total = TueSet(total);
    var hr = toHM(total);
    t_s.innerHTML = hr;
}

function wed(){
    checkval(w_i_1);
    checkval(w_i_3);
    var total = 1;
    total = WedSet(total);
    var hr = toHM(total);
    w_s.innerHTML = hr;
}

function thu(){
    checkval(th_i_1);
    checkval(th_i_3);
    var total = 1;
    total = ThuSet(total);
    var hr = toHM(total);
    th_s.innerHTML = hr;
}

function fri(){
    checkval(f_i_1);
    checkval(f_i_3);
    var total = 1;
    total = FriSet(total);
    var hr = toHM(total);
    f_s.innerHTML = hr;
}

function sat(){
    checkval(s_i_1);
    checkval(s_i_3);
    var total = 1;
    total = SatSet(total);
    var hr = toHM(total);
    s_s.innerHTML = hr;
}
