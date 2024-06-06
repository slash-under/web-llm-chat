import { useEffect, useRef, useMemo, useState } from "react";

import styles from "./home.module.scss";

import { IconButton } from "./button";
import SettingsIcon from "../icons/settings.svg";
import GithubIcon from "../icons/github.svg";
import MlcIcon from "../icons/mlc.svg";
import AddIcon from "../icons/add.svg";
import DeleteIcon from "../icons/delete.svg";
import TemplateIcon from "../icons/chat.svg";
import PluginIcon from "../icons/plugin.svg";
import SearchIcon from "../icons/search.svg";
import DragIcon from "../icons/drag.svg";
import LightIcon from "../icons/light.svg";
import DarkIcon from "../icons/dark.svg";
import AutoIcon from "../icons/auto.svg";

import Locale from "../locales";

import { Theme, useAppConfig, useChatStore } from "../store";

import {
  DEFAULT_SIDEBAR_WIDTH,
  MAX_SIDEBAR_WIDTH,
  MIN_SIDEBAR_WIDTH,
  NARROW_SIDEBAR_WIDTH,
  Path,
  REPO_URL,
} from "../constant";

import { Link, useNavigate } from "react-router-dom";
import { isIOS, useMobileScreen } from "../utils";
import dynamic from "next/dynamic";
import { showConfirm, showToast } from "./ui-lib";
import { SearchBar, SearchInputRef } from "./search-bar";

const ChatList = dynamic(async () => (await import("./chat-list")).ChatList, {
  loading: () => null,
});

function useHotKey() {
  const chatStore = useChatStore();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey) {
        if (e.key === "ArrowUp") {
          chatStore.nextSession(-1);
        } else if (e.key === "ArrowDown") {
          chatStore.nextSession(1);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
}

function useDragSideBar() {
  const limit = (x: number) => Math.min(MAX_SIDEBAR_WIDTH, x);

  const config = useAppConfig();
  const startX = useRef(0);
  const startDragWidth = useRef(config.sidebarWidth ?? DEFAULT_SIDEBAR_WIDTH);
  const lastUpdateTime = useRef(Date.now());

  const toggleSideBar = () => {
    config.update((config) => {
      if (config.sidebarWidth < MIN_SIDEBAR_WIDTH) {
        config.sidebarWidth = DEFAULT_SIDEBAR_WIDTH;
      } else {
        config.sidebarWidth = NARROW_SIDEBAR_WIDTH;
      }
    });
  };
  const expandSidebar = () => {
    config.update((config) => (config.sidebarWidth = MAX_SIDEBAR_WIDTH));
  };

  const onDragStart = (e: MouseEvent) => {
    // Remembers the initial width each time the mouse is pressed
    startX.current = e.clientX;
    startDragWidth.current = config.sidebarWidth;
    const dragStartTime = Date.now();

    const handleDragMove = (e: MouseEvent) => {
      if (Date.now() < lastUpdateTime.current + 20) {
        return;
      }
      lastUpdateTime.current = Date.now();
      const d = e.clientX - startX.current;
      const nextWidth = limit(startDragWidth.current + d);
      config.update((config) => {
        if (nextWidth < MIN_SIDEBAR_WIDTH) {
          config.sidebarWidth = NARROW_SIDEBAR_WIDTH;
        } else {
          config.sidebarWidth = nextWidth;
        }
      });
    };

    const handleDragEnd = () => {
      // In useRef the data is non-responsive, so `config.sidebarWidth` can't get the dynamic sidebarWidth
      window.removeEventListener("pointermove", handleDragMove);
      window.removeEventListener("pointerup", handleDragEnd);

      // if user click the drag icon, should toggle the sidebar
      const shouldFireClick = Date.now() - dragStartTime < 300;
      if (shouldFireClick) {
        toggleSideBar();
      }
    };

    window.addEventListener("pointermove", handleDragMove);
    window.addEventListener("pointerup", handleDragEnd);
  };

  const isMobileScreen = useMobileScreen();
  const shouldNarrow =
    !isMobileScreen && config.sidebarWidth < MIN_SIDEBAR_WIDTH;

  useEffect(() => {
    const barWidth = shouldNarrow
      ? NARROW_SIDEBAR_WIDTH
      : limit(config.sidebarWidth ?? DEFAULT_SIDEBAR_WIDTH);
    const sideBarWidth = isMobileScreen ? "100vw" : `${barWidth}px`;
    document.documentElement.style.setProperty("--sidebar-width", sideBarWidth);
  }, [config.sidebarWidth, isMobileScreen, shouldNarrow]);

  return {
    onDragStart,
    shouldNarrow,
    expandSidebar,
  };
}

export function SideBar(props: { className?: string }) {
  const chatStore = useChatStore();

  // drag side bar
  const { expandSidebar, onDragStart, shouldNarrow } = useDragSideBar();
  const navigate = useNavigate();
  const config = useAppConfig();
  const isMobileScreen = useMobileScreen();
  const isIOSMobile = useMemo(
    () => isIOS() && isMobileScreen,
    [isMobileScreen],
  );
  useHotKey();

  // search bar
  const searchBarRef = useRef<SearchInputRef>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (shouldNarrow) stopSearch();
  }, [shouldNarrow]);

  const stopSearch = () => {
    setIsSearching(false);
    searchBarRef.current?.clearInput();
  };

  const { theme } = config;
  function nextTheme() {
    const themes = [Theme.Auto, Theme.Light, Theme.Dark];
    const themeIndex = themes.indexOf(theme);
    const nextIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    config.update((config) => (config.theme = nextTheme));
  }

  return (
    <div
      className={`${styles.sidebar} ${props.className} ${
        shouldNarrow && styles["narrow-sidebar"]
      }`}
      style={{
        // #3016 disable transition on ios mobile screen
        transition: isMobileScreen && isIOSMobile ? "none" : undefined,
      }}
    >
      <div className={styles["sidebar-header"]}>
        <div className={styles["sidebar-title"]}>WebLLM Chat</div>
        <div className={styles["sidebar-sub-title"]}>
          Chat with AI natively in your browser.
        </div>
        <div className={styles["sidebar-logo"] + " no-dark mlc-icon"}>
          <MlcIcon />
        </div>
      </div>

      <div className={styles["sidebar-header-bar"]}>
        <IconButton
          icon={<TemplateIcon />}
          text={shouldNarrow ? undefined : Locale.Template.Name}
          className={styles["sidebar-bar-button"]}
          onClick={() => {
            navigate(Path.Templates, { state: { fromHome: true } });
          }}
          shadow
        />
        <IconButton
          icon={<SettingsIcon />}
          text={shouldNarrow ? undefined : Locale.Settings.Title}
          className={styles["sidebar-bar-button"]}
          // onClick={() => navigate(Path.Plugins, { state: { fromHome: true } })}
          onClick={() => {
            navigate(Path.Settings);
          }}
          shadow
        />
        {shouldNarrow && (
          <IconButton
            icon={<SearchIcon />}
            className={styles["sidebar-bar-button"]}
            onClick={() => {
              expandSidebar();
              // use setTimeout to avoid the input element not ready
              setTimeout(() => {
                searchBarRef.current?.inputElement?.focus();
              }, 0);
            }}
            shadow
          />
        )}
      </div>

      <div
        className={
          styles["sidebar-search-bar"] +
          " " +
          (isSearching ? styles["sidebar-search-bar-isSearching"] : "")
        }
      >
        {!shouldNarrow && (
          <SearchBar ref={searchBarRef} setIsSearching={setIsSearching} />
        )}
      </div>

      {!isSearching && (
        <div
          className={styles["sidebar-body"]}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              navigate(Path.Home);
            }
          }}
        >
          <ChatList narrow={shouldNarrow} />
        </div>
      )}

      <div className={styles["sidebar-tail"]}>
        <div className={styles["sidebar-actions"]}>
          <div className={styles["sidebar-action"] + " " + styles.mobile}>
            <IconButton
              icon={<DeleteIcon />}
              onClick={async () => {
                if (await showConfirm(Locale.Home.DeleteChat)) {
                  chatStore.deleteSession(chatStore.currentSessionIndex);
                }
              }}
            />
          </div>
          <div className={styles["sidebar-action"]}>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              <IconButton icon={<GithubIcon />} shadow />
            </a>
          </div>
          <div className={styles["sidebar-action"]}>
            <IconButton
              icon={
                <>
                  {theme === Theme.Auto ? (
                    <AutoIcon />
                  ) : theme === Theme.Light ? (
                    <LightIcon />
                  ) : theme === Theme.Dark ? (
                    <DarkIcon />
                  ) : null}
                </>
              }
              onClick={nextTheme}
              shadow
            />
          </div>
        </div>
        <div>
          <IconButton
            icon={<AddIcon />}
            text={shouldNarrow ? undefined : Locale.Home.NewChat}
            onClick={() => {
              chatStore.newSession();
              navigate(Path.Chat);
            }}
            shadow
          />
        </div>
      </div>

      <div
        className={styles["sidebar-drag"]}
        onPointerDown={(e) => onDragStart(e as any)}
      >
        <DragIcon />
      </div>
    </div>
  );
}
