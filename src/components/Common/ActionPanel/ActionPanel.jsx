import './ActionPanel.scss';
import { useDispatch} from 'react-redux';

export function ActionPanel({id, decrement, increment}) {

  const dispatch = useDispatch();

  const dec = () => {
    dispatch(decrement(id));
  };

  const inc = () => {
    dispatch(increment(id));
  };

  return (
    <div className="action-panel">
      <div 
        className="action-panel__button action-panel__button_delete" 
        onClick={dec}>
      </div>
      <div 
        className="action-panel__button action-panel__button_append" 
        onClick={inc}>
      </div>
    </div>
  );
}