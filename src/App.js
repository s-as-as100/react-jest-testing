import "./App.css";
import { Button, Dropdown } from "antd";
import { useTranslation, Trans } from "react-i18next";

function App() {
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
  ];

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.key);
  };

  return (
    <div className="App">
      <Dropdown
        menu={{
          items,
          onClick: handleChangeLanguage,
        }}
        trigger={["click"]}
        oncl
      >
        <Button
          style={{
            width: "20%",
          }}
        >
          Language
        </Button>
      </Dropdown>
      <div
        style={{
          marginTop: "4rem",
        }}
      >
        <h2>{t("Welcome to React")}</h2>

        <Trans i18nKey="We offer a suite of products that help you enhance your customer's image experience at every touchpoint of their buying journey">
          We offer a suite of products that help you enhance your customer's
          image experience at every touchpoint of their buying journey.{" "}
        </Trans>
      </div>
    </div>
  );
}

export default App;
