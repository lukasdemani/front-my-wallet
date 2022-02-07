import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Container, Form, Input, Button } from "../../components/FormComponents";

export default function Out() {
  const [formData, setFormData] = useState({ value: '', description: '' })
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (auth && auth.token) {
  //     navigate("/transactions");
  //   }
  // }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const promise = api.registerTransaction({ ...formData, type: "out" });

    promise.then((response) => {
      navigate("/transactions");
    });
    promise.catch(() => {

      alert('Erro, tente novamente');
    });
  }

  return (
    <Container>

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