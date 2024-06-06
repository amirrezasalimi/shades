/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aazn3yu3g17tbvo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xs3euptp",
    "name": "ip",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mzyscm5d",
    "name": "fingerprint",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aazn3yu3g17tbvo")

  // remove
  collection.schema.removeField("xs3euptp")

  // remove
  collection.schema.removeField("mzyscm5d")

  return dao.saveCollection(collection)
})
