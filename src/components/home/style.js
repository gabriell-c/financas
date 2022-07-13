import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 180px;
    top: 0;
    background: #764AF1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 40px;
    margin-top: .4em;
    letter-spacing: 1px;
    color: #F2F2F2;
    text-align: center;
`

export const Boxs = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 25px;
`

export const Box = styled.div`
    width: 300px;
    height: 120px;
    border-radius: 5px;
    background: #F2F2F2;
    box-shadow: 1px 1px 4px #00000040;
    margin: 0 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1em .5em .5em .5em;
`

export const BoxInfo = styled.div`
    margin: 0 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BoxValue = styled.p`
    font-size: 35px;
    color: #111;
    text-align: center;
    font-weight: 700;
`

export const BoxInfoText = styled.p`
    font-size: 20px;
    color: #111;
    font-weight: 400;
`

export const EditArea = styled.div`
    width: 90%;
    display: flex;
    margin: 0 auto;
    border-radius: 5px;
    background: #F2F2F2;
    box-shadow: 1px 1px 4px #00000040;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 1em;
`
export const EditInputItem = styled.div`
    display: flex;
    flex-direction: column;
`

export const EditLabel = styled.label`
    font-size: 20px;
    color: #111;
    font-weight: 400;
`

export const EditInput = styled.input`
    border: solid 2px #11111150;
    border-radius: 5px;
    outline: none;
    background: transparent;
    box-shadow: inset 0px 0px 4px #11111130;
    padding: .5em .8em;

    &:focus{
        border: solid 2px #222;
    }
`

export const EditSelectOption = styled.select`
    border: solid 2px #11111150;
    border-radius: 5px;
    outline: none;
    background: transparent;
    box-shadow: inset 0px 0px 4px #11111130;
    padding: .5em .8em;

    &:focus{
        border: solid 2px #222;
    }
`

export const TableArea = styled.div`
    width: 90%;
    display: flex;
    margin: 20px auto;
    border-radius: 5px;
    background: #F2F2F2;
    box-shadow: 1px 1px 4px #00000040;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
`

export const TableAreaHeader = styled.div`
    width: 100%;
    display: flex;
    margin: 20px auto;
    border-radius: 5px;
    background: #F2F2F2;
    box-shadow: 1px 1px 4px #00000040;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
`;

export const TableInfoArea1 = styled.div`
    display: flex;
    justify-content: flex-start;

`
export const TableInfoText = styled.div`
    padding: 0 10em 0 1em;
`

export const TableInfoText2 = styled.div`
    padding: 0 1em;
`

export const TableInfoArea2 = styled.div`
`
export const ContainerInfo = styled.div`
    display: flex;
    width: 100%; 
    background: gold;
`
export const ContainerInfoItem = styled.div`
    background: red;
`