import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { MovieCard } from "./components/movieCard/MovieCard";
import { Calendar } from "react-modern-calendar-datepicker";
import moviesFromAPI from "../../API/movies.json";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

export const Cinema = () => {
  const DAY_TODAY = new Date();
  let maxDate = new Date();
  let minDate = new Date();

  if(localStorage.getItem('cinema') === null) {
    localStorage.setItem('cinema', JSON.stringify({}));
  }

  maxDate.setDate(DAY_TODAY.getDate() + 7);
  minDate.setDate(DAY_TODAY.getDate() - 7)

  
  const defaultValue = {
    year: DAY_TODAY.getFullYear(),
    month: DAY_TODAY.getMonth() + 1 ,
    day: DAY_TODAY.getDate(),
  };

  const minimumDate = {
    year: minDate.getFullYear(),
    month: minDate.getMonth()+1 ,
    day: minDate.getDate(),
  };
  
  const maximumDate = {
    year: maxDate.getFullYear(),
    month: maxDate.getMonth() + 1 ,
    day: maxDate.getDate(),
  };
  
  const [selectedDate, setSelectedDate] = useState(defaultValue);

  console.log(defaultValue, 'sha',minimumDate , 'min', maximumDate,'max');

  useEffect(() => {
 
  });

  function calendarHandler(value) {
    setSelectedDate(value);
  }

  return (
    <div className={styles.calendarBlock}>
      <h2>Cinema component</h2>
      <div className={styles.page}>
        <div className={styles.calendarWrapper}>
          <Calendar
            // value={defaultValue}
            onChange={calendarHandler}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            shouldHighlightWeekends
            colorPrimary="#9c88ff" 
            calendarClassName={styles.customCalendar}
            calendarTodayClassName={styles.customTodayDay}
          />
        </div>

        <div className={styles.slots}>
          <div className="movies">
            {moviesFromAPI.map((movie) => (
              <MovieCard key={movie.imdbId} selectedDate={selectedDate} {...movie} />
            ))}
        </div>

        </div>
      </div>
    </div>
  );
};
