const Airtable = require("airtable");

// Initialize a base
Airtable.configure({
  apiKey: "keyQlwTlTACyFSsir",
});

// Initialize a base
const base = Airtable.base("appqFJvywXljIvmBp");

// Reference a table
const table = base("Table2");

const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};


export { table,  minifyItems, getMinifiedItem };
