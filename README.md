# Лабораторная работа №2. Анализ транзакций с использованием JavaScript

## Цель работы
Познакомиться с методами обработки данных в JavaScript, реализовать функции для анализа транзакций, таких как вычисление общей суммы, фильтрация по типам и диапазонам дат, и другие.

## Условие

### Задание 1. Создание массива транзакций

1. **Создание массива объектов:**
    - Создал массив `transactions`, состоящий из объектов транзакций. Каждый объект включает в себя следующие поля:
        - `transaction_id`: уникальный идентификатор транзакции.
        - `transaction_date`: дата транзакции.
        - `transaction_amount`: сумма транзакции.
        - `transaction_type`: тип транзакции (приход или расход).
        - `transaction_description`: описание транзакции.
        - `merchant_name`: название магазина или сервиса.
        - `card_type`: тип карты (кредитная или дебетовая).
    - Для тестирования использовал примеры транзакций, например: покупка в магазине, возврат товара, ужин с друзьями.

2. **Подготовка среды:**
    - Установил редактор кода VS Code.
    - Создал файл `main.js` для размещения кода JavaScript.
    - Ввел массив транзакций, готовый к дальнейшему анализу.

### Задание 2. Реализация функций для анализа транзакций

1. **Получение уникальных типов транзакций:**
    - Реализовал функцию `getUniqueTransactionTypes`, которая использует `Set` для возвращения массива уникальных типов транзакций.

2. **Вычисление общей суммы всех транзакций:**
    - Реализовал функцию `calculateTotalAmount`, которая суммирует все значения транзакций с использованием метода `reduce`.

3. **Вычисление общей суммы транзакций за определенный день, месяц и год:**
    - Реализована функция `calculateTotalAmountByDate`, которая позволяет подсчитать сумму транзакций по указанной дате.

4. **Фильтрация транзакций по типу (debit или credit):**
    - Написал функцию `getTransactionByType`, которая фильтрует транзакции по заданному типу.

5. **Фильтрация транзакций по диапазону дат:**
    - Создал функцию `getTransactionsInDateRange`, которая возвращает транзакции, проведенные в указанном диапазоне дат.

6. **Получение транзакций по merchant_name:**
    - Реализована функция `getTransactionsByMerchant`, которая возвращает транзакции для указанного продавца или сервиса.

7. **Вычисление среднего значения транзакций:**
    - Написал функцию `calculateAverageTransactionAmount`, которая вычисляет среднее значение всех транзакций.

8. **Получение транзакций по диапазону суммы:**
    - Реализована функция `getTransactionsByAmountRange`, которая фильтрует транзакции по заданному диапазону сумм.

9. **Вычисление общей суммы дебетовых транзакций:**
    - Создана функция `calculateTotalDebitAmount`, которая подсчитывает общую сумму только дебетовых транзакций.

10. **Определение месяца с наибольшим количеством транзакций:**
    - Написана функция `findMostTransactionsMonth`, которая находит месяц с наибольшим количеством транзакций.

11. **Определение месяца с наибольшим количеством дебетовых транзакций:**
    - Реализована функция `findMostDebitTransactionMonth`, которая находит месяц с наибольшим количеством дебетовых транзакций.

12. **Определение наиболее частого типа транзакций:**
    - Функция `mostTransactionTypes` возвращает наиболее частый тип транзакций (debit или credit).

13. **Получение транзакций до указанной даты:**
    - Написана функция `getTransactionsBeforeDate`, которая фильтрует транзакции до определенной даты.

14. **Поиск транзакции по уникальному идентификатору:**
    - Создана функция `findTransactionById`, которая позволяет найти транзакцию по её уникальному идентификатору.

15. **Возвращение только описаний транзакций:**
    - Реализована функция `mapTransactionDescriptions`, которая возвращает массив с описаниями транзакций.

### Задание 3. Тестирование функций

1. Для тестирования каждой из функций я использовал массив с несколькими транзакциями. Примерный вывод в консоль для проверки:
    - Уникальные типы транзакций.
    - Общая сумма всех транзакций.
    - Сумма транзакций по дате.
    - Транзакции определенного типа и по диапазону дат.
    - Среднее значение транзакций и фильтрация по сумме.
2. Все функции проверены на разных наборах данных:
    - Пустой массив транзакций.
    - Массив с одной транзакцией.

## Выводы
В ходе работы я научился:
- Создавать и обрабатывать массивы объектов в JavaScript.
- Реализовывать различные методы для анализа и фильтрации данных.
- Практиковаться в работе с функциями и операциями над массивами.
