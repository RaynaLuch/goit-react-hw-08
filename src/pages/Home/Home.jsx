import DocumentTitle from "../../components/DocumentTitle";
import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>Contact book</h1>
      </div>
    </>
  );
}
