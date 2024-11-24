// async function onSubmitForm(e) {
//     if (e) {
//         e.preventDefault();
//     }
    
//     const submitButton = document.getElementById('contactFormSubmit');
//     const messageElement = document.getElementById('contactFormMessage');
//     const form = document.getElementById('contactForm');
    
//     submitButton.disabled = true;
//     submitButton.innerHTML = '<span>Enviando...</span>';
//     messageElement.innerHTML = '';

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     try {
//         const response = await fetch('https://bbb7-189-172-122-172.ngrok-free.app/cevilla-mails/us-central1/sendEmail', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 name,
//                 email,
//                 message
//             }),
//         });

//         console.log({
//             name,
//             email,
//             message
//         })

//         if (!response.ok) {
//             const errorData = await response.json().catch(() => null);
//             throw new Error(errorData?.message || `Error ${response.status}: ${response.statusText}`);
//         }

//         messageElement.style.color = 'green';
//         messageElement.innerHTML = '¡Mensaje enviado exitosamente!';
//         form.reset();

//     } catch (error) {
//         console.error('Error:', error);
//         messageElement.style.color = 'red';
//         messageElement.innerHTML = `Error al enviar el mensaje: ${error.message || 'Por favor intente nuevamente.'}`;
//     } finally {
//         submitButton.disabled = false;
//         submitButton.innerHTML = '<span>Enviar</span>';
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('contactForm');
//     if (form) {
//         form.addEventListener('submit', onSubmitForm);
//     }
// });