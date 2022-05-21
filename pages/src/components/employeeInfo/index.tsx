import React from "react";
import { EmployeeData } from "../../../../store/reducers/types";
import Image from "next/image";

interface props {
  info: EmployeeData;
}

export const EmployeeInfo: React.FC<props> = ({ info }) => {
  const getGender = (gender: string) => {
    switch (gender) {
      case "M":
        return "Male";

      case "F":
        return "Female";
    }
  };
  return (
    <div>
      <div style={{ width: "100%", position: "relative" }}>
        <Image
          loader={() => info.photo}
          src={info.photo}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          alt="profile_picture"
        />
      </div>

      <div style={{marginTop:20,lineHeight:2}}>
        <span
          style={{ display: "block" }}
        >{`${info.first_name} ${info.last_name}`}</span>
        <span style={{ display: "block" }}>{info.email}</span>
        <span style={{ display: "block" }}>{info.number}</span>
        <span style={{ display: "block" }}>{getGender(info.gender)}</span>
      </div>
    </div>
  );
};

export default EmployeeInfo;
