import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MingcuteWallet3Fill } from "../../assets/icons/Index";
import "./styles.scss";
import logo from "../../assets/nav/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav_bar">
      <div className="container">
        <div className="content c_flex">
          <div className="left">
            <div className="img l_flex">
              <Link to="/">
                {" "}
                <img src={logo} alt="logo img" />
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="btn l_flex">
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated");

                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <button
                              className="main_btn a_flex"
                              onClick={openConnectModal}
                            >
                              <MingcuteWallet3Fill className="icon" />
                              <p>Connect Wallet</p>
                            </button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <button
                              className="main_btn a_flex"
                              onClick={openChainModal}
                            >
                              <p>Wrong Network</p>
                            </button>
                          );
                        }

                        return (
                          <div style={{ display: "flex", gap: 12 }}>
                            <button
                              className="main_btn a_flex"
                              onClick={openChainModal}
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: "hidden",
                                    marginRight: 4,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? "Chain icon"}
                                      src={chain.iconUrl}
                                      style={{ width: 12, height: 12 }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>

                            <button
                              className="main_btn a_flex"
                              onClick={openAccountModal}
                            >
                              <MingcuteWallet3Fill className="icon" />
                              <p>{account.displayName}</p>
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
