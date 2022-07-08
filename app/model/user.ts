export default function (app) {
  const { STRING, INTEGER } = app.Sequelize;

  const Persons = app.model.define("Persons", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    age: INTEGER,
  });

  return Persons;
}
