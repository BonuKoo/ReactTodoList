import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect가 끝날 때 실행되는 클린업, 혹은 정리함수.
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수입니다</div>;
};

export default Even;
