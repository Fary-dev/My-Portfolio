import React, { useState } from "react";
import styled from "styled-components";
import Laptop from "../../Assets/website.webp";
import Mobile from "../../Assets/mobile.webp";

interface PropsStyle {
  device?: string;
  direction?: string;
  hover?: boolean;
}
interface Props {
  id: number;
  device: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  t: any;
}

function ProjectWidget({
  id,
  device,
  title,
  subtitle,
  description,
  image,
  url,
  t,
}: Props) {
  const [cover, setCover] = useState(false);
  const [photo, setPhoto] = useState("");
  setTimeout(() => {
    setPhoto(image);
  }, 1000);
  return (
    <ContainerPlus
      direction={id % 2 === 0 ? "true" : "false"}
      onMouseEnter={() => {
        setCover(true);
      }}
      onMouseLeave={() => {
        setCover(false);
      }}
    >
      <Column>
        <LaptopImage
          device={device}
          alt={`${device} screen`}
          src={device === "website" ? Laptop : Mobile}
        ></LaptopImage>
        <Cover device={device} hover={cover}>
          {photo !== "" ? (
            <Image
              alt={title}
              device={device}
              src={require(`../../Assets/${image}.webp`)}
            ></Image>
          ) : (
            <Center>
              <h6>loading..</h6>
            </Center>
          )}
          <span></span>
        </Cover>
      </Column>
      <ColumnPlus device={device}>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button>{t("visit")}</Button>
        </a>
      </ColumnPlus>
    </ContainerPlus>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  padding: 0 20px;
  max-width: 1400px;
  transition: 0.4s;
  gap: 20px;
  @media (min-width: 750px) {
    flex-direction: row;
  }
`;
const ContainerPlus = styled(Container)<PropsStyle>`
  @media (min-width: 750px) {
    flex-direction: ${({ direction }) =>
      direction === "true" ? "row-reverse" : "row"};
  }
`;
const Column = styled.div<PropsStyle>`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  align-self: center;
  color: ${({ theme }) => theme.text.color};
  text-align: start;
  max-width: 600px;
  h4 {
    text-transform: capitalize;
    color: ${({ theme }) => theme.text.color};
    border-radius: 10px;
    transition: 0.3s;
    width: 100%;
    font-weight: 500;
    font-size: clamp(1.3, 3.5vw, 1.6rem);
    text-align: center;
  }
  h5 {
    text-transform: capitalize;
    color: ${({ theme }) => theme.text.p};
    padding-bottom: 20px;
    font-weight: 700;
    width: 100%;
    font-size: clamp(1.1rem, 1.5vw, 1.4rem);
    text-align: center;
  }
  p {
    text-align: justify;
    color: ${({ theme }) => theme.text.p};
    padding-left: ${({ device }) =>
      device === "website" ? "30px" : device === "mobile" ? "0px" : "0"};

    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    text-align: center;
  }
  @media (min-width: 750px) {
    h5,
    h4 {
      text-align: ${({ device }) =>
        device === "website"
          ? "start"
          : device === "mobile"
          ? "end"
          : "center"};
    }
    p {
      text-align: justify;
    }
  }
`;
const ColumnPlus = styled(Column)<PropsStyle>``;
const LaptopImage = styled.img<PropsStyle>`
  object-fit: contain;
  transition: 0.3s;
  max-height: 200px;
  max-width: 200px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: ${({ device }) => (device === "mobile" ? 1 : 0)};
  @media (min-width: 750px) {
    max-height: 400px;
    max-width: 100%;
  }
`;
const Cover = styled.div<PropsStyle>`
  max-height: 400px;
  max-width: 400px;
  position: absolute;
  margin: 0 auto;
  top: ${({ device }) =>
    device === "website" ? "10px" : device === "mobile" ? "0px" : "0"};
  height: ${({ device }) =>
    device === "website"
      ? "calc(100% / 1.55)"
      : device === "mobile"
      ? "100%"
      : "0"};
  width: ${({ device }) =>
    device === "website" ? "150px" : device === "mobile" ? "90px" : "0"};
  transition: all 0.3s;

  @media (min-width: 750px) {
    top: ${({ device }) =>
      device === "website" ? "10px" : device === "mobile" ? "0px" : "0"};
    height: ${({ device }) =>
      device === "website" ? "65%" : device === "mobile" ? "100%" : "0"};
    width: ${({ device }) =>
      device === "website" ? "75%" : device === "mobile" ? "182px" : "0"};
  }

  span {
    position: absolute;
    border-radius: ${({ device }) =>
      device === "website"
        ? "0%"
        : device === "mobile"
        ? "clamp(10px,2.5vw,20px)"
        : "3px"};
    top: 0;
    left: 0;

    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    transition: 0.7s height;

    height: ${({ hover }) => (hover === true ? "0%" : "100%")};
  }
`;
const Image = styled.img<PropsStyle>`
  height: 100%;
  width: 100%;
`;
const Button = styled.button<PropsStyle>`
  font-weight: 500;
  width: 100px;
  margin: 15px 0;
  padding: 5px 0;
  color: ${({ theme }) => theme.button.borderColor};
  background-color: ${({ theme }) => theme.body.containerLight};
  border: 2px solid ${({ theme }) => theme.button.borderColor};
  opacity: 1;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.button.borderColor};
    border-color: transparent;
  }
`;
const Center = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #000;
  border-radius: 20px;
`;
export default ProjectWidget;
