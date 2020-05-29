$(document).ready(() => {
    var refer = window.location.href;
    var thankyou = document.getElementById('thanks');
    var back = document.getElementById('goback');
    if (refer == 'https://revoltwind.com/contact.html?q=thankyou') {
        thankyou.className = 'thanks';
        back.className = 'thanks';
    }
    if (refer == 'https://revoltwind.com/apply.html?q=thankyou') {
        thankyou.className = 'thanks';
        back.className = 'thanks';
    }


    // contact form validation scripts

    const inputs = document.querySelectorAll('input');
    const message = document.getElementById('message');

    const patterns = {
        phone: /^[\d-+#ext\.\s]{7,25}$/i,
        name: /^[a-z\d\s]{1,50}$/i,
        message: /^[^<>]{0,2000}$/i,
        email: /^([a-z\d\.-_]+)@([a-z\d-_]+)\.([a-z]{2,18})(\.[a-z]{2,8})?$/i
    };

    //validation function
    function validate(field, regex) {
        if (regex.test(field.value)) {
            field.className = 'valid';
        } else {
            field.className = 'invalid';
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
            validate(e.target, patterns[e.target.attributes.name.value]);
        });
    });

    message.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });

});
