import { useEffect, useState } from "react";

export const useOrigin = () => {
  // 컴포넌트의 마운트 상태를 추적
  const [mounted, setMounted] = useState(false);
  
  // 현재 window의 origin을 확인
  const origin = 
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin 
      : "";    
      
  // 컴포넌트가 마운트되면 mounted 상태를 true로 설정
  useEffect(() => {
    setMounted(false)
  }, []);
  
  // 컴포넌트가 마운트되기 전에는 빈 문자열 반환
  if(!mounted) {
    return "";
  }
  
  // 마운트 된 후에는 실제 origin 반환
  return origin;
};
