document.getElementById('drawButton').addEventListener('click', function() {
    const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
    const selected = [];

    while (selected.length < 5) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        selected.push(numbers[randomIndex]);
        numbers.splice(randomIndex, 1); // 중복 방지
    }

    // SweetAlert2를 사용하여 결과 표시
    Swal.fire({
        title: '선택된 당번',
        text: selected.join(', '),
        icon: 'success',
        confirmButtonText: '확인'
    });
});
