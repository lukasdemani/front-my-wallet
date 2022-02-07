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

  console.log(total);
  return (
    <Container>
      <Header>
        Olá, {auth.name}
        <ion-icon name="exit-outline"></ion-icon>
      </Header>
      <Historic>
        {allTransactions.map((transaction) => (
          <Transaction>
            <Day>{transaction.time}</Day>
            <Description>{transaction.description}</Description>
            <Value color={transaction.type}>{transaction.value}</Value>
          </Transaction>
        ))}

        <Total>
          <span>SALDO</span>
          <div>{total}</div>
        </Total>
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