import Head from "next/head";

const SEO = ({ title, desc }: { title: string; desc?: string }) => (
  <Head>
    <title>{title}</title>
    {desc && <meta name="desc" content={desc} />}
  </Head>
);

export default SEO;