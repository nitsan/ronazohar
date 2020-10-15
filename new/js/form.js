var inputNames = ["name", "phone", "email", "message"];

function startIsLoading() {
    $('#sendBtn').prop('disabled', true);
    $('#sendBtn .spinner-grow').removeClass('d-none');
}

function stopIsLoading() {
    $('#sendBtn').prop('disabled', false);
    $('#sendBtn .spinner-grow').addClass('d-none');
}

function validateField(id) {
    var input = $("#" + id);
    var fieldValue = input.val();
    if (fieldValue && fieldValue.trim() !== '') {
        input.removeClass('is-invalid');
        input.addClass('is-valid');
        return true;
    } else {
        input.removeClass('is-valid');
        input.addClass('is-invalid');
        return false;
    }
}

function validateForm() {
    var isAllInputsValid = true;
    for (var i = 0; i < inputNames.length; i++) {
        var isFieldValid = validateField(inputNames[i]);
        if (!isFieldValid) {
            isAllInputsValid = false;
        }
    }
    return isAllInputsValid;
}

$('#contactForm').on('submit', function (event) {
    if (!validateForm()) {
        return false;
    }
    event.preventDefault(); // prevent reload

    var data = {
        service_id: 'sendgrid',
        template_id: 'contact',
        user_id: 'user_aOOagFzIvXwNrk0mRZE5S',
        template_params: {
            from_name: $('#name').val(),
            from_email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val(),
        }
    };

    startIsLoading();
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        stopIsLoading();
        $(event.currentTarget).addClass('d-none');
        $('#successMessageSent').removeClass('d-none');
    }).fail(function (error) {
        stopIsLoading();
        $('#errorMessageSent').removeClass('d-none');
        console.error('Oops... ' + JSON.stringify(error));
    });
});

$('#name, #phone, #email, #message').change(function (event) {
    validateField(event.currentTarget.id);
});
