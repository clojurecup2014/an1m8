// IE Fix - insert svg into document in case if there is a fallback image
// TODO - maybe inline this svg?

function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  if (trident > 0) {
    // IE 11 (or newer) => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  // other browser
  return false;
}


function getXMLHttpRequest() {
  if (window.XMLHttpRequest) {
    return new window.XMLHttpRequest;
  } else {
    try {
      return new ActiveXObject("MSXML2.XMLHTTP");
    } catch (ex) {
      return null;
    }
  }
}

function fix_ie_svg(el) {

  if (!detectIE()) {
    return;
  }


  var url = el.getAttribute('data');

  var oReq = getXMLHttpRequest();
  if (oReq != null) {
    oReq.open("GET", url, true);
    oReq.onreadystatechange = function () {
      if (oReq.readyState == 4  ) {
        if (oReq.status == 200) {

          el.innerHTML = oReq.responseText;
        }
      }
    };
    oReq.send("");
  }
}
