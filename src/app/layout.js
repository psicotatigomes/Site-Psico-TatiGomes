import { inter } from "./fonts";
import Link from "next/link";
import { UIChakraProvider } from "./providers";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import "./globals.scss";

import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: "Tatiana Gomes - Psicóloga",
  description: "Atendimento psicológico online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UIChakraProvider>
        <body className={inter.className}>
          <nav>
            <Link href="/#hero">Início</Link>
            <Link href="/#about">Sobre mim</Link>
            <Link href="/academia-emocional">Academia emocional</Link>
            <Link href="/saude-mental-empresas">
              Saúde Mental para empresas
            </Link>
            <Link href="/psicoterapia">Psicoterapia</Link>
            <Link href="/#blog">Blog</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#contact">Contato</Link>
          </nav>
          {children}
        </body>
        <GoogleAnalytics gaId="AW-16549241119" />
      </UIChakraProvider>
    </html>
  );
}
