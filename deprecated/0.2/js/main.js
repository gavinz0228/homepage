function scrollToMoreInfo(){
    var height = $(window).height();
    $("html, body").animate({ scrollTop: height.toString()+"px" }, 500);
}

function loadProfile()
{
    var baseUrl = "https://39pkv72as8.execute-api.us-east-1.amazonaws.com/default/profile-api";
    
    $.get(baseUrl, function(data) {
      })
      .done(function(data){
          console.log(data);
          $("#job0").html(renderJob(data.positions[0]));
          $("#job1").html(renderJob(data.positions[1]));
          $("#education").html(renderEducation(data.educations[0]));

          //data.positions[0]
      })
      .fail(function(err) {
        console.log(err);
      });

}
function renderJob(position){
    var res = "<h2>" + position.company + "</h2>";
    res += "<p>Start Month: " + position.startDate + " End Month: " + position.endDate + "</p>";
    //res += "<p>End Month: " + position.endDate + "</p>";
    res += "<p style='text-align:left'>" + position.summary.replaceAll("\\n", "<br/>").replaceAll("\\'", "'") + "</p>";
    return res;
}
function renderEducation(education){
    var res = "<h2>Eduecation</h2>";
    res += "<br/>"
    res += "<p>" + education.school + "</p>";
    res += "<p>Graduated In: " + education.graduationYear + "</p>";
    res += "<p>Major: " + education.major + "</p>";
    res += "<p>GPA: " + education.gpa + "</p>";
    return res;
}

$(document).ready(function() {
    loadProfile();
});