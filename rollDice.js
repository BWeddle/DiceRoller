let output = "";
let total = 0;
let tempNums = [];
let numsRolled = [];
let critFail = false;
let nat20 = false;
function roll(){
    let d2num = Number(document.getElementById("numOfd2").value);
    let mod2 = Number(document.getElementById("modifierd2").value);
    if (d2num!=0){
        output += d2num + " d2 + " + mod2 + " : "
        for(let i = 0; i<d2num; i++){
            numRoll = Math.floor(Math.random() * 2) + 1;
            tempNums.push(numRoll);
            total += numRoll;
        }
        numsRolled.push("(" + tempNums + ") + " + mod2)
        tempNums = [];
        total += mod2;
        output += numsRolled + "\n";
        numsRolled = [];
    }
    let d4num = Number(document.getElementById("numOfd4").value);
    let mod4 = Number(document.getElementById("modifierd4").value);
    if (d4num!=0){
        output += d4num + " d4 + " + mod4 + " : "
        for(let i = 0; i<d4num; i++){
            numRoll = Math.floor(Math.random() * 4) + 1;
            tempNums.push(numRoll);
            total += numRoll;
        }
        numsRolled.push("(" + tempNums + ") + " + mod4)
        tempNums = [];
        total += mod4;
        output += numsRolled + "\n";
        numsRolled = [];
    }
    let d6num = Number(document.getElementById("numOfd6").value);
    let mod6 = Number(document.getElementById("modifierd6").value);
    if (d6num!=0){
        output += d6num + " d6 + " + mod6 + " : "
        for(let i = 0; i<d6num; i++){
            numRoll = Math.floor(Math.random() * 6) + 1;
            tempNums.push(numRoll);
            total += numRoll;
        }
        numsRolled.push("(" + tempNums + ") + " + mod6)
        tempNums = [];
        total += mod6;
        output += numsRolled + "\n";
        numsRolled = [];
    }
    let d8num = Number(document.getElementById("numOfd8").value);
    let mod8 = Number(document.getElementById("modifierd8").value);
    if (d8num!=0){
        output += d8num + " d8 + " + mod8 + " : "
        for(let i = 0; i<d8num; i++){
            numRoll = Math.floor(Math.random() * 8) + 1;
            tempNums.push(numRoll);
            total += numRoll;
        }
        numsRolled.push("(" + tempNums + ") + " + mod8)
        tempNums = [];
        total += mod8;
        output += numsRolled + "\n";
        numsRolled = [];
    }
    let d10num = Number(document.getElementById("numOfd10").value);
    let mod10 = Number(document.getElementById("modifierd10").value);
    if (d10num!=0){
        output += d10num + " d10 + " + mod10 + " : "
        for(let i = 0; i<d10num; i++){
            numRoll = Math.floor(Math.random() * 10) + 1;
            tempNums.push(numRoll);
            total += numRoll;
        }
        numsRolled.push("(" + tempNums + ") + " + mod10)
        tempNums = [];
        total += mod10;
        output += numsRolled + "\n";
        numsRolled = [];
    }
    let d12num = Number(document.getElementById("numOfd12").value);
    let mod12 = Number(document.getElementById("modifierd12").value);
    if (d12num!=0){
        output += d12num + " d12 + " + mod12 + " : "
        for(let i = 0; i<d12num; i++){
            numRoll = Math.floor(Math.random() * 12) + 1;
            tempNums.push(numRoll);
            total += numRoll;
        }
        numsRolled.push("(" + tempNums + ") + " + mod12)
        tempNums = [];
        total += mod12;
        output += numsRolled + "\n";
        numsRolled = [];
    }
    let d20num = Number(document.getElementById("numOfd20").value);
    let mod20 = Number(document.getElementById("modifierd20").value);
    if (d20num!=0){
        output += d20num + " d20 + " + mod20 + " : "
        for(let i = 0; i<d20num; i++){
            numRoll = Math.floor(Math.random() * 20) + 1;
            if (numRoll==20){
                nat20 = true;
            } else if(numRoll==1){
                critFail = true;
            }
            tempNums.push(numRoll);
            total += numRoll;
        }
        numsRolled.push("(" + tempNums + ") + " + mod20)
        tempNums = [];
        total += mod20;
        output += numsRolled + "\n";
        if (nat20 == true){
            output += "YOOOOOOOOO, NAT FUCKING 20, LET'S FUCKING GOOOOOOOOOOOOOOOOOOOOOOOOOOO!\n";
        } else if(critFail == true){
            output += "Ah shit dude, that's a critical failure. Hope you weren't trying to do something important because you're FUCKED!\n";
        }
        numsRolled = [];
        nat20 = false;
        critFail = false;
    }
    let d100num = Number(document.getElementById("numOfd100").value);
    let mod100 = Number(document.getElementById("modifierd100").value);
    if (d100num!=0){
        output += d100num + " d100 + " + mod100 + " : "
        for(let i = 0; i<d100num; i++){
            numRoll = Math.floor(Math.random() * 100) + 1;
            tempNums.push(numRoll);
            total += numRoll;
        }
        numsRolled.push("(" + tempNums + ") + " + mod100)
        tempNums = [];
        total += mod100;
        output += numsRolled + "\n";
        numsRolled = [];
    }
    let diceToRoll = d2num + d4num + d6num + d8num + d10num + d12num + d20num + d100num
    let totalMod = mod2 + mod4 + mod6 + mod8 + mod10 + mod12 + mod20 + mod100;
                
    if (diceToRoll != 0){
        output += "Total Rolled: " + total + "\n\n";
        let newOutput = output.replace(/\n/g, "<br>");
        document.getElementById("result").innerHTML = newOutput;
        diceToRoll = 0;
        total = 0;
    } else{
        output += "Hey loser, you didn't roll any dice! Try putting some numbers into the fields before clicking the fucking roll button!\n\n";
        let newOutput = output.replace(/\n/g, "<br>");
        document.getElementById("result").innerHTML = newOutput;
    }
    var objDiv = document.getElementById("scrollyThingy");
    objDiv.scrollTop = objDiv.scrollHeight;
    document.getElementById("numOfd2").value = '';
    document.getElementById("modifierd2").value = '';
    document.getElementById("numOfd4").value = '';
    document.getElementById("modifierd4").value = '';
    document.getElementById("numOfd6").value = '';
    document.getElementById("modifierd6").value = '';
    document.getElementById("numOfd8").value = '';
    document.getElementById("modifierd8").value = '';
    document.getElementById("numOfd10").value = '';
    document.getElementById("modifierd10").value = '';
    document.getElementById("numOfd12").value = '';
    document.getElementById("modifierd12").value = '';
    document.getElementById("numOfd20").value = '';
    document.getElementById("modifierd20").value = '';
    document.getElementById("numOfd100").value = '';
    document.getElementById("modifierd100").value = '';

}