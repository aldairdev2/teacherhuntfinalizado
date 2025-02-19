import PageTitle from "@components/data-display/PageTitle";
import useLogin from "@data/hooks/pages/useLogin";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Snackbar,
  TextField,
} from "@mui/material";
import { BoxButtons, ButtonRecAccount } from "@styles/pages/login.styes";
/*import { Navigate, NavigationType, useNavigate } from "react-router-dom";*/
/*import { Router, useNavigate } from "react-router-dom";*/
import { useRouter } from "next/router";


export default function LoginPage() {
  const router = useRouter();

  /*const navigate = useNavigate();*/
  

  const {
    messageErro,
    setValuesLogin,
    handleLogin,
    loading,
    snackMessage,
    setSnackMessage,
  } = useLogin();
  return (
    <Box
      sx={{
        maxWidth: "md",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <PageTitle
        title={"consultar minhas aulas"}
        subtitle={"Faça login para poder consultar as aulas"}
      />
      <Card
        component={"form"}
        onSubmit={handleLogin}
        sx={{
          py: 2,
          px: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label={"Email"}
          error={messageErro?.email != undefined}
          helperText={messageErro?.email}
          sx={{ my: 2 }}
          type={"email"}
          onChange={({ target: { value } }) => {
            setValuesLogin((prevState) => {
              return { ...prevState, email: value };
            });
          }}
          fullWidth
        />
        <TextField
          label={"Senha"}
          error={messageErro?.password != undefined}
          helperText={messageErro?.password}
          type={"password"}
          onChange={({ target: { value } }) => {
            setValuesLogin((prevState) => {
              return { ...prevState, password: value };
            });
          }}
          fullWidth
        />
        <BoxButtons>
          <Button
            sx={{ my: 2 }}
            type={"submit"}
            variant={"contained"}
            fullWidth
          >
            {!loading ? "Acessar" : <CircularProgress color="primary" />}
          </Button>
          <ButtonRecAccount 
          size={"small"} 
          fullWidth 
          onClick={() => router.push("/cadastro_aluno")}>
            Não possui conta? Cadastre-se agora
          </ButtonRecAccount>
        </BoxButtons>
      </Card>
      <Snackbar
        open={snackMessage.length > 0}
        message={snackMessage}
        autoHideDuration={4000}
        onClose={() => setSnackMessage("")}
      />
    </Box>
  );
}
