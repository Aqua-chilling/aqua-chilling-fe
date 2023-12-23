/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/store";
import { selectToken, selectAddress, deleteAccount } from "@/redux";
import { setAccessToken } from "@/utilities";
import { ConnectionStatus, useWalletContext } from "@/contexts/wallet.context";

export const CredentialProvider = ({ children }: { children: any }) => {
  const isFirstTimeRender = useRef(true);
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const addressSigned = useSelector(selectAddress);
  const { handleOpenAuthenticateModal, address, status } =
    useWalletContext() || {};

  useEffect(() => {
    setAccessToken(token);
    if (
      !token &&
      status === ConnectionStatus.CONNECTED &&
      addressSigned?.toLowerCase() === address?.toLowerCase()
    ) {
      handleOpenAuthenticateModal();
    }
    console.log(address);
    console.log(addressSigned);
  }, [token]);

  useEffect(() => {
    if (
      status === ConnectionStatus.CONNECTED &&
      addressSigned?.toLowerCase() !== address?.toLowerCase()
    ) {
      dispatch(deleteAccount());
      handleOpenAuthenticateModal();
    }
    isFirstTimeRender.current = false;
  }, [address]);

  return children;
};
