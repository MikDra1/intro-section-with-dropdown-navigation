import { useState } from "react";
import styles from "./Navigation.module.css";
import { useIntro } from "../contexts/IntroProvider";
import ToggleItem from "./ToggleItem";

function Navigation() {
  const { isMobile } = useIntro();
  const [imageUrl, setImageUrl] = useState("./images/icon-menu.svg");
  const isOpen = imageUrl === "./images/icon-close-menu.svg";
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  function handleOpenNav() {
    setImageUrl((url) =>
      url === "./images/icon-menu.svg"
        ? "./images/icon-close-menu.svg"
        : "./images/icon-menu.svg"
    );
  }

  return (
    <>
      {isMobile ? (
        <header className={`${styles.headerMobile}`}>
          {isOpen && <div className={styles.overlay}></div>}
          <img src="./images/logo.svg" alt="" />
          <img
            src={imageUrl}
            alt=""
            onClick={handleOpenNav}
            className={styles.openNavImg}
          />
          <div
            className={`${isOpen ? styles.mobileUlOpen : ""} ${
              styles.headerMobileUl
            }`}
          >
            <section className={styles.headerMobileUlContainer}>
              <ToggleItem
                title="Features"
                isFeaturesOpen={isFeaturesOpen}
                setIsFeaturesOpen={setIsFeaturesOpen}
              >
                <div className={styles.toggleItemItem}>
                  <img src="./images/icon-todo.svg" alt="" />
                  <p>Todo List</p>
                </div>
                <div className={styles.toggleItemItem}>
                  <img src="./images/icon-calendar.svg" alt="" />
                  <p>Calendar</p>
                </div>
                <div className={styles.toggleItemItem}>
                  <img src="./images/icon-reminders.svg" alt="" />
                  <p>Reminders</p>
                </div>
                <div className={styles.toggleItemItem}>
                  <img src="./images/icon-planning.svg" alt="" />
                  <p>Planning</p>
                </div>
              </ToggleItem>

              <ToggleItem
                title="Company"
                isFeaturesOpen={companyOpen}
                setIsFeaturesOpen={setCompanyOpen}
              >
                <div className={styles.toggleItemItem}>
                  <p>History</p>
                </div>
                <div className={styles.toggleItemItem}>
                  <p>Our Team</p>
                </div>
                <div className={`${styles.toggleItemItem} ${styles.mb8}`}>
                  <p>Blog</p>
                </div>
              </ToggleItem>

              <div className={styles.headerItems}>
                <h3 className={styles.headerItem}>Careers</h3>
                <h3 className={styles.headerItem}>About</h3>
              </div>
              <div className={styles.headerEnd}>
                <p>Login</p>
                <button>Register</button>
              </div>
            </section>
          </div>
        </header>
      ) : (
        <header className={styles.headerDesktop}>
           <div className={styles.headerDesktopFlex}>
           <img src="./images/logo.svg" alt="" />
            <ToggleItem
              title="Features"
              isFeaturesOpen={isFeaturesOpen}
              setIsFeaturesOpen={setIsFeaturesOpen}
              isLeft={true}
            >
              <div className={styles.toggleItemItem}>
                <img src="./images/icon-todo.svg" alt="" />
                <p>Todo List</p>
              </div>
              <div className={styles.toggleItemItem}>
                <img src="./images/icon-calendar.svg" alt="" />
                <p>Calendar</p>
              </div>
              <div className={styles.toggleItemItem}>
                <img src="./images/icon-reminders.svg" alt="" />
                <p>Reminders</p>
              </div>
              <div className={styles.toggleItemItem}>
                <img src="./images/icon-planning.svg" alt="" />
                <p>Planning</p>
              </div>
            </ToggleItem>

            <ToggleItem
              title="Company"
              isFeaturesOpen={companyOpen}
              setIsFeaturesOpen={setCompanyOpen}
            >
              <div className={styles.toggleItemItem}>
                <p>History</p>
              </div>
              <div className={styles.toggleItemItem}>
                <p>Our Team</p>
              </div>
              <div className={`${styles.toggleItemItem} ${styles.mb8}`}>
                <p>Blog</p>
              </div>
            </ToggleItem>

              <div className={styles.headerItems}>
                <h3 className={styles.headerItem}>Careers</h3>
                <h3 className={styles.headerItem}>About</h3>
              </div>
           </div>
              <div className={styles.headerEnd}>
                <p>Login</p>
                <button>Register</button>
              </div>
        </header>
      )}
    </>
  );
}

export default Navigation;
