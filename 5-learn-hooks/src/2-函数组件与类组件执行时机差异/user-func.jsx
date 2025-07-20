import { useState } from "react";

export default function UserFunc() {
  const [userData, setUserData] = useState(null);
  let userId = 100;
  // 每次渲染都会执行
  fetch(`/api/users/${userId}`)
    .then((response) => response.json())
    .then((data) => setUserData(data));

  return <div>UserFunc-渲染用户数据</div>;
}
