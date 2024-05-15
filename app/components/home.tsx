"use client";

require("../polyfill");

import { useState, useEffect, useMemo, useContext } from "react";

import styles from "./home.module.scss";

import MlcIcon from "../icons/mlc.svg";
import LoadingIcon from "../icons/three-dots.svg";

import { useMobileScreen } from "../utils";

import dynamic from "next/dynamic";
import { Path, SlotID } from "../constant";
import { ErrorBoundary } from "./error";

import { getISOLang, getLang } from "../locales";

import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { SideBar } from "./sidebar";
import { useAppConfig } from "../store/config";
import { getClientConfig } from "../config/client";
import { WebLLMApi, WebLLMContext } from "../client/webllm";
import Locale from "../locales";

export function Loading(props: { noLogo?: boolean }) {
  return (
    <div className={styles["loading-content"] + " no-dark"}>
      {!props.noLogo && (
        <div className={styles["loading-content-logo"] + " no-dark mlc-icon"}>
          <MlcIcon />
        </div>
      )}
      <LoadingIcon />
    </div>
  );
}

export function ErrorScreen(props: { message: string }) {
  return (
    <div className={styles["error-screen"] + " no-dark"}>
      <p>{props.message}</p>
    </div>
  );
}

const Settings = dynamic(async () => (await import("./settings")).Settings, {
  loading: () => <Loading noLogo />,
});

const Chat = dynamic(async () => (await import("./chat")).Chat, {
  loading: () => <Loading noLogo />,
});

const MaskPage = dynamic(async () => (await import("./mask")).MaskPage, {
  loading: () => <Loading noLogo />,
});

const Plugins = dynamic(async () => (await import("./plugin")).PluginPage, {
  loading: () => <Loading noLogo />,
});

function useHtmlLang() {
  useEffect(() => {
    const lang = getISOLang();
    const htmlLang = document.documentElement.lang;

    if (lang !== htmlLang) {
      document.documentElement.lang = lang;
    }
  }, []);
}

const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
};

const useServiceWorkerReady = () => {
  const [serviceWorkerReady, setServiceWorkerReady] = useState<boolean>(false);

  useEffect(() => {
    navigator.serviceWorker.ready.then(() => {
      setServiceWorkerReady(true);
    });
  }, []);

  return serviceWorkerReady;
};

const loadAsyncGoogleFont = () => {
  const linkEl = document.createElement("link");
  const proxyFontUrl = "/google-fonts";
  const remoteFontUrl = "https://fonts.googleapis.com";
  const googleFontUrl =
    getClientConfig()?.buildMode === "export" ? remoteFontUrl : proxyFontUrl;
  linkEl.rel = "stylesheet";
  linkEl.href =
    googleFontUrl +
    "/css2?family=" +
    encodeURIComponent("Noto Sans:wght@300;400;700;900") +
    "&display=swap";
  document.head.appendChild(linkEl);
};

function Screen() {
  const config = useAppConfig();
  const location = useLocation();
  const isHome = location.pathname === Path.Home;
  const isMobileScreen = useMobileScreen();
  const shouldTightBorder = config.tightBorder && !isMobileScreen;

  useEffect(() => {
    loadAsyncGoogleFont();
  }, []);

  // SwitchThemeColor
  // Adapting Safari's theme-color and changing it according to the path
  useEffect(() => {
    document.body.classList.remove("light");
    document.body.classList.remove("dark");

    if (config.theme === "dark") {
      document.body.classList.add("dark");
    } else if (config.theme === "light") {
      document.body.classList.add("light");
    }

    const metaDescriptionDark = document.querySelector(
      'meta[name="theme-color"][media*="dark"]',
    );
    const metaDescriptionLight = document.querySelector(
      'meta[name="theme-color"][media*="light"]',
    );

    if (shouldTightBorder || isMobileScreen) {
      if (isHome) {
        metaDescriptionDark?.setAttribute("content", "#1b262a");
        metaDescriptionLight?.setAttribute("content", "#e7f8ff");
      } else {
        metaDescriptionDark?.setAttribute("content", "#1e1e1e");
        metaDescriptionLight?.setAttribute("content", "white");
      }
    } else {
      metaDescriptionDark?.setAttribute("content", "#151515");
      metaDescriptionLight?.setAttribute("content", "#fafafa");
    }
  }, [config.theme, isHome, shouldTightBorder, isMobileScreen]);

  return (
    <div
      className={
        styles.container +
        ` ${shouldTightBorder ? styles["tight-container"] : styles.container} ${
          getLang() === "ar" ? styles["rtl-screen"] : ""
        }`
      }
    >
      <>
        <SideBar className={isHome ? styles["sidebar-show"] : ""} />

          <div className={styles["window-content"]} id={SlotID.AppBody}>
            <Routes>
              <Route path={Path.Home} element={<Chat />} />
              <Route path={Path.NewChat} element={<NewChat />} />
              <Route path={Path.Masks} element={<MaskPage />} />
              <Route path={Path.Plugins} element={<Plugins />} />
              <Route path={Path.Chat} element={<Chat />} />
              <Route path={Path.Settings} element={<Settings />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export function useLoadData(webllm: WebLLMApi) {
  const config = useAppConfig();

  useEffect(() => {
    (async () => {
      if (webllm) {
        const models = await webllm.models();
        config.mergeModels(models);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webllm]);
}

export function Home() {
  const hasHydrated = useHasHydrated();
  const isServiceWorkerReady = useServiceWorkerReady();
  const [isEngineCrash, setEngineCrash] = useState(false);

  const webllm = useMemo(() => {
    return new WebLLMApi(() => {
      setEngineCrash(true);
    });
  }, []);

  useLoadData(webllm);
  useSwitchTheme();
  useHtmlLang();

  if (!hasHydrated || !isServiceWorkerReady) {
    return <Loading />;
  }

  if (isEngineCrash) {
    return <ErrorScreen message={Locale.ServiceWorker.Error} />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <WebLLMContext.Provider value={webllm}>
          <Screen />
        </WebLLMContext.Provider>
      </Router>
    </ErrorBoundary>
  );
}
