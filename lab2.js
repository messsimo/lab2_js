const transactions = [
    {
      transaction_id: "1",
      transaction_date: "2019-01-01",
      transaction_amount: 100.0,
      transaction_type: "debit",
      transaction_description: "Payment for groceries",
      merchant_name: "SuperMart",
      card_type: "Visa",
    },
    {
      transaction_id: "2",
      transaction_date: "2019-01-02",
      transaction_amount: 50.0,
      transaction_type: "credit",
      transaction_description: "Refund for returned item",
      merchant_name: "OnlineShop",
      card_type: "MasterCard",
    },
    {
      transaction_id: "3",
      transaction_date: "2019-01-03",
      transaction_amount: 75.0,
      transaction_type: "debit",
      transaction_description: "Dinner with friends",
      merchant_name: "RestaurantABC",
      card_type: "Amex",
    },
  ];
  
  // 1. Получение уникальных типов транзакций
  function getUniqueTransactionTypes(transactions) {
    return [...new Set(transactions.map(transaction => transaction.transaction_type))];
  }
  
  // 2. Вычисление общей суммы всех транзакций
  function calculateTotalAmount(transactions) {
    return transactions.reduce((total, transaction) => total + transaction.transaction_amount, 0);
  }
  
  // 3. Вычисление общей суммы транзакций за указанный день, месяц, год
  function calculateTotalAmountByDate(transactions, year, month, day) {
    return transactions.reduce((total, transaction) => {
      const date = new Date(transaction.transaction_date);
      if (
        (year && date.getFullYear() === year) &&
        (month && date.getMonth() + 1 === month) &&
        (day && date.getDate() === day)
      ) {
        return total + transaction.transaction_amount;
      }
      return total;
    }, 0);
  }
  
  // 4. Получение транзакций по типу
  function getTransactionByType(transactions, type) {
    return transactions.filter(transaction => transaction.transaction_type === type);
  }
  
  // 5. Получение транзакций по диапазону дат
  function getTransactionsInDateRange(transactions, startDate, endDate) {
    return transactions.filter(transaction => {
      const date = new Date(transaction.transaction_date);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
  }
  
  // 6. Получение транзакций по merchant_name
  function getTransactionsByMerchant(transactions, merchantName) {
    return transactions.filter(transaction => transaction.merchant_name === merchantName);
  }
  
  // 7. Вычисление среднего значения транзакций
  function calculateAverageTransactionAmount(transactions) {
    const totalAmount = calculateTotalAmount(transactions);
    return totalAmount / transactions.length;
  }
  
  // 8. Получение транзакций по диапазону суммы
  function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
    return transactions.filter(transaction => transaction.transaction_amount >= minAmount && transaction.transaction_amount <= maxAmount);
  }
  
  // 9. Вычисление общей суммы дебетовых транзакций
  function calculateTotalDebitAmount(transactions) {
    return transactions
      .filter(transaction => transaction.transaction_type === 'debit')
      .reduce((total, transaction) => total + transaction.transaction_amount, 0);
  }
  
  // 10. Месяц с наибольшим количеством транзакций
  function findMostTransactionsMonth(transactions) {
    const monthCount = transactions.reduce((months, transaction) => {
      const month = new Date(transaction.transaction_date).getMonth();
      months[month] = (months[month] || 0) + 1;
      return months;
    }, {});
    const mostTransactionsMonth = Object.entries(monthCount).reduce((max, current) => current[1] > max[1] ? current : max);
    return mostTransactionsMonth ? mostTransactionsMonth[0] : null;
  }
  
  // 11. Месяц с наибольшим количеством дебетовых транзакций
  function findMostDebitTransactionMonth(transactions) {
    const debitTransactions = transactions.filter(transaction => transaction.transaction_type === 'debit');
    return findMostTransactionsMonth(debitTransactions);
  }
  
  // 12. Наиболее частый тип транзакций
  function mostTransactionTypes(transactions) {
    const debitCount = transactions.filter(transaction => transaction.transaction_type === 'debit').length;
    const creditCount = transactions.filter(transaction => transaction.transaction_type === 'credit').length;
    
    if (debitCount > creditCount) return 'debit';
    if (creditCount > debitCount) return 'credit';
    return 'equal';
  }
  
  // 13. Получение транзакций до указанной даты
  function getTransactionsBeforeDate(transactions, date) {
    return transactions.filter(transaction => new Date(transaction.transaction_date) < new Date(date));
  }
  
  // 14. Найти транзакцию по уникальному идентификатору
  function findTransactionById(transactions, id) {
    return transactions.find(transaction => transaction.transaction_id === id);
  }
  
  // 15. Возвращает только описания транзакций
  function mapTransactionDescriptions(transactions) {
    return transactions.map(transaction => transaction.transaction_description);
  }
  
  // Шаг 3. Тестирование функций
  console.log("Unique Transaction Types:", getUniqueTransactionTypes(transactions));
  console.log("Total Amount:", calculateTotalAmount(transactions));
  console.log("Total Amount on 2019-01-01:", calculateTotalAmountByDate(transactions, 2019, 1, 1));
  console.log("Debit Transactions:", getTransactionByType(transactions, 'debit'));
  console.log("Transactions in range 2019-01-01 to 2019-01-02:", getTransactionsInDateRange(transactions, "2019-01-01", "2019-01-02"));
  console.log("Transactions by Merchant 'SuperMart':", getTransactionsByMerchant(transactions, 'SuperMart'));
  console.log("Average Transaction Amount:", calculateAverageTransactionAmount(transactions));
  console.log("Transactions with amount range 50-100:", getTransactionsByAmountRange(transactions, 50, 100));
  console.log("Total Debit Amount:", calculateTotalDebitAmount(transactions));
  console.log("Month with most transactions:", findMostTransactionsMonth(transactions));
  console.log("Month with most debit transactions:", findMostDebitTransactionMonth(transactions));
  console.log("Most Frequent Transaction Type:", mostTransactionTypes(transactions));
  console.log("Transactions before 2019-01-02:", getTransactionsBeforeDate(transactions, "2019-01-02"));
  console.log("Transaction with ID 2:", findTransactionById(transactions, "2"));
  console.log("Transaction Descriptions:", mapTransactionDescriptions(transactions));  