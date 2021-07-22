import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email Inválido").required(""),
  password: Yup.string()
    .min(8, "A senha deve conter pelo menos 8 caracteres.")
    .required("Por favor, insira uma senha."),
});
