document.addEventListener('DOMContentLoaded', () => {

//  form validate s
 function formValidate() {
  const form = document.querySelector('form');
  const submitBtn = document.querySelector('.submit-btn');
  const errorMessages = document.querySelectorAll('.error-message');
  const inputs = form.querySelectorAll('input, select, textarea, .input-wrapper, .radio-input, .checkbox-input');

  
  const toastComplete = document.querySelector('.toast.complete')
  const toastError = document.querySelector('.toast.error')

  if(errorMessages && submitBtn) {
    submitBtn.addEventListener('click', () => {
      // 1. 클릭 시 전체 에러 상태 먼저 초기화 (form도 flex.flex-column이라 closest가 form을 반환하는 경우 방지)
      errorMessages.forEach((msg) => msg.classList.remove('is-error'));
      form.querySelectorAll('input, select, textarea, .input-wrapper, .select-wrapper').forEach((el) =>
        el.classList.remove('is-error')
      );

      inputs.forEach((element) => {
        // 실제 폼 컨트롤 요소: 직접 선택된 input/select/textarea는 그대로, wrapper div면 내부 input/select/textarea 찾기
        const target = element.tagName === 'SELECT' || element.tagName === 'INPUT' || element.tagName === 'TEXTAREA'
          ? element
          : element.querySelector('input, select, textarea');
        // form row 컨테이너 - form 제외하고 직계 필드 div만 (form.flex.flex-column과 구분)
        const row = (target || element).closest('form > .flex.flex-column, form > [class*="flex"]');
        const errorMessage = row?.querySelector('.error-message');

        if (!target) return;

        // 빈값 유효성 검사
        let isError = false;
        if (target.type === 'checkbox' || target.type === 'radio') {
          isError = !target.checked;
        } else if (target.tagName === 'SELECT') {
          isError = !target.value || target.value.trim() === '';
        } else {
          isError = !target.value || (typeof target.value === 'string' && target.value.trim() === '');
        }

        if (isError) {
          (target.closest('.input-wrapper') || target.closest('.select-wrapper') || target).classList.add('is-error');
          if (errorMessage) errorMessage.classList.add('is-error');
          toastError.classList.add('active');
          setTimeout(() => {
            toastError.classList.remove('active');
          }, 1000);
        } else {
          // 모든 입력들이 유효한지 검사
          if (element === inputs[inputs.length - 1]) {
            const hasError = [...inputs].some((el) => {
              const elTarget = el.tagName === 'SELECT' || el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'
                ? el
                : el.querySelector('input, select, textarea');
              return (elTarget.closest('.input-wrapper') || elTarget.closest('.select-wrapper') || elTarget).classList.contains('is-error');
            });

            // toast complete 메세지 출력
            if (!hasError) {
              toastComplete.classList.add('active');
              setTimeout(() => {
                toastComplete.classList.remove('active');
              }, 3000);
            }
          }
        }
      });
    });
  }
 }
 // form validate e


 formValidate()


})