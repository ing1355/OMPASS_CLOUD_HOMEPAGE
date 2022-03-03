import Main from "../../components/Main/Main";
import "../../css/Main.module.css";
import React from "react";
import i18nextConfig from '../../next-i18next.config'

const getPathSlugs = () => {
  return i18nextConfig.i18n.locales.map(locale => ({
    params: {
      locale
    }
  }))
}

export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();
  return {
    paths: pathsWithLocale,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  return {
    props: {
      ...params
    }
  }
}

const Index = (props) => {
  return <div>
    <Main />
  </div>
};

export default Index;