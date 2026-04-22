document.addEventListener('DOMContentLoaded', () => {

//  form validate s
 function formValidate() {
  const form = document.querySelector('form');
  const submitBtn = document.querySelector('.submit-btn');
  const toastComplete = document.querySelector('.toast.complete');
  const toastError = document.querySelector('.toast.error');
  const inputList = form.querySelectorAll('input, select, textarea');

  if (!form || !submitBtn) return;

  submitBtn.addEventListener('click', function() {
    let isAllValid = true;

    // 모든 에러 상태 초기화
    form.querySelectorAll('.is-error').forEach(function(el) {
      el.classList.remove('is-error');
    });

    // input, select, textarea 모두 검사
    inputList.forEach(function(input) {
      let isError = false;

      if (input.type === 'checkbox' || input.type === 'radio' ) {
        if (!input.checked) isError = true;
      } else {
        if (!input.value || input.value.trim() === '') isError = true;
      }
      // select 검사
      if(input.type ==='select') {
        if (!input.value || input.value.trim() === '') isError = true;
      }
      

      // 에러면 .is-error 추가 및 에러 메시지 표시
      if (isError) {
        isAllValid = false;
        // input-wrapper input에 is-error
        const fieldWrapper = input.closest('.input-wrapper') || input;
        fieldWrapper.classList.add('is-error');
        // form-item 요소에서 p태그(error-message)를 찾아서 is-error 클래스 추가
        const formItem = input.closest('.form-item');
        if (formItem) {
          const errorMsg = formItem.querySelector('p.error-message');
          if (errorMsg) errorMsg.classList.add('is-error');
        }
      }

    });

    // 토스트 메시지
    if (!isAllValid) {
      toastError.classList.add('active');
      setTimeout(function() {
        toastError.classList.remove('active');
      }, 1000);
    } else {
      toastComplete.classList.add('active');
      setTimeout(function() {
        toastComplete.classList.remove('active');
      }, 3000);
    }
  });
 }
 // form validate e

//  비밀번호 이벤트
function passwordEvent() {
  const passwordInput = document.querySelector('.password-box');
  const eyeIcon = document.querySelector('.eye-icon');

  eyeIcon.addEventListener('click', function() {
    if(eyeIcon) {
      if(passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
      eyeIcon.classList.toggle('active');
    }
  })
}

// textarea 이벤트
function textareaEvent() {
  const textArea = document.querySelector('textarea');
  const textareaCount = document.querySelector('.textarea-count');

  textArea.addEventListener('input', function() {
    textareaCount.textContent = textArea.value.length + ' / 1000';
    if(textArea.value.length > 1000) {
      textArea.value = textArea.value.slice(0, 1000);
    }
  })
}

 formValidate()
 passwordEvent()
 textareaEvent()



})