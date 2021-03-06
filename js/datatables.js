//The Following code is for search in the table
$(document).ready(function(){
    $('#searchInTable').on('keyup',function(){
        var value = $(this).val();
        var pattern = new RegExp(value, "i");
        $('#table').find('tr').each(function() {
            if (!($(this).find('td').text().search(pattern) >= 0)) {
                $(this).not('.tableRow').hide();
            }
            if (($(this).find('td').text().search(pattern) >= 0)) {
                $(this).show();
            }
        });
    });
});
//This code is to sort the FirstName Column
function sort_FirstName() {
    var table = $('.table');
    var tbody = $('.tableBody');
    tbody.find('tr').sort(function (a, b) {
        if ($('#orderingFN').val() == 'ascen') {
            return $('td:first', a).text().localeCompare($('td:first', b).text());
        }
        else {
            return $('td:first', b).text().localeCompare($('td:first', a).text());
        }
    }).appendTo(tbody);
    var sort_order = $('#orderingFN').val();
    if (sort_order == "ascen") {
        document.getElementById("orderingFN").value = "descen";
    }
    if (sort_order == "descen") {
        document.getElementById("orderingFN").value = "ascen";
    }
}

//This code is to sort the LastName Column
function sort_LastName() {
    var table = $('.table');
    var tbody = $('.tableBody');
    tbody.find('tr').sort(function (a, b) {
        if ($('#orderingLN').val() == 'ascen') {
            return $('td:first', a).text().localeCompare($('td:first', b).text());
        }
        else {
            return $('td:first', b).text().localeCompare($('td:first', a).text());
        }
    }).appendTo(tbody);
    var sort_order = $('#orderingLN').val();
    if (sort_order == "ascen") {
        document.getElementById("orderingLN").value = "descen";
    }
    if (sort_order == "descen") {
        document.getElementById("orderingLN").value = "ascen";
    }
}