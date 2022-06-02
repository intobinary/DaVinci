/*===
Into Binary (https://davinci.intobinary.org)
&copy; Coryright 2022 Into Binary. All rights reserved.
Written for -- www.davinci.intobinary.org
===*/

/*=== LIBRARIES ===*/
/*=== END LIBRARIES ===*/

/*=== CUSTOM ===*/
/** DaVinci ***/

/*
var intobinary = $.noConflict();
intobinary(document).ready(function() {
	*/
	/*** GLOBAL VARIABLES & OBJECTS ***/
	/*** END GLOBAL VARIABLES & OBJECTS ***/
	
	/*** SETUP ***/
	/*** END SETUP ***/
	
	/*** ACTIONS ***/
	/*** END ACTIONS ***/
	
	/*** FUNCTIONS ***/	
  html2canvas(document.querySelector(".museum-frame-art"), {
    allowTaint: true,
    backgroundColor: 'transparent',
    useCORS: true,
    // scale: window.devicePixelRatio,
  } ).then(
    function(canvas) {
      let previewButton = document.querySelector(".js-capture"),
          downloadButton = document.querySelector(".js-download"),
          imgageData = canvas.toDataURL("image/png");
          // Now browser starts downloading it instead of just showing it
          imgageData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
      previewButton.removeAttribute('disabled');
      downloadButton.setAttribute('download', 'screenshot.png');
      downloadButton.setAttribute('href', imgageData);

      previewButton.addEventListener('click', function(){
        document.getElementById('previewImage').appendChild(canvas);
      });
      
      downloadButton.addEventListener('click', function(){
        if (capturedData === void 0) {
          alert("Please preview before downloading.");
        }
      });
    }
  );
	/*** END FUNCTIONS ***/

/*=== END CUSTOM ===*/