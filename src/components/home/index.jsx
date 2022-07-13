import * as S from './style'
import { useState } from 'react'
import ListItem from '../ListItem'
import ItemP from '../Item'

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function index() {

    const [Item, setItem] = useState()
    const [addItem, setAddItem] = useState([])
    const [Item2, setItem2] = useState()
    const [addItem2, setAddItem2] = useState([])
    const [Item3, setItem3] = useState()
    const [addItem3, setAddItem3] = useState([])
    const [Item4, setItem4] = useState()
    const [addItem4, setAddItem4] = useState([])
    const handleItem=(e)=>{
        setItem(e.target.value)
    }

    const handleItem2=(e)=>{
        setItem2(e.target.value)
    }

    const handleItem3=(e)=>{
        setItem3(e.target.value)
    }

    const handleItem4=(e)=>{
        setItem4(e.target.value)
    }
    
    const handleAddItem=()=>{
        const addAllItem = [...addItem, Item]
        setAddItem(addAllItem)
        const addAllItem2 = [...addItem2, Item2]
        setAddItem2(addAllItem2)
        const addAllItem3 = [...addItem3, Item3]
        setAddItem3(addAllItem3)
        const addAllItem4 = [...addItem4, Item4]
        setAddItem4(addAllItem4)
    }

  return (
    <S.Container>
      <S.Title>Controle financeiro</S.Title>
      <S.Boxs>
        <S.Box>
            <S.BoxInfo>
                <S.BoxInfoText>Entrada</S.BoxInfoText>
                <ArrowCircleUpIcon style={{color: '#00ce33'}}/>
            </S.BoxInfo>
            <S.BoxValue>R$ 0</S.BoxValue>
        </S.Box>
        <S.Box>
            <S.BoxInfo>
                <S.BoxInfoText>Saída</S.BoxInfoText>
                <ArrowCircleDownIcon style={{color: '#ff0033'}}/>
            </S.BoxInfo>
            <S.BoxValue>R$ 0</S.BoxValue>
        </S.Box>
        <S.Box>
            <S.BoxInfo>
                <S.BoxInfoText>Total</S.BoxInfoText>
                <AttachMoneyIcon />
            </S.BoxInfo>
            <S.BoxValue>R$ 0</S.BoxValue>
        </S.Box>
      </S.Boxs>

      <S.EditArea>
        <S.EditInputItem>
            <S.EditLabel>Título</S.EditLabel>
            <S.EditInput onChange={handleItem} type='text' maxLength={10}/>
        </S.EditInputItem>
        <S.EditInputItem>
            <S.EditLabel>Categoria</S.EditLabel>
            <S.EditSelectOption onChange={handleItem2}>
                <option></option>
                <option style={{background: '#2dff53d8'}} value='Entrada'>Entrada</option>
                <option style={{background: '#ff2d53d7'}} value='Saída'>Saída</option>
            </S.EditSelectOption>
        </S.EditInputItem>
        <S.EditInputItem>
            <S.EditLabel>Data</S.EditLabel>
            <S.EditInput type='date'/>
        </S.EditInputItem>
        <S.EditInputItem>
            <S.EditLabel>Valor</S.EditLabel>
            <S.EditInput onChange={handleItem4} type='number'/>
        </S.EditInputItem>
        <Button variant="contained"
            size='small'
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
                </S.TableInfoArea1>
                <S.TableInfoArea2>
                    <S.TableInfoText2>Valor</S.TableInfoText2>
                </S.TableInfoArea2>
            </S.TableAreaHeader>
            
            <S.ContainerInfo>
                <S.ContainerInfoItem>
                    {/* {addItem.map((item, item4, key)=>(
                        console.log(item)
                        // <div  key={key}>{item}{item4}</div>
                        // <div  key={key}>{item4}<br/></div>
                    ))}
                    <br/> */}

                    {addAllItem.map((item, key)=>(
                        <>
                        <div  key={key}>{item}</div>
                        </>
                    ))}

                    {/* {addItem2.map((item2, key)=>(
                        <ItemP key={key} item2={item2}/>
                    ))} */}

                    {/* {addItem4.map((item4, key)=>(
                        <ListItem item4={item4} key={key} />
                    ))}  */}
                    
                    {/*
                    {addItem3.map((item3, key)=>(
                        <div key={key}><ListItem item3={item3}/></div>
                    ))}*/}
                    {/* {addItem4.map((item4, key)=>(
                        <div key={key}><ListItem item4={item4}/><br/></div>
                    ))}
                    {addItem4.map((item4, key)=>(
                        <div key={key}><ListItem item4={item4}/><br/></div>
                    ))} */}
                </S.ContainerInfoItem>
            </S.ContainerInfo>
            
        </S.TableArea>
    </S.Container>
  )
}

