import Link from "next/link";
import { useSignOut, useUser } from "../hooks/user";

function NavBar() {
  const user = useUser();
  const signOut = useSignOut();

  console.log("[NavBar] user:", user);
  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Welcome to Next Shop, Ning</Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>{user.name}</li>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
