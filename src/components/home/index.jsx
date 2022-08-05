import * as S from './style'
import { useState, useEffect } from 'react'

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Index() {

    const [chkDisabled, setChkDisabled] = useState(true)
    const [checkInputTitle, setCheckInputTitle] = useState(true)
    const [checkInputTip, setCheckInputTip] = useState(true)
    const [checkInputDate, setCheckInputDate] = useState(true)
    const [checkInputValor, setCheckInputValor] = useState(true)
    const [bgTotal, setBgTotal] = useState(true)
    const [entrada, setEntrada] = useState(0)
    const [saida, setSaida] = useState(0)
    const [total, setTotal] = useState(0)
    const [symbol, setSymbol] = useState(false)
    const [Item, setItem] = useState()
    const [addItem, setAddItem] = useState([])
    const [Item2, setItem2] = useState()
    const [addItem2, setAddItem2] = useState([])
    const [Item3, setItem3] = useState()
    const [addItem3, setAddItem3] = useState([])
    const [Item4, setItem4] = useState()
    const [addItem4, setAddItem4] = useState([])

    const handletotal=()=>{
        let array = [...addItem4, Item4]
        var soma = 0;
        for (var x=0; x < array.length; x++) {
            soma += parseInt(array[x]);
        }
        setTotal(parseInt(soma))
    }

    const handleItem=(e)=>{
        setItem(e.target.value)
        handleBlurTitle()
    }

    const handleItem2=(e)=>{
        setItem2(e.target.value)
        handleBlurtip()
        if(e.target.value === 'Saída'){
            setSymbol(true)
        }else{
            setSymbol(false)
        }
    }

    const handleItem3=(e)=>{
        setItem3(e.target.value)
        handleBlurDate()
    }

    const handleItem4=(e)=>{
        if(symbol === true){
            setItem4(-(e.target.value))
        }
        if(symbol === false){
            setItem4((e.target.value).toLocaleString('pt-BR'))
        }
        handleBlurValor()
    }

    const chkTotal=()=>{
        if(total >= 0){
            setBgTotal(true)
        }else{
            setBgTotal(false)
        }
    }

    useEffect(()=>{
        chkTotal()
    })
    
    const handleAddItem=()=>{
        const addAllItem = [...addItem, Item]
        setAddItem(addAllItem)
        const addAllItem2 = [...addItem2, Item2]
        setAddItem2(addAllItem2)
        const addAllItem3 = [...addItem3, Item3]
        setAddItem3(addAllItem3)
        const addAllItem4 = [...addItem4, Item4]
        setAddItem4(addAllItem4)
        handletotal()
        handleAllNumPlus()
        handleAllNumMinus()
    }

    const handleAllNumPlus=()=>{
        const Numbs = [...addItem4, Item4];
        const result = Numbs.filter(checkAdult);

        function checkAdult(num) {
            return num >= 0;
        }
        var soma = 0;
        for (var x=0; x < result.length; x++) {
            soma += parseInt(result[x]);
        }
        setEntrada(soma)
    }

    const handleAllNumMinus=()=>{
        const Numb = [...addItem4, Item4];
        const results = Numb.filter(checkAdults);

        function checkAdults(nums) {
            return nums <= -1;
        }
        
        var sub = 0;
        for (var x=0; x < results.length; x++) {
            sub -= parseInt(results[x]);
        }
        setSaida(sub)
    }

    const handleBlurTitle=()=>{
        if(document.getElementById("inpT").value === ''){
            setCheckInputTitle(false)
        }else{
            setCheckInputTitle(true)
        }
    }
    const handleBlurtip=()=>{
        if(document.getElementById("inpTi").value === ''){
            setCheckInputTip(false)
        }else{
            setCheckInputTip(true)
        }
    }
    const handleBlurDate=()=>{
        if(document.getElementById("inpD").value === ''){
            setCheckInputDate(false)
        }else{
            setCheckInputDate(true)
        }
    }
    const handleBlurValor=()=>{
        if(document.getElementById("inpV").value === ''){
            setCheckInputValor(false)
        }else{
            setCheckInputValor(true)
        }
    }

    const handleChangeDisabled=()=>{
        if(document.getElementById("inpT").value === '' ||
        document.getElementById("inpTi").value === '' ||
        document.getElementById("inpD").value === '' ||
        document.getElementById("inpV").value === ''){
            (setChkDisabled(true))
        }else{
            setChkDisabled(false)
        }
    }

    useEffect(()=>{
        handleChangeDisabled()
    })

  return (
    <S.Container>
      <S.Title>Controle financeiro</S.Title>
      <S.Boxs>
        <S.Box>
            <S.BoxInfo>
                <S.BoxInfoText>Entrada</S.BoxInfoText>
                <ArrowCircleUpIcon style={{color: '#00ce33'}}/>
            </S.BoxInfo>
            <S.BoxValue>{`R$ ${(entrada).toLocaleString('pt-BR')}`}</S.BoxValue>
        </S.Box>
        <S.Box>
            <S.BoxInfo>
                <S.BoxInfoText>Saída</S.BoxInfoText>
                <ArrowCircleDownIcon style={{color: '#ff0033'}}/>
            </S.BoxInfo>
            <S.BoxValue >{`R$ ${-(saida).toLocaleString('pt-BR')}`}</S.BoxValue>
        </S.Box>
        <S.Box style={{background: bgTotal ? '#31ff64' : '#ff2e58'}}>
            <S.BoxInfo>
                <S.BoxInfoText>Total</S.BoxInfoText>
                <AttachMoneyIcon />
            </S.BoxInfo>
            <S.BoxValue  style={{color: '#eeeeee'}}>{`R$ ${(total).toLocaleString('pt-BR')}`}</S.BoxValue>
        </S.Box>
      </S.Boxs>

      <S.EditArea>
        <S.EditInputItem>
            <S.EditLabel>Título</S.EditLabel>
            <S.EditInput id='inpT'
            style={{border: checkInputTitle ? 'solid 2px #11111150' : '#ff2e58 solid 2px',
            color: checkInputTitle ? '' : '#ff2e58',
            boxShadow: checkInputTitle ? '0 0 0' : '#ff2e5850 0 0 5px'}}
            onBlur={handleBlurTitle}
            onChange={handleItem}
            type='text' maxLength={15}/>
        </S.EditInputItem>
        <S.EditInputItem>
            <S.EditLabel>Categoria</S.EditLabel>
            <S.EditSelectOption id='inpTi'
            style={{border: checkInputTip ? 'solid 2px #11111150' : '#ff2e58 solid 2px',
            boxShadow: checkInputTip ? '0 0 0' : '#ff2e5850 0 0 5px'}}
            onBlur={handleBlurtip} onChange={handleItem2}>
                <option></option>
                <option style={{background: '#31ff64'}} value='Entrada'>Entrada</option>
                <option style={{background: '#ff2e58'}} value='Saída'>Saída</option>
            </S.EditSelectOption>
        </S.EditInputItem>
        <S.EditInputItem>
            <S.EditLabel>Data</S.EditLabel>
            <S.EditInput id='inpD' onBlur={handleBlurDate} onChange={handleItem3}
            style={{border: checkInputDate ? 'solid 2px #11111150' : '#ff2e58 solid 2px',
            color: checkInputDate ? '' : '#ff2e58',
            boxShadow: checkInputDate ? '0 0 0' : '#ff2e5850 0 0 5px'}}
            type='date'/>
        </S.EditInputItem>
        <S.EditInputItem>
            <S.EditLabel>Valor</S.EditLabel>
            <S.EditInput id='inpV' onBlur={handleBlurValor} onChange={handleItem4}
            style={{border: checkInputValor ? 'solid 2px #11111150' : '#ff2e58 solid 2px',
            color: checkInputValor ? '' : '#ff2e58',
            boxShadow: checkInputValor ? '0 0 0' : '#ff2e5850 0 0 5px'}}
            type='number'/>
        </S.EditInputItem>
        <Button variant="contained"
            size='small'
            disabled={chkDisabled}
            onClick={handleAddItem}
            style={{height: '37.3px', background: '#764AF1',
            fontWeight: '600', textTransform: 'none',
            padding: '0 2em', fontSize: '16px'}}>
            Adicionar
        </Button>
      </S.EditArea>

        <S.TableArea>
            <S.TableAreaHeader>
                <S.TableInfoArea1>
                    <S.TableInfoText>Titulo</S.TableInfoText>
                    <S.TableInfoText>Categoria</S.TableInfoText>
                    <S.TableInfoText>Data</S.TableInfoText>
                    <S.TableInfoText>Valor</S.TableInfoText>
                </S.TableInfoArea1>
            </S.TableAreaHeader>
            
            <S.ContainerInfo>
                    <S.ContainerInfoItem>
                        {addItem.map((item, key)=>(
                            <Tooltip key={key} title={item} sx={{padding: '10em'}}arrow>
                                <div style={{width: '250px', textAlign: 'center', overflow: 'hidden',
                                textOverflow: 'ellipsis', marginBottom: '1.5em'}}>{item}</div>
                            </Tooltip>
                        ))}
                    </S.ContainerInfoItem>
                    <S.ContainerInfoItem>
                        {addItem2.map((item, key)=>(
                            <div style={{width: '250px', textAlign: 'center',
                            marginBottom: '1.5em'}}  key={key}>{item}</div>
                        ))}
                    </S.ContainerInfoItem>
                    <S.ContainerInfoItem>
                        {addItem3.map((item, key)=>(
                            <div style={{width: '250px', textAlign: 'center', marginBottom: '1.5em'}}
                            key={key}>{item}</div>
                        ))}
                    </S.ContainerInfoItem>
                    <S.ContainerInfoItem>
                        {addItem4.map((item, key)=>(
                            <div style={{width: '250px', textAlign: 'center',color: item >= 0 ?
                            '#31ff64' : '#ff2e58', marginBottom: '1.5em', fonSize: '20px',
                            fontWeight: '700'}}  key={key}>{(item)}</div>
                        ))}
                    </S.ContainerInfoItem>
            </S.ContainerInfo>
        </S.TableArea>
    </S.Container>
  )
}