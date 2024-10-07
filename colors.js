// 다크 모드 전환 버튼 요소 선택
const toggleButton = document.getElementById('darkModeToggle');

// 버튼 클릭 시 실행할 함수
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
