import Button from "@material-ui/core/Button";
import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import  { moviesSagaAC }  from '../../../../store/actions/cinemaAC'
import { useDispatch } from "react-redux";


const SEANS_TIME = [10, 12, 14, 16, 18, 20];

export const MovieCard = ({
  title,
  description,
  imgUrl,
  imdbUrl,
  selectedDate,
}) => {
  const dispatch = useDispatch();
  const localFileName = `${selectedDate.day}/${selectedDate.month}/${selectedDate.year}`;

  let [timesFromLocal, setTimesLocal] = useState([]);
  let cinema = JSON.parse(localStorage.getItem('cinema'));

  useEffect(() => {
    if ( JSON.parse(localStorage.getItem('cinema'))[localFileName] === undefined) {
      localStorage.setItem('cinema', JSON.stringify({...cinema, [localFileName]: {}}))
    } 
    
    if (!(JSON.parse(localStorage.getItem('cinema'))[localFileName][title])){
      let frr = {...JSON.parse(localStorage.getItem('cinema'))};
      frr[localFileName][title] = [];
      localStorage.setItem('cinema', JSON.stringify(frr))
    }  else {
    }

    setTimesLocal(JSON.parse(localStorage.getItem('cinema'))[localFileName])
  }, [selectedDate, title ]);

  function handdleClick(value) {
    dispatch(moviesSagaAC({value, localFileName, title}));
    setTimesLocal(JSON.parse(localStorage.getItem('cinema'))[localFileName])
    }

  return (
    <div className={styles.card}>
      <div className={styles.moviePreview}>
        <div className={styles.movieImage}>
          <img src={imgUrl} alt="Film logo" className={styles.image} />
        </div>
        <div className={styles.cardContent}>
          <div className="media">
            <div className="media-content">
              <p className="title is-8">{title}</p>
            </div>
          </div>

          <div className="content">
            {description}
            <br />
            <a href={imdbUrl}>IMDB</a>
          </div>
          <div className={styles.buttons}>
                        {
            SEANS_TIME.map((time, id) => (
              <Button
              name={time}
              key={id}
              variant={timesFromLocal[title]?.includes(`${time}`) ? 'contained' : 'outlined'}
              color="primary"
              type="button"
              onClick={(e) => {
                handdleClick(e.currentTarget.name);
              }}
              >
                {time}.00
              </Button>
            ))
            }
          </div>
          {localFileName}
        </div>
      </div>
    </div>
  );
};
