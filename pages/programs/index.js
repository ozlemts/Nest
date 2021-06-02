import Layout from "@/components/Layout";
import Link from "next/link";

function ProgramsPage() {
  return (
    <Layout>
      <h1>All Projects</h1>
      <Link href="/programs/canada">Canada</Link>
      <Link href="/programs/ivme">İvme</Link>
    </Layout>
  );
}

export default ProgramsPage;
