import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../stores/useAuthStore";
import { useNavigate } from "react-router";

const signUpSchema = z.object({
  firstname: z.string().min(1, "Tên bắt buộc phải có"),
  lastname: z.string().min(1, "Họ bắt buộc phải có"),
  username: z.string().min(3, "Tên đăng nhập phải có ít nhất 3 ký tự"),
  email: z.email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

type signUpFormValues = z.infer<typeof signUpSchema>;

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { signUp } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: signUpFormValues) => {
    const { firstname, lastname, username, email, password } = data;
    // gọi backend để signUp
    const success = await signUp(username, password, email, firstname, lastname);
    if (success) {
      navigate("/signin");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border-border">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-4 md:p-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
              {/* header - logo */}
              <div className="flex flex-col items-center text-center gap-1">
                <a href="/" className="mx-auto block w-fit text-center">
                  <img src="/logo_10.png" alt="logo" className="w-20 h-auto" />
                </a>

                <h1 className="text-xl font-bold">Tạo tài khoản ChatThau</h1>
                <p className="text-muted-foreground text-balance text-sm">
                  Chào mừng bạn! Hãy đăng ký để bắt đầu.
                </p>
              </div>

              {/* họ & tên */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="lastname" className="block text-sm">
                    Họ
                  </Label>
                  <Input type="text" id="lastname" {...register("lastname")} />
                  {/* todo: error message */}
                  {errors.lastname && (
                    <p className="text-destructive text-sm">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firstname" className="block text-sm">
                    Tên
                  </Label>
                  <Input
                    type="text"
                    id="firstname"
                    {...register("firstname")}
                  />
                  {/* todo: error message */}
                  {errors.firstname && (
                    <p className="text-destructive text-sm">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
              </div>

              {/* username */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="username" className="block text-sm">
                  Tên đăng nhập
                </Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="ChatThau"
                  {...register("username")}
                />
                {/* todo: error message */}
                {errors.username && (
                  <p className="text-destructive text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* email */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email" className="block text-sm">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="ChatThau@gmail.com"
                  {...register("email")}
                />
                {/* todo: error message */}
                {errors.email && (
                  <p className="text-destructive text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* password */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="password" className="block text-sm">
                  Mật khẩu
                </Label>
                <Input
                  type="password"
                  id="password"
                  {...register("password")}
                />
                {/* todo: error message */}
                {errors.password && (
                  <p className="text-destructive text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* nút đăng ký */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                Tạo tài khoản
              </Button>

              <div className="text-center text-sm">
                Đã có tài khoản ?{" "}
                <a href="/signin" className="underline underline-offset-4">
                  Đăng nhập
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/theme_image_1.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-sm text-balance px-6 text-center *:[a]:hover:text-primary text-muted-foreground *:[a]:underline *:[a]:underline-offset-4">
        Bằng cách nhấp vào tiếp tục, bạn đồng ý với chúng tôi{" "}
        <a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a>
        .
      </div>
    </div>
  );
}
