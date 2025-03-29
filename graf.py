import pandas as pd
from datetime import datetime, timedelta

# Указываем начальные данные
start_date = datetime(2024, 1, 1)  # Начало года
end_date = datetime(2024, 12, 31)  # Конец года
workers = ["Сотрудник 1", "Сотрудник 2", "Сотрудник 3", "Сотрудник 4"]
shifts = ["День", "Ночь", "Выходной", "Выходной"]  # График 2/2

# Список для хранения графика
schedule = []

# Основной цикл для создания графика
current_date = start_date
worker_index = 0

while current_date <= end_date:
    for shift in shifts:
        # Заполняем график по текущей дате и сотруднику
        schedule.append({
            "Дата": current_date.strftime("%Y-%m-%d"),
            "Сотрудник": workers[worker_index],
            "Смена": shift
        })
        current_date += timedelta(days=1)
        # Переходим к следующему сотруднику после 2 смен подряд
        worker_index = (worker_index + 1) % len(workers)

# Создаём DataFrame и записываем в Excel
df = pd.DataFrame(schedule)
df.to_excel("График_смен.xlsx", index=False)
print("График смен сохранен в файл 'График_смен.xlsx'")
