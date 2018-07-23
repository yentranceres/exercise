$(document).ready(function () {
    $(".btn-submit").click(function () {
        validationForm();
    });

    $(document).keypress(function (e) {
        if (e.which == 13) {
            validationForm();
        }
    });

    /* $(document).on('click','.btn-delete', function () {
         $(this).closest('li').remove();
     });*/


    $(document).on('click', '.action-complete', function () {
        $(this).closest('li').appendTo(".list-item-complete");
        $(this).hide('action-complete')
    });

    // There are functions.
    function validationForm() {
        var value = $('input:text').val();

        var localdate = $('#appt-time').val();

        var list = Math.floor(Math.random() * 1000);
        if (value == "") {
            $(".warning").slideDown("slow").css('display', 'inline-block');
            $("#input-control").addClass("error");
        }
        else {
            $(".warning").hide();
            $(".list-item-draft").append("<li id='list-nb-" + list + "'>"
                + "<div class='body-content'>"
                + "<p class='content-list'>" + value + "</p>"
                + "<div>"
                + "<a class='action-complete' href='#'><i class='glyphicon glyphicon-ok icon-complete'></i></a>"
                + "<a class='action-remove' href='#' data-toggle='modal' data-target='#myModal'><i class='glyphicon glyphicon-remove icon-delete'></i></a>"
                + "</div>"
                + "</div>"
                + "<p class='date-list'>" + localdate + "</p>"
                + "</li>");
            $('input:text').val("");
            $('#appt-time').val("");
        }
    }

    //click button delete element
    $(document).on('click', '.action-remove', function () {
        var id = $(this).parents('li').attr('id');
        $('#myModal').find('.btn-delete').attr('data-todo-id', id);
    });

    $(document).on('click', '.btn-delete', function () {
        var idElement = $(this).attr('data-todo-id');
        $('#' + idElement).remove();
        $('#myModal').modal('hide')
    });

});

