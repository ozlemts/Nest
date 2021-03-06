import Link from "next/link";

export function Menu(props) {
  return (
    <Link href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 fill-current text-blue-800 dark:text-blue-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </Link>
  );
}

export default Menu;
