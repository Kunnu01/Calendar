import moment from 'moment';

const getYearOptions = () => {
  const startYear = 1900;
  let maxLimit = 2050;

  const dates = [];
  while (startYear <= maxLimit) {
    dates.push({
      value: `${maxLimit}`,
      label: `${maxLimit}`,
    })
    maxLimit -= 1;
  }
  return dates;
};

const getPreviousMonthDates = (currentDate) => {
  const date = currentDate.clone();
  const numOfDays = date.startOf('month').format('d') - 1;
  if (!numOfDays) return [];
  
  const previousMonth = moment(date)
    .subtract(1, 'month');
  const month = previousMonth.month();
  
  const daysInPreviousMonth = previousMonth.daysInMonth();

  const dates = [];

  for (let i = daysInPreviousMonth - numOfDays; i <= daysInPreviousMonth; i++) {
    dates.push({
      date: i,
      month,
      isCurrentMonth: false,
    });
  };

  return dates;
};


const getNextMonthDates = (currentDate) => {
  const date = currentDate.clone();
  const numOfDays = date.endOf('month').format('d');
  if (numOfDays === 6) return [];

  const nextMonth = date
    .add(1, 'month');
  const month = nextMonth.month();
  
  const dates = [];

  for (let i = 1; i < 7 - numOfDays; i++) {
    dates.push({
      date: i,
      month,
      isCurrentMonth: false,
    });
  };

  return dates;
};

const getCurrentMonthDates = (currentDate) => {
  const date = currentDate.clone();
  const daysInMonth = date.daysInMonth();
  const month = date.month();
  const dates = [];

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({
      date: i,
      month,
      isCurrentMonth: true,
    });
  };
  return dates;
}

export {
  getYearOptions,
  getPreviousMonthDates,
  getNextMonthDates,
  getCurrentMonthDates,
};
