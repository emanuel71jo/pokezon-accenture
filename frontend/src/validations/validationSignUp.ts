import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("Por favor, insira o seu nome"),
  lastName: Yup.string().required("Por favor, insira o seu sobrenome"),
  email: Yup.string().email("Email Inválido").required(""),
  password: Yup.string()
    .min(8, "A senha deve conter pelo menos 8 caracteres.")
    .required("Por favor, insira uma senha."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "As senhas não conferem"
  ),
});
