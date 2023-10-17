import "./App.css";
import { Button, Dropdown } from "antd";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import CanvasComponent from "./Components/Canvas";
import DrawingTool from "./Components/DrawingTool";

function App() {
  const [lang, setLang] = useState("English");
  const { t, i18n } = useTranslation();

  const items = [
    {
      label: "English",
      key: "english",
    },
    {
      label: "French",
      key: "french",
    },
    {
      label: "German",
      key: "german",
    },
    {
      label: "Hindi",
      key: "hindi",
    },
  ];

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.key);
    let upper = e.key.charAt(0).toUpperCase() + e.key.slice(1);
    setLang(upper);
  };

  return (
    <div className="App">
      <Dropdown
        menu={{
          items,
          onClick: handleChangeLanguage,
        }}
        trigger={["click"]}
      >
        <Button
          style={{
            width: "20%",
          }}
        >
          {lang}
        </Button>
      </Dropdown>
      <div
        style={{
          marginTop: "6rem",
        }}
      >
        <h2>{t("Welcome to FlixStock")}</h2>

        <Trans i18nKey="We offer a suite of products that help you enhance your customer's image experience at every touchpoint of their buying journey">
          We offer a suite of products that help you enhance your customer's
          image experience at every touchpoint of their buying journey.{" "}
        </Trans>
      </div>
      <CanvasComponent />
      <DrawingTool />
    </div>
  );
}

export default App;
