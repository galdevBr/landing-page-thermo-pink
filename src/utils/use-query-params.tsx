import { useEffect, useState } from "react";

export function useQueryParams() {
  const [params, setParams] = useState<URLSearchParams>();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setParams(searchParams);
  }, []);

  return params;
}