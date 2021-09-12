const workingDays = (days, month) => {
  //filtering only working days
  const getMDays = Object.keys(days || [])
    .filter((item) => days?.[item]?.Date?.includes(month))
    .map((item) => days[item]);

  const getDate = getMDays?.[0]?.["Date"]; //extracting a date
  const weekends = getWeekends(getDate); //get all weekends in a month

  const wDays = getMDays
    .filter((item) => {
      const getDay = new Date(item.Date).getDay();
      return !weekends.includes(getDay);
    })
    .map((item) => {
      let time = item?.hoursWorked;
      let hour = parseHour(time);
      let minutes = parseMinutes(time);
      let totalHours = (Number(hour) + Number(minutes) / 60).toFixed(2);
      return { ...item, hoursWorked: totalHours };
    });

  return wDays;
};

const getWeekends = (date) => {
  //total weekends in a months
  var d = new Date(date);
  var totalDays = new Date(d.getMonth(), d.getFullYear(), 0).getDate();
  var weekends = new Array([]);

  for (var i = 1; i <= totalDays; i++) {
    //looping through days in month
    var newDate = new Date(d.getFullYear(), d.getMonth(), i);
    if (newDate.getDay() === 0 || newDate.getDay() === 6) {
      weekends.push(i);
    }
  }
  return weekends;
};

const parseHour = (time) => time?.split(":")[0]?.replace(/\D/g, "") || 0;
const parseMinutes = (time) => time?.split(":")[1]?.replace(/\D/g, "") || 0;

const totalHours = (days) => {
  return days.reduce((prev, curr) => {
    return prev + Number(curr?.hoursWorked);
  }, 0);
};

const getAbsences = (days) => days.filter((item) => !item?.punchInTIme);
const getMaxHours = (days) =>
  Math.max(...days.map((h) => parseHour(h.hoursWorked)), 0);
const getMinHours = (days) =>
  Math.min(
    ...days
      .filter((item) => item.hoursWorked)
      .map((h) => parseHour(h.hoursWorked)),
    0
  );
const getAvgHours = (days) => totalHours(days) / days.length;
const getDaysLess8 = (days) =>
  days.filter((item) => item?.hoursWorked < 8).length || 0;
const getMissedPOuts = (days) =>
  days.filter((item) => !item?.punchInOut).length || 0;

export const getSummary = (days, month) => {
  const tDays = workingDays(days, month);
  return {
    "Total Hours": totalHours(tDays),
    Absences: getAbsences(tDays).length || 0,
    "Max Hours": getMaxHours(tDays),
    "Min Hours": getMinHours(tDays),
    "Avg. Hours": getAvgHours(tDays).toFixed(2),
    "Days < 8": getDaysLess8(tDays),
    "Present Days": `${tDays.length - getAbsences(tDays)}/${tDays.length}`,
    "Missed Punch Outs": getMissedPOuts(tDays),
  };
};

export const getAbsentDates = (days, month) => {
  const tDays = workingDays(days, month);
  return getAbsences(tDays);
};

export const getTotalWorkedHours = (days, month) => workingDays(days, month);

export const getPunchInTime = (days, month) => {
  const tDays = workingDays(days, month);
  return tDays
    .filter((item) => item?.punchInTIme)
    .map((item) => {
      let time = item?.punchInTIme?.split(/[AM PM]/)[0];
      let [hour, minutes] = time?.split(":");
      let tTime = Math.floor(Number(hour) + Number(minutes) / 60);
      return {
        time: tTime,
        label: item?.punchInTIme,
      };
    });
};
