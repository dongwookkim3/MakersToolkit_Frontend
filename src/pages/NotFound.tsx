
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cosmic-light">
      <div className="max-w-md w-full p-8 glass-card">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-4xl font-bold">
              404
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-cosmic-dark">페이지를 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/" className="flex items-center justify-center gap-2">
              <Home size={18} />
              <span>홈으로 돌아가기</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
