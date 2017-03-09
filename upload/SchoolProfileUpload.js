angular.module("FindASchoolDataUploadUtility", [])
.controller("SchoolDataUpload", function ($scope) {
    $scope.Message = "hello from upload utility";
    $scope.MySchoolsObject = "";
    /* SINGLE RECORD
    $.ajax({
    url: "SchoolsDataSingle.txt"
    , success: function (result) { var MyObject2 = JSON.parse(result); console.log("[SINGLE] SchoolName is " + MyObject2.SchoolName);    }
    , error: function (result, status, xhr) { console.log(result + " &" + status + " &" + xhr); $scope.Message += "error !!"; }
    });
    */

    /* SINGLE NESTED JSON RECORD
    $.ajax({
    url: "SchoolsDataNested.txt"
    , success: function (result) { try {  var MyObject2 = JSON.parse(result); console.log("[SINGLE NESTED JSON RECORD] SchoolName is " + MyObject2.school.SchoolName); } catch (err) { console.log("error !! " + err.Message + " &" + err.number); } }
    , error: function (result, status, xhr) { console.log(result + " &" + status + " &" + xhr); $scope.Message += "error !!"; }
    });
    */

    // MULTIPLE NESTED JSON RECORD
    $.ajax({
        url: "SchoolsData.txt"
    , success: function (result) {

        try {
            $scope.Message = "- we have " + $scope.MySchoolsObject.length+ " rows";

            $scope.MySchoolsObject = JSON.parse(result);
            $("#resultData").append("number of rows: " + $scope.MySchoolsObject.length);
            
            $("#resultData").append("<ul>");
            for (var i = 0; i < $scope.MySchoolsObject.length; i++) {
                $("#resultData").append("<li> " + $scope.MySchoolsObject[i].SchoolName + " </li> ");
            }
            $("#resultData").append("</ul>");

        } catch (err) { console.log("error !! " + err.Message + " &" + err.number); }

    }
    , error: function (result, status, xhr) { console.log(result + " &" + status + " &" + xhr); $scope.Message += "error !!"; }
    });

})
.config(function () {
    startTime = new Date().toLocaleTimeString();
    var completeTime = new Date().getMilliseconds();
    console.log("services module config: " + startTime + ":" + completeTime);
});


