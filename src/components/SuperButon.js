import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SuperButton({
    children,
    progresso,
    ...otherProps
}) {
    return (
        <ButtonBack {...otherProps} >
            <CircularProgressbar
                value={progresso}
                text={children}
                styles={buildStyles({
                strokeLinecap: 'round',
                pathTransitionDuration: 0.5,
                textSize: '16px',
                textColor: '#ffffff',
                pathColor: `#ffffff`,
                trailColor: '#52B6FF',
                backgroundColor: '#52B6FF',
                })}
              />
        </ButtonBack>
    );
}

const ButtonBack = styled.div`
    border-radius: 50%;
    width: 91px;
    height: 91px;
    padding: 6px;
    
    background: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 50px;
`;