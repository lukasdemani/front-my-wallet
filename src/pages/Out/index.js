import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Container, Form, Input, Button, Header } from "../../components/FormComponents";

export default function Out() {
    const { auth } = useAuth();
    const [formData, setFormData] = useState({ value: '', description: '', type: 'out', email: auth.emailResponse })
    const navigate = useNavigate();
  
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const promise = api.registerTransaction({ ...formData });
    console.log(formData);

    promise.then((response) => {
      navigate("/transactions");
    });
    promise.catch(() => {

      alert('Erro, tente novamente');
    });
  }

  return (
    <Container>
        <Header>Nova saída</Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Valor"
          name="value"
          onChange={handleChange}
          value={formData.value}
          required
        />
        <Input
          type="text"
          placeholder="Descrição"
          name="description"
          onChange={handleChange}
          value={formData.description}
          required
        />

        <Button type="submit">
          Salvar saída
        </Button>
      </Form>
      
    </Container>
  );
}