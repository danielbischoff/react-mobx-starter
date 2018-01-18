import * as React from 'react';
import { observer } from 'mobx-react';
import * as styles from './Home.scss';

interface HomeProps {
    counter: number;
    increment: () => void;
    decrement: () => void;
}

@observer
export class Home extends React.Component<HomeProps, {}> {
    render() {
        const {
            counter,
            increment,
            decrement,
        } = this.props;

        return (
            <div className={styles.container}>
                <button onClick={decrement}>-</button>
                <span className={styles.number}>{counter}</span>
                <button onClick={increment}>+</button>
            </div>
        )
    }
}