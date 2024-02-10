import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ShoppingCart from "../ShoppingCart";

const ProtectedRoute = ({ path, element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
{
  /* <ProtectedRoute path="/shoppingCart" element={<ShoppingCart />} /> */
}
