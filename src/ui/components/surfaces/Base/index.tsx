import Link from "@components/navigation/Link";
import UserHeaderMenu from "@components/navigation/UserHearderMenu";
import { ProfessorInterface } from "@data/@types/professor";
import { ProfessorContext } from "@data/contexts/ProfessorContext";
import { ApiService } from "@data/services/ApiService";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Icon,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Router } from "@routes/routes";
import { NextRouter, useRouter } from "next/router";
import { PropsWithChildren, useContext, useState } from "react";
import { BoxDrawer, ButtonStyle } from "./styles";

function LinkLogo({ professor }: { professor?: ProfessorInterface }) {
  return (
    <Link href={professor?.id ? "/professor" : "/"}>
      <img src="/logo.png" alt="hiper prof" />
    </Link>
  );
}

export default function Base({ children }: PropsWithChildren) {
  const {
      breakpoints,
      palette: { common },
    } = useTheme(),
    isSmDevice = useMediaQuery(breakpoints.up("sm")),
    [isOpenDrawer, setIsOpenDrawer] = useState(false),
    router = useRouter(),
    { ProfessorState: professor, ProfessorDispatch } =
      useContext(ProfessorContext);

  async function handleLogout() {
    await ApiService.post(
      "/api/auth/logout",
      { refresh_token: localStorage.getItem("refresh_token_hiperprof") },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_hiperprof")}`,
        },
      }
    ).then(() => {
      localStorage.removeItem("token_hiperprof");
      localStorage.removeItem("refresh_token_hiperprof");
      ProfessorDispatch(undefined);
      Router.home.push(router);
    });
  }

  return (
    <Box
      sx={{
        bgcolor: common.black,
        height: "100%",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <AppBar position="static">
        <Toolbar component={Container}>
          {isSmDevice ? (
            <HeaderDesktop
              router={router}
              professor={professor}
              onLogout={handleLogout}
            />
          ) : (
            <>
              <IconButton
                color={"inherit"}
                sx={{ mr: 2 }}
                onClick={() => setIsOpenDrawer(true)}
              >
                <Icon>menu</Icon>
              </IconButton>
              <Drawer
                open={isOpenDrawer}
                onClick={() => setIsOpenDrawer(false)}
                onClose={() => setIsOpenDrawer(false)}
              >
                <HeaderMobile professor={professor} onLogout={handleLogout} />
              </Drawer>
              <LinkLogo />
            </>
          )}
        </Toolbar>
      </AppBar>
      <Container component={"main"}>{children}</Container>
    </Box>
  );
}

interface HeaderDesktopProps {
  router: NextRouter;
  professor?: ProfessorInterface;
  onLogout?: () => void;
}

function HeaderDesktop({ router, professor, onLogout }: HeaderDesktopProps) {
  const [openMenu, setOpenMenu] = useState(false);

  function onSejaProfessor() {
    Router.cadastroProfessor.push(router);
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        
      }}
    >
      <LinkLogo professor={professor} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {professor?.id ? (
          <>
            <Link href="/professor" color={"inherit"} sx={{ mx: 2 }}>
              Lista De Alunos
            </Link>

            <UserHeaderMenu
              isMenuOpen={openMenu}
              onMenuClick={() => setOpenMenu(false)}
              onMenuClose={() => setOpenMenu(false)}
              onClick={() => setOpenMenu(true)}
              handleLogout={onLogout}
            />
          </>
        ) : (
          <>
            <Link href="/" color={"inherit"}>
              HOME
            </Link>
            <Link href="/login" color={"inherit"} sx={{ ml: 5, mr: 5 }}>
              LOGIN
            </Link>
            <ButtonStyle variant="outlined" onClick={onSejaProfessor}>
              SEJA UM PROFESSOR
            </ButtonStyle>
          </>
        )}
      </Box>
    </Box>
  );
}

interface HeaderMobilePorps {
  professor?: ProfessorInterface;
  onLogout?: () => void;
}

function HeaderMobile({ professor, onLogout }: HeaderMobilePorps) {
  return (
    <BoxDrawer>
      <div className="linkImage">
        <LinkLogo professor={professor} />
      </div>

      {professor?.id ? (
        <MenuListDrawerLinks>
          <Link href="/professores">Lista De Alunos</Link>

          <Link href="/professor/cadastro-professor" sx={{ my: 3 }}>
            Cadastro Professor
          </Link>
          <Link href="/login" onClick={onLogout}>
            Logout
          </Link>
        </MenuListDrawerLinks>
      ) : (
        <MenuListDrawerLinks>
          <Link href="/">HOME</Link>
          <Link href="/login" sx={{ my: 3 }}>
            LOGIN
          </Link>
          <Link href="/professor/cadastro-professor">SEJA UM PROFESSOR</Link>
        </MenuListDrawerLinks>
      )}
    </BoxDrawer>
  );
}

function MenuListDrawerLinks({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 3,
        mr: 5,
      }}
    >
      {children}
    </Box>
  );
}
