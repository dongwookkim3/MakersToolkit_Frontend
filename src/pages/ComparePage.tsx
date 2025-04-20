
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCompare } from '@/contexts/CompareContext';
import { ArrowLeft, Scale, X, Check } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ComparePage: React.FC = () => {
  const { items, removeItem, clearItems } = useCompare();

  // 모든 제품의 특징을 합쳐서 유니크한 특징 목록 생성
  const allFeatures = React.useMemo(() => {
    const featuresSet = new Set<string>();
    items.forEach(item => {
      item.features.forEach(feature => {
        featuresSet.add(feature);
      });
    });
    return Array.from(featuresSet);
  }, [items]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>제품 비교</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center gap-3 mb-8">
          <Scale className="w-8 h-8" />
          <h1 className="text-3xl font-bold">제품 비교</h1>
        </div>
        
        {items.length === 0 ? (
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
            <div className="mb-6">
              <Scale className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-xl font-medium mb-2">비교할 제품이 없습니다</h2>
              <p className="text-gray-400 mb-6">제품 페이지에서 비교하고 싶은 제품을 추가해주세요.</p>
            </div>
            <Button asChild className="bg-cosmic-primary hover:bg-cosmic-primary/90">
              <Link to="/products">제품 페이지로 이동</Link>
            </Button>
          </div>
        ) : (
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 overflow-x-auto">
            <div className="flex justify-between mb-4">
              <Button asChild variant="outline">
                <Link to="/products">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  제품 목록으로 돌아가기
                </Link>
              </Button>
              <Button variant="outline" onClick={clearItems}>모든 제품 제거</Button>
            </div>
            
            <div className="min-w-[600px]">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[200px]">비교 항목</TableHead>
                    {items.map(item => (
                      <TableHead key={item.id} className="text-center">
                        <div className="flex flex-col items-center">
                          <div className="mb-2 font-bold">{item.name}</div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6 rounded-full hover:bg-red-500/10 hover:text-red-400"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">카테고리</TableCell>
                    {items.map(item => (
                      <TableCell key={item.id} className="text-center">{item.category}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">난이도</TableCell>
                    {items.map(item => (
                      <TableCell key={item.id} className="text-center">
                        <span className="px-2 py-1 rounded-full bg-white/10 text-sm">
                          {item.level}
                        </span>
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">가격</TableCell>
                    {items.map(item => (
                      <TableCell key={item.id} className="text-center font-bold text-cosmic-primary">
                        {item.price}
                      </TableCell>
                    ))}
                  </TableRow>
                  
                  <TableRow className="hover:bg-transparent">
                    <TableCell colSpan={items.length + 1} className="p-1">
                      <div className="h-px bg-white/10 w-full"></div>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-transparent">
                    <TableCell colSpan={items.length + 1} className="font-bold text-lg">
                      포함 구성품
                    </TableCell>
                  </TableRow>
                  
                  {allFeatures.map((feature, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{feature}</TableCell>
                      {items.map(item => (
                        <TableCell key={item.id} className="text-center">
                          {item.features.includes(feature) ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map(item => (
                <div key={item.id} className="flex">
                  <Button asChild className="flex-1">
                    <Link to={`/products/${item.id}`}>
                      {item.name} 상세 보기
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ComparePage;
