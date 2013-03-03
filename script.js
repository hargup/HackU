// ==UserScript==
// @name Hello1, World
// @namespace test
// @icon data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHdpZHRoPSI0OCIKICAgaGVpZ2h0PSI0OCIKICAgaWQ9InN2ZzIiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0IiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cmVjdAogICAgICAgd2lkdGg9IjQ4IgogICAgICAgaGVpZ2h0PSI0OCIKICAgICAgIHg9IjAiCiAgICAgICB5PSIwIgogICAgICAgaWQ9InJlY3QyODE2IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDBmZjtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgPC9nPgo8L3N2Zz4K
// @description JavaScript alert box saying Hello, world
// @copyright 2007+, Marti Martz (http://userscripts.org/users/37004)
// @license GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @license (CC); http://creativecommons.org/licenses/by-nc-sa/3.0/
// @::version 0.0.1
//
// @include *
//
//@require https://secure.dune.net/usocheckup/13701.js?method=update&open=window&maxage=1&custom=yes&id=usoCheckup
//@require https://userscripts.org/scripts/source/61794.user.js
//
// @unwrap
//
// @uso:
//
// ==/UserScript==

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

function del(area, pos){
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

