import PageHead from "@/components/commons";
import { ReactNode } from "react";

interface PropTypes {
  title?: string; // Opsional
  children: ReactNode;
}

const AuthLayout = (props: PropTypes) => {
  const { title, children } = props;
  return (
    <>
      <PageHead title={title}></PageHead>
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </>
  );
};

export default AuthLayout;
