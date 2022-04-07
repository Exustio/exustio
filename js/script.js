$(document).ready(function() {
    $(".typeInfo").hide();
    $(".showType").change(function() {
        var checkId = $(this).attr("id");
        $('.typeInfo').each(function(index, value) {
            var typeId = $(this).data("id");
            if (checkId == typeId) {
                $(this).toggle();
            }
        });
    });
});

$(function() {
    var masterCheck = $("#masterCheck");
    var subChecks = $("#notMaster :checkbox");
    masterCheck.click(function() {
        var isMasterChecked = $(this).is(":checked");
        subChecks.prop("checked", isMasterChecked);
    });
    subChecks.change(function() {
        var totalItems = subChecks.length;
        var checkedItems = subChecks.filter(":checked").length;
        if (checkedItems > 0 && checkedItems < totalItems) {
            masterCheck.prop("indeterminate", true);
            masterCheck.prop("checked", true);
        }
        else if (totalItems == checkedItems) {
            masterCheck.prop("indeterminate", false);
            masterCheck.prop("checked", true);
        }
        else {
            masterCheck.prop("indeterminate", false);
            masterCheck.prop("checked", false);
        }
    });
});