"use client";

import "@libs/css/bootstrap.min.css"
import "@styles/css/base.css"
import "@styles/css/main-style.css"
import "@styles/css/main-style-responsive.css"
import "@styles/css/m_style.css"
import "@styles/css/dhirajstyle.css"
import "@styles/css/dhirajresponsive.css"
import "@styles/css/rstyle.css"
import "@styles/css/saakshi-style.css"
import "@styles/css/sk_style.css"
import "@styles/css/tirthak_styles.css"
import Script from "next/script";

export default function BaseFileClient() {
  return (
    <>
      <Script src="/dist/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/dist/js/bootstrap.min.js" strategy="afterInteractive" />
    </>
  );
}
