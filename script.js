function saklar(lampNum, group){

    if(lampNum == 1){
        let lampu = document.getElementById("lampu1");
        let switchLamp = document.getElementById("switch1");
        if(group){
            switchLamp.checked = switchGroup1.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }else if(lampNum == 2){
        let lampu = document.getElementById("lampu2");
        let switchLamp = document.getElementById("switch2");
        if(group){
            switchLamp.checked = switchGroup1.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }else if (lampNum == 3){
        let lampu = document.getElementById("lampu3");
        let switchLamp = document.getElementById("switch3");
        if(group){
            switchLamp.checked = switchGroup1.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }else if (lampNum == 4){
        let lampu = document.getElementById("lampu4");
        let switchLamp = document.getElementById("switch4");
        if(group){
            switchLamp.checked = switchGroup2.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }else if (lampNum == 5){
        let lampu = document.getElementById("lampu5");
        let switchLamp = document.getElementById("switch5");
        if(group){
            switchLamp.checked = switchGroup3.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }else if (lampNum == 6){
        let lampu = document.getElementById("lampu6");
        let switchLamp = document.getElementById("switch6");
        if(group){
            switchLamp.checked = switchGroup3.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }else if (lampNum == 7){
        let lampu = document.getElementById("lampu7");
        let switchLamp = document.getElementById("switch7");
        if(group){
            switchLamp.checked = switchGroup4.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }else if (lampNum == 8){
        let lampu = document.getElementById("lampu8");
        let switchLamp = document.getElementById("switch8");
        if(group){
            switchLamp.checked = switchGroup4.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }else if (lampNum == 9){
        let lampu = document.getElementById("lampu9");
        let switchLamp = document.getElementById("switch9");
        if(group){
            switchLamp.checked = switchGroup4.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }else if (lampNum == 10){
        let lampu = document.getElementById("lampu10");
        let switchLamp = document.getElementById("switch10");
        if(group){
            switchLamp.checked = switchGroup4.checked;
        }
        if(switchLamp.checked){
            lampu.src = "assets/on.gif";
        }else{
            lampu.src = "assets/off.gif";
        }
    }
}

function saklarGroup(groupNum){
    if(groupNum == 1){
        let switchGroup = document.getElementById("switchGroup1");
        saklar(1, true);
        saklar(2, true);
        saklar(3, true);
    }else if(groupNum == 2){
        let switchGroup = document.getElementById("switchGroup2");
        saklar(4, true);
    }else if(groupNum == 3){
        let switchGroup = document.getElementById("switchGroup3");
        saklar(5, true);
        saklar(6, true);
    }else if(groupNum == 4){
        let switchGroup = document.getElementById("switchGroup4");
        saklar(7, true);
        saklar(8, true);
        saklar(9, true);
        saklar(10, true);
    }
}