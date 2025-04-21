
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ isOpen, onClose, onLogin }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>로그인이 필요합니다</DialogTitle>
          <DialogDescription>
            제품 구매를 위해서는 로그인이 필요합니다.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>로그인 페이지로 이동하시겠습니까?</p>
        </div>
        <DialogFooter className="sm:justify-end">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            type="button"
            onClick={onLogin}
            className="bg-cosmic-primary hover:bg-cosmic-primary/90"
          >
            <LogIn className="h-4 w-4 mr-2" />
            로그인 페이지로 이동
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
