function getCaretPosition(ctrl) {

console.log("Entering the function get caaret");
	var CaretPos = 0;	// IE Support
	if (document.selection) {
	ctrl.focus ();
		var Sel = document.selection.createRange ();
		Sel.moveStart ('character', -ctrl.value.length);
		CaretPos = Sel.text.length;
	}
	// Firefox support
	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
		CaretPos = ctrl.selectionStart;
	return (CaretPos);
}
function setCaretPosition(ctrl, pos){
	if(ctrl.setSelectionRange)
	{
		ctrl.focus();
		ctrl.setSelectionRange(pos,pos);
	}
	else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}

function del(area, pos) {
text = area.value;
var before = text.slice(0, pos);
var after = text.slice(pos + 1);
text = before + after;
area.value = text ;
setCaretPosition(area, pos);
};


var insertMode = new Boolean(); //Default false value!
insertMode = false;
var replaceMode = false;
var ReplaceMode = false;



unsafeWindow.captureKeys=function (event){

var newID = event.target;
var pos = getCaretPosition(newID);
             
            var chCode = event.which || event.keyCode;
            if (chCode == 0)
             chCode = event.keyCode; 
            console.log(chCode);
            
            if (chCode==105 &&(insertMode !=true && replaceMode != true) ) { //i keyPress			
             newID.setAttribute('style','background:#001;color:#fff');
             console.log('done');
             insertMode = !insertMode;
			 
            }
            else if ((insertMode == true || replaceMode == true) && chCode!=27){
			if(replaceMode == true)
			{
				del(newID, pos);
				replaceMode = false;
			};
             return (chCode);
            }
            else if (chCode==27) {
            console.log(insertMode);
            console.log("entering in esc"); 
             insertMode = false;
             newID.setAttribute('style','background:#FFFFFF');
            }

           else
           
           {
            // var newID = document.getElementById(iD);
             console.log("Entering last if loop");
             
             console.log("making var ");
			 if (chCode == 114) { console.log("replace mode enter");
			replaceMode = true;
		};
			 if (chCode == 120) { console.log(pos);//deletion on x key
			del(newID, pos);
			console.log(text);
			};

             if (chCode == 104) { console.log(pos);
             setCaretPosition(newID, pos-1);
};
if (chCode == 106) {
console.log("Entering chcode=106");
             setCaretPosition(newID, pos+newID.cols);

             }
if (chCode == 107) {
             setCaretPosition(newID, pos-newID.cols);

             };
if (chCode == 108) 
             setCaretPosition(newID, pos+1);
            } 
			console.log("not pressing key");
            return false;
            
   
        };

console.log('yes yes');
var e = document.getElementsByTagName('textarea');
for (var i=0;i<e.length;i++)
e[i].setAttribute('onkeypress','return captureKeys(event);')

