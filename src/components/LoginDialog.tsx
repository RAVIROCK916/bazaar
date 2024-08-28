import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import { useState } from "react";

const LoginDialog = ({
  isLoggedIn,
  children,
}: {
  isLoggedIn: boolean;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={!isLoggedIn && open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Please login to continue</DialogTitle>
        <DialogDescription asChild>
          <LoginForm />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
export default LoginDialog;
