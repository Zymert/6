function submitForm() {
    // Получаем значения полей
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const waist = document.getElementById('waist').value;
    const chest = document.getElementById('chest').value;
    const legs = document.getElementById('legs').value;
    const arms = document.getElementById('arms').value;
    const conditions = document.getElementById('conditions').value;

    // Формируем объект с данными
    const formData = {
        weight: weight,
        height: height,
        waist: waist,
        chest: chest,
        legs: legs,
        arms: arms,
        conditions: conditions
    };

    // Отображаем данные на экране (можно отправить на сервер с использованием fetch)
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Вес: ${formData.weight} кг</p>
        <p>Рост: ${formData.height} см</p>
        <p>Талия: ${formData.waist} см</p>
        <p>Грудь: ${formData.chest} см</p>
        <p>Ноги: ${formData.legs} см</p>
        <p>Руки: ${formData.arms} см</p>
        <p>Заболевания: ${formData.conditions}</p>
    `;
}