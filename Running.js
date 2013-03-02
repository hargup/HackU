
// ==UserScript==
// @name          Hello1, World
// @namespace     test
// @icon          data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHdpZHRoPSI0OCIKICAgaGVpZ2h0PSI0OCIKICAgaWQ9InN2ZzIiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0IiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cmVjdAogICAgICAgd2lkdGg9IjQ4IgogICAgICAgaGVpZ2h0PSI0OCIKICAgICAgIHg9IjAiCiAgICAgICB5PSIwIgogICAgICAgaWQ9InJlY3QyODE2IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDBmZjtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgPC9nPgo8L3N2Zz4K
// @description   JavaScript alert box saying Hello, world
// @copyright     2007+, Marti Martz (http://userscripts.org/users/37004)
// @license       GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @license       (CC); http://creativecommons.org/licenses/by-nc-sa/3.0/
// @::version       0.0.1
//
// @include   *
//
//@require https://secure.dune.net/usocheckup/13701.js?method=update&open=window&maxage=1&custom=yes&id=usoCheckup
//@require https://userscripts.org/scripts/source/61794.user.js
//
// @unwrap
//
// @uso:
//
// ==/UserScript==


alert('Hello World');
unsafeWindow.captureKeys=function (event){
  console.log('hello Im here');
            var chCode = event.which || event.keyCode;
            if (chCode == 0)
            	chCode = event.keyCode; //('charCode' in event) ? event.charCode : //
            console.log(chCode);
            
            if (chCode==105 && insertMode != true) {
            	console.log('done');
            	insertMode = !insertMode;
            }
            else if (insertMode == true && chCode!=27){
            	return (chCode);
            }
            if (chCode==27) {
            console.log(insertMode);
            	insertMode = false;
            }
			
            return false;
        }

console.log('yes yes');
		var e = document.getElementsByTagName('textarea');
		for (var i=0;i<e.length;i++)
			e[i].setAttribute('onkeypress','return captureKeys(event);')

	var insertMode = new Boolean(); //Default false value!
	insertMode = false;
