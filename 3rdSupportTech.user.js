// ==UserScript==
// @name        3rd Shift Support Techs Custom Coloring
// @namespace   https://proton.rackspace.com/
// @description Support Tech Tickets Coloring For 3rd shift
// @downloadURL https://www.dropbox.com/s/2i5avimqz3jh7mu/3rdSupportTech.user.js?dl=0
// @updateURL   https://www.dropbox.com/s/2i5avimqz3jh7mu/3rdSupportTech.user.js?dl=0
// @include     https://proton.rackspace.com/?section=Queues&subsection=Queues&groupID=63
// @version     1.0.1
// @grant       none
// ==/UserScript==

function doStuff() {
  var subjects = [
    /SCOM Performance Data:Agent has not returned performance data for a long time/,
    /High system paging/,
 //   /RS Alert - Base OS Service Failed:Service Terminated Unexpectedly/,
    /Service or driver failed to start/,
    /RS Alert - High CPU/,
    /RS Alert - High CPU:Total CPU Utilization Percentage is too high/,
    /Total CPU Utilization Percentage is too high/,
    /RS Alert - Low Disk/,
    /service is not running/,
    /Service Terminated Unexpectedly/,
    /RS Alert - Low Disk:Logical Disk Free Space is low/,
    /RS Alert - Low Memory/,
    /RS Alert - Base OS:Available Megabytes of Memory is too low/,
    /RS Alert - Base OS Service Failed/,
  //  /Linux Decom/,
  //  /RS Alert - MySQL Replication/,
    /Filesystem Inaccessible/,
    /ALERT:OPSMGR Logical disk free space low/,
    /RS Alert - Proc Queue Length/,
    /HTTP/,
    /HTTPS/,
    /Logical Disk Free Space is low/,
    /SMTP/,
    /PING/,
    /FTP/,
    /IMAP/,
    /SSH_/,
    /Process Not Found/

    
  ];
  var dataRange = document.getElementsByClassName('queues_ticketSubject ticketSubject');
  for (var i = 0; i < dataRange.length; i++) {
    for (var j = 0; j < subjects.length; j++) {
      if (dataRange[i].getAttribute('data-original-title').match(subjects[j])) {
        dataRange[i].setAttribute('style', 'background-color: #99FFCC !important');
      } 
      else {
      }
    }
  }
}
window.addEventListener(
"load", 
function() { 
setInterval(doStuff, 5000); 
}, 
false
);