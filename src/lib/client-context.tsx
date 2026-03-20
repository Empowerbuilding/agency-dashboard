"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Client } from "@/types";
import { clients } from "@/lib/mock-data";

type ClientContextType = {
  selectedClient: Client | null;
  setSelectedClient: (client: Client | null) => void;
  allClients: Client[];
};

const ClientContext = createContext<ClientContextType>({
  selectedClient: null,
  setSelectedClient: () => {},
  allClients: clients,
});

export function ClientProvider({ children }: { children: ReactNode }) {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  return (
    <ClientContext.Provider
      value={{ selectedClient, setSelectedClient, allClients: clients }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  return useContext(ClientContext);
}
