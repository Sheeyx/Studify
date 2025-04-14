// context/ContextProvider.tsx
import React, { ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { GlobalContext } from "../hooks/useGlobals";
import { Member } from "../../libs/types/member";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cookies = new Cookies();
  if (!cookies.get("accessToken")) localStorage.removeItem("memberData");

  const [authMember, setAuthMember] = useState<Member | null>(
    localStorage.getItem("memberData")
      ? JSON.parse(localStorage.getItem("memberData") as string)
      : null
  );

  // 👇 Add modal state
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <GlobalContext.Provider
      value={{
        authMember,
        setAuthMember,
        openModal,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
