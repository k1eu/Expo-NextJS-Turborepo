import Link from "next/link";
import { Link as NBLink, HStack, Center } from "native-base";

export const Navbar = () => {
  return (
    <>
      <nav>
        <HStack bg="primary.300" p="3">
          <Link href="/">
            <NBLink p="3">Home</NBLink>
          </Link>
          <Link href="/todos">
            <NBLink p="3">Todos</NBLink>
          </Link>
        </HStack>
      </nav>
    </>
  );
};

export default Navbar;
