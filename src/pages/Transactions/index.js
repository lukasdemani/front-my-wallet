import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
import { Container, Header, Button, Historic, Transaction, Day, Description, Value, Total } from "../../components/TransactionsComponents";
import Footer from "../../components/TransactionsComponents/Footer";

export default function Transactions() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [allTransactions, setAllTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  const promise = api.getTransactions(auth.token);

  useEffect(() => {
    promise.then((response) => {
      setTotal(response.data.totalAmount);
      setAllTransactions(response.data.transactions);
    });
    promise.catch((error) => {
      console.log(error);
    });

  }, []);

  function handleLogout() {
    navigate('/');
  }

  function insertDecimal(num){
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  return (
    <Container>
      <Header>
        Olá, {auth.name}
        <ion-icon name="exit-outline" onClick={() => handleLogout()}></ion-icon>
      </Header>
      <Historic>
        {allTransactions.length !== 0 ? 
          allTransactions.map((transaction) => (
            <Transaction>
              <Day>{transaction.time}</Day>
              <Description>{transaction.description}</Description>
              <Value color={transaction.type}>{insertDecimal(transaction.value)}</Value>
            </Transaction>
          ))
        :
            <p>Não há registros de<br />
            entrada ou saída</p>
          }
        {allTransactions.length !== 0 &&
          <Total>
            <span>SALDO</span>
            <div>{insertDecimal(total)}</div>
          </Total>  
        }     
      </Historic>

      <Footer>
        <Button onClick={() => navigate('/transactions/in')}>
          <div><ion-icon name="add-circle-outline"></ion-icon></div>
          <div>
            Nova<br/>
            Entrada
            </div>
        </Button>
        <Button onClick={() => navigate('/transactions/out')}>
          <div><ion-icon name="remove-circle-outline"></ion-icon></div>
          <div>
            Nova<br/>
            Saída
            </div>
        </Button>
      </Footer>
    </Container>
  );
}