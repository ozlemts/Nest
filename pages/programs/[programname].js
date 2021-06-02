import { useRouter } from "next/router";

function ProgramPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The Project Page of Nest</h1>
    </div>
  );
}

export default ProgramPage;
