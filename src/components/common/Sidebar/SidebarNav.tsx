import { Stack } from "@chakra-ui/react";
import { FaHome, FaGamepad, FaCrown } from 'react-icons/fa';
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <Stack spacing="4" mt="4" align="stretch">
      <NavLink icon={FaHome} href="/home">
        Home
      </NavLink>
      <NavLink icon={FaGamepad} href="/games">
        Jogos
      </NavLink>
      <NavLink icon={FaCrown} href="/rank">
        Rank
      </NavLink>
    </Stack>
  )
}