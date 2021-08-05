import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LoginSchema } from "../../validations/validationLogin";
import { Button, Container, Error, Form, Input, SignUp, Title } from "./styles";
import backgroundlogin from "../../assets/backgroundlogin.png";
import { useToasts } from "react-toast-notifications";
import { useState } from "react";
import ReactLoading from "react-loading";
import { mixins } from "../../styles/mixins";

export function Login() {
  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToasts();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await signIn(values);

        history.push("/home");
        addToast("Login realizado com sucesso", {
          appearance: "success",
          autoDismiss: true,
        });
      } catch (error) {
        addToast("Ops!! Email ou senha inválidos", {
          appearance: "error",
          autoDismiss: true,
        });
      } finally {
        formik.setValues({
          email: "",
          password: "",
        });
        setLoading(false);
      }
    },
    validationSchema: LoginSchema,
  });

  const isDisabled =
    formik.values.email === "" ||
    formik.values.password === "" ||
    !formik.isValid;

  return (
    <Container>
      <img src={backgroundlogin} alt="imagem Pokémon" />
      <Form onSubmit={formik.handleSubmit}>
        <Title>Faça o login</Title>
        <Input
          name="email"
          placeholder="E-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <Error>{formik.errors.email}</Error>
        )}
        <Input
          name="password"
          placeholder="Senha"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <Error>{formik.errors.password}</Error>
        )}
        <Button type="submit" disabled={loading || isDisabled}>
          {loading ? (
            <ReactLoading type={"cylon"} color={mixins.colors.secondary} />
          ) : (
            "Iniciar jornada"
          )}
        </Button>
        <SignUp to="/sign-up">Não tem uma conta? Cadastre-se agora!</SignUp>
      </Form>
    </Container>
  );
}
