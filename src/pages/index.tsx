"use client";

import { useRouter } from "next/router";
import { FC } from "react";
import Image from "next/image";

import { Button, Typography } from "antd";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Home: FC = () => {
  const router = useRouter();

  const login = () => {
    router.push("/login");
  };

  const signup = () => {
    router.push("/signup");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#47BA9D",
      }}
    >
      <Image src="/images/logo1.png" alt="Logo" width={130} height={130} />
      <Title
        level={1}
        style={{ fontSize: "3em", color: "#455A64", marginBottom: "30px" }}
      >
        Move Mates
      </Title>
      <div style={{ margin: "20px" }}>
        <Button
          icon={<LoginOutlined style={{ fontSize: "1em" }} />}
          size="large"
          onClick={login}
          style={{
            marginRight: "20px",
            backgroundColor: "#ADE083",
            border: "none",
            color: "white",
            fontWeight: 600,
          }}
        >
          Login
        </Button>
        <Button
          icon={<UserAddOutlined style={{ fontSize: "1em" }} />}
          size="large"
          onClick={signup}
          style={{
            backgroundColor: "#39DBC6",
            border: "none",
            color: "white",
            fontWeight: 600,
          }}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Home;
