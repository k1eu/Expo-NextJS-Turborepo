import { NativeBaseProvider } from "native-base";

import { TodosProvider } from "shared";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout;

  return (
    <NativeBaseProvider>
      <TodosProvider>
        {
          <Layout>
            <Component {...pageProps} />
          </Layout>
        }
      </TodosProvider>
    </NativeBaseProvider>
  );
}

export default MyApp;
