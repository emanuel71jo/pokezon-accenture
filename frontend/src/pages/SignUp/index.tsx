import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LoginSchema } from "../../validations/validationLogin";
import { Button, Container, Error, Form, Input, SignIn, Title } from "./styles";

export function SignUp() {
  const history = useHistory();
  const { signIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: async (values) => {
      history.push("/home");
      await signIn(values);
    },
    validationSchema: LoginSchema,
  });

  const isDisabled =
    formik.values.email === "" ||
    formik.values.password === "" ||
    !formik.isValid;

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Cadastrar</Title>
        <Input
          name="firstName"
          placeholder="Nome"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <Error>{formik.errors.firstName}</Error>
        )}
        <Input
          name="lastName"
          placeholder="Sobrenome"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <Error>{formik.errors.lastName}</Error>
        )}
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
        <Input
          name="confirmPassword"
          placeholder="Senha"
          type="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <Error>{formik.errors.confirmPassword}</Error>
        )}
        <Button type="submit" disabled={isDisabled}>
          Fazer login
        </Button>
        <SignIn to="/">Já possuo cadastro</SignIn>
      </Form>
    </Container>
  );
}
