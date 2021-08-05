import { useFormik } from "formik";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useHistory } from "react-router-dom";
import ProfileImg from "../../assets/profile-img.png";
import { SignUpSchema } from "../../validations/validationSignUp";
import backgroundsignup from "../../assets/backgroundsignup.jpg";
import ReactLoading from "react-loading";
import {
  Button,
  Container,
  Img,
  ContainerInput,
  Error,
  Form,
  InfoInputText,
  Input,
  ProfileImage,
  SignIn,
  Title,
  WrapperFields,
  WrapperImg,
} from "./styles";
import { app } from "../../services/api";
import { useToasts } from "react-toast-notifications";
import { mixins } from "../../styles/mixins";

export function SignUp() {
  const history = useHistory();
  const { addToast } = useToasts();

  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".png,.jpg,.jpeg",
    multiple: false,
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const formData = new FormData();

      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("avatar", file);

      try {
        await app.post("/users", formData);

        addToast("Cadastro realizado com sucesso", {
          appearance: "success",
          autoDismiss: true,
        });
        history.push("/login");
      } catch (error) {
        addToast(
          "Ops!! Aconteceu um erro ao realizar seu cadastro. Tente novamente!!",
          {
            appearance: "error",
            autoDismiss: true,
          }
        );
      } finally {
        setLoading(false);
        formik.setValues({
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
        });

        setFile(null);
      }
    },
    validationSchema: SignUpSchema,
  });

  const isDisabled =
    formik.values.email === "" ||
    formik.values.password === "" ||
    formik.values.firstName === "" ||
    formik.values.lastName === "" ||
    formik.values.confirmPassword === "" ||
    !formik.isValid;

  const getPreviewImg = () => {
    const objectUrl = URL.createObjectURL(file);

    return objectUrl;
  };

  return (
    <Container>
      <Img>
        <img src={backgroundsignup} alt="imagem-Pokémon" />
      </Img>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Faça seu cadastro</Title>
        <WrapperImg {...getRootProps()}>
          <input {...getInputProps()} />
          {file ? (
            <ProfileImage src={getPreviewImg()} alt={file.name} />
          ) : (
            <ProfileImage src={ProfileImg} alt="Imagem de Perfil" />
          )}
          <InfoInputText>Clique para adicionar uma foto</InfoInputText>
        </WrapperImg>
        <WrapperFields>
          <ContainerInput>
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
          </ContainerInput>
          <ContainerInput>
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
          </ContainerInput>
        </WrapperFields>
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
          placeholder="Confirme sua senha"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <Error>{formik.errors.confirmPassword}</Error>
        )}
        <Button type="submit" disabled={loading || isDisabled}>
          {loading ? (
            <ReactLoading type={"cylon"} color={mixins.colors.secondary} />
          ) : (
            "Iniciar jornada"
          )}
        </Button>
        <SignIn to="/login">Já tem uma conta? Entre agora!</SignIn>
      </Form>
    </Container>
  );
}
