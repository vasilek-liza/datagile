import { Counter } from './Counter/Counter';
import './Counters.scss';
import { useSelector } from 'react-redux';

export function Counters() {

    const {elements} = useSelector(state => state.counterReducer);

    return (
        <div className="counters">
            <div className="counters__wrapper wrapper">
                {elements.length 
                    ? elements.map((counter) => (
                        <Counter key={counter.number} counter={counter}/>
                    )) 
                    : <h3 className="counters__wrapper-empty">Счетчиков пока нет &#128531;</h3>}
            </div>
        </div>
    );
}