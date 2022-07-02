import { useDispatch } from 'react-redux';
import { useSetInterval } from '../../../hooks/useSetInterval';
import { decrementValue,incrementValue } from '../../../store/slices/CounterSlice';
import { ActionPanel } from '../../Common/ActionPanel/ActionPanel';
import './Counter.scss';

export function Counter({counter}) {
  const dispatch = useDispatch();

  useSetInterval(
    () => dispatch(incrementValue(counter.number)),
    !counter.isShowButtons
  );

  return (
    <div className="counter">
        <div className="counter__number">
            Номер счетчика: <span>{counter.number}</span>
        </div>
        <div className="counter__value">
            {counter.value}
        </div>
        {counter.isShowButtons 
          ? ( 
              <ActionPanel 
                id={counter.number}
                decrement={decrementValue}
                increment={incrementValue}
              />
          )
          : "" 
        }
    </div>
  );
}