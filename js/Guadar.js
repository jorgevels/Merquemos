window.onbeforeunload = function(e) {
  e.preventDefault();
  return "";
};

/* constructor($elem);
{
  $(window)
    .unbind()
    .bind("beforeunload", e => this.beforeUnload(e));
}
beforeUnload(e);
{
  $("#capa").show();
  setTimeout(function() {
    $("#capa").hide();
  }, 1); 
  return "This message is not relevant in most modern browsers.";
}
 */

/* cd
 */
