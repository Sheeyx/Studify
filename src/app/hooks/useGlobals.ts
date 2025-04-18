import { createContext, useContext } from "react";
import { Member } from "../../libs/types/member";


interface GlobalInterface {
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(
  undefined
);

export const useGlobals = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) throw new Error("useGlobals withit Provide");
  return context;
};
