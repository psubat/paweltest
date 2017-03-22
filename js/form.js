    function isValid() {
        var isValid= true;

        if (!$('#mails').val()) {
            isValid = false
            $("#mails").css({"border-color": "#f43a6f"});

                $('#mails').keydown(function(){
                    $('#mails').css({"border-color": "#b8c5cc"});
                });

            $("#error-message").css({"display": "inline-block"});
        }

        else{
            $("#mails").css({"border-color": "#b8c5cc"});
        }

        if (!$('#subject').val()) {
            isValid = false
            $("#subject").css({"border-color": "#f43a6f"});

                $('#subject').keydown(function(){
                    $('#subject').css({"border-color": "#b8c5cc"});
                });

            $("#error-message").css({"display": "inline-block"});
        }

        else{
            $("#subject").css({"border-color": "#b8c5cc"});
        }

        if (!$('#message').val()) {
            isValid = false
            $("#message").css({"border-color": "#f43a6f"});

            $('#message').keydown(function(){
                $('#message').css({"border-color": "#b8c5cc"});
            });

            $("#error-message").css({"display": "inline-block"});
        }

        else{
            $("#message").css({"border-color": "#b8c5cc"});
        }

        if (!$('#human').val()) {
            isValid = false
            $("#human").css({"border-color": "#f43a6f"});

                $('#human').keydown(function(){
                    $('#human').css({"border-color": "#b8c5cc"});
                });

            $("#error-message").css({"display": "inline-block"});
            $("#error-message").css({"-webkit-animation": "shake 1s"});
        }

        else{
            $("#human").css({"border-color": "#b8c5cc"});
        }
        return isValid
    }

    $('#submit').on('click', function(event) {
        if (!isValid()) {
            event.preventDefault()
            $("#error-message").css({"-webkit-animation": "shake 1s"});
        }
    })