$(document).ready(() => {
  // Load initial product
  $('#RW-1content').load('./modules/products/RW-1.html', (res, status, xhr) => {
    if (status == 'success') {
      $('#RW-1btn').prop('disabled', true)
    }
    if (status == 'error') {
      alert('Error: ' + xhr.status + ': ' + xhr.statusText)
    }
  })

  $('#RW-1btn').on('click', function () {
    $('#RW-1content').load(
      './modules/products/RW-1.html',
      (res, status, xhr) => {
        if (status == 'success') {
          $('#RW-Xcontent').empty()
          $('#minicontent').empty()
          $('#RW-Xbtn').prop('disabled', false)
          $('#RW-1btn').prop('disabled', true)
          $('#minibtn').prop('disabled', false)
        }
        if (status == 'error') {
          alert('Error: ' + xhr.status + ': ' + xhr.statusText)
        }
      }
    )
  })

  $('#RW-Xbtn').on('click', function () {
    $('#RW-Xcontent').load(
      './modules/products/RW-X.html',
      (res, status, xhr) => {
        if (status == 'success') {
          $('#RW-1content').empty()
          $('#minicontent').empty()
          $('#RW-Xbtn').prop('disabled', true)
          $('#RW-1btn').prop('disabled', false)
          $('#minibtn').prop('disabled', false)
        }
        if (status == 'error') {
          alert('Error: ' + xhr.status + ': ' + xhr.statusText)
        }
      }
    )
  })

  $('#minibtn').on('click', function () {
    $('#minicontent').load(
      './modules/products/mini.html',
      (res, status, xhr) => {
        if (status == 'success') {
          $('#RW-1content').empty()
          $('#RW-Xcontent').empty()
          $('#RW-Xbtn').prop('disabled', false)
          $('#RW-1btn').prop('disabled', false)
          $('#minibtn').prop('disabled', true)
        }
        if (status == 'error') {
          alert('Error: ' + xhr.status + ': ' + xhr.statusText)
        }
      }
    )
  })

  // FORM VALIDATION
  const patterns = {
    message: /^[^<>]{0,2000}$/i,
    email: /^([a-z\d\.-_]+)@([a-z\d-_]+)\.([a-z]{2,18})(\.[a-z]{2,8})?$/i,
  }

  const eml = document.getElementById('email')
  eml.addEventListener('keyup', (e) => {
    var field = e.target
    var regex = patterns['email']
    if (regex.test(field.value)) {
      field.className = 'valid'
      document.getElementById('emailtxt').className = 'valid'
    } else {
      field.className = 'invalid'
      document.getElementById('emailtxt').className = 'invalid'
      eml.focus()
    }
  })

  const msg = document.getElementById('message')
  msg.addEventListener('keyup', (e) => {
    var field = e.target
    var regex = patterns['message']
    if (regex.test(field.value)) {
      field.className = 'valid'
      document.getElementById('messagetxt').className = 'valid'
    } else {
      field.className = 'invalid'
      document.getElementById('messagetxt').className = 'invalid'
      msg.focus()
    }
  })
})
