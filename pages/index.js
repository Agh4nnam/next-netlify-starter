import {table, minifyItems} from "./airtable";


export default function Home({data}) {

  console.log(data);
  return (

    <div>TEST</div>
  );

};

export async function getServerSideProps(context) {
  try {
    const items = await table.select({}).firstPage();
    return {
      props: {
        data: minifyItems(items),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        err: "Something went wrong",
      },
    };
  }
}
