/* s6.JS 1.04 April 2019 by s6schools.com */
"use strict";
var s6 = {};
s6.hide = function (sel) {
  s6.hideElements(s6.getElements(sel));
};
s6.hideElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    s6.hideElement(elements[i]);
  }
};
s6.hideElement = function (element) {
  s6.styleElement(element, "display", "none");
};
s6.show = function (sel, a) {
  var elements = s6.getElements(sel);
  if (a) {
    s6.hideElements(elements);
  }
  s6.showElements(elements);
};
s6.showElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    s6.showElement(elements[i]);
  }
};
s6.showElement = function (element) {
  s6.styleElement(element, "display", "block");
};
s6.addStyle = function (sel, prop, val) {
  s6.styleElements(s6.getElements(sel), prop, val);
};
s6.styleElements = function (elements, prop, val) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    s6.styleElement(elements[i], prop, val);
  }
};
s6.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};
s6.toggleShow = function (sel) {
  var i, x = s6.getElements(sel),
    l = x.length;
  for (i = 0; i < l; i++) {
    if (x[i].style.display == "none") {
      s6.styleElement(x[i], "display", "block");
    } else {
      s6.styleElement(x[i], "display", "none");
    }
  }
};
s6.addClass = function (sel, name) {
  s6.addClassElements(s6.getElements(sel), name);
};
s6.addClassElements = function (elements, name) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    s6.addClassElement(elements[i], name);
  }
};
s6.addClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
};
s6.removeClass = function (sel, name) {
  s6.removeClassElements(s6.getElements(sel), name);
};
s6.removeClassElements = function (elements, name) {
  var i, l = elements.length,
    arr1, arr2, j;
  for (i = 0; i < l; i++) {
    s6.removeClassElement(elements[i], name);
  }
};
s6.removeClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
};
s6.toggleClass = function (sel, c1, c2) {
  s6.toggleClassElements(s6.getElements(sel), c1, c2);
};
s6.toggleClassElements = function (elements, c1, c2) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    s6.toggleClassElement(elements[i], c1, c2);
  }
};
s6.toggleClassElement = function (element, c1, c2) {
  var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
  t1 = (c1 || "");
  t2 = (c2 || "");
  t1Arr = t1.split(" ");
  t2Arr = t2.split(" ");
  arr = element.className.split(" ");
  if (t2Arr.length == 0) {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {
        allPresent = false;
      }
    }
    if (allPresent) {
      s6.removeClassElement(element, t1);
    } else {
      s6.addClassElement(element, t1);
    }
  } else {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {
        allPresent = false;
      }
    }
    if (allPresent) {
      s6.removeClassElement(element, t1);
      s6.addClassElement(element, t2);
    } else {
      s6.removeClassElement(element, t2);
      s6.addClassElement(element, t1);
    }
  }
};
s6.getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};
s6.filterHTML = function (id, sel, filter) {
  var a, b, c, i, ii, iii, hit;
  a = s6.getElements(id);
  for (i = 0; i < a.length; i++) {
    b = a[i].querySelectorAll(sel);
    for (ii = 0; ii < b.length; ii++) {
      hit = 0;
      if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        hit = 1;
      }
      c = b[ii].getElementsByTagName("*");
      for (iii = 0; iii < c.length; iii++) {
        if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          hit = 1;
        }
      }
      if (hit == 1) {
        b[ii].style.display = "";
      } else {
        b[ii].style.display = "none";
      }
    }
  }
};
s6.sortHTML = function (id, sel, sortvalue) {
  var a, b, i, ii, y, bytt, v1, v2, cc, j;
  a = s6.getElements(id);
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < 2; j++) {
      cc = 0;
      y = 1;
      while (y == 1) {
        y = 0;
        b = a[i].querySelectorAll(sel);
        for (ii = 0; ii < (b.length - 1); ii++) {
          bytt = 0;
          if (sortvalue) {
            v1 = b[ii].querySelector(sortvalue).innerText;
            v2 = b[ii + 1].querySelector(sortvalue).innerText;
          } else {
            v1 = b[ii].innerText;
            v2 = b[ii + 1].innerText;
          }
          v1 = v1.toLowerCase();
          v2 = v2.toLowerCase();
          if ((j == 0 && (v1 > v2)) || (j == 1 && (v1 < v2))) {
            bytt = 1;
            break;
          }
        }
        if (bytt == 1) {
          b[ii].parentNode.insertBefore(b[ii + 1], b[ii]);
          y = 1;
          cc++;
        }
      }
      if (cc > 0) {
        break;
      }
    }
  }
};
s6.slideshow = function (sel, ms, func) {
  var i, ss, x = s6.getElements(sel),
    l = x.length;
  ss = {};
  ss.current = 1;
  ss.x = x;
  ss.ondisplaychange = func;
  if (!isNaN(ms) || ms == 0) {
    ss.milliseconds = ms;
  } else {
    ss.milliseconds = 1000;
  }
  ss.start = function () {
    ss.display(ss.current)
    if (ss.ondisplaychange) {
      ss.ondisplaychange();
    }
    if (ss.milliseconds > 0) {
      window.clearTimeout(ss.timeout);
      ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
    }
  };
  ss.next = function () {
    ss.current += 1;
    if (ss.current > ss.x.length) {
      ss.current = 1;
    }
    ss.start();
  };
  ss.previous = function () {
    ss.current -= 1;
    if (ss.current < 1) {
      ss.current = ss.x.length;
    }
    ss.start();
  };
  ss.display = function (n) {
    s6.styleElements(ss.x, "display", "none");
    s6.styleElement(ss.x[n - 1], "display", "block");
  }
  ss.start();
  return ss;
};
s6.includeHTML = function (cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("s6-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("s6-include-html");
          s6.includeHTML(cb);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
};
s6.getHttpData = function (file, func) {
  s6.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(this.responseText);
    }
  });
};
s6.getHttpObject = function (file, func) {
  s6.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(JSON.parse(this.responseText));
    }
  });
};
s6.displayHttp = function (id, file) {
  s6.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      s6.displayObject(id, JSON.parse(this.responseText));
    }
  });
};
s6.http = function (target, readyfunc, xml, method) {
  var httpObj;
  if (!method) {
    method = "GET";
  }
  if (window.XMLHttpRequest) {
    httpObj = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    httpObj = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (httpObj) {
    if (readyfunc) {
      httpObj.onreadystatechange = readyfunc;
    }
    httpObj.open(method, target, true);
    httpObj.send(xml);
  }
};
s6.getElementsByAttribute = function (x, att) {
  var arr = [],
    arrCount = -1,
    i, l, y = x.getElementsByTagName("*"),
    z = att.toUpperCase();
  l = y.length;
  for (i = -1; i < l; i += 1) {
    if (i == -1) {
      y[i] = x;
    }
    if (y[i].getAttribute(z) !== null) {
      arrCount += 1;
      arr[arrCount] = y[i];
    }
  }
  return arr;
};
s6.dataObject = {},
  s6.displayObject = function (id, data) {
    var htmlObj, htmlTemplate, html, arr = [],
      a, l, rowClone, x, j, i, ii, cc, repeat, repeatObj, repeatX = "";
    htmlObj = document.getElementById(id);
    htmlTemplate = init_template(id, htmlObj);
    html = htmlTemplate.cloneNode(true);
    arr = s6.getElementsByAttribute(html, "s6-repeat");
    l = arr.length;
    for (j = (l - 1); j >= 0; j -= 1) {
      cc = arr[j].getAttribute("s6-repeat").split(" ");
      if (cc.length == 1) {
        repeat = cc[0];
      } else {
        repeatX = cc[0];
        repeat = cc[2];
      }
      arr[j].removeAttribute("s6-repeat");
      repeatObj = data[repeat];
      if (repeatObj && typeof repeatObj == "object" && repeatObj.length != "undefined") {
        i = 0;
        for (x in repeatObj) {
          i += 1;
          rowClone = arr[j];
          rowClone = s6_replace_curly(rowClone, "element", repeatX, repeatObj[x]);
          a = rowClone.attributes;
          for (ii = 0; ii < a.length; ii += 1) {
            a[ii].value = s6_replace_curly(a[ii], "attribute", repeatX, repeatObj[x]).value;
          }
          (i === repeatObj.length) ? arr[j].parentNode.replaceChild(rowClone, arr[j]): arr[j].parentNode.insertBefore(rowClone, arr[j]);
        }
      } else {
        console.log("s6-repeat must be an array. " + repeat + " is not an array.");
        continue;
      }
    }
    html = s6_replace_curly(html, "element");
    htmlObj.parentNode.replaceChild(html, htmlObj);

    function init_template(id, obj) {
      var template;
      template = obj.cloneNode(true);
      if (s6.dataObject.hasOwnProperty(id)) {
        return s6.dataObject[id];
      }
      s6.dataObject[id] = template;
      return template;
    }

    function s6_replace_curly(elmnt, typ, repeatX, x) {
      var value, rowClone, pos1, pos2, originalHTML, lookFor, lookForARR = [],
        i, cc, r;
      rowClone = elmnt.cloneNode(true);
      pos1 = 0;
      while (pos1 > -1) {
        originalHTML = (typ == "attribute") ? rowClone.value : rowClone.innerHTML;
        pos1 = originalHTML.indexOf("{{", pos1);
        if (pos1 === -1) {
          break;
        }
        pos2 = originalHTML.indexOf("}}", pos1 + 1);
        lookFor = originalHTML.substring(pos1 + 2, pos2);
        lookForARR = lookFor.split("||");
        value = undefined;
        for (i = 0; i < lookForARR.length; i += 1) {
          lookForARR[i] = lookForARR[i].replace(/^\s+|\s+$/gm, ''); //trim
          if (x) {
            value = x[lookForARR[i]];
          }
          if (value == undefined && data) {
            value = data[lookForARR[i]];
          }
          if (value == undefined) {
            cc = lookForARR[i].split(".");
            if (cc[0] == repeatX) {
              value = x[cc[1]];
            }
          }
          if (value == undefined) {
            if (lookForARR[i] == repeatX) {
              value = x;
            }
          }
          if (value == undefined) {
            if (lookForARR[i].substr(0, 1) == '"') {
              value = lookForARR[i].replace(/"/g, "");
            } else if (lookForARR[i].substr(0, 1) == "'") {
              value = lookForARR[i].replace(/'/g, "");
            }
          }
          if (value != undefined) {
            break;
          }
        }
        if (value != undefined) {
          r = "{{" + lookFor + "}}";
          if (typ == "attribute") {
            rowClone.value = rowClone.value.replace(r, value);
          } else {
            s6_replace_html(rowClone, r, value);
          }
        }
        pos1 = pos1 + 1;
      }
      return rowClone;
    }

    function s6_replace_html(a, r, result) {
      var b, l, i, a, x, j;
      if (a.hasAttributes()) {
        b = a.attributes;
        l = b.length;
        for (i = 0; i < l; i += 1) {
          if (b[i].value.indexOf(r) > -1) {
            b[i].value = b[i].value.replace(r, result);
          }
        }
      }
      x = a.getElementsByTagName("*");
      l = x.length;
      a.innerHTML = a.innerHTML.replace(r, result);
    }
  };