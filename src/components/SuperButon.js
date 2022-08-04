import styled from 'styled-components';

export default function SuperButton({
    children,
    status = 0,
    ...otherProps
}) {
    return (
        <ButtonBack {...otherProps} >
            <h3>{children}</h3>
            <ButtonBorder status={status} />
        </ButtonBack>
    );
}

const ButtonBorder = styled.div`
    position: absolute;
    top: 6px;
    left: 6px;
    border-radius: 50%;
    width: 80px;
    height: 80px;

    background: #52B6FF;
    transform: rotate(45deg);
    border: 8px solid #52b6ff;
    cursor: pointer;
    ${(props) => {
        if (props.status === 100) {
            return `
                border-top-color: #ffffff;
                border-right-color: #ffffff;
                border-bottom-color: #ffffff;
                border-left-color: #ffffff;
        `;}
        if (props.status >= 75) {
            return `
                border-top-color: #ffffff;
                border-right-color: #ffffff;
                border-bottom-color: #ffffff;
        `;}
        if (props.status >= 50) {
            return `
                border-top-color: #ffffff;
                border-right-color: #ffffff;
        `;}
        if (props.status > 0) {
            return `
                border-top-color: #ffffff;
        `;}
    }}
`;

const ButtonBack = styled.div`
    position: relative;
    border-radius: 50%;
    width: 91px;
    height: 91px;
    
    background: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 50px;
    h3{
        z-index: 1;
        font-size: 16px;
        color: #FFFFFF;
    }
`;