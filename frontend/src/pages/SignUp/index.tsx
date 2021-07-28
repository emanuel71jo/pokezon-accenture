import { useFormik } from "formik";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useHistory } from "react-router-dom";
import ProfileImg from "../../assets/profile-img.png";
import { SignUpSchema } from "../../validations/validationSignUp";
import {
  Button,
  Container,
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

export function SignUp() {
  const history = useHistory();

  const [file, setFile] = useState<any>();

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
      history.push("/");
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
        <Button type="submit" disabled={isDisabled}>
          Iniciar jornada
        </Button>
        <SignIn to="/">Já tem uma conta? Entre agora!</SignIn>
      </Form>
    </Container>
  );
}
