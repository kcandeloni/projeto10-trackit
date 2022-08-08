import { ContainerBox } from './common';
import styled from 'styled-components';
import { checkHabit } from './trackitService';

export default function TodayBox({
    id=false,
    done,
    name,
    currentSequence='',
    highestSequence='',
    setAtualizar='',
    atualizar='',
    }) {
    function RenderDetail({children}){
        if(currentSequence === highestSequence && highestSequence !== 0){
            return(
                <ColorCheck>
                    {children}
                </ColorCheck>
            );
        }
        return(
            <>
                {children}
            </>
        );
    }

    function postCheck ( id, status ) {
        if(!!id){
            const promise = checkHabit(id, status);
            promise
                .then(() => setAtualizar(!atualizar))
                .catch(resposta => console.log(resposta))
        }
    }

    return(
        <Box>
            <div>
                {name}
                {currentSequence !== '' ?<Detail>
                    <div>Sequência atual: <RenderDetail>{currentSequence} dias</RenderDetail></div>
                    Seu recorde: <RenderDetail>{highestSequence} dias</RenderDetail>
                </Detail>: ''}
            </div>
            { done ?
                <Check color='#8FC549' onClick={() => postCheck(id, 'uncheck')} >
                    <ion-icon name="checkmark"></ion-icon>
                </Check>:
                <Check color='#EBEBEB' onClick={() => postCheck(id, 'check')} >
                    <ion-icon name="checkmark"></ion-icon>
                </Check>}
        </Box>);
}

const Check = styled.div`
    width: 69px;
    height: 69px;
    color: #FFFFFF;
    background-color: ${(props) => props.color};
    border-radius: 5px;
    font-size: 50px;
    font-weight: 900;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ion-icon{
        --ionicon-stroke-width: 64px;
    }
`;

const Detail = styled.div`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    margin-top: 8px;
`;

const ColorCheck = styled.span`
    color: #8FC549;
`;

const Box = styled (ContainerBox)`
    font-size: 20px;
    color: #666666;
    display: flex;
    justify-content: space-between;
`;