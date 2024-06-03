"use client";

import { PropsWithChildren } from "react";
import {
  QueryClient,
  QueryClientProvider as RaactQueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

export default function QueryClientProvider({ children }: PropsWithChildren) {
  return (
    <RaactQueryClientProvider client={queryClient}>
      {children}
    </RaactQueryClientProvider>
  );
}
