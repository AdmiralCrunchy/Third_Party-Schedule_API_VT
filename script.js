var saveButton1 = document.querySelector("#button9");
var saveButton2 = document.querySelector("#button10");
var saveButton3 = document.querySelector("#button11");
var saveButton4 = document.querySelector("#button12");
var saveButton5 = document.querySelector("#button13");
var saveButton6 = document.querySelector("#button14");
var saveButton7 = document.querySelector("#button15");
var saveButton8 = document.querySelector("#button16");
var saveButton9 = document.querySelector("#button17");

var textArea1 = document.querySelector("#input9");
var textArea2 = document.querySelector("#input10");
var textArea3 = document.querySelector("#input11");
var textArea4 = document.querySelector("#input12");
var textArea5 = document.querySelector("#input13");
var textArea6 = document.querySelector("#input14");
var textArea7 = document.querySelector("#input15");
var textArea8 = document.querySelector("#input16");
var textArea9 = document.querySelector("#input17");

var timeInterval = setInterval(function(){
    var currentTime = moment().format('MMMM Do YYYY, hh:mm:ss');
    $("#currentDay").text(currentTime);
}, 1000 );


var timeNow = moment().format('hh');
const d = new Date();
var timeHours = d.getHours(); 

for (var i = 9; i <= 17; i++)
{
    if(timeHours > i)
    {
        //grey
        console.log("Grey");
        var slot = document.querySelector("#num" + i.toString());
        $(slot).addClass("past");

    }
    else if (timeHours == i)
    {
        //red
        console.log("Red");
        var slot = document.querySelector("#num" + i.toString());
        $(slot).addClass("present");
    }
    else if (timeHours < i)
    {
        //green
        console.log("Green");
        var slot = document.querySelector("#num" + i.toString());
        $(slot).addClass("future");
    }
}

renderLastRegistered(true, 9)

function renderLastRegistered(itLoops, numAssign)
{   
    if (itLoops)
    {
        for(var i = 9; i <= 17; i++)
        {
            var memoData = localStorage.getItem("memoData"+numAssign.toString());
            console.log("This is the memoData: ", memoData);
            if (!memoData)
            {
                return; 
            }
            switch(numAssign)
            {
                case 9:
                    textArea1.textContent = memoData;
                    $("#input9").attr("placeholder", memoData);
                    break;
                case 10:
                    textArea2.textContent = memoData;
                    $("#input10").attr("placeholder", memoData);
                    break;
                case 11:
                    textArea3.textContent = memoData;
                    $("#input11").attr("placeholder", memoData);
                    break;
                case 12:
                    textArea4.textContent = memoData;
                    $("#input12").attr("placeholder", memoData);
                    break;
                case 13:
                    textArea5.textContent = memoData;
                    $("#input13").attr("placeholder", memoData);
                    break;
                case 14:
                    textArea6.textContent = memoData;
                    $("#input14").attr("placeholder", memoData);
                    break;
                case 15:
                    textArea7.textContent = memoData;
                    $("#input15").attr("placeholder", memoData);
                    break;
                case 16:
                    textArea8.textContent = memoData;
                    $("#input16").attr("placeholder", memoData);
                    break;
                case 17:
                    textArea9.textContent = memoData;
                    $("#input17").attr("placeholder", memoData);
                    break;
            }
            numAssign++;
        }
    }
    else
    {
        console.log("This is the num assign", numAssign);
        var memoData = localStorage.getItem("memoData"+numAssign.toString());
        console.log("This is the memoData: ", memoData);
        if (!memoData)
        {
            return; 
        }
        switch(numAssign)
        {
            case 9:
                textArea1.textContent = memoData;
                break;
            case 10:
                textArea2.textContent = memoData;
                break;
            case 11:
                textArea3.textContent = memoData;
                break;
            case 12:
                textArea4.textContent = memoData;
                break;
            case 13:
                textArea5.textContent = memoData;
                break;
            case 14:
                textArea6.textContent = memoData;
                break;
            case 15:
                textArea7.textContent = memoData;
                break;
            case 16:
                textArea8.textContent = memoData;
                break;
            case 17:
                textArea9.textContent = memoData;
                break;
        }
    }
}

saveButton1.addEventListener("click", function(event)
{
    event.preventDefault();
    var memo = document.querySelector("#input9").value;
    localStorage.setItem("memoData9",memo);
    renderLastRegistered(false, 9);


});
saveButton2.addEventListener("click", function(event)
{
    event.preventDefault();
    var memo = document.querySelector("#input10").value;
    localStorage.setItem("memoData10",memo);
    renderLastRegistered(false, 10);


});
saveButton3.addEventListener("click", function(event)
{
    event.preventDefault();
    var memo = document.querySelector("#input11").value;
    localStorage.setItem("memoData11",memo);
    renderLastRegistered(false, 11);


});
saveButton4.addEventListener("click", function(event)
{
    event.preventDefault();
    var memo = document.querySelector("#input12").value;
    localStorage.setItem("memoData12",memo);
    renderLastRegistered(false, 12);


});
saveButton5.addEventListener("click", function(event)
{
    event.preventDefault();
    var memo = document.querySelector("#input13").value;
    localStorage.setItem("memoData13",memo);
    renderLastRegistered(false, 13);


});
saveButton6.addEventListener("click", function(event)
{
    event.preventDefault();
    var memo = document.querySelector("#input14").value;
    localStorage.setItem("memoData14",memo);
    renderLastRegistered(false, 14);


});
saveButton7.addEventListener("click", function(event)
{
    event.preventDefault();
    var memo = document.querySelector("#input15").value;
    localStorage.setItem("memoData15",memo);
    renderLastRegistered(false, 15);


});
saveButton8.addEventListener("click", function(event)
{
    event.preventDefault();
    var memo = document.querySelector("#input16").value;
    localStorage.setItem("memoData16",memo);
    renderLastRegistered(false, 16);


});
saveButton9.addEventListener("click", function(event)
{
    event.preventDefault();
    var memo = document.querySelector("#input17").value;
    localStorage.setItem("memoData17",memo);
    renderLastRegistered(false, 17);
});

