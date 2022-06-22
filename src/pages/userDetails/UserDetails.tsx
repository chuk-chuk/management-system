import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { UserContext, UserContextType } from "../../context/UserContext";

export function UserDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { usersList, setUsersList } = useContext(
    UserContext
  ) as UserContextType;

  const handleDeleteUser = (userId: string) => {
    const list = usersList.filter((user) => user.id !== userId);
    setUsersList(list);
    navigate("/users");
  };

  const userInfo = usersList.find((user) => user.id === userId);

  return (
    <div className="m-24">
      {userId && (
        <>
          <Button title="Back" onClick={() => navigate("/")} className="mb-8" />
          <div className="mb-6">
            <p>{userInfo?.firstName}</p>
            <p>About me: {userInfo?.bio}</p>
            {userInfo?.groups && userInfo?.groups?.length > 0 ? (
              <div>
                {userInfo?.groups.map((group) => (
                  <p>{group}</p>
                ))}
              </div>
            ) : (
              <p>No groups yet</p>
            )}
          </div>
          <Button
            title="Delete this user"
            className="bg-red-400 text-white"
            onClick={() => handleDeleteUser(userId)}
          />
        </>
      )}
    </div>
  );
}
