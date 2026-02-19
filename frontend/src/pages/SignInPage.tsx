import { SigninForm } from "../components/auth/signin-form";

const SignUpPage = () => {
  return (
    <div className="bg-muted flex min-h-screen w-full flex-col items-center justify-center p-4 md:p-6 bg-gradient-purple overflow-auto">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SigninForm />
      </div>
    </div>
  );
};

export default SignUpPage;
