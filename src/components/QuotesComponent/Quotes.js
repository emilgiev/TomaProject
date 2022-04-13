import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Quotes.module.css'

const Quotes = () => {

    const [SelectedQuote, SetQuote] = useState([])
    const [SelectedIndex, SetIndex] = useState(null)
    const quotes = ["Some Quote", "Some Quote2", "Some Quote3", "Some Quote4", "Some Quote5"];


    useEffect(() => {
        SetQuote(quotes)
        SetIndex([Math.floor(Math.random() * quotes.length)])
        console.log(SelectedQuote[SelectedIndex])
        console.log('i fire once')
    }, [])

    return (
        <div className={styles['Quotes-container']}>
            <label>
                Quote of the day
            </label>
            <h2>
                {SelectedQuote[SelectedIndex]}
            </h2>
        </div>
    )

}

export default Quotes;