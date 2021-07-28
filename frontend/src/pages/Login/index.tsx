import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { LoginSchema } from '../../validations/validationLogin'
import { Button, Container, Error, Form, Input, SignUp, Title } from './styles'

export function Login() {
  const history = useHistory()
  const { signIn } = useAuth()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      history.push('/home')
      await signIn(values)
    },
    validationSchema: LoginSchema,
  })

  const isDisabled =
    formik.values.email === '' ||
    formik.values.password === '' ||
    !formik.isValid

  return (
    <Container>
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
        <Button type="submit" disabled={isDisabled}>
          Iniciar jornada
        </Button>
        <SignUp to="/sign-up">Não tem uma conta? Cadastre-se agora!</SignUp>
      </Form>
    </Container>
  )
}
