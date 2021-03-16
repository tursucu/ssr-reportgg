import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styled from "styled-components";

const Title = styled.h2`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>{t("title")}</Title>
      </main>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export const getStaticPaths = ({ locales }) => {
  return {
    paths: [
      { params: { slug: "xrp" }, locale: "en" },
      { params: { slug: "xrp" }, locale: "de" },
    ],
    fallback: false,
  };
};
