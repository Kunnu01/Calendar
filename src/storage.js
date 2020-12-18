import moment from 'moment';

class Storage {
  storage = localStorage ? localStorage : sessionStorage;

  set(value, selectedDate) {
    const dateOfEvent = moment(selectedDate);
    const date = dateOfEvent.format('YYYY-MM-DD');
    const time = dateOfEvent.format('HH:mm');

    const allTasks = this.getAll();
    const dateTasks = (allTasks && allTasks[date]) || [];
    
    const data = {
      ...allTasks,
      [date]: [
        ...dateTasks,
        {
          event: value,
          time,
        }
      ]
    };
    this.storage.setItem(`cal_events`, JSON.stringify(data));
  }

  getAll() {
    return JSON.parse(this.storage.getItem('cal_events'));
  }

  get(date) {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const tasks = this.getAll();
    console.log({ tasks, formattedDate })
    return tasks && tasks[formattedDate];
  }

  delete(key) {
    this.storage.removeItem(`${key}`);
  }

  clear() {
    this.storage.clear();
  }
}

export default new Storage();