import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { LogIn, UserPlus } from 'lucide-react';
import StarField from '@/components/StarField';
import { toast } from '@/components/ui/use-toast';

const AuthPage = () => {
  const { user, signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Get the return URL from location state or default to home
  const returnUrl = location.state?.returnUrl || '/';

  // Redirect to intended page if already logged in
  useEffect(() => {
    if (user) {
      navigate(returnUrl, { replace: true });
    }
  }, [user, navigate, returnUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await signIn(email, password);
        toast({
          title: "로그인 성공",
          description: "성공적으로 로그인되었습니다.",
        });
      } else {
        await signUp(email, password);
        toast({
          title: "회원가입 성공",
          description: "성공적으로 회원가입되었습니다. 로그인해주세요.",
        });
        setIsLogin(true); // 회원가입 후 로그인 폼으로 전환
      }
    } catch (error: any) {
      toast({
        title: isLogin ? "로그인 실패" : "회원가입 실패",
        description: error.message || "An error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <StarField />
      <div className="container mx-auto px-4 py-8">
        <Card className="glass-card max-w-md mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">{isLogin ? '로그인' : '회원가입'}</h1>
              <p className="text-gray-400">
                {isLogin ? '기존 계정으로 로그인하세요' : '새 계정을 만드세요'}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">이메일</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>
              <Button disabled={loading} className="w-full bg-cosmic-primary hover:bg-cosmic-primary/90">
                {isLogin ? (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    로그인
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4 mr-2" />
                    회원가입
                  </>
                )}
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? '계정이 없으신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
