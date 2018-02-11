$(document).ready(function () {
var doneCharName = false;
var doneSkillName = false;
var doneAscen = false;


function callForTheButton(){
    if(doneSkillName && doneCharName && doneAscen === true){
    console.log("hay");
    $("#saveCharacterBtn").show();
} else {
    $("#saveCharacterBtn").hide();
    console.log("hayNAAAA");
}
};

$("#saveBtnLink").on("click", function(){
    console.log("RESET");
    $("#newForm").submit();
});


$('select').change(function () {
        var opSel = $(this).find("option:selected");
        var valSel = opSel.val();
        console.log(valSel);
        if(valSel.length !== 0){
            doneAscen = true;
        }
    callForTheButton();

    });

 $('#charName').on('input', function (eventObject) {
    var valueOfInput = $(this).val().length;
    console.log("charName")

    if(valueOfInput === 0){
        doneCharName = false;
        //$("#rightName").hide();
        //$("#wrongName").show();
    }
    else {
        doneCharName = true;
        //$("#rightName").show();
        //$("#wrongName").hide();
        //hej

        }
     callForTheButton();
 });

    $('#skillName').on('input', function (eventObject) {
       var valueOfInput = $(this).val().length;

       if(valueOfInput === 0){
           doneSkillName = false;
       }
       else {
           doneSkillName = true;

       }
        callForTheButton();


    });





});