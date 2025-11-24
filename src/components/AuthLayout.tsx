import type { AuthLayoutProps } from "../interfaces";

const AuthLayout = ({ title, subTitle, children }: AuthLayoutProps) => {
  return (
    <section className="bg-gradient vh-100 d-flex justify-content-center align-items-center">
      <div className="w-fit bg-white border-gray-lighter py-5 px-4 rounded-4 d-flex flex-column align-items-center">
        <img src="/assets/images/FullLogo.png" alt="Logo" className="mb-4" />
        <h2 className="fs-4">{title}</h2>
        <p className="text-gray-dark mb-5">{subTitle}</p>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
