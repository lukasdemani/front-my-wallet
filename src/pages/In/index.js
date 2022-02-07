import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Container, Form, Input, Button, Header } from "../../components/FormComponents";

export default function In() {
    const { auth } = useAuth();
  const [formData, setFormData] = useState({ value: '', description: '', type: 'in', email: auth.emailResponse })
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    const promise = api.registerTransaction({ ...formData });

    promise.then((response) => {
      navigate("/transactions");
    });
    promise.catch(() => {

      alert('Erro, tente novamente');
    });
  }

  return (
    <Container>
        <Header>Nova entrada</Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Valor"
          name="value"
          onChange={handleChange}
          value={parseInt(formData.value)}
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
          Salvar entrada
        </Button>
      </Form>

    </Container>
  );
}